
export interface MovieData {
  id: string;
  title: string;
  japaneseTitle: string;
  year: number;
  synopsis: string;
  lifeContext: string;
  themes: string[];
  visualStyle: string;
  image: string;
  banner: string;
  role?: string; // e.g. "Director", "Screenplay", "Concept"
}

export interface BioEvent {
  year: number;
  event: string;
  description: string;
  type: 'personal' | 'career' | 'historical';
}

export interface MovieCardProps {
  movie: MovieData;
  index: number;
  onClick: (movie: MovieData) => void;
}

export interface ModalProps {
  movie: MovieData | null;
  onClose: () => void;
}

export interface BiographyProps {
  events: BioEvent[];
}
