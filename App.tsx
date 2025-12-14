import React, { useState, useEffect, useRef } from 'react';
import { Question, QuizState, ViewMode } from './types';
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


// --- Components ---

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progress = Math.min(100, (current / total) * 100);
  return (
    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-indigo-500 transition-all duration-500 ease-out rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default function App() {
  // --- State ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [view, setView] = useState<ViewMode>('DASHBOARD');
  
  const [wrongQuestionIds, setWrongQuestionIds] = useState<Set<string>>(new Set());
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const [quizState, setQuizState] = useState<QuizState>({
    isActive: false,
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    shuffledQuestions: []
  });
  
  const [genTopic, setGenTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const [explanation, setExplanation] = useState<string | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);
  
  const [showMistakeRemovedToast, setShowMistakeRemovedToast] = useState(false);
  
  // Controls the bottom sheet grid
  const [isQuestionGridOpen, setIsQuestionGridOpen] = useState(false);

  // --- Effects (Load/Save) ---
  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const savedWrong = localStorage.getItem('smartprep_wrong_ids');
    if (savedWrong) {
      try { setWrongQuestionIds(new Set(JSON.parse(savedWrong))); } catch (e) { }
    }
    const savedFavs = localStorage.getItem('smartprep_favorites');
    if (savedFavs) {
      try { setFavoriteIds(new Set(JSON.parse(savedFavs))); } catch (e) { }
    }
    const savedQuiz = localStorage.getItem('smartprep_quiz_state');
    if (savedQuiz) {
      try {
        const parsed = JSON.parse(savedQuiz);
        if (parsed.isActive) setQuizState(parsed);
      } catch (e) { }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('smartprep_wrong_ids', JSON.stringify([...wrongQuestionIds]));
  }, [wrongQuestionIds]);

  useEffect(() => {
    localStorage.setItem('smartprep_favorites', JSON.stringify([...favoriteIds]));
  }, [favoriteIds]);

  useEffect(() => {
    if (questions.length > 0) localStorage.setItem('smartprep_questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    if (quizState.isActive) localStorage.setItem('smartprep_quiz_state', JSON.stringify(quizState));
    else localStorage.removeItem('smartprep_quiz_state');
  }, [quizState]);

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

  const startQuiz = (mode: 'ALL_SEQUENTIAL' | 'RANDOM_10' | 'MISTAKES' | 'FAVORITES') => {
    if (quizState.isActive && !confirm("当前有未完成的练习，开始新练习将覆盖旧进度。是否继续？")) return;

    let q: Question[] = [];
    if (mode === 'MISTAKES') {
      q = questions.filter(quest => wrongQuestionIds.has(quest.id));
      if (q.length === 0) { alert("错题本是空的，真棒！"); return; }
    } else if (mode === 'FAVORITES') {
      q = questions.filter(quest => favoriteIds.has(quest.id));
      if (q.length === 0) { alert("您还没有收藏任何题目。"); return; }
    } else if (mode === 'RANDOM_10') {
      q = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
    } else {
      q = [...questions].sort((a, b) => {
        const getNum = (id: string) => id.startsWith('static_') ? parseInt(id.replace('static_', ''), 10) : Number.MAX_SAFE_INTEGER;
        return getNum(a.id) - getNum(b.id);
      });
    }

    setQuizState({
      isActive: true,
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      shuffledQuestions: q
    });
    setExplanation(null);
    setIsQuestionGridOpen(false); // Reset grid state
    setView('QUIZ');
  };

  const handleAnswer = (selectedIndex: number) => {
    const currentQ = quizState.shuffledQuestions[quizState.currentQuestionIndex];
    if (quizState.answers.some(a => a.questionId === currentQ.id)) return;

    const isCorrect = selectedIndex === currentQ.correctAnswerIndex;

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
    setIsQuestionGridOpen(false); // Close grid after selection
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
  const endQuizSession = () => { setView('DASHBOARD'); setQuizState(prev => ({ ...prev, isActive: false })); };

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

  // --- Views ---

  // 1. DASHBOARD
  if (view === 'DASHBOARD') {
    return (
      <div className="max-w-md mx-auto h-full flex flex-col bg-slate-50 relative">
        {/* Header Background */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-b-[40px] shadow-lg z-0"></div>

        <header className="p-6 pt-10 relative z-10 text-white flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-1">智能刷题</h1>
            <p className="text-indigo-100 font-medium opacity-90">让每一次练习都值得</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10">
            <BrainIcon />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-5 pb-6 relative z-10 space-y-5 -mt-2">
          
          {/* Stats Card */}
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-indigo-900/10 border border-slate-100 animate-scale-in">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">题目总数</span>
                <div className="text-5xl font-black text-slate-800 mt-1">{questions.length}</div>
              </div>
              <div className="text-right">
                 <button 
                  onClick={() => startQuiz('ALL_SEQUENTIAL')}
                  className="bg-slate-900 text-white rounded-full p-4 shadow-lg hover:scale-110 hover:shadow-xl transition active:scale-95 group"
                  disabled={questions.length === 0}
                 >
                   <PlayIcon />
                 </button>
              </div>
            </div>
            
            <Button 
               onClick={() => startQuiz('RANDOM_10')}
               variant="secondary"
               className="w-full !rounded-2xl !py-3 !text-slate-600 !border-slate-100 hover:!bg-slate-50"
               disabled={questions.length === 0}
            >
              🎲 随机练习 10 题
            </Button>
          </div>

          {/* Resume Quiz Banner */}
          {quizState.isActive && (
            <div 
              onClick={() => setView('QUIZ')}
              className="bg-white border-l-4 border-orange-400 rounded-2xl p-4 shadow-md shadow-orange-100/50 cursor-pointer active:scale-95 transition group animate-fade-in"
            >
               <div className="flex justify-between items-center">
                 <div>
                   <div className="text-slate-800 font-bold flex items-center gap-2 mb-1">
                     <span className="flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                      </span>
                     继续练习
                   </div>
                   <p className="text-slate-500 text-xs">
                     进度: {Math.round((quizState.currentQuestionIndex / quizState.shuffledQuestions.length) * 100)}%
                   </p>
                 </div>
                 <div className="text-orange-400 group-hover:translate-x-1 transition">
                   <ForwardIcon />
                 </div>
               </div>
            </div>
          )}

          {/* Collections Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Mistakes Card */}
            <div className="bg-amber-50 rounded-3xl p-5 border border-amber-100 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-3">
                 <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                    <BookXIcon />
                 </div>
                 <span className="font-black text-2xl text-amber-900">{wrongQuestionIds.size}</span>
              </div>
              <div>
                <h3 className="text-amber-900 font-bold mb-3">错题集</h3>
                <div className="flex gap-2">
                   <button onClick={() => startQuiz('MISTAKES')} disabled={wrongQuestionIds.size === 0} className="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg py-1.5 text-xs font-bold transition disabled:opacity-50">复习</button>
                   <button onClick={() => setView('MISTAKES')} className="flex-1 bg-white text-amber-700 hover:bg-amber-50 rounded-lg py-1.5 text-xs font-bold transition">管理</button>
                </div>
              </div>
            </div>

            {/* Favorites Card */}
            <div className="bg-yellow-50 rounded-3xl p-5 border border-yellow-100 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-3">
                 <div className="p-2 bg-yellow-100 rounded-xl text-yellow-600">
                    <StarIcon filled={true} />
                 </div>
                 <span className="font-black text-2xl text-yellow-900">{favoriteIds.size}</span>
              </div>
              <div>
                <h3 className="text-yellow-900 font-bold mb-3">我的收藏</h3>
                <div className="flex gap-2">
                   <button onClick={() => startQuiz('FAVORITES')} disabled={favoriteIds.size === 0} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-1.5 text-xs font-bold transition disabled:opacity-50">练习</button>
                   <button onClick={() => setView('FAVORITES')} className="flex-1 bg-white text-yellow-700 hover:bg-yellow-50 rounded-lg py-1.5 text-xs font-bold transition">查看</button>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 gap-3">
             <button 
              onClick={() => setView('AI_GENERATOR')}
              className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-indigo-200 transition active:scale-[0.98] group"
             >
               <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 transition">
                  <BrainIcon />
               </div>
               <div className="text-left">
                  <h3 className="font-bold text-slate-800">AI 智能出题</h3>
                  <p className="text-xs text-slate-500">输入话题，AI 自动生成题目</p>
               </div>
             </button>

             <button 
              onClick={() => setView('MANAGE')}
              className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-blue-200 transition active:scale-[0.98] group"
             >
               <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
                  <ListIcon />
               </div>
               <div className="text-left">
                  <h3 className="font-bold text-slate-800">题库管理</h3>
                  <p className="text-xs text-slate-500">查看、编辑或删除题目</p>
               </div>
             </button>
          </div>
        </main>
      </div>
    );
  }

  // Common Header for Subviews
  const SubHeader = ({ title, bgClass = "bg-white", textClass="text-slate-800", count }: { title: string, bgClass?: string, textClass?: string, count?: number }) => (
    <header className={`p-4 border-b border-slate-100 flex items-center gap-3 sticky top-0 z-20 ${bgClass} transition-colors duration-300`}>
      <button onClick={() => setView('DASHBOARD')} className={`p-2 rounded-xl hover:bg-black/5 transition active:scale-90 ${textClass}`}>
        <HomeIcon />
      </button>
      <div className="flex-1">
        <h2 className={`font-bold text-lg ${textClass}`}>{title}</h2>
      </div>
      {count !== undefined && <span className="text-xs font-bold bg-black/5 px-2 py-1 rounded-md">{count}</span>}
    </header>
  );

  // 2. AI GENERATOR
  if (view === 'AI_GENERATOR') {
    return (
      <div className="max-w-md mx-auto h-full flex flex-col bg-white">
        <SubHeader title="AI 智能出题" />
        <div className="p-6 flex-1 flex flex-col animate-slide-down">
          <div className="bg-purple-50 p-5 rounded-2xl mb-8 border border-purple-100">
            <h3 className="text-purple-800 font-bold mb-2 flex items-center gap-2">
              <BrainIcon /> 如何使用?
            </h3>
            <p className="text-sm text-purple-700 leading-relaxed opacity-90">
              输入你想练习的主题（如："高中物理"、"唐朝历史"），AI 将为你生成 5 道带解析的选择题。
            </p>
          </div>

          <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">出题主题</label>
          <input
            type="text"
            value={genTopic}
            onChange={(e) => setGenTopic(e.target.value)}
            placeholder="例如：React 基础、法律常识..."
            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-purple-500 focus:bg-white focus:ring-0 outline-none text-lg mb-4 transition-all"
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
              className="w-full py-4 text-lg bg-purple-600 hover:bg-purple-700 shadow-purple-200"
            >
              {isGenerating ? "正在生成..." : "✨ 开始生成"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 3. MANAGE / MISTAKES / FAVORITES LISTS
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
      <div className="max-w-md mx-auto h-full flex flex-col bg-slate-50">
        <SubHeader 
           title={title} 
           count={listQuestions.length}
           bgClass={isAmber ? 'bg-amber-50' : isYellow ? 'bg-yellow-50' : 'bg-white'} 
           textClass={isAmber ? 'text-amber-900' : isYellow ? 'text-yellow-900' : 'text-slate-800'}
        />
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
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
              <div key={q.id} className="p-5 rounded-2xl bg-white shadow-sm border border-slate-100 relative group animate-fade-in hover:shadow-md transition">
                <div className="pr-16">
                   <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md ${isAmber ? 'bg-amber-100 text-amber-600' : isYellow ? 'bg-yellow-100 text-yellow-600' : 'bg-indigo-50 text-indigo-500'}`}>
                        #{idx + 1}
                      </span>
                      {q.category && <span className="text-xs text-slate-400 font-medium truncate max-w-[100px]">{q.category}</span>}
                   </div>
                   <p className="font-bold text-slate-700 leading-relaxed line-clamp-2 text-sm">{q.text}</p>
                </div>
                
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                   <button 
                    onClick={(e) => toggleFavorite(e, q.id)}
                    className={`p-2 rounded-full transition ${favoriteIds.has(q.id) ? 'bg-yellow-50 text-yellow-400' : 'text-slate-200 hover:text-yellow-400'}`}
                  >
                    <StarIcon filled={favoriteIds.has(q.id)} size={18} />
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
                    {view === 'MISTAKES' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : <TrashIcon />}
                  </button>
                </div>
              </div>
            ))
           )}
        </div>
      </div>
    );
  }

  // 4. QUIZ VIEW
  if (view === 'QUIZ') {
    const isFinished = quizState.answers.length === quizState.shuffledQuestions.length && quizState.currentQuestionIndex >= quizState.shuffledQuestions.length;
    
    // Summary
    if (isFinished) {
      const percentage = Math.round((quizState.score / quizState.shuffledQuestions.length) * 100);
      return (
        <div className="max-w-md mx-auto h-full flex flex-col bg-white p-8 justify-center text-center animate-fade-in">
          <div className="w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-8 text-6xl shadow-inner animate-scale-in">
            {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
          </div>
          <h2 className="text-4xl font-black text-slate-800 mb-2">练习完成</h2>
          <p className="text-slate-400 mb-10 font-medium">本次练习概况</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
             <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="text-3xl font-black text-indigo-600">{percentage}%</div>
                <div className="text-xs font-bold text-indigo-400 uppercase mt-1">正确率</div>
             </div>
             <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-black text-slate-700">{quizState.score}/{quizState.shuffledQuestions.length}</div>
                <div className="text-xs font-bold text-slate-400 uppercase mt-1">答对/总题</div>
             </div>
          </div>

          <Button onClick={endQuizSession} className="w-full py-4 text-lg shadow-xl shadow-indigo-100">
            返回主页
          </Button>
        </div>
      );
    }

    const currentQ = quizState.shuffledQuestions[quizState.currentQuestionIndex];
    const hasAnswered = quizState.answers.some(a => a.questionId === currentQ.id);
    const answerData = quizState.answers.find(a => a.questionId === currentQ.id);

    return (
      <div className="max-w-md mx-auto h-full flex flex-col bg-slate-50 relative overflow-hidden">
        {/* Toast */}
        {showMistakeRemovedToast && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-200 z-50 animate-slide-down flex items-center gap-2">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
             已掌握，移除错题
          </div>
        )}

        {/* Top Bar (Simplified) */}
        <div className="bg-white/80 backdrop-blur-md shadow-sm z-10 pt-4 pb-2 sticky top-0">
           <div className="px-6 mb-2 flex justify-between items-center">
              <button onClick={saveAndExitQuiz} className="p-2 -ml-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition">
                <HomeIcon />
              </button>
              <div className="flex-1 px-4">
                  <ProgressBar current={quizState.currentQuestionIndex} total={quizState.shuffledQuestions.length} />
              </div>
              <button 
                onClick={(e) => toggleFavorite(e, currentQ.id)}
                className={`p-2 -mr-2 rounded-full transition active:scale-90 ${favoriteIds.has(currentQ.id) ? 'text-yellow-400 bg-yellow-50' : 'text-slate-300 hover:text-yellow-400'}`}
              >
                <StarIcon filled={favoriteIds.has(currentQ.id)} size={22} />
              </button>
           </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 pb-40">
          <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 mb-6 animate-scale-in">
            {currentQ.category && <span className="inline-block mb-3 px-2.5 py-1 bg-indigo-50 text-indigo-500 text-[10px] font-bold uppercase tracking-wider rounded-md">{currentQ.category}</span>}
            <h3 className="text-lg font-bold text-slate-800 leading-relaxed">{currentQ.text}</h3>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              let btnClass = "w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 relative group ";
              if (hasAnswered) {
                if (idx === currentQ.correctAnswerIndex) btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-sm";
                else if (idx === answerData?.selectedIndex) btnClass += "border-amber-500 bg-amber-50 text-amber-900 shadow-sm";
                else btnClass += "border-transparent bg-slate-100/50 text-slate-400 opacity-50";
              } else {
                btnClass += "border-transparent bg-white shadow-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 active:scale-[0.98]";
              }

              return (
                <button key={idx} disabled={hasAnswered} onClick={() => handleAnswer(idx)} className={btnClass}>
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${hasAnswered && (idx === currentQ.correctAnswerIndex || idx === answerData?.selectedIndex) ? 'border-current opacity-100' : 'border-slate-200 text-slate-300 group-hover:border-indigo-300 group-hover:text-indigo-500'}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {hasAnswered && (
             <div className="mt-8 animate-fade-in">
               <div className="p-5 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-100 mb-20">
                 <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-blue-900 text-sm flex items-center gap-2">
                      <span className="bg-blue-200 text-blue-700 w-5 h-5 flex items-center justify-center rounded-full text-xs">?</span> 
                      解析
                    </h4>
                    {!explanation && !isExplaining && (
                      <button onClick={askForExplanation} className="text-xs font-bold text-blue-600 bg-white px-3 py-1.5 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition">
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
                   <p className="text-sm text-blue-800 leading-7">
                     {explanation || currentQ.explanation || "点击上方按钮获取 AI 详细解析。"}
                   </p>
                 )}
               </div>
             </div>
          )}
        </div>
        
        {/* Floating Next Button (Above Bottom Bar) */}
        {hasAnswered && (
          <div className="absolute bottom-20 left-0 right-0 px-6 animate-slide-up z-20">
             <Button 
               onClick={quizState.currentQuestionIndex < quizState.shuffledQuestions.length - 1 ? nextQuestion : endQuizSession} 
               className="w-full py-4 text-lg shadow-xl shadow-indigo-200 !rounded-2xl"
             >
               {quizState.currentQuestionIndex < quizState.shuffledQuestions.length - 1 ? "下一题" : "完成练习"}
             </Button>
          </div>
        )}

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 z-30 flex justify-between items-center shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
            <button 
              onClick={prevQuestion} 
              disabled={quizState.currentQuestionIndex === 0}
              className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-2xl transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
            >
              <ChevronLeftIcon />
            </button>

            <button 
              onClick={() => setIsQuestionGridOpen(true)}
              className="flex items-center gap-3 px-6 py-3 bg-slate-50 text-slate-600 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition font-bold"
            >
               <GridIcon />
               <span>{quizState.currentQuestionIndex + 1} <span className="text-slate-300 font-normal">/</span> {quizState.shuffledQuestions.length}</span>
            </button>

            <button 
              onClick={nextQuestion} 
              disabled={quizState.currentQuestionIndex === quizState.shuffledQuestions.length - 1}
              className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-2xl transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
            >
              <ChevronRightIcon />
            </button>
        </div>

        {/* Question Grid Bottom Sheet (Array Form) */}
        {/* Overlay */}
        {isQuestionGridOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsQuestionGridOpen(false)}
          ></div>
        )}
        
        {/* Sheet */}
        <div className={`fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[30px] shadow-2xl transition-transform duration-300 ease-out transform ${isQuestionGridOpen ? 'translate-y-0' : 'translate-y-full'} max-h-[80vh] flex flex-col`}>
           <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white rounded-t-[30px] sticky top-0 z-10">
              <span className="font-bold text-lg text-slate-800 pl-2">答题卡 ({quizState.shuffledQuestions.length})</span>
              <button onClick={() => setIsQuestionGridOpen(false)} className="p-2 text-slate-400 hover:text-slate-700 bg-slate-50 rounded-full">
                <ChevronDownIcon />
              </button>
           </div>
           
           <div className="p-6 overflow-y-auto">
             <div className="grid grid-cols-5 sm:grid-cols-6 gap-4">
               {quizState.shuffledQuestions.map((q, idx) => {
                 const ans = quizState.answers.find(a => a.questionId === q.id);
                 let statusClass = "bg-slate-50 text-slate-400 border-2 border-slate-100";
                 
                 if (idx === quizState.currentQuestionIndex) {
                    statusClass = "bg-indigo-600 text-white border-2 border-indigo-600 shadow-md shadow-indigo-200 scale-110 ring-2 ring-indigo-100 ring-offset-2";
                 } else if (ans) {
                    statusClass = ans.isCorrect 
                      ? "bg-emerald-50 text-emerald-600 border-2 border-emerald-200" 
                      : "bg-amber-50 text-amber-600 border-2 border-amber-200";
                 }
                 
                 return (
                   <button
                     key={q.id}
                     onClick={() => jumpToQuestion(idx)}
                     className={`aspect-square rounded-2xl flex items-center justify-center font-bold text-sm transition-all hover:scale-105 active:scale-95 ${statusClass}`}
                   >
                     {idx + 1}
                   </button>
                 );
               })}
             </div>
           </div>
           
           <div className="p-4 bg-slate-50 text-xs text-slate-400 flex justify-center gap-4 border-t border-slate-100">
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-slate-200"></div> 未答</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-indigo-600"></div> 当前</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-300"></div> 正确</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-amber-100 border border-amber-300"></div> 错误</div>
           </div>
        </div>
      </div>
    );
  }

  return null;
}