
import { GoogleGenAI, Type } from "@google/genai";
import { createMovieContextPrompt, GEMINI_BIO_PROMPT, FALLBACK_BIO, EXTRA_WORKS, FALLBACK_MOVIES } from "../constants";
import { MovieData, BioEvent } from "../types";

const GHIBLI_API_URL = 'https://ghibliapi.vercel.app/films';

interface GhibliApiFilm {
  id: string;
  title: string;
  original_title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  release_date: string;
}

export const fetchBiography = async (): Promise<BioEvent[]> => {
  const apiKey = process.env.API_KEY;
  
  // Use fallback data immediately if no API key or just as a base
  const processedFallback = FALLBACK_BIO;

  if (!apiKey) return processedFallback;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: GEMINI_BIO_PROMPT,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              year: { type: Type.INTEGER },
              event: { type: Type.STRING },
              description: { type: Type.STRING },
              type: { type: Type.STRING, enum: ["personal", "career", "historical"] }
            },
            required: ["year", "event", "description", "type"]
          }
        }
      }
    });
    
    if (response.text) {
        const generatedEvents = JSON.parse(response.text) as BioEvent[];
        return generatedEvents;
    }
    return processedFallback;
  } catch (e) {
    console.error("Bio fetch failed", e);
    return processedFallback;
  }
};

export const fetchMiyazakiData = async (): Promise<MovieData[]> => {
  const apiKey = process.env.API_KEY;
  
  let ghibliFilms: MovieData[] = [];
  
  const PARTICIPATED_TITLES = [
    "Whisper of the Heart",
    "The Secret World of Arrietty",
    "From Up on Poppy Hill",
    "Tales from Earthsea"
  ];

  try {
    const response = await fetch(GHIBLI_API_URL);
    const allFilms = (await response.json()) as GhibliApiFilm[];
    
    ghibliFilms = allFilms
      .filter(f => f.director === "Hayao Miyazaki" || PARTICIPATED_TITLES.includes(f.title))
      .map(f => ({
        id: f.id,
        title: f.title,
        japaneseTitle: f.original_title,
        year: parseInt(f.release_date),
        synopsis: f.description.substring(0, 200) + "...",
        lifeContext: "Loading context...",
        themes: [],
        visualStyle: "Ghibli Style",
        image: f.image,
        banner: f.movie_banner,
        role: f.director === "Hayao Miyazaki" ? "Director" : "Screenplay/Production"
      }));

  } catch (error) {
    console.error("Failed to fetch from Ghibli API:", error);
  }

  const combinedMovies = [...ghibliFilms];
  
  EXTRA_WORKS.forEach(extra => {
    if (!combinedMovies.find(m => m.title.toLowerCase() === extra.title.toLowerCase())) {
      combinedMovies.push(extra);
    }
  });
  
  const validMovies = combinedMovies.filter(m => m.image && m.image.trim().length > 0);
  
  validMovies.sort((a, b) => a.year - b.year);

  if (validMovies.length === 0) {
    return FALLBACK_MOVIES;
  }

  if (!apiKey) {
    return validMovies;
  }

  try {
    const titles = validMovies.map(f => f.title);
    
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: createMovieContextPrompt(titles),
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              japaneseTitle: { type: Type.STRING },
              lifeContext: { type: Type.STRING },
              themes: { type: Type.ARRAY, items: { type: Type.STRING } },
              visualStyle: { type: Type.STRING }
            },
            required: ["title", "japaneseTitle", "lifeContext", "themes", "visualStyle"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return validMovies;
    
    const contextData = JSON.parse(text) as Partial<MovieData>[];

    return validMovies.map(film => {
      const context = contextData.find(c => c.title?.toLowerCase() === film.title.toLowerCase());
      return {
        ...film,
        japaneseTitle: context?.japaneseTitle || film.japaneseTitle,
        lifeContext: context?.lifeContext || film.lifeContext,
        themes: context?.themes || film.themes,
        visualStyle: context?.visualStyle || film.visualStyle
      };
    });

  } catch (error) {
    console.error("Failed to fetch from Gemini:", error);
    return validMovies;
  }
};
