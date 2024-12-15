export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavigationState {
  currentSection: string;
  progress: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SDLCPhaseType {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  description: string;
  activities: string[];
  deliverables: string[];
  example: string;
}