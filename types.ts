export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
  category?: string;
  created?: number;
}

export interface QuizState {
  isActive: boolean;
  quizType: 'PRACTICE' | 'EXAM'; // Added to distinguish modes
  currentQuestionIndex: number;
  score: number;
  answers: { questionId: string; selectedIndex: number; isCorrect: boolean }[];
  shuffledQuestions: Question[];
}

export type ViewMode = 'DASHBOARD' | 'QUIZ' | 'MANAGE' | 'AI_GENERATOR' | 'MISTAKES' | 'FAVORITES' | 'REPORT';

export interface QuestionStats {
  totalAttempts: number;
  correctAttempts: number;
}

export interface HistoryRecord {
  id: string;
  questionId: string;
  category: string;
  isCorrect: boolean;
  timestamp: number;
  duration: number; // in milliseconds
}