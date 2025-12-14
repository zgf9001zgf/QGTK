import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Question, QuizState, ViewMode, HistoryRecord } from './types';
import { generateQuestions, explainQuestion } from './services/geminiService';
import { Button } from './components/Button';
import { PRELOADED_QUESTIONS } from './data/questions';

// --- Icons (Enhanced) ---
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;
const ListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>;
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;
const ForwardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
const BookXIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line></svg>;
const StarIcon = ({ filled, size = 20 }: { filled: boolean, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const GridIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
const ChevronDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
const ChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>;
const ExamIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path></svg>;

// --- Components ---

const ProgressBar = ({ current, total, colorClass = "bg-indigo-500" }: { current: number; total: number, colorClass?: string }) => {
  const progress = Math.min(100, (current / total) * 100);
  return (
    <div className="w-full h-2 bg-slate-200/50 rounded-full overflow-hidden">
      <div 
        className={`h-full ${colorClass} transition-all duration-500 ease-out rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// --- SVG Charts (Responsive) ---

// 1. Radar Chart Component
const RadarChart = ({ data }: { data: { label: string; value: number }[] }) => {
  if (data.length < 3) return <div className="text-center text-slate-400 py-10 text-sm">数据不足，无法生成雷达图</div>;
  
  const size = 200;
  const center = size / 2;
  const radius = (size / 2) - 30; // padding
  const angleStep = (Math.PI * 2) / data.length;

  const points = data.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2; // start from top
    const r = (d.value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const gridPoints = [1, 0.75, 0.5, 0.25].map(scale => {
    return data.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = scale * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  });

  return (
    <div className="relative flex justify-center py-4 w-full h-full aspect-square md:aspect-auto md:h-64">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid Background */}
        {gridPoints.map((p, i) => (
          <polygon key={i} points={p} fill="none" stroke="#e2e8f0" strokeWidth="1" />
        ))}
        {/* Axes */}
        {data.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#e2e8f0" />;
        })}
        {/* Data Shape */}
        <polygon points={points} fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="2" />
        {/* Labels */}
        {data.map((d, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const r = radius + 20;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);
          return (
            <text 
              key={i} x={x} y={y} 
              textAnchor="middle" dominantBaseline="middle" 
              className="text-[8px] md:text-[10px] fill-slate-500 font-medium"
            >
              {d.label.length > 4 ? d.label.substring(0,4)+'..' : d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

// 2. Line Chart Component (Accuracy Trend)
const TrendChart = ({ data }: { data: { date: string; value: number }[] }) => {
  if (data.length < 2) return <div className="text-center text-slate-400 py-10 text-sm">需更多数据生成趋势图</div>;

  const width = 300;
  const height = 150;
  const padding = 20;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * innerWidth;
    const y = height - padding - (d.value / 100) * innerHeight;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-40 md:h-64">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1={padding} y1={padding} x2={width-padding} y2={padding} stroke="#f1f5f9" strokeDasharray="4"/>
        <line x1={padding} y1={height/2} x2={width-padding} y2={height/2} stroke="#f1f5f9" strokeDasharray="4"/>
        <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#cbd5e1"/>
        
        {/* Line */}
        <polyline points={points} fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Dots */}
        {data.map((d, i) => {
          const x = padding + (i / (data.length - 1)) * innerWidth;
          const y = height - padding - (d.value / 100) * innerHeight;
          return <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="#10b981" strokeWidth="2" />;
        })}
        
        {/* Date Labels (First and Last) */}
        <text x={padding} y={height - 2} className="text-[10px] fill-slate-400">{data[0].date.slice(5)}</text>
        <text x={width-padding} y={height - 2} textAnchor="end" className="text-[10px] fill-slate-400">{data[data.length-1].date.slice(5)}</text>
      </svg>
    </div>
  );
};

// 3. Bar Chart Component (Daily Count)
const BarChart = ({ data }: { data: { date: string; value: number }[] }) => {
    const width = 300;
    const height = 120;
    const padding = 20;
    const barWidth = (width - padding * 2) / data.length * 0.6;
    const maxVal = Math.max(...data.map(d => d.value), 10); // Minimum scale of 10
  
    return (
      <div className="w-full h-40 md:h-64">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
          {data.map((d, i) => {
            const h = (d.value / maxVal) * (height - padding * 2);
            const x = padding + i * ((width - padding * 2) / data.length) + 5;
            const y = height - padding - h;
            return (
                <g key={i}>
                   <rect x={x} y={y} width={barWidth} height={h} rx="3" fill="#6366f1" opacity={0.8} />
                   <text x={x + barWidth/2} y={y - 5} textAnchor="middle" className="text-[10px] fill-slate-500 font-bold">{d.value}</text>
                   <text x={x + barWidth/2} y={height - 5} textAnchor="middle" className="text-[8px] fill-slate-400">{d.date.slice(5)}</text>
                </g>
            );
          })}
          <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#cbd5e1" />
        </svg>
      </div>
    );
};

export default function App() {
  // --- State ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [view, setView] = useState<ViewMode>('DASHBOARD');
  
  const [wrongQuestionIds, setWrongQuestionIds] = useState<Set<string>>(new Set());
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  
  // History State for Analytics
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  // Main Quiz State (Currently active quiz)
  const [quizState, setQuizState] = useState<QuizState>({
    isActive: false,
    quizType: 'PRACTICE', // Default
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    shuffledQuestions: []
  });
  
  // State to track if there are saved sessions in local storage (for dashboard UI)
  const [hasSavedPractice, setHasSavedPractice] = useState(false);
  const [hasSavedExam, setHasSavedExam] = useState(false);

  const [genTopic, setGenTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const [explanation, setExplanation] = useState<string | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);
  
  const [showMistakeRemovedToast, setShowMistakeRemovedToast] = useState(false);
  
  // Controls the bottom sheet grid
  const [isQuestionGridOpen, setIsQuestionGridOpen] = useState(false);

  // Timer Ref for Tracking Study Duration per Question
  const questionStartTimeRef = useRef<number>(0);

  // --- Effects (Load/Save) ---
  useEffect(() => {
    // Questions
    const saved = localStorage.getItem('smartprep_questions');
    let initialQuestions: Question[] = [];
    if (saved) {
      try { initialQuestions = JSON.parse(saved); } 
      catch (e) { console.error("Failed to parse saved questions", e); initialQuestions = []; }
    }
    const existingIds = new Set(initialQuestions.map(q => q.id));
    const newPreloaded = PRELOADED_QUESTIONS.filter(q => !existingIds.has(q.id));
    if (newPreloaded.length > 0) {
      setQuestions([...initialQuestions, ...newPreloaded]);
    } else {
      setQuestions(initialQuestions);
    }

    // Collections
    const savedWrong = localStorage.getItem('smartprep_wrong_ids');
    if (savedWrong) try { setWrongQuestionIds(new Set(JSON.parse(savedWrong))); } catch (e) { }
    const savedFavs = localStorage.getItem('smartprep_favorites');
    if (savedFavs) try { setFavoriteIds(new Set(JSON.parse(savedFavs))); } catch (e) { }
    
    // History
    const savedHistory = localStorage.getItem('smartprep_history');
    if (savedHistory) try { setHistory(JSON.parse(savedHistory)); } catch (e) { }

    // Check for saved states (don't load them into view yet, just check existence)
    const practiceState = localStorage.getItem('smartprep_practice_state');
    const examState = localStorage.getItem('smartprep_exam_state');
    
    if (practiceState) {
        try {
            const parsed = JSON.parse(practiceState);
            if (parsed.isActive) setHasSavedPractice(true);
        } catch(e) {}
    }
    if (examState) {
        try {
            const parsed = JSON.parse(examState);
            if (parsed.isActive) setHasSavedExam(true);
        } catch(e) {}
    }

    // Try to load the *last used* mode if available, or just stay default
    // For now, we will default to Dashboard and let user choose.
  }, []);

  // Save collections
  useEffect(() => { localStorage.setItem('smartprep_wrong_ids', JSON.stringify([...wrongQuestionIds])); }, [wrongQuestionIds]);
  useEffect(() => { localStorage.setItem('smartprep_favorites', JSON.stringify([...favoriteIds])); }, [favoriteIds]);
  useEffect(() => { if (questions.length > 0) localStorage.setItem('smartprep_questions', JSON.stringify(questions)); }, [questions]);
  useEffect(() => { localStorage.setItem('smartprep_history', JSON.stringify(history)); }, [history]);

  // SAVE QUIZ STATE (Separated by Type)
  useEffect(() => {
    if (quizState.isActive) {
        if (quizState.quizType === 'EXAM') {
            localStorage.setItem('smartprep_exam_state', JSON.stringify(quizState));
            setHasSavedExam(true);
        } else {
            localStorage.setItem('smartprep_practice_state', JSON.stringify(quizState));
            setHasSavedPractice(true);
        }
    } else {
        // If inactive, we need to know which one finished to clear it.
        // This is tricky because quizState.isActive is false.
        // We rely on the handlers (endQuizSession) to clear the storage.
    }
  }, [quizState]);

  // Record start time when question changes
  useEffect(() => {
    if (view === 'QUIZ') {
        questionStartTimeRef.current = Date.now();
    }
  }, [quizState.currentQuestionIndex, view]);

  // --- Handlers ---
  const toggleFavorite = (e: React.MouseEvent | null, id: string) => {
    if (e) e.stopPropagation();
    setFavoriteIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const startQuiz = (mode: 'ALL_SEQUENTIAL' | 'EXAM' | 'MISTAKES' | 'FAVORITES') => {
    // If we are starting a NEW quiz, we must ensure we don't accidentally overwrite the *other* mode's save if it was active in memory.
    // Since quizState handles both, switching modes essentially "shelves" the other mode if we save it before switching.
    // The useEffect[quizState] handles auto-saving the *current* active state.
    
    // Check if we are overwriting the *same* mode's progress
    if (mode === 'EXAM' && hasSavedExam && !confirm("您有未完成的考试，开始新考试将覆盖旧进度。是否继续？")) return;
    if (mode !== 'EXAM' && hasSavedPractice && quizState.isActive && quizState.quizType === 'PRACTICE' && !confirm("当前有未完成的练习，开始新练习将覆盖旧进度。是否继续？")) return;

    let q: Question[] = [];
    let type: 'PRACTICE' | 'EXAM' = 'PRACTICE';

    if (mode === 'MISTAKES') {
      q = questions.filter(quest => wrongQuestionIds.has(quest.id));
      if (q.length === 0) { alert("错题本是空的，真棒！"); return; }
    } else if (mode === 'FAVORITES') {
      q = questions.filter(quest => favoriteIds.has(quest.id));
      if (q.length === 0) { alert("您还没有收藏任何题目。"); return; }
    } else if (mode === 'EXAM') {
      type = 'EXAM';
      q = [...questions].sort(() => 0.5 - Math.random()).slice(0, 30); // 30 Questions for Exam
    } else {
      // ALL_SEQUENTIAL
      q = [...questions].sort((a, b) => {
        const getNum = (id: string) => id.startsWith('static_') ? parseInt(id.replace('static_', ''), 10) : Number.MAX_SAFE_INTEGER;
        return getNum(a.id) - getNum(b.id);
      });
    }

    setQuizState({
      isActive: true,
      quizType: type,
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      shuffledQuestions: q
    });
    setExplanation(null);
    setIsQuestionGridOpen(false);
    setView('QUIZ');
  };

  const resumeSession = (type: 'PRACTICE' | 'EXAM') => {
      const key = type === 'EXAM' ? 'smartprep_exam_state' : 'smartprep_practice_state';
      const saved = localStorage.getItem(key);
      if (saved) {
          try {
              const parsed = JSON.parse(saved);
              setQuizState(parsed);
              setExplanation(null);
              setIsQuestionGridOpen(false);
              setView('QUIZ');
          } catch (e) {
              console.error("Failed to resume", e);
          }
      }
  };

  const handleAnswer = (selectedIndex: number) => {
    const currentQ = quizState.shuffledQuestions[quizState.currentQuestionIndex];
    if (quizState.answers.some(a => a.questionId === currentQ.id)) return;

    const isCorrect = selectedIndex === currentQ.correctAnswerIndex;
    const duration = Date.now() - questionStartTimeRef.current;

    // --- Analytics Logic: Save History ---
    const newRecord: HistoryRecord = {
        id: Math.random().toString(36).substr(2, 9),
        questionId: currentQ.id,
        category: currentQ.category || "综合",
        isCorrect,
        timestamp: Date.now(),
        duration
    };
    setHistory(prev => [...prev, newRecord]);

    if (!isCorrect) {
      setWrongQuestionIds(prev => new Set(prev).add(currentQ.id));
    } else {
      if (wrongQuestionIds.has(currentQ.id)) {
        setWrongQuestionIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(currentQ.id);
          return newSet;
        });
        setShowMistakeRemovedToast(true);
        setTimeout(() => setShowMistakeRemovedToast(false), 2000);
      }
    }
    
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, { questionId: currentQ.id, selectedIndex, isCorrect }]
    }));
  };

  const jumpToQuestion = (index: number) => {
    setExplanation(null);
    setQuizState(prev => ({ ...prev, currentQuestionIndex: index }));
    setIsQuestionGridOpen(false);
  };

  const nextQuestion = () => {
    if (quizState.currentQuestionIndex < quizState.shuffledQuestions.length - 1) {
      setExplanation(null);
      setQuizState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    }
  };

  const prevQuestion = () => {
    if (quizState.currentQuestionIndex > 0) {
      setExplanation(null);
      setQuizState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 }));
    }
  };

  const saveAndExitQuiz = () => setView('DASHBOARD');
  
  const endQuizSession = () => { 
      // Clear from storage based on type
      if (quizState.quizType === 'EXAM') {
          localStorage.removeItem('smartprep_exam_state');
          setHasSavedExam(false);
      } else {
          localStorage.removeItem('smartprep_practice_state');
          setHasSavedPractice(false);
      }

      setView('DASHBOARD'); 
      setQuizState(prev => ({ ...prev, isActive: false })); 
  };

  const generateWithAI = async () => {
    if (!genTopic.trim()) return;
    setIsGenerating(true);
    setAiError(null);
    try {
      const newQuestions = await generateQuestions(genTopic, 5);
      setQuestions(prev => [...prev, ...newQuestions]);
      setView('DASHBOARD');
      alert(`成功生成了 ${newQuestions.length} 道关于 "${genTopic}" 的题目！`);
    } catch (err) {
      console.error(err);
      setAiError("生成失败。请确保 API Key 设置正确。");
    } finally {
      setIsGenerating(false);
    }
  };

  const askForExplanation = async () => {
    const currentQ = quizState.shuffledQuestions[quizState.currentQuestionIndex];
    if (currentQ.explanation) { setExplanation(currentQ.explanation); return; }
    setIsExplaining(true);
    try {
      const text = await explainQuestion(currentQ);
      setExplanation(text);
      setQuestions(prev => prev.map(q => q.id === currentQ.id ? { ...q, explanation: text } : q));
    } catch (err) { setExplanation("无法获取解析，请检查网络。"); } 
    finally { setIsExplaining(false); }
  };

  const deleteQuestion = (id: string) => {
    if (window.confirm("确定要删除这道题吗？")) {
      setQuestions(prev => prev.filter(q => q.id !== id));
      setWrongQuestionIds(prev => { const s = new Set(prev); s.delete(id); return s; });
      setFavoriteIds(prev => { const s = new Set(prev); s.delete(id); return s; });
    }
  };

  // --- Analytics Calculation Helpers ---
  const analyticsData = useMemo(() => {
    if (history.length === 0) return null;

    // 1. Total Stats
    const totalQuestions = history.length;
    const correctCount = history.filter(h => h.isCorrect).length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const totalDurationMs = history.reduce((sum, h) => sum + (h.duration || 0), 0);
    const totalDurationMins = Math.round(totalDurationMs / 1000 / 60);

    // 2. Daily Data (Last 7 days)
    const today = new Date();
    const last7Days: string[] = [];
    for(let i=6; i>=0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        last7Days.push(d.toISOString().split('T')[0]);
    }

    const dailyMap = new Map<string, HistoryRecord[]>();
    last7Days.forEach(dateStr => dailyMap.set(dateStr, []));
    
    history.forEach(h => {
        const dateStr = new Date(h.timestamp).toISOString().split('T')[0];
        if (dailyMap.has(dateStr)) {
            dailyMap.get(dateStr)?.push(h);
        }
    });

    const dailyTrend = last7Days.map(date => {
        const dayRecords = dailyMap.get(date) || [];
        const count = dayRecords.length;
        const correct = dayRecords.filter(r => r.isCorrect).length;
        const acc = count > 0 ? Math.round((correct / count) * 100) : 0;
        return { date, count, acc };
    });

    // 3. Category Radar Data
    const categoryMap = new Map<string, { total: number, correct: number }>();
    history.forEach(h => {
        const cat = h.category || "综合";
        const current = categoryMap.get(cat) || { total: 0, correct: 0 };
        categoryMap.set(cat, {
            total: current.total + 1,
            correct: current.correct + (h.isCorrect ? 1 : 0)
        });
    });

    // Take top 6 categories or all if less
    const radarData = Array.from(categoryMap.entries()).map(([label, stats]) => ({
        label,
        value: Math.round((stats.correct / stats.total) * 100)
    })).slice(0, 6);

    return { totalQuestions, accuracy, totalDurationMins, dailyTrend, radarData };
  }, [history]);

  // --- Views ---

  // 1. DASHBOARD
  if (view === 'DASHBOARD') {
    return (
      <div className="w-full h-full flex flex-col bg-slate-50 relative overflow-hidden">
        {/* Header Background */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-indigo-600 to-violet-700 md:rounded-b-[60px] rounded-b-[40px] shadow-lg z-0"></div>

        <header className="p-6 pt-10 md:p-12 md:pt-16 relative z-10 text-white flex justify-between items-start max-w-5xl mx-auto w-full">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2 md:mb-4">智能刷题</h1>
            <p className="text-indigo-100 font-medium opacity-90 text-sm md:text-xl">让每一次练习都值得</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-2 md:p-4 rounded-xl border border-white/10">
            <BrainIcon />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-5 pb-6 md:px-12 md:pb-12 relative z-10 space-y-5 -mt-2 max-w-5xl mx-auto w-full no-scrollbar">
          
          {/* Stats Card */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-indigo-900/10 border border-slate-100 animate-scale-in">
            <div className="flex items-end justify-between mb-6 md:mb-10">
              <div>
                <span className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-wider">题目总数</span>
                <div className="text-5xl md:text-7xl font-black text-slate-800 mt-1 md:mt-3">{questions.length}</div>
              </div>
              <div className="text-right">
                 <button 
                  onClick={() => startQuiz('ALL_SEQUENTIAL')}
                  className="bg-slate-900 text-white rounded-full p-4 md:p-6 shadow-lg hover:scale-110 hover:shadow-xl transition active:scale-95 group"
                  disabled={questions.length === 0}
                 >
                   <PlayIcon />
                 </button>
              </div>
            </div>
            
            {/* Exam Mode Button (Replaced Random 10) */}
            <Button 
               onClick={() => startQuiz('EXAM')}
               variant="primary"
               className="w-full !rounded-2xl !py-3 md:!py-5 !text-white !bg-gradient-to-r from-orange-500 to-red-500 shadow-orange-200 hover:shadow-orange-300 md:!text-lg border-0"
               disabled={questions.length === 0}
            >
              <div className="flex items-center gap-2">
                <ExamIcon /> 
                <span>全真模拟考试 (30题)</span>
              </div>
            </Button>
          </div>

          {/* Resume Banners (Practice & Exam) */}
          <div className="space-y-3">
            {hasSavedExam && (
                <div 
                onClick={() => resumeSession('EXAM')}
                className="bg-white border-l-4 border-red-500 rounded-2xl p-4 md:p-6 shadow-md shadow-red-100/50 cursor-pointer active:scale-95 transition group animate-fade-in"
                >
                <div className="flex justify-between items-center">
                    <div>
                    <div className="text-slate-800 font-bold flex items-center gap-2 mb-1 md:text-xl">
                        <span className="flex h-2.5 w-2.5 md:h-3 md:w-3">
                            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500"></span>
                        </span>
                        继续考试
                    </div>
                    <p className="text-slate-500 text-xs md:text-base">独立进度，不影响普通练习</p>
                    </div>
                    <div className="text-red-500 group-hover:translate-x-1 transition">
                    <ForwardIcon />
                    </div>
                </div>
                </div>
            )}

            {hasSavedPractice && (
                <div 
                onClick={() => resumeSession('PRACTICE')}
                className="bg-white border-l-4 border-indigo-500 rounded-2xl p-4 md:p-6 shadow-md shadow-indigo-100/50 cursor-pointer active:scale-95 transition group animate-fade-in"
                >
                <div className="flex justify-between items-center">
                    <div>
                    <div className="text-slate-800 font-bold flex items-center gap-2 mb-1 md:text-xl">
                        <span className="flex h-2.5 w-2.5 md:h-3 md:w-3">
                            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-indigo-500"></span>
                        </span>
                        继续普通练习
                    </div>
                    </div>
                    <div className="text-indigo-500 group-hover:translate-x-1 transition">
                    <ForwardIcon />
                    </div>
                </div>
                </div>
            )}
          </div>

          {/* Collections Grid - Responsive Layout */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Mistakes Card */}
            <div className="bg-amber-50 rounded-3xl p-5 md:p-6 border border-amber-100 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-3 md:mb-6">
                 <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                    <BookXIcon />
                 </div>
                 <span className="font-black text-2xl md:text-4xl text-amber-900">{wrongQuestionIds.size}</span>
              </div>
              <div>
                <h3 className="text-amber-900 font-bold mb-3 md:text-lg">错题集</h3>
                <div className="flex gap-2">
                   <button onClick={() => startQuiz('MISTAKES')} disabled={wrongQuestionIds.size === 0} className="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg py-1.5 md:py-2.5 text-xs md:text-sm font-bold transition disabled:opacity-50">复习</button>
                   <button onClick={() => setView('MISTAKES')} className="flex-1 bg-white text-amber-700 hover:bg-amber-50 rounded-lg py-1.5 md:py-2.5 text-xs md:text-sm font-bold transition">管理</button>
                </div>
              </div>
            </div>

            {/* Favorites Card */}
            <div className="bg-yellow-50 rounded-3xl p-5 md:p-6 border border-yellow-100 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-3 md:mb-6">
                 <div className="p-2 bg-yellow-100 rounded-xl text-yellow-600">
                    <StarIcon filled={true} />
                 </div>
                 <span className="font-black text-2xl md:text-4xl text-yellow-900">{favoriteIds.size}</span>
              </div>
              <div>
                <h3 className="text-yellow-900 font-bold mb-3 md:text-lg">我的收藏</h3>
                <div className="flex gap-2">
                   <button onClick={() => startQuiz('FAVORITES')} disabled={favoriteIds.size === 0} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-1.5 md:py-2.5 text-xs md:text-sm font-bold transition disabled:opacity-50">练习</button>
                   <button onClick={() => setView('FAVORITES')} className="flex-1 bg-white text-yellow-700 hover:bg-yellow-50 rounded-lg py-1.5 md:py-2.5 text-xs md:text-sm font-bold transition">查看</button>
                </div>
              </div>
            </div>

            {/* Tools Grid - Expanded on Desktop */}
            <button 
              onClick={() => setView('REPORT')}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex md:flex-col items-center md:items-start gap-4 hover:border-emerald-200 transition active:scale-[0.98] group"
            >
               <div className="h-12 w-12 md:h-14 md:w-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 group-hover:scale-110 transition">
                  <ChartIcon />
               </div>
               <div className="text-left">
                  <h3 className="font-bold text-slate-800 md:text-lg">学习报告</h3>
                  <p className="text-xs text-slate-500 md:text-sm md:mt-1">查看统计与雷达图</p>
               </div>
            </button>

            <button 
              onClick={() => setView('AI_GENERATOR')}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex md:flex-col items-center md:items-start gap-4 hover:border-indigo-200 transition active:scale-[0.98] group"
            >
               <div className="h-12 w-12 md:h-14 md:w-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 transition">
                  <BrainIcon />
               </div>
               <div className="text-left">
                  <h3 className="font-bold text-slate-800 md:text-lg">AI 出题</h3>
                  <p className="text-xs text-slate-500 md:text-sm md:mt-1">自动生成练习</p>
               </div>
            </button>
            
             <button 
              onClick={() => setView('MANAGE')}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex md:flex-col items-center md:items-start gap-4 hover:border-blue-200 transition active:scale-[0.98] group col-span-2 md:col-span-1 lg:col-span-4 lg:flex-row lg:items-center"
             >
               <div className="h-12 w-12 md:h-14 md:w-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
                  <ListIcon />
               </div>
               <div className="text-left">
                  <h3 className="font-bold text-slate-800 md:text-lg">题库管理</h3>
                  <p className="text-xs text-slate-500 md:text-sm md:mt-1">查看、编辑或删除题目</p>
               </div>
             </button>
          </div>
        </main>
      </div>
    );
  }

  // Common Header for Subviews
  const SubHeader = ({ title, bgClass = "bg-white", textClass="text-slate-800", count }: { title: string, bgClass?: string, textClass?: string, count?: number }) => (
    <header className={`p-4 border-b border-slate-100 flex items-center gap-3 sticky top-0 z-20 ${bgClass} transition-colors duration-300 md:px-12`}>
      <button onClick={() => setView('DASHBOARD')} className={`p-2 rounded-xl hover:bg-black/5 transition active:scale-90 ${textClass}`}>
        <HomeIcon />
      </button>
      <div className="flex-1">
        <h2 className={`font-bold text-lg md:text-2xl ${textClass}`}>{title}</h2>
      </div>
      {count !== undefined && <span className="text-xs md:text-base font-bold bg-black/5 px-2 py-1 md:px-3 md:py-1.5 rounded-md">{count}</span>}
    </header>
  );

  // 2. REPORT VIEW (NEW)
  if (view === 'REPORT') {
    return (
      <div className="w-full h-full flex flex-col bg-slate-50">
        <SubHeader title="学习报告" bgClass="bg-emerald-50" textClass="text-emerald-900" />
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 max-w-5xl mx-auto w-full">
           {!analyticsData ? (
             <div className="text-center py-20 text-slate-400">
               <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">📊</div>
               <p>暂无做题记录，快去练习吧！</p>
             </div>
           ) : (
             <>
               {/* Summary Cards */}
               <div className="grid grid-cols-3 gap-2 md:gap-6">
                 <div className="bg-white p-3 md:p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <div className="text-xs md:text-sm text-slate-400 font-bold mb-1">累计刷题</div>
                    <div className="text-2xl md:text-4xl font-black text-slate-800">{analyticsData.totalQuestions}</div>
                 </div>
                 <div className="bg-white p-3 md:p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <div className="text-xs md:text-sm text-slate-400 font-bold mb-1">正确率</div>
                    <div className="text-2xl md:text-4xl font-black text-emerald-500">{analyticsData.accuracy}%</div>
                 </div>
                 <div className="bg-white p-3 md:p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <div className="text-xs md:text-sm text-slate-400 font-bold mb-1">学习时长</div>
                    <div className="text-2xl md:text-4xl font-black text-indigo-500">{analyticsData.totalDurationMins}<span className="text-xs md:text-lg ml-1 font-medium text-slate-300">分</span></div>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 {/* Trend Chart (Bar) */}
                 <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-slate-100">
                   <h3 className="text-sm md:text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-indigo-500"></span> 每日刷题量 (近7天)
                   </h3>
                   <BarChart data={analyticsData.dailyTrend.map(d => ({ date: d.date, value: d.count }))} />
                 </div>

                 {/* Accuracy Trend (Line) */}
                 <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-slate-100">
                   <h3 className="text-sm md:text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 正确率趋势 (近7天)
                   </h3>
                   <TrendChart data={analyticsData.dailyTrend.map(d => ({ date: d.date, value: d.acc }))} />
                 </div>
               </div>

               {/* Radar Chart */}
               <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-slate-100">
                 <h3 className="text-sm md:text-lg font-bold text-slate-700 mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-purple-500"></span> 能力雷达图
                 </h3>
                 <RadarChart data={analyticsData.radarData} />
               </div>
             </>
           )}
        </div>
      </div>
    );
  }

  // 3. AI GENERATOR
  if (view === 'AI_GENERATOR') {
    return (
      <div className="w-full h-full flex flex-col bg-white">
        <SubHeader title="AI 智能出题" />
        <div className="p-6 md:p-12 flex-1 flex flex-col animate-slide-down max-w-4xl mx-auto w-full">
          <div className="bg-purple-50 p-5 md:p-8 rounded-2xl mb-8 border border-purple-100">
            <h3 className="text-purple-800 font-bold mb-2 flex items-center gap-2 md:text-xl">
              <BrainIcon /> 如何使用?
            </h3>
            <p className="text-sm md:text-base text-purple-700 leading-relaxed opacity-90">
              输入你想练习的主题（如："高中物理"、"唐朝历史"），AI 将为你生成 5 道带解析的选择题。
            </p>
          </div>

          <label className="block text-sm md:text-lg font-bold text-slate-700 mb-3 ml-1">出题主题</label>
          <input
            type="text"
            value={genTopic}
            onChange={(e) => setGenTopic(e.target.value)}
            placeholder="例如：React 基础、法律常识..."
            className="w-full p-4 md:p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-purple-500 focus:bg-white focus:ring-0 outline-none text-lg md:text-xl mb-4 transition-all"
          />

          {aiError && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 animate-fade-in">
              {aiError}
            </div>
          )}

          <div className="mt-auto">
            <Button 
              onClick={generateWithAI} 
              isLoading={isGenerating} 
              disabled={!genTopic.trim()}
              className="w-full py-4 md:py-6 text-lg md:text-xl bg-purple-600 hover:bg-purple-700 shadow-purple-200"
            >
              {isGenerating ? "正在生成..." : "✨ 开始生成"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 4. MANAGE / MISTAKES / FAVORITES LISTS
  if (view === 'MANAGE' || view === 'MISTAKES' || view === 'FAVORITES') {
    let listQuestions = questions;
    let themeColor = "slate";
    let title = "题库管理";
    let emptyMsg = "暂无题目";

    if (view === 'MISTAKES') {
      listQuestions = questions.filter(q => wrongQuestionIds.has(q.id));
      themeColor = "amber";
      title = "错题本";
      emptyMsg = "没有错题，太棒了！";
    } else if (view === 'FAVORITES') {
      listQuestions = questions.filter(q => favoriteIds.has(q.id));
      themeColor = "yellow";
      title = "我的收藏";
      emptyMsg = "暂无收藏的题目";
    }

    const isAmber = themeColor === 'amber';
    const isYellow = themeColor === 'yellow';

    return (
      <div className="w-full h-full flex flex-col bg-slate-50">
        <SubHeader 
           title={title} 
           count={listQuestions.length}
           bgClass={isAmber ? 'bg-amber-50' : isYellow ? 'bg-yellow-50' : 'bg-white'} 
           textClass={isAmber ? 'text-amber-900' : isYellow ? 'text-yellow-900' : 'text-slate-800'}
        />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-3 max-w-5xl mx-auto w-full">
           {(view === 'MISTAKES' && listQuestions.length > 0) && (
             <Button variant="amber" onClick={() => startQuiz('MISTAKES')} className="w-full mb-4 shadow-amber-200">开始复习错题</Button>
           )}
           {(view === 'FAVORITES' && listQuestions.length > 0) && (
             <Button variant="yellow" onClick={() => startQuiz('FAVORITES')} className="w-full mb-4 shadow-yellow-200">练习收藏题目</Button>
           )}
           {(view === 'MANAGE') && (
              <Button variant="secondary" onClick={() => {
                 const text = prompt("输入题目:");
                 if(text) setQuestions([{id: Math.random().toString(), text, options: ["A","B","C","D"], correctAnswerIndex:0, created: Date.now()}, ...questions]);
              }} className="w-full mb-4 border-dashed border-2">
                 <PlusIcon /> 添加题目
              </Button>
           )}

           {listQuestions.length === 0 ? (
             <div className="flex flex-col items-center justify-center h-64 text-slate-400">
               <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 ${isAmber ? 'bg-amber-100' : isYellow ? 'bg-yellow-100' : 'bg-slate-200'}`}>
                 {isAmber ? '👏' : isYellow ? '⭐' : '📝'}
               </div>
               <p className="font-medium">{emptyMsg}</p>
             </div>
           ) : (
             listQuestions.map((q, idx) => (
              <div key={q.id} className="p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-slate-100 relative group animate-fade-in hover:shadow-md transition">
                <div className="pr-16">
                   <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs md:text-sm font-black px-2 py-0.5 rounded-md ${isAmber ? 'bg-amber-100 text-amber-600' : isYellow ? 'bg-yellow-100 text-yellow-600' : 'bg-indigo-50 text-indigo-500'}`}>
                        #{idx + 1}
                      </span>
                      {q.category && <span className="text-xs md:text-sm text-slate-400 font-medium truncate max-w-[100px]">{q.category}</span>}
                   </div>
                   <p className="font-bold text-slate-700 leading-relaxed line-clamp-2 text-sm md:text-lg">{q.text}</p>
                </div>
                
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                   <button 
                    onClick={(e) => toggleFavorite(e, q.id)}
                    className={`p-2 rounded-full transition ${favoriteIds.has(q.id) ? 'bg-yellow-50 text-yellow-400' : 'text-slate-200 hover:text-yellow-400'}`}
                  >
                    <StarIcon filled={favoriteIds.has(q.id)} size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      if (view === 'MISTAKES') {
                         if(confirm("移除出错题本？")) setWrongQuestionIds(prev => { const s = new Set(prev); s.delete(q.id); return s; });
                      } else {
                         deleteQuestion(q.id);
                      }
                    }}
                    className={`p-2 rounded-full transition ${view === 'MISTAKES' ? 'text-green-400 hover:bg-green-50' : 'text-slate-200 hover:bg-red-50 hover:text-red-500'}`}
                  >
                    {view === 'MISTAKES' ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : <TrashIcon />}
                  </button>
                </div>
              </div>
            ))
           )}
        </div>
      </div>
    );
  }

  // 5. QUIZ VIEW (ALMOND THEME & RESPONSIVE)
  if (view === 'QUIZ') {
    const isFinished = quizState.answers.length === quizState.shuffledQuestions.length && quizState.currentQuestionIndex >= quizState.shuffledQuestions.length;
    const isExam = quizState.quizType === 'EXAM';
    
    // Summary
    if (isFinished) {
      const percentage = Math.round((quizState.score / quizState.shuffledQuestions.length) * 100);
      return (
        <div className="w-full h-full flex flex-col bg-[#FDF5E6] p-8 justify-center text-center animate-fade-in">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8 text-6xl md:text-8xl shadow-inner animate-scale-in">
            {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-2">{isExam ? "考试结束" : "练习完成"}</h2>
          <p className="text-stone-500 mb-10 font-medium md:text-xl">本次练习概况</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto w-full">
             <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="text-3xl md:text-5xl font-black text-orange-600">{percentage}%</div>
                <div className="text-xs md:text-base font-bold text-orange-400 uppercase mt-2">正确率</div>
             </div>
             <div className="p-6 bg-white rounded-2xl border border-stone-100">
                <div className="text-3xl md:text-5xl font-black text-stone-700">{quizState.score}/{quizState.shuffledQuestions.length}</div>
                <div className="text-xs md:text-base font-bold text-stone-400 uppercase mt-2">答对/总题</div>
             </div>
          </div>

          <Button onClick={endQuizSession} className="w-full max-w-md mx-auto py-4 md:py-6 text-lg md:text-xl shadow-xl shadow-orange-100 !bg-orange-600 hover:!bg-orange-700">
            返回主页
          </Button>
        </div>
      );
    }

    const currentQ = quizState.shuffledQuestions[quizState.currentQuestionIndex];
    const hasAnswered = quizState.answers.some(a => a.questionId === currentQ.id);
    const answerData = quizState.answers.find(a => a.questionId === currentQ.id);

    return (
      // Warm Theme: bg-[#FDF5E6] (Almond) / Text: Stone
      <div className="w-full h-full flex flex-col bg-[#FDF5E6] relative overflow-hidden">
        {/* Toast */}
        {showMistakeRemovedToast && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm md:text-base font-bold shadow-lg shadow-emerald-200 z-50 animate-slide-down flex items-center gap-2">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
             已掌握，移除错题
          </div>
        )}

        {/* Top Bar (Simplified, Warm Theme) */}
        <div className="bg-[#FDF5E6]/90 backdrop-blur-md shadow-sm z-10 pt-4 pb-2 sticky top-0 md:px-12">
           <div className="px-6 mb-2 flex justify-between items-center max-w-5xl mx-auto w-full">
              <button onClick={saveAndExitQuiz} className="p-2 -ml-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition">
                <HomeIcon />
              </button>
              <div className="flex-1 px-4 md:px-10 flex flex-col justify-center">
                  <div className="flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                      <span>{isExam ? "考试进行中" : "练习模式"}</span>
                      <span>{quizState.currentQuestionIndex + 1} / {quizState.shuffledQuestions.length}</span>
                  </div>
                  <ProgressBar current={quizState.currentQuestionIndex} total={quizState.shuffledQuestions.length} colorClass="bg-orange-500" />
              </div>
              <button 
                onClick={(e) => toggleFavorite(e, currentQ.id)}
                className={`p-2 -mr-2 rounded-full transition active:scale-90 ${favoriteIds.has(currentQ.id) ? 'text-orange-400 bg-orange-50' : 'text-stone-300 hover:text-orange-400'}`}
              >
                <StarIcon filled={favoriteIds.has(currentQ.id)} size={24} />
              </button>
           </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 pb-40 md:p-12 md:pb-48 max-w-5xl mx-auto w-full">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg shadow-stone-200/50 border border-stone-100 mb-6 md:mb-10 animate-scale-in">
            {currentQ.category && <span className="inline-block mb-3 px-2.5 py-1 bg-orange-50 text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md">{currentQ.category}</span>}
            <h3 className="text-lg md:text-3xl font-bold text-stone-800 leading-relaxed tracking-tight">{currentQ.text}</h3>
          </div>

          <div className="space-y-3 md:space-y-5">
            {currentQ.options.map((opt, idx) => {
              let btnClass = "w-full p-4 md:p-6 rounded-2xl border-2 text-left transition-all duration-200 relative group ";
              if (hasAnswered) {
                if (idx === currentQ.correctAnswerIndex) btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-sm";
                else if (idx === answerData?.selectedIndex) btnClass += "border-amber-500 bg-amber-50 text-amber-900 shadow-sm";
                else btnClass += "border-transparent bg-stone-100/50 text-stone-400 opacity-50";
              } else {
                btnClass += "border-transparent bg-white shadow-sm text-stone-600 hover:bg-orange-50 hover:text-orange-900 hover:border-orange-200 active:scale-[0.98]";
              }

              return (
                <button key={idx} disabled={hasAnswered} onClick={() => handleAnswer(idx)} className={btnClass}>
                  <div className="flex items-start gap-4">
                    <span className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold border ${hasAnswered && (idx === currentQ.correctAnswerIndex || idx === answerData?.selectedIndex) ? 'border-current opacity-100' : 'border-stone-200 text-stone-300 group-hover:border-orange-300 group-hover:text-orange-500'}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug md:text-xl">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {hasAnswered && (
             <div className="mt-8 md:mt-12 animate-fade-in">
               <div className="p-5 md:p-8 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-100 mb-20">
                 <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-blue-900 text-sm md:text-base flex items-center gap-2">
                      <span className="bg-blue-200 text-blue-700 w-5 h-5 flex items-center justify-center rounded-full text-xs">?</span> 
                      解析
                    </h4>
                    {!explanation && !isExplaining && (
                      <button onClick={askForExplanation} className="text-xs md:text-sm font-bold text-blue-600 bg-white px-3 py-1.5 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition">
                         AI 详解 ✨
                      </button>
                    )}
                 </div>
                 {isExplaining ? (
                   <div className="flex items-center gap-2 text-sm text-blue-600 py-2">
                     <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                     AI 正在思考...
                   </div>
                 ) : (
                   <p className="text-sm md:text-lg text-blue-800 leading-7 md:leading-9">
                     {explanation || currentQ.explanation || "点击上方按钮获取 AI 详细解析。"}
                   </p>
                 )}
               </div>
             </div>
          )}
        </div>
        
        {/* Floating Next Button (Above Bottom Bar) */}
        {hasAnswered && (
          <div className="absolute bottom-20 md:bottom-28 left-0 right-0 px-6 md:px-0 animate-slide-up z-20 flex justify-center pointer-events-none">
             <Button 
               onClick={quizState.currentQuestionIndex < quizState.shuffledQuestions.length - 1 ? nextQuestion : endQuizSession} 
               className="w-full max-w-lg pointer-events-auto py-4 md:py-6 text-lg md:text-xl shadow-xl shadow-orange-200 !rounded-2xl !bg-orange-600 hover:!bg-orange-700"
             >
               {quizState.currentQuestionIndex < quizState.shuffledQuestions.length - 1 ? "下一题" : (isExam ? "交卷" : "完成练习")}
             </Button>
          </div>
        )}

        {/* Bottom Navigation Bar (Warm Theme) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-stone-100 px-6 py-3 md:py-6 z-30 flex justify-between items-center shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] md:justify-center md:gap-20">
            <button 
              onClick={prevQuestion} 
              disabled={quizState.currentQuestionIndex === 0}
              className="p-3 text-stone-400 hover:text-orange-600 hover:bg-orange-50 rounded-2xl transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-400"
            >
              <ChevronLeftIcon />
            </button>

            <button 
              onClick={() => setIsQuestionGridOpen(true)}
              className="flex items-center gap-3 px-6 py-3 bg-stone-50 text-stone-600 rounded-2xl hover:bg-orange-50 hover:text-orange-600 transition font-bold md:px-12 md:text-lg"
            >
               <GridIcon />
               <span>{quizState.currentQuestionIndex + 1} <span className="text-stone-300 font-normal">/</span> {quizState.shuffledQuestions.length}</span>
            </button>

            <button 
              onClick={nextQuestion} 
              disabled={quizState.currentQuestionIndex === quizState.shuffledQuestions.length - 1}
              className="p-3 text-stone-400 hover:text-orange-600 hover:bg-orange-50 rounded-2xl transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-400"
            >
              <ChevronRightIcon />
            </button>
        </div>

        {/* Question Grid Bottom Sheet (Array Form) */}
        {/* Overlay */}
        {isQuestionGridOpen && (
          <div 
            className="fixed inset-0 bg-stone-900/40 z-40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsQuestionGridOpen(false)}
          ></div>
        )}
        
        {/* Sheet */}
        <div className={`fixed inset-x-0 bottom-0 z-50 bg-white md:max-w-2xl md:mx-auto md:rounded-t-[40px] rounded-t-[30px] shadow-2xl transition-transform duration-300 ease-out transform ${isQuestionGridOpen ? 'translate-y-0' : 'translate-y-full'} max-h-[80vh] flex flex-col`}>
           <div className="p-4 md:p-6 border-b border-stone-100 flex justify-between items-center bg-white rounded-t-[30px] md:rounded-t-[40px] sticky top-0 z-10">
              <span className="font-bold text-lg md:text-xl text-stone-800 pl-2">答题卡 ({quizState.shuffledQuestions.length})</span>
              <button onClick={() => setIsQuestionGridOpen(false)} className="p-2 text-stone-400 hover:text-stone-700 bg-stone-50 rounded-full">
                <ChevronDownIcon />
              </button>
           </div>
           
           <div className="p-6 md:p-8 overflow-y-auto">
             <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-6">
               {quizState.shuffledQuestions.map((q, idx) => {
                 const ans = quizState.answers.find(a => a.questionId === q.id);
                 let statusClass = "bg-stone-50 text-stone-400 border-2 border-stone-100";
                 
                 if (idx === quizState.currentQuestionIndex) {
                    statusClass = "bg-orange-600 text-white border-2 border-orange-600 shadow-md shadow-orange-200 scale-110 ring-2 ring-orange-100 ring-offset-2";
                 } else if (ans) {
                    statusClass = ans.isCorrect 
                      ? "bg-emerald-50 text-emerald-600 border-2 border-emerald-200" 
                      : "bg-amber-50 text-amber-600 border-2 border-amber-200";
                 }
                 
                 return (
                   <button
                     key={q.id}
                     onClick={() => jumpToQuestion(idx)}
                     className={`aspect-square rounded-2xl flex items-center justify-center font-bold text-sm md:text-base transition-all hover:scale-105 active:scale-95 ${statusClass}`}
                   >
                     {idx + 1}
                   </button>
                 );
               })}
             </div>
           </div>
           
           <div className="p-4 md:p-6 bg-stone-50 text-xs md:text-sm text-stone-400 flex justify-center gap-4 md:gap-8 border-t border-stone-100 rounded-b-none md:rounded-b-none">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-stone-200"></div> 未答</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-600"></div> 当前</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-300"></div> 正确</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-100 border border-amber-300"></div> 错误</div>
           </div>
        </div>
      </div>
    );
  }

  return null;
}