
import { MovieData, BioEvent } from './types';

export const FALLBACK_MOVIES: MovieData[] = [
  {
    id: 'nausicaa',
    title: "Nausicaä of the Valley of the Wind",
    japaneseTitle: "風の谷のナウシカ",
    year: 1984,
    synopsis: "Warrior/pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
    lifeContext: "Created during a time when Miyazaki was deeply concerned about environmental pollution and the Cold War. This work established Studio Ghibli's foundation.",
    themes: ["Environmentalism", "Pacifism", "Flight"],
    visualStyle: "Post-apocalyptic landscapes, fungal forests, airships",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tcfX81d0hDCqe92jEyF6RUAdl5h.jpg",
    banner: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIVpv.jpg",
    role: "Director"
  },
  {
    id: 'totoro',
    title: "My Neighbor Totoro",
    japaneseTitle: "となりのトトロ",
    year: 1988,
    synopsis: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    lifeContext: "Miyazaki drew from his own childhood experience with his mother being hospitalized for tuberculosis. It was a passion project pitched alongside Grave of the Fireflies.",
    themes: ["Childhood", "Nature", "Animism"],
    visualStyle: "Rural Japan, lush greenery, giant camphor trees",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnZhJHwD.jpg",
    banner: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIVpv.jpg",
    role: "Director"
  },
  {
    id: 'spirited_away',
    title: "Spirited Away",
    japaneseTitle: "千と千尋の神隠し",
    year: 2001,
    synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    lifeContext: "Inspired by the 10-year-old daughter of his friend. Miyazaki wanted to make a movie for young girls that wasn't about romance, but about finding inner strength.",
    themes: ["Identity", "Greed", "Coming of Age"],
    visualStyle: "Traditional bathhouse, mysterious spirits, water train",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUKGk25sF5UC.jpg",
    banner: "https://image.tmdb.org/t/p/original/bSXfU4dwZyY14PzqmWxGpKyGSJs.jpg",
    role: "Director"
  }
];

export const EXTRA_WORKS: MovieData[] = [
  {
    id: 'panda_go_panda',
    title: "Panda! Go, Panda!",
    japaneseTitle: "パンダコパンダ",
    year: 1972,
    synopsis: "A cheerful young girl named Mimiko is left alone when her grandmother leaves for a trip. She soon finds a baby panda and its father in her garden, and they decide to become a family.",
    lifeContext: "Miyazaki created the concept, screenplay, and layout. Produced during the 'panda craze' in Japan after pandas were gifted to Ueno Zoo. A precursor to Totoro.",
    themes: ["Family", "Childhood", "Whimsy"],
    visualStyle: "Simple lines, bright colors, suburban Japan",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i8c2x6r1c5558774257.jpg",
    banner: "https://image.tmdb.org/t/p/original/u9yl3d8v8gGj16Yt94UvTGE1zQj.jpg",
    role: "Screenplay & Concept"
  },
  {
    id: 'heidi',
    title: "Heidi, Girl of the Alps",
    japaneseTitle: "アルプスの少女ハイジ",
    year: 1974,
    synopsis: "Heidi is sent to live with her grandfather in the Swiss Alps. She grows to love the mountains and her grandfather, but is later taken to Frankfurt.",
    lifeContext: "Miyazaki served as scene designer and layout artist. He traveled to Switzerland for location scouting, establishing the 'World Masterpiece Theater' standard for realism.",
    themes: ["Nature vs City", "Healing", "Innocence"],
    visualStyle: "Swiss Alps, pastoral landscapes, detailed layouts",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/w6h25377466.jpg", 
    banner: "https://image.tmdb.org/t/p/original/9F3qFz6G9Qz7qX9Zz1X9z1X9z1.jpg", 
    role: "Layout & Scene Design"
  },
  {
    id: 'future_boy_conan',
    title: "Future Boy Conan",
    japaneseTitle: "未来少年コナン",
    year: 1978,
    synopsis: "In a post-apocalyptic world where sea levels have risen, a boy named Conan sets out to rescue a girl named Lana from the rulers of Industria.",
    lifeContext: "Miyazaki's directorial debut for a TV series. It established many of his recurring themes: post-apocalyptic worlds, strong flying machines, and brave young protagonists.",
    themes: ["Survival", "Nature vs Industry", "Optimism"],
    visualStyle: "Ruined cities, blue oceans, mechanical fortresses",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Future_Boy_Conan_poster.jpg", 
    banner: "",
    role: "Director"
  },
  {
    id: 'cagliostro',
    title: "Lupin III: The Castle of Cagliostro",
    japaneseTitle: "ルパン三世 カリオストロの城",
    year: 1979,
    synopsis: "Master thief Lupin III discovers a counterfeiting operation in the Grand Duchy of Cagliostro and attempts to rescue a princess from a forced marriage.",
    lifeContext: "Miyazaki's first feature film debut. He transformed Lupin from a calm playboy into a more heroic, romantic figure. Known for its incredible car chase sequences.",
    themes: ["Adventure", "Chivalry", "Treasure"],
    visualStyle: "European architecture, clock towers, dynamic action",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5l10E63f211c0d52f77864a8235.jpg",
    banner: "https://image.tmdb.org/t/p/original/wWj5Z8E7v1d2F3G4H5I6J7K8L9.jpg",
    role: "Director"
  },
  {
    id: 'sherlock_hound',
    title: "Sherlock Hound",
    japaneseTitle: "名探偵ホームズ",
    year: 1984,
    synopsis: "A steampunk reimagining of Sherlock Holmes where the characters are anthropomorphic dogs.",
    lifeContext: "Miyazaki directed the first 6 episodes before production was halted due to copyright issues with the Conan Doyle estate. It features his signature steampunk aesthetic.",
    themes: ["Mystery", "Steampunk", "Humor"],
    visualStyle: "Victorian London, steampunk gadgets, dog characters",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Sherlock_Hound.jpg",
    banner: "",
    role: "Director"
  },
  {
    id: 'on_your_mark',
    title: "On Your Mark",
    japaneseTitle: "On Your Mark",
    year: 1995,
    synopsis: "A music video for the duo Chage & Aska. Two policemen rescue a winged girl from a religious cult and the government in a cyberpunk future.",
    lifeContext: "Created as a break from the stress of Princess Mononoke. Miyazaki experimented with computer graphics. The story is non-linear and open to interpretation.",
    themes: ["Freedom", "Cyberpunk", "Flight"],
    visualStyle: "Sci-fi city, radiation signs, winged angel",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/On_Your_Mark_promo.jpg", 
    banner: "",
    role: "Director (Short)"
  }
];

export const FALLBACK_BIO: BioEvent[] = [
  { 
    year: 1941, 
    event: "Birth in a Time of War", 
    description: "Born in Bunkyo, Tokyo. His father ran Miyazaki Airplane, making parts for Zero fighters. This dual exposure to the horrors of war and the beauty of flight would define his entire artistic career.", 
    type: "personal"
  },
  { 
    year: 1963, 
    event: "Toei Animation & The Struggle", 
    description: "Miyazaki joined Toei Animation as the last entry-level artist. He led labor union protests, developing his socialist ideals, and met his lifelong mentor and rival, Isao Takahata.", 
    type: "career"
  },
  { 
    year: 1979, 
    event: "Feature Debut: Cagliostro", 
    description: "After years of TV work, he directed 'Lupin III: The Castle of Cagliostro'. Though it underperformed initially, it showcased his signature kinetic style and attention to detail.", 
    type: "career"
  },
  { 
    year: 1985, 
    event: "Founding Studio Ghibli", 
    description: "Following the success of 'Nausicaä', Miyazaki, Takahata, and Suzuki founded Studio Ghibli in Kichijoji. They aimed to 'blow a new wind through the anime industry'.", 
    type: "historical"
  },
  { 
    year: 2001, 
    event: "Academy Award for Spirited Away", 
    description: "Spirited Away became the highest-grossing film in Japanese history and won the Oscar for Best Animated Feature, bringing Miyazaki unprecedented global fame.", 
    type: "historical"
  },
  { 
    year: 2013, 
    event: "The Wind Rises & 'Retirement'", 
    description: "He released his most personal film, 'The Wind Rises', a tribute to his father and Jiro Horikoshi. He announced his retirement, only to later return for 'The Boy and the Heron'.", 
    type: "personal"
  }
];

export const GEMINI_BIO_PROMPT = `
You are a biographer of Hayao Miyazaki. Generate a JSON array of key life events.
Cover his early life, the war's impact, founding Ghibli, his temporary retirements, and key movie milestones.
Limit to 6-8 most significant events.

Schema:
{
  "type": "ARRAY",
  "items": {
    "type": "OBJECT",
    "properties": {
      "year": { "type": "INTEGER" },
      "event": { "type": "STRING" },
      "description": { "type": "STRING" },
      "type": { "type": "STRING", "enum": ["personal", "career", "historical"] }
    },
    "required": ["year", "event", "description", "type"]
  }
}
`;

export const createMovieContextPrompt = (titles: string[]) => `
You are an expert film historian specializing in Hayao Miyazaki.
Generate a JSON array of objects containing deep context for the following films:
${titles.join(', ')}

Schema:
{
  "type": "ARRAY",
  "items": {
    "type": "OBJECT",
    "properties": {
      "title": { "type": "STRING", "description": "Must match the provided English title exactly" },
      "japaneseTitle": { "type": "STRING" },
      "lifeContext": { "type": "STRING", "description": "3-4 sentences explaining what was happening in Miyazaki's life, his mindset, or political context during production. Mention his specific role if he was not the director." },
      "themes": { "type": "ARRAY", "items": { "type": "STRING" } },
      "visualStyle": { "type": "STRING", "description": "3 keywords describing the color palette or setting"}
    },
    "required": ["title", "japaneseTitle", "lifeContext", "themes", "visualStyle"]
  }
}
`;
