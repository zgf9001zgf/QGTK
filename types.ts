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
  currentQuestionIndex: number;
  score: number;
  answers: { questionId: string; selectedIndex: number; isCorrect: boolean }[];
  shuffledQuestions: Question[];
}

export type ViewMode = 'DASHBOARD' | 'QUIZ' | 'MANAGE' | 'AI_GENERATOR' | 'MISTAKES' | 'FAVORITES';

export interface QuestionStats {
  totalAttempts: number;
  correctAttempts: number;
}