import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bookmark,
  BookOpen,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Flag,
  GitBranch,
  GitCompareArrows,
  GraduationCap,
  Lightbulb,
  ListChecks,
  Landmark,
  Leaf,
  LockKeyhole,
  ClipboardCheck,
  Copyright,
  Download,
  FileText,
  HandHeart,
  KeyRound,
  ShieldCheck,
  ShoppingBag,
  MoveUpRight,
  Network,
  Play,
  RotateCcw,
  Scale,
  Search,
  ShieldAlert,
  Target,
  TrendingUp,
  TriangleAlert,
  Trophy,
  X,
  XCircle,
} from "lucide-react";
import { getClatTests } from "../data/clatTestBank";
import {
  reasoningPassages as logicalPassages,
  reasoningQuestions as logicalQuestions,
  reasoningTopics as logicalTopics,
} from "../data/clatReasoningPractice";
import {
  legalPassages,
  legalQuestions,
  legalTopics,
} from "../data/clatLegalReasoningPractice";
import { clatPyqPapers, clatPyqYears } from "../data/clatPyqCatalog";
import "../styles/ClatReasoningCentre.css";

const STORAGE_KEY = "world-wise-clat-reasoning-demo-v1";
const CHALLENGE_QUESTION_IDS = [
  "education-conclusion",
  "education-assumption",
  "education-inference",
  "education-main-idea",
  "education-cause",
];
const ICONS = {
  Target,
  Lightbulb,
  TrendingUp,
  ShieldAlert,
  Scale,
  GitBranch,
  Search,
  BookOpen,
  Network,
  GitCompareArrows,
  ListChecks,
  MoveUpRight,
  TriangleAlert,
  ChartNoAxesCombined: BarChart3,
  CheckCheck,
  Landmark,
  Leaf,
  LockKeyhole,
  ClipboardCheck,
  Copyright,
  FileText,
  HandHeart,
  KeyRound,
  ShieldCheck,
  ShoppingBag,
};
const TABS = [
  { id: "overview", label: "Overview", icon: GraduationCap },
  { id: "topics", label: "Topics", icon: Target },
  { id: "passages", label: "Passages", icon: BookOpen },
  { id: "mock-tests", label: "Mock tests", icon: CheckCircle2 },
  { id: "pyq", label: "Previous year", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "bookmarks", label: "Saved questions", icon: Bookmark },
];

const getTopic = (topics, id) => topics.find((item) => item.id === id);
const getPassage = (passages, id) => passages.find((item) => item.id === id);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
};

const getStoredData = (storageKey) => {
  const raw = window.localStorage.getItem(storageKey);
  if (!raw) return { attempts: [], bookmarks: [] };
  const data = JSON.parse(raw);
  if (
    !data ||
    !Array.isArray(data.attempts) ||
    !Array.isArray(data.bookmarks)
  ) {
    throw new Error("Saved practice progress has an invalid format.");
  }
  return data;
};

const SectionHeading = ({ eyebrow, title, description, action }) => (
  <div className="clat-section-heading">
    <div>
      {eyebrow && <p className="clat-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="clat-section-description">{description}</p>}
    </div>
    {action}
  </div>
);

const EmptyState = ({ icon: Icon = BookOpen, title, description, action }) => (
  <div className="clat-empty-state">
    <span className="clat-empty-icon"><Icon size={22} /></span>
    <h3>{title}</h3>
    <p>{description}</p>
    {action}
  </div>
);

const TopicCard = ({ topic, questionCount, progress, onStart }) => {
  const Icon = ICONS[topic.icon] || Target;
  return (
    <article className="clat-topic-card">
      <div className="clat-topic-icon"><Icon size={20} /></div>
      <span className={`clat-difficulty clat-difficulty-${topic.difficulty.toLowerCase()}`}>
        {topic.difficulty}
      </span>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <div className="clat-topic-meta">
        <span><BookOpen size={14} /> {questionCount} {questionCount === 1 ? "question" : "questions"}</span>
        <span>{progress}% complete</span>
      </div>
      <div className="clat-progress-track" aria-label={`${progress}% complete`}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <button className="clat-text-action" type="button" onClick={onStart} disabled={!questionCount}>
        Start practice <ArrowRight size={16} />
      </button>
    </article>
  );
};

const ClatReasoningCentre = ({ track = "clat" }) => {
  const isLegalTrack = track === "legal";
  const reasoningTopics = isLegalTrack ? legalTopics : logicalTopics;
  const reasoningPassages = isLegalTrack ? legalPassages : logicalPassages;
  const reasoningQuestions = isLegalTrack ? legalQuestions : logicalQuestions;
  const challengeQuestionIds = isLegalTrack
    ? legalPassages[0].questionIds.slice(0, 3)
    : CHALLENGE_QUESTION_IDS;
  const categories = ["All topics", ...new Set(reasoningTopics.map((topic) => topic.category))];
  const tabs = TABS;
  const [pyqYear, setPyqYear] = useState(2026);
  const [pyqProgram, setPyqProgram] = useState("UG");
  const [pyqSet, setPyqSet] = useState("A");
  const storageKey = isLegalTrack
    ? "world-wise-clat-legal-reasoning-demo-v1"
    : STORAGE_KEY;
  const [activeTab, setActiveTab] = useState("overview");
  const [category, setCategory] = useState("All topics");
  const [initialStorage] = useState(() => {
    try {
      return { ...getStoredData(storageKey), error: "", loadFailed: false };
    } catch (error) {
      return {
        attempts: [],
        bookmarks: [],
        error: "Saved practice progress could not be read. This browser will not overwrite the unread data.",
        loadFailed: true,
        loadError: error,
      };
    }
  });
  const [attempts, setAttempts] = useState(initialStorage.attempts);
  const [bookmarks, setBookmarks] = useState(initialStorage.bookmarks);
  const [activePractice, setActivePractice] = useState(null);
  const [completedAttempt, setCompletedAttempt] = useState(null);
  const [storageError, setStorageError] = useState(initialStorage.error);
  const completedSessionIds = useRef(new Set());
  const sessionCounter = useRef(0);
  const allQuestionsById = useMemo(
    () => Object.fromEntries(reasoningQuestions.map((question) => [question.id, question])),
    [reasoningQuestions]
  );
  const clatTests = useMemo(() => (isLegalTrack ? [] : getClatTests()), [isLegalTrack]);

  useEffect(() => {
    if (initialStorage.loadError) {
      console.error("Unable to load practice progress.", initialStorage.loadError);
    }
  }, [initialStorage.loadError]);

  const persistData = useCallback((nextAttempts, nextBookmarks) => {
    if (initialStorage.loadFailed) return;
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ attempts: nextAttempts, bookmarks: nextBookmarks })
      );
    } catch (error) {
      console.error("Unable to save practice progress.", error);
      setStorageError("Practice progress could not be saved in this browser. Check the browser's storage settings.");
    }
  }, [initialStorage.loadFailed, storageKey]);

  const finishAttempt = useCallback((session) => {
    if (!session || completedSessionIds.current.has(session.id)) return;
    completedSessionIds.current.add(session.id);
    const results = session.questionIds.map((id) => {
      const question = allQuestionsById[id];
      const selected = session.answers[id];
      return {
        questionId: id,
        selected,
        correct: selected === question.answer,
      };
    });
    const correctCount = results.filter((result) => result.correct).length;
    const incorrectCount = results.filter(
      (result) => result.selected !== undefined && !result.correct
    ).length;
    const attempt = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: session.title,
      mode: session.mode,
      completedAt: Date.now(),
      timeTaken: Math.max(0, session.durationSeconds - session.secondsRemaining),
      correctCount,
      incorrectCount,
      unansweredCount: results.length - correctCount - incorrectCount,
      totalQuestions: results.length,
      accuracy: results.length ? Math.round((correctCount / results.length) * 100) : 0,
      results,
    };
    const updatedAttempts = [attempt, ...attempts];
    setAttempts(updatedAttempts);
    persistData(updatedAttempts, bookmarks);
    setCompletedAttempt(attempt);
    setActivePractice(null);
    setActiveTab("overview");
  }, [allQuestionsById, attempts, bookmarks, persistData]);

  useEffect(() => {
    const activePracticeId = activePractice?.id;
    if (!activePracticeId) return undefined;
    const timerId = window.setInterval(() => {
      setActivePractice((current) => {
        if (!current || current.id !== activePracticeId) return current;
        return {
          ...current,
          secondsRemaining: Math.max(0, current.secondsRemaining - 1),
        };
      });
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [activePractice?.id]);

  useEffect(() => {
    if (!activePractice || activePractice.secondsRemaining > 0) return undefined;
    const timeoutId = window.setTimeout(() => finishAttempt(activePractice), 0);
    return () => window.clearTimeout(timeoutId);
  }, [activePractice, finishAttempt]);

  const questionHistory = useMemo(
    () => attempts.flatMap((attempt) => attempt.results || []),
    [attempts]
  );
  const totalAttempted = questionHistory.filter((result) => result.selected !== undefined).length;
  const totalCorrect = questionHistory.filter((result) => result.correct).length;
  const totalIncorrect = questionHistory.filter(
    (result) => result.selected !== undefined && !result.correct
  ).length;
  const totalUnattempted = questionHistory.length - totalAttempted;
  const overallAccuracy = totalAttempted
    ? Math.round((totalCorrect / totalAttempted) * 100)
    : 0;
  const topicProgress = useMemo(() => {
    return Object.fromEntries(
      reasoningTopics.map((topic) => {
        const topicQuestionIds = reasoningQuestions
          .filter((question) => question.topicId === topic.id)
          .map((question) => question.id);
        const completedQuestions = new Set(
          questionHistory
            .filter(
              (result) =>
                topicQuestionIds.includes(result.questionId) &&
                result.selected !== undefined
            )
            .map((result) => result.questionId)
        );
        return [
          topic.id,
          topicQuestionIds.length
            ? Math.round((completedQuestions.size / topicQuestionIds.length) * 100)
            : 0,
        ];
      })
    );
  }, [questionHistory, reasoningQuestions, reasoningTopics]);
  const topicAccuracy = useMemo(() => {
    return reasoningTopics.map((topic) => {
      const topicQuestions = new Set(
        reasoningQuestions
          .filter((question) => question.topicId === topic.id)
          .map((question) => question.id)
      );
      const results = questionHistory.filter(
        (result) => topicQuestions.has(result.questionId) && result.selected !== undefined
      );
      const correct = results.filter((result) => result.correct).length;
      return {
        ...topic,
        attempted: results.length,
        accuracy: results.length ? Math.round((correct / results.length) * 100) : null,
      };
    });
  }, [questionHistory, reasoningQuestions, reasoningTopics]);
  const incorrectQuestionIds = useMemo(
    () => [...new Set(questionHistory.filter(
      (result) => result.selected !== undefined && !result.correct
    ).map((result) => result.questionId))],
    [questionHistory]
  );

  const startPractice = (questionIds, title, mode = "Topic practice") => {
    const validIds = questionIds.filter((id) => allQuestionsById[id]);
    if (!validIds.length) return;
    setCompletedAttempt(null);
    setActivePractice({
      id: `session-${++sessionCounter.current}`,
      title,
      mode,
      questionIds: validIds,
      currentIndex: 0,
      answers: {},
      review: {},
      secondsRemaining: 5 * 60,
      durationSeconds: 5 * 60,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startTopic = (topic) => {
    const ids = reasoningQuestions
      .filter((question) => question.topicId === topic.id)
      .map((question) => question.id);
    startPractice(ids, topic.title, "Topic practice");
  };

  const startPassage = (passage) =>
    startPractice(passage.questionIds, passage.title, "Passage practice");

  const updateActivePractice = (changes) => {
    setActivePractice((current) => current ? { ...current, ...changes } : current);
  };

  const toggleBookmark = (questionId) => {
    const updatedBookmarks = bookmarks.includes(questionId)
      ? bookmarks.filter((id) => id !== questionId)
      : [...bookmarks, questionId];
    setBookmarks(updatedBookmarks);
    persistData(attempts, updatedBookmarks);
  };

  const visibleTopics = reasoningTopics.filter(
    (topic) => category === "All topics" || topic.category === category
  );

  if (activePractice) {
    const questionId = activePractice.questionIds[activePractice.currentIndex];
    const question = allQuestionsById[questionId];
    const passage = getPassage(reasoningPassages, question.passageId);
    const currentAnswer = activePractice.answers[questionId];
    const correctAnswers = Object.entries(activePractice.answers).filter(
      ([id, answer]) => answer === allQuestionsById[id]?.answer
    ).length;

    return (
      <main className="clat-centre">
        <div className="clat-practice-shell">
          <div className="clat-practice-topbar">
            <button type="button" className="clat-back-button" onClick={() => {
              if (window.confirm("Exit this practice? Your unfinished answers will not be added to progress.")) {
                setActivePractice(null);
              }
            }}>
              <ArrowLeft size={17} /> Exit practice
            </button>
            <div className="clat-practice-title">
              <span>{activePractice.mode}</span>
              <strong>{activePractice.title}</strong>
            </div>
            <div className={`clat-timer ${activePractice.secondsRemaining <= 60 ? "is-warning" : ""}`}>
              <Clock3 size={17} />
              <span>{formatTime(activePractice.secondsRemaining)}</span>
            </div>
          </div>
          <div className="clat-session-progress">
            <span style={{ width: `${((activePractice.currentIndex + 1) / activePractice.questionIds.length) * 100}%` }} />
          </div>
          <div className="clat-test-layout">
            <section className="clat-test-main">
              <article className="clat-passage-panel">
                <div className="clat-panel-label"><BookOpen size={16} /> Passage</div>
                <div className="clat-passage-heading">
                  <div>
                    <span className="clat-passage-category">{passage.category}</span>
                    <h1>{passage.title}</h1>
                  </div>
                  <span className="clat-reading-time"><Clock3 size={14} /> {passage.readingMinutes} min read</span>
                </div>
                <p>{passage.content}</p>
              </article>
              <article className="clat-question-panel">
                <div className="clat-question-meta">
                  <span>Question {activePractice.currentIndex + 1} of {activePractice.questionIds.length}</span>
                  <span className={`clat-difficulty clat-difficulty-${question.difficulty.toLowerCase()}`}>{question.difficulty}</span>
                </div>
                <h2>{question.prompt}</h2>
                <div className="clat-options">
                  {question.options.map((option, index) => (
                    <button
                      type="button"
                      key={option}
                      className={`clat-option ${currentAnswer === index ? "is-selected" : ""}`}
                      onClick={() => updateActivePractice({
                        answers: { ...activePractice.answers, [questionId]: index },
                      })}
                      aria-pressed={currentAnswer === index}
                    >
                      <span className="clat-option-letter">{String.fromCharCode(65 + index)}</span>
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
                <div className="clat-question-actions">
                  <button type="button" className="clat-icon-button" onClick={() => toggleBookmark(questionId)} aria-label={bookmarks.includes(questionId) ? "Remove bookmark" : "Bookmark question"}>
                    <Bookmark size={17} fill={bookmarks.includes(questionId) ? "currentColor" : "none"} />
                    <span>{bookmarks.includes(questionId) ? "Saved" : "Bookmark"}</span>
                  </button>
                  <button type="button" className="clat-icon-button" onClick={() => updateActivePractice({
                    answers: Object.fromEntries(Object.entries(activePractice.answers).filter(([id]) => id !== questionId)),
                  })} disabled={currentAnswer === undefined}>
                    <RotateCcw size={16} /><span>Clear response</span>
                  </button>
                </div>
                <div className="clat-test-controls">
                  <button type="button" className="clat-button clat-button-light" disabled={activePractice.currentIndex === 0} onClick={() => updateActivePractice({ currentIndex: activePractice.currentIndex - 1 })}>
                    <ChevronLeft size={17} /> Previous
                  </button>
                  <button type="button" className="clat-button clat-button-light" onClick={() => updateActivePractice({
                    review: { ...activePractice.review, [questionId]: !activePractice.review[questionId] },
                    currentIndex: Math.min(activePractice.currentIndex + 1, activePractice.questionIds.length - 1),
                  })}>
                    <Flag size={16} /> Mark for review
                  </button>
                  {activePractice.currentIndex < activePractice.questionIds.length - 1 ? (
                    <button type="button" className="clat-button clat-button-primary" onClick={() => updateActivePractice({ currentIndex: activePractice.currentIndex + 1 })}>
                      Save &amp; next <ChevronRight size={17} />
                    </button>
                  ) : (
                    <button type="button" className="clat-button clat-button-primary" onClick={() => finishAttempt(activePractice)}>
                      Submit practice <Check size={17} />
                    </button>
                  )}
                </div>
              </article>
            </section>
            <aside className="clat-test-sidebar">
              <article className="clat-palette-panel">
                <h2>Question palette</h2>
                <p>Choose a question to revisit it.</p>
                <div className="clat-question-palette">
                  {activePractice.questionIds.map((id, index) => {
                    const answered = activePractice.answers[id] !== undefined;
                    const marked = Boolean(activePractice.review[id]);
                    return (
                      <button
                        key={id}
                        type="button"
                        aria-label={`Question ${index + 1}${answered ? ", answered" : ", unanswered"}${marked ? ", marked for review" : ""}`}
                        className={`${index === activePractice.currentIndex ? "is-current" : ""} ${answered ? "is-answered" : ""} ${marked ? "is-marked" : ""}`}
                        onClick={() => updateActivePractice({ currentIndex: index })}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                <div className="clat-palette-legend">
                  <span><i className="answered" /> Answered</span>
                  <span><i className="unanswered" /> Unanswered</span>
                  <span><i className="marked" /> Review</span>
                </div>
                <div className="clat-session-summary">
                  <span>Answered <strong>{Object.keys(activePractice.answers).length}/{activePractice.questionIds.length}</strong></span>
                  <span>Correct so far <strong>{correctAnswers}</strong></span>
                </div>
                <button type="button" className="clat-submit-link" onClick={() => finishAttempt(activePractice)}>
                  Submit and view results <ArrowRight size={16} />
                </button>
              </article>
              <div className="clat-practice-note"><Clock3 size={16} /> Your five-minute timer runs while this practice is open.</div>
            </aside>
          </div>
        </div>
      </main>
    );
  }

  if (completedAttempt) {
    return (
      <main className="clat-centre">
        <section className="clat-result-shell">
          <div className="clat-result-hero">
            <span className="clat-result-icon"><Trophy size={27} /></span>
            <p className="clat-eyebrow">Practice complete</p>
            <h1>{completedAttempt.title}</h1>
            <p>Your answers and explanations are below. Progress is saved on this device.</p>
            <div className="clat-result-stats">
              <div><span>Score</span><strong>{completedAttempt.correctCount}/{completedAttempt.totalQuestions}</strong></div>
              <div><span>Correct</span><strong>{completedAttempt.correctCount}</strong></div>
              <div><span>Incorrect</span><strong>{completedAttempt.incorrectCount}</strong></div>
              <div><span>Unattempted</span><strong>{completedAttempt.unansweredCount}</strong></div>
              <div><span>Accuracy</span><strong>{completedAttempt.accuracy}%</strong></div>
              <div><span>Time taken</span><strong>{formatTime(completedAttempt.timeTaken)}</strong></div>
            </div>
          </div>
          <div className="clat-result-content">
            <div className="clat-result-actions">
              <button type="button" className="clat-button clat-button-primary" onClick={() => {
                setCompletedAttempt(null);
                setActiveTab("topics");
              }}>Continue practising <ArrowRight size={17} /></button>
              <button type="button" className="clat-button clat-button-light" onClick={() => setCompletedAttempt(null)}>Back to centre</button>
            </div>
            <h2>Answer review</h2>
            <div className="clat-review-list">
              {completedAttempt.results.map((result, index) => {
                const question = allQuestionsById[result.questionId];
                const passage = getPassage(reasoningPassages, question.passageId);
                return (
                  <article className="clat-review-card" key={result.questionId}>
                    <div className="clat-review-title">
                      {result.correct ? <CheckCircle2 size={19} /> : <XCircle size={19} />}
                      <div><span>Question {index + 1} · {getTopic(reasoningTopics, question.topicId)?.title}</span><h3>{question.prompt}</h3></div>
                    </div>
                    <p className="clat-review-passage">{passage.title}</p>
                    <div className="clat-review-options">
                      {question.options.map((option, optionIndex) => (
                        <div key={option} className={`${optionIndex === question.answer ? "is-correct" : ""} ${optionIndex === result.selected && optionIndex !== question.answer ? "is-wrong" : ""}`}>
                          <span>{String.fromCharCode(65 + optionIndex)}</span>{option}
                          {optionIndex === question.answer && <Check size={15} />}
                          {optionIndex === result.selected && optionIndex !== question.answer && <X size={15} />}
                        </div>
                      ))}
                    </div>
                    <div className="clat-explanation"><strong>Why:</strong> {question.explanation}</div>
                    {question.optionExplanations.map((reason, optionIndex) => optionIndex !== question.answer && (
                      <p className="clat-option-explanation" key={reason}><strong>{String.fromCharCode(65 + optionIndex)}:</strong> {reason}</p>
                    ))}
                    <button type="button" className="clat-icon-button" onClick={() => toggleBookmark(question.id)}>
                      <Bookmark size={16} fill={bookmarks.includes(question.id) ? "currentColor" : "none"} />
                      {bookmarks.includes(question.id) ? "Saved for revision" : "Save for revision"}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }

  const renderTopicGrid = (topics) => (
    <div className="clat-topic-grid">
      {topics.map((topic) => {
        const questionCount = reasoningQuestions.filter((question) => question.topicId === topic.id).length;
        return (
          <TopicCard
            key={topic.id}
            topic={topic}
            questionCount={questionCount}
            progress={topicProgress[topic.id] || 0}
            onStart={() => startTopic(topic)}
          />
        );
      })}
    </div>
  );

  const renderOverview = () => (
    <>
      <section className="clat-hero">
        <div className="clat-hero-copy">
          <span className="clat-hero-kicker"><span /> WORLD WISE ACADEMY · CLAT UG</span>
          <h1>{isLegalTrack ? <>Master Legal Reasoning <em>for CLAT</em></> : <>Master Logical Reasoning <em>for CLAT</em></>}</h1>
          <p>{isLegalTrack
            ? "Build confidence in principle-based questions, constitutional concepts and legal applications. Practise original passages, apply the rule to the facts, and learn from clear explanations."
            : "Sharpen your analytical thinking, develop critical reasoning skills, and improve your ability to evaluate arguments. Practise CLAT-oriented passages and questions designed to help you build accuracy, speed, and confidence for the examination."}</p>
          <div className="clat-hero-actions">
            <button type="button" className="clat-button clat-button-yellow" onClick={() => {
              setActiveTab("topics");
              document.getElementById("clat-centre-content")?.scrollIntoView({ behavior: "smooth" });
            }}><Play size={16} fill="currentColor" /> Start practising</button>
            <button type="button" className="clat-button clat-button-outline" onClick={() => {
              setActiveTab("mock-tests");
              document.getElementById("clat-centre-content")?.scrollIntoView({ behavior: "smooth" });
            }}>Explore mock tests <ArrowRight size={16} /></button>
          </div>
          <div className="clat-hero-stats">
            <div><strong>{reasoningTopics.length}</strong><span>Practice topics</span></div>
            <div><strong>{reasoningQuestions.length}</strong><span>Original questions</span></div>
            <div><strong>{attempts.length}</strong><span>Tests completed</span></div>
          </div>
        </div>
        <div className="clat-hero-art" aria-label="Illustration of a passage and practice question">
          <div className="clat-art-orbit clat-art-orbit-one" />
          <div className="clat-art-orbit clat-art-orbit-two" />
          <div className="clat-art-card clat-art-passage">
            <span><BookOpen size={16} /> PASSAGE</span>
            <i /><i /><i /><i className="short" />
            <div className="clat-art-highlight" />
          </div>
          <div className="clat-art-card clat-art-question">
            <span><Target size={16} /> REASON IT OUT</span>
            <strong>Which conclusion follows?</strong>
            <i /><i className="short" />
            <div className="clat-art-answer"><CheckCircle2 size={15} /> Supported by the passage</div>
          </div>
          <div className="clat-art-badge"><Lightbulb size={19} /><span>Think<br />critically</span></div>
          <div className="clat-art-dot clat-art-dot-one" />
          <div className="clat-art-dot clat-art-dot-two" />
        </div>
      </section>

      <section className="clat-dashboard-section">
        <div className="clat-section-heading">
          <div><p className="clat-eyebrow">Your practice dashboard</p><h2>Build progress, one passage at a time</h2></div>
          <span className="clat-demo-label"><span /> On-device demo progress</span>
        </div>
        <div className="clat-dashboard-grid">
          <article className="clat-dashboard-card"><span className="clat-dashboard-icon red"><Target size={19} /></span><span className="clat-dashboard-label">Questions attempted</span><strong>{totalAttempted}</strong><small>Across all practice sessions</small></article>
          <article className="clat-dashboard-card"><span className="clat-dashboard-icon yellow"><BarChart3 size={19} /></span><span className="clat-dashboard-label">Overall accuracy</span><strong>{overallAccuracy}%</strong><small>{totalAttempted ? `${totalCorrect} correct answers` : "Complete a practice to begin"}</small></article>
          <article className="clat-dashboard-card"><span className="clat-dashboard-icon brown"><CheckCircle2 size={19} /></span><span className="clat-dashboard-label">Tests completed</span><strong>{attempts.length}</strong><small>{attempts.length ? "Your local practice history" : "No attempts recorded yet"}</small></article>
          <article className="clat-dashboard-card clat-progress-card"><span className="clat-dashboard-icon green"><TrendingUp size={19} /></span><span className="clat-dashboard-label">Learning progress</span><strong>{reasoningTopics.length ? Math.round(topicAccuracy.filter((topic) => topic.attempted).length / reasoningTopics.length * 100) : 0}%</strong><small>Topics practised at least once</small><div className="clat-progress-track"><span style={{ width: `${Math.round(topicAccuracy.filter((topic) => topic.attempted).length / reasoningTopics.length * 100)}%` }} /></div></article>
        </div>
      </section>

      <section className="clat-challenge">
        <div className="clat-challenge-copy">
          <span className="clat-challenge-tag"><Lightbulb size={15} /> DAILY {isLegalTrack ? "LEGAL" : "REASONING"} CHALLENGE</span>
          <h2>{isLegalTrack ? "Read the principle. Apply the facts." : "One passage. Five questions. Your next breakthrough."}</h2>
          <p>{isLegalTrack
            ? "Practise a short fictional legal principle and see how consistently you can apply it to a new situation."
            : "Challenge your analytical skills with a fresh CLAT-style passage and test your reasoning ability every day."}</p>
          <button type="button" className="clat-button clat-button-yellow" onClick={() => startPractice(challengeQuestionIds, isLegalTrack ? "Daily Legal Reasoning Challenge" : "Daily Reasoning Challenge", "Daily challenge")}>Attempt today&apos;s challenge <ArrowRight size={16} /></button>
        </div>
        <div className="clat-challenge-details">
          <div><BookOpen size={18} /><span><strong>1 passage</strong><small>Original practice content</small></span></div>
          <div><ListChecks size={18} /><span><strong>{challengeQuestionIds.length} MCQs</strong><small>Four options each</small></span></div>
          <div><Clock3 size={18} /><span><strong>5 minutes</strong><small>Timed challenge</small></span></div>
          <span className="clat-difficulty clat-difficulty-intermediate">Intermediate</span>
        </div>
      </section>

      <section className="clat-home-grid">
        <div className="clat-home-main">
          <SectionHeading eyebrow="Keep learning" title="Continue practising" description="Pick up with a focused topic or return to your recent work." />
          <article className="clat-continue-card">
            <div className="clat-continue-icon"><BookOpen size={22} /></div>
            <div><span className="clat-continue-label">RECOMMENDED NEXT</span><h3>{reasoningTopics.find((topic) => !topicProgress[topic.id])?.title || "Review a recent topic"}</h3><p>Build your skills with an original passage and guided answer explanations.</p></div>
            <button type="button" className="clat-button clat-button-primary" onClick={() => {
              const nextTopic = reasoningTopics.find((topic) => !topicProgress[topic.id]) || reasoningTopics[0];
              startTopic(nextTopic);
            }}>Continue <ArrowRight size={16} /></button>
          </article>
          <SectionHeading eyebrow="Passage-led learning" title="Choose a passage" description="Read a complete passage, then answer its associated reasoning questions." />
          <div className="clat-passage-grid clat-passage-grid-compact">
            {reasoningPassages.slice(0, 3).map((passage) => (
              <article className="clat-passage-card" key={passage.id}>
                <span className="clat-passage-category">{passage.category}</span>
                <h3>{passage.title}</h3>
                <p>{passage.description}</p>
                <div className="clat-passage-meta"><span><Clock3 size={14} /> {passage.readingMinutes} min read</span><span>{passage.questionIds.length} questions</span></div>
                <button type="button" className="clat-text-action" onClick={() => startPassage(passage)}>Read &amp; practise <ArrowRight size={16} /></button>
              </article>
            ))}
          </div>
        </div>
        <aside className="clat-home-sidebar">
          <article className="clat-sidebar-card">
            <div className="clat-sidebar-card-heading"><span><Clock3 size={17} /></span><h3>Recent practice</h3></div>
            {attempts.length ? (
              <div className="clat-recent-list">
                {attempts.slice(0, 3).map((attempt) => (
                  <div className="clat-recent-item" key={attempt.id}><span className="clat-recent-dot" /><div><strong>{attempt.title}</strong><small>{new Date(attempt.completedAt).toLocaleDateString()} · {attempt.accuracy}% accuracy</small></div></div>
                ))}
              </div>
            ) : <p className="clat-sidebar-empty">Your completed practices will appear here.</p>}
            <button type="button" className="clat-sidebar-link" onClick={() => setActiveTab("analytics")}>View analytics <ArrowRight size={15} /></button>
          </article>
          <article className="clat-sidebar-card clat-quick-links">
            <div className="clat-sidebar-card-heading"><span><ExternalLink size={17} /></span><h3>Useful links</h3></div>
            {isLegalTrack
              ? <Link to="/resources/clat-logical-reasoning">Logical reasoning <ArrowRight size={15} /></Link>
              : <Link to="/mock#clat-mock">CLAT mock tests <ArrowRight size={15} /></Link>}
            <Link to="/resources/clat">CLAT resources <ArrowRight size={15} /></Link>
            <Link to="/courses">Explore courses <ArrowRight size={15} /></Link>
            <Link to="/contact">Talk to our team <ArrowRight size={15} /></Link>
          </article>
        </aside>
      </section>
    </>
  );

  const renderTopics = () => (
    <section className="clat-content-section">
      <SectionHeading eyebrow="Practise by skill" title="Topic-wise practice" description="Choose a reasoning skill to practise focused original questions and review explanations after submitting." />
      <div className="clat-filter-tabs" role="tablist" aria-label="Filter practice topics">
        {categories.map((item) => <button type="button" role="tab" aria-selected={category === item} className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="clat-category-blocks">
        {(category === "All topics" ? categories.slice(1) : [category]).map((group) => (
          <section className="clat-topic-category" key={group}>
            <div className="clat-category-title"><h3>{group}</h3><span>{visibleTopics.filter((topic) => topic.category === group).length} topics</span></div>
            {renderTopicGrid(visibleTopics.filter((topic) => topic.category === group))}
          </section>
        ))}
      </div>
    </section>
  );

  const renderPassages = () => (
    <section className="clat-content-section">
      <SectionHeading eyebrow="Read, reason, respond" title="Passage-based practice" description={isLegalTrack ? "Read the stated legal principle carefully, then apply it to new facts without adding unstated rules." : "CLAT logical reasoning is passage-led. Read each original passage and answer the linked MCQs."} />
      <div className="clat-passage-grid">
        {reasoningPassages.map((passage) => (
          <article className="clat-passage-card" key={passage.id}>
            <div className="clat-passage-card-top"><span className="clat-passage-category">{passage.category}</span><span className={`clat-difficulty clat-difficulty-${passage.difficulty.toLowerCase()}`}>{passage.difficulty}</span></div>
            <h3>{passage.title}</h3>
            <p>{passage.description}</p>
            <div className="clat-passage-meta"><span><Clock3 size={14} /> {passage.readingMinutes} min read</span><span><ListChecks size={14} /> {passage.questionIds.length} questions</span></div>
            <details className="clat-passage-preview"><summary>Preview passage</summary><p>{passage.content}</p></details>
            <button type="button" className="clat-button clat-button-primary" onClick={() => startPassage(passage)}>Start reading &amp; practising <ArrowRight size={16} /></button>
          </article>
        ))}
      </div>
    </section>
  );

  const renderMockTests = () => (
    <section className="clat-content-section">
      <SectionHeading eyebrow="Timed assessment" title="Sectional mock tests" description={isLegalTrack ? "Practise original timed legal-reasoning sets with the same question navigation, timer and explanations." : "Use the existing CLAT mock-test system for full-test navigation, timing, marking, and score calculation."} />
      <div className="clat-mock-grid">
        {clatTests.map((test) => (
          <article className="clat-mock-card" key={test.level}>
            <div className="clat-mock-icon"><CheckCircle2 size={23} /></div>
            <span className="clat-passage-category">EXISTING CLAT TEST ENGINE</span>
            <h3>{test.testName}</h3>
            <p>Start the available CLAT mock in the current exam system. Your timed attempt and exam result are handled by that test engine.</p>
            <div className="clat-mock-meta"><span><ListChecks size={15} /> {test.questions.length} questions</span><span><Clock3 size={15} /> {test.timeMinutes} min</span><span>{test.totalMarks} marks</span></div>
            <Link className="clat-button clat-button-primary" to="/mock#clat-mock">View CLAT mock tests <ArrowRight size={16} /></Link>
          </article>
        ))}
        {["Beginner", "Intermediate", "Advanced"].map((level) => {
          const questions = reasoningQuestions.filter((question) => question.difficulty === level);
          return (
            <article className="clat-mock-card clat-mini-test-card" key={level}>
              <div className="clat-mock-icon"><Target size={22} /></div>
              <span className={`clat-difficulty clat-difficulty-${level.toLowerCase()}`}>{level} sectional</span>
              <h3>{level} reasoning set</h3>
              <p>A focused five-minute assessment using original {isLegalTrack ? "principle-based legal" : "CLAT-style reasoning"} questions.</p>
              <div className="clat-mock-meta"><span><ListChecks size={15} /> {questions.length} questions</span><span><Clock3 size={15} /> 5 min</span></div>
              <button type="button" className="clat-button clat-button-light" onClick={() => startPractice(questions.map((question) => question.id), `${level} reasoning set`, "Sectional practice")}>Start sectional <ArrowRight size={16} /></button>
            </article>
          );
        })}
      </div>
    </section>
  );

  const renderPyq = () => (
    <section className="clat-content-section">
      <SectionHeading
        eyebrow="Uploaded CLAT question papers"
        title="CLAT Previous Year Papers"
        description="Select the examination year, programme and booklet set. The uploaded PDFs open below, with the matching answer-key page when it is included."
      />
      <div className="clat-pyq-browser">
        <div className="clat-pyq-toolbar">
          <label>
            Examination year
            <select value={pyqYear} onChange={(event) => setPyqYear(Number(event.target.value))}>
              {clatPyqYears.map((year) => <option value={year} key={year}>{year}</option>)}
            </select>
          </label>
          <label>
            Programme
            <select value={pyqProgram} onChange={(event) => setPyqProgram(event.target.value)}>
              <option value="UG">CLAT UG</option>
              <option value="PG">CLAT PG</option>
            </select>
          </label>
          <label>
            Booklet set
            <select value={pyqSet} onChange={(event) => setPyqSet(event.target.value)}>
              {["A", "B", "C", "D"].map((set) => <option value={set} key={set}>Set {set}</option>)}
            </select>
          </label>
        </div>
        {(() => {
          const paper = clatPyqPapers[pyqYear]?.programs[pyqProgram];
          if (!paper) {
            return (
              <div className="clat-pyq-unavailable" role="status">
                <ShieldAlert size={21} />
                <div>
                  <strong>{pyqProgram} {pyqYear} paper is not uploaded yet.</strong>
                  <p>Available now: {Object.keys(clatPyqPapers[pyqYear]?.programs || {}).join(", ")} for {pyqYear}. Add the missing PDF and I can connect it here.</p>
                </div>
              </div>
            );
          }
          const answerPage = paper.answerKeyPages?.[pyqSet];
          const paperStartPage = paper.paperStartPages?.[pyqSet] ?? paper.paperStartPage;
          const paperUrl = `${paper.url}#page=${paperStartPage}&zoom=page-width`;
          const answerUrl = answerPage
            ? `${paper.url}#page=${answerPage}&zoom=page-width`
            : null;
          return (
            <div className="clat-pyq-document">
              <div className="clat-pyq-document-heading">
                <div>
                  <span className="clat-passage-category">{paper.sourceLabel}</span>
                  <h3>CLAT {pyqYear} {pyqProgram} · Set {pyqSet}</h3>
                  <p>
                    {answerPage
                      ? `The question paper and a Set ${pyqSet} answer-key section are included in this PDF.`
                      : "The uploaded PDF is available, but a set-labelled answer key was not identified in this file."}
                  </p>
                </div>
                <a className="clat-button clat-button-primary" href={paperUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Open full paper
                </a>
              </div>
              <div className="clat-pyq-document-actions">
                {answerUrl ? (
                  <a href={answerUrl} target="_blank" rel="noreferrer">
                    <CheckCircle2 size={16} /> Open Set {pyqSet} answer key <ExternalLink size={14} />
                  </a>
                ) : (
                  <span><ShieldAlert size={16} /> Set-specific answer key not included in this uploaded file.</span>
                )}
                <a href={paper.url} download>
                  <Download size={15} /> Download uploaded PDF
                </a>
              </div>
              <iframe
                className="clat-pyq-frame"
                src={paperUrl}
                title={`CLAT ${pyqYear} ${pyqProgram} question paper`}
                loading="lazy"
              />
              <p className="clat-pyq-source-note">
                Set A–D links open the corresponding answer-key section where that section exists in the uploaded PDF. Older files without identified answer-key pages remain available as full papers.
              </p>
            </div>
          );
        })()}
      </div>
      <div className="clat-pyq-alternative"><BookOpen size={19} /><div><strong>Want to practise a specific reasoning topic?</strong><p>Use original guided questions alongside full-paper revision.</p></div><button type="button" className="clat-text-action" onClick={() => setActiveTab("passages")}>Browse passages <ArrowRight size={16} /></button></div>
    </section>
  );

  const renderAnalytics = () => {
    const answeredTopics = topicAccuracy.filter((topic) => topic.attempted);
    const weakestTopics = [...answeredTopics].sort((a, b) => a.accuracy - b.accuracy).slice(0, 3);
    const strongestTopics = [...answeredTopics].sort((a, b) => b.accuracy - a.accuracy).slice(0, 3);
    const scoreProgression = attempts.slice(0, 8).reverse();
    const lastSevenDays = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - index));
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
      const nextDay = dayStart + 24 * 60 * 60 * 1000;
      return {
        label: date.toLocaleDateString(undefined, { weekday: "short" }),
        count: attempts.filter((attempt) => attempt.completedAt >= dayStart && attempt.completedAt < nextDay).length,
      };
    });
    const maxDaily = Math.max(1, ...lastSevenDays.map((day) => day.count));
    return (
      <section className="clat-content-section">
        <SectionHeading eyebrow="Your results, not estimates" title="Performance analytics" description="These charts are calculated from completed practice sessions saved in this browser. No demo attempt data is prefilled." />
        {!attempts.length ? (
          <EmptyState icon={BarChart3} title="Your analytics will appear after your first practice" description="Complete a topic, passage, or sectional set to see your accuracy, activity, and areas to revisit." action={<button type="button" className="clat-button clat-button-primary" onClick={() => setActiveTab("topics")}>Choose a topic <ArrowRight size={16} /></button>} />
        ) : (
          <>
            <div className="clat-analytics-summary">
              <article><span>Questions attempted</span><strong>{totalAttempted}</strong></article>
              <article><span>Correct answers</span><strong>{totalCorrect}</strong></article>
              <article><span>Incorrect answers</span><strong>{totalIncorrect}</strong></article>
              <article><span>Overall accuracy</span><strong>{overallAccuracy}%</strong></article>
            </div>
            <div className="clat-analytics-grid">
              <article className="clat-analytics-card">
                <h3>Accuracy by topic</h3>
                <p>Based on submitted answers in this browser.</p>
                <div className="clat-bar-list">{answeredTopics.map((topic) => <div className="clat-bar-row" key={topic.id}><span>{topic.title}</span><div className="clat-bar-track"><i style={{ width: `${topic.accuracy}%` }} /></div><strong>{topic.accuracy}%</strong></div>)}</div>
              </article>
              <article className="clat-analytics-card">
                <h3>Correct and incorrect answers</h3>
                <p>Answer distribution across all completed practice sessions.</p>
                <div className="clat-answer-distribution" role="img" aria-label={`${totalCorrect} correct, ${totalIncorrect} incorrect, and ${totalUnattempted} unattempted answers`}>
                  <span className="correct" style={{ width: `${questionHistory.length ? (totalCorrect / questionHistory.length) * 100 : 0}%` }} />
                  <span className="incorrect" style={{ width: `${questionHistory.length ? (totalIncorrect / questionHistory.length) * 100 : 0}%` }} />
                  <span className="unattempted" style={{ width: `${questionHistory.length ? (totalUnattempted / questionHistory.length) * 100 : 0}%` }} />
                </div>
                <div className="clat-answer-legend">
                  <span><i className="correct" /> Correct <strong>{totalCorrect}</strong></span>
                  <span><i className="incorrect" /> Incorrect <strong>{totalIncorrect}</strong></span>
                  <span><i className="unattempted" /> Unattempted <strong>{totalUnattempted}</strong></span>
                </div>
              </article>
              <article className="clat-analytics-card">
                <h3>Practice activity</h3>
                <p>Completed sessions in the past seven days.</p>
                <div className="clat-week-chart">{lastSevenDays.map((day) => <div key={day.label}><span>{day.count || ""}</span><i style={{ height: `${Math.max(8, day.count / maxDaily * 100)}%` }} /><small>{day.label}</small></div>)}</div>
                <div className="clat-attempt-count"><span>Completed practices</span><strong>{attempts.length}</strong></div>
              </article>
              <article className="clat-analytics-card">
                <h3>Score progression</h3>
                <p>Accuracy for your latest eight completed practices.</p>
                <div className="clat-score-progression">
                  {scoreProgression.map((attempt, index) => (
                    <div className="clat-score-row" key={attempt.id}>
                      <span title={attempt.title}>Attempt {index + 1}</span>
                      <div className="clat-bar-track"><i style={{ width: `${attempt.accuracy}%` }} /></div>
                      <strong>{attempt.accuracy}%</strong>
                    </div>
                  ))}
                </div>
              </article>
            </div>
            <div className="clat-strength-grid">
              <article className="clat-strength-card"><h3><CheckCircle2 size={18} /> Strongest topics</h3>{strongestTopics.length ? strongestTopics.map((topic) => <div key={topic.id}><span>{topic.title}</span><strong>{topic.accuracy}%</strong></div>) : <p>No topic results yet.</p>}</article>
              <article className="clat-strength-card weak"><h3><Target size={18} /> Topics to revisit</h3>{weakestTopics.length ? weakestTopics.map((topic) => <div key={topic.id}><span>{topic.title}</span><strong>{topic.accuracy}%</strong></div>) : <p>Complete a practice to identify topics to revisit.</p>}</article>
            </div>
            <div className="clat-retry-card"><div><h3>Retry incorrect questions</h3><p>{incorrectQuestionIds.length ? `${incorrectQuestionIds.length} unique question${incorrectQuestionIds.length === 1 ? "" : "s"} to review from your completed attempts.` : "No incorrect answers to retry yet."}</p></div><button type="button" className="clat-button clat-button-primary" disabled={!incorrectQuestionIds.length} onClick={() => startPractice(incorrectQuestionIds, "Retry incorrect questions", "Revision practice")}><RotateCcw size={16} /> Practise incorrect answers</button></div>
          </>
        )}
      </section>
    );
  };

  const renderBookmarks = () => {
    const savedQuestions = bookmarks.map((id) => allQuestionsById[id]).filter(Boolean);
    return (
      <section className="clat-content-section">
        <SectionHeading eyebrow="Revision list" title="Saved questions" description="Bookmark questions while practising, then return to them for a focused revision session." />
        {savedQuestions.length ? (
          <>
            <div className="clat-bookmark-list">{savedQuestions.map((question) => <article key={question.id}><span className="clat-bookmark-topic">{getTopic(reasoningTopics, question.topicId)?.title}</span><h3>{question.prompt}</h3><p>{getPassage(reasoningPassages, question.passageId)?.title}</p><button type="button" className="clat-icon-button" onClick={() => toggleBookmark(question.id)}><X size={16} /> Remove</button></article>)}</div>
            <button type="button" className="clat-button clat-button-primary" onClick={() => startPractice(savedQuestions.map((question) => question.id), "Bookmarked questions", "Revision practice")}><Play size={16} /> Practise saved questions</button>
          </>
        ) : <EmptyState icon={Bookmark} title="Nothing saved yet" description="Use the bookmark control beside any question to add it to your revision list." action={<button type="button" className="clat-button clat-button-primary" onClick={() => setActiveTab("topics")}>Explore practice topics <ArrowRight size={16} /></button>} />}
      </section>
    );
  };

  const contentByTab = {
    overview: renderOverview,
    topics: renderTopics,
    passages: renderPassages,
    "mock-tests": renderMockTests,
    pyq: renderPyq,
    analytics: renderAnalytics,
    bookmarks: renderBookmarks,
  };

  return (
    <main className="clat-centre">
      <div className="clat-centre-wrap">
        <div className="clat-breadcrumb"><Link to="/resources">Resources</Link><ChevronRight size={15} /><span>CLAT {isLegalTrack ? "Legal" : "Logical"} Reasoning</span></div>
        <nav className="clat-centre-nav" aria-label="Reasoning centre sections">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button type="button" key={id} className={activeTab === id ? "active" : ""} onClick={() => {
              setActiveTab(id);
              setCompletedAttempt(null);
            }}><Icon size={16} /><span>{label}</span>{id === "bookmarks" && bookmarks.length > 0 && <b>{bookmarks.length}</b>}</button>
          ))}
        </nav>
        {storageError && <p className="clat-storage-alert" role="status">{storageError}</p>}
        <div id="clat-centre-content" className="clat-centre-content">
          {contentByTab[activeTab]()}
        </div>
        <footer className="clat-centre-footer">
          <p><ShieldAlert size={15} /> Practice history and bookmarks are stored only in this browser. They are demo progress, not account-synced student records.</p>
          <Link to="/resources/clat">Explore all CLAT resources <ArrowRight size={15} /></Link>
        </footer>
      </div>
    </main>
  );
};

export default ClatReasoningCentre;
