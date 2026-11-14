import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileBarChart,
  Globe,
  Globe2,
  Handshake,
  Landmark,
  Leaf,
  Microscope,
  Network,
  Orbit,
  Palette,
  RotateCcw,
  Scale,
  ScrollText,
  Search,
  Shield,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import {
  currentNewsSuggestions,
  gkQuizQuestions,
  gkTopics,
} from "../data/clatCurrentAffairs";
import "../styles/ClatGkCurrentAffairsCentre.css";

const ICONS = {
  Landmark,
  Building2,
  Scale,
  ChartNoAxesCombined: BarChart3,
  FileBarChart,
  Shield,
  Microscope,
  Orbit,
  Leaf,
  Globe2,
  Handshake,
  Network,
  Globe,
  ScrollText,
  Palette,
  Award,
  Trophy,
  CalendarDays,
};

const GROUPS = ["All topics", ...new Set(gkTopics.map((topic) => topic.category))];
const STORAGE_KEY = "world-wise-clat-gk-progress-v1";

const loadProgress = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return 0;
    const count = Number(saved);
    return Number.isInteger(count) && count >= 0 ? count : 0;
  } catch (error) {
    console.error("Unable to load GK practice progress.", error);
    return 0;
  }
};

const NewsCard = ({ item, onQuiz }) => (
  <article className="gk-news-card">
    <div className="gk-news-card-top">
      <span className="gk-news-category">{item.category}</span>
      <span className="gk-news-date">{item.date}</span>
    </div>
    <h3>{item.headline}</h3>
    <p className="gk-news-summary">{item.summary}</p>
    <div className="gk-news-why">
      <span><Sparkles size={15} /> Why revise it</span>
      <p>{item.whyItMatters}</p>
    </div>
    <div className="gk-news-question">
      <strong>Possible question angle</strong>
      <p>{item.questionAngle}</p>
    </div>
    <div className="gk-news-actions">
      <a href={item.url} target="_blank" rel="noreferrer">
        Read at {item.source} <ArrowRight size={15} />
      </a>
      <button type="button" onClick={() => onQuiz(item.id)}>
        Revise this <BookOpen size={15} />
      </button>
    </div>
  </article>
);

const ClatGkCurrentAffairsCentre = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [category, setCategory] = useState("All topics");
  const [search, setSearch] = useState("");
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [progress, setProgress] = useState(loadProgress);
  const [storageError, setStorageError] = useState("");
  const [showQuizResult, setShowQuizResult] = useState(false);

  const filteredTopics = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
    return gkTopics.filter((topic) => {
      const matchesCategory = category === "All topics" || topic.category === category;
      const matchesSearch =
        !searchTerm ||
        `${topic.title} ${topic.description} ${topic.category}`.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const startQuiz = (newsId) => {
    const selectedQuestions = newsId
      ? gkQuizQuestions.filter((question) => question.sourceId === newsId)
      : gkQuizQuestions;
    setActiveQuiz({
      questions: selectedQuestions,
      index: 0,
      answers: {},
      newsId: newsId || null,
    });
    setShowQuizResult(false);
    setActiveTab("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const setAnswer = (answer) => {
    setActiveQuiz((current) => ({
      ...current,
      answers: {
        ...current.answers,
        [current.questions[current.index].id]: answer,
      },
    }));
  };

  const endQuiz = () => {
    const correct = activeQuiz.questions.filter(
      (question) => activeQuiz.answers[question.id] === question.answer
    ).length;
    const nextProgress = progress + activeQuiz.questions.length;
    setProgress(nextProgress);
    setShowQuizResult(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(nextProgress));
      setStorageError("");
    } catch (error) {
      console.error("Unable to save GK practice progress.", error);
      setStorageError("This browser could not save your practice count.");
    }
    return correct;
  };

  const correctCount = activeQuiz
    ? activeQuiz.questions.filter(
      (question) => activeQuiz.answers[question.id] === question.answer
    ).length
    : 0;

  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "news", label: "Latest news leads", icon: Sparkles },
    { id: "topics", label: "GK topic map", icon: Globe2 },
    { id: "quiz", label: "Quick revision quiz", icon: CheckCircle2 },
  ];

  const renderQuizResults = () => (
    <section className="gk-quiz-result">
      <span className="gk-result-icon"><Trophy size={25} /></span>
      <p className="gk-kicker">REVISION COMPLETE</p>
      <h2>{correctCount} of {activeQuiz.questions.length} correct</h2>
      <p>Your questions were drawn from the linked official current-affairs summaries.</p>
      <div className="gk-quiz-review">
        {activeQuiz.questions.map((question, index) => {
          const news = currentNewsSuggestions.find((item) => item.id === question.sourceId);
          const answer = activeQuiz.answers[question.id];
          return (
            <article key={question.id}>
              <span className="gk-review-number">0{index + 1}</span>
              <div>
                <h3>{question.prompt}</h3>
                <p className="gk-review-result">
                  {answer === question.answer
                    ? <><Check size={14} /> Correct</>
                    : <><X size={14} /> {answer === undefined ? "Not answered" : "Review this point"}</>}
                </p>
                <p>{question.explanation}</p>
                <a href={news.url} target="_blank" rel="noreferrer">Source: {news.source} · {news.date} <ArrowRight size={13} /></a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="gk-quiz-buttons">
        <button type="button" className="gk-button gk-button-primary" onClick={() => startQuiz()}>Try all questions again <RotateCcw size={16} /></button>
        <button type="button" className="gk-button gk-button-plain" onClick={() => setActiveTab("news")}>Back to news leads</button>
      </div>
    </section>
  );

  const renderQuiz = () => {
    if (!activeQuiz) {
      return (
        <section className="gk-section">
          <div className="gk-section-heading">
            <div><p className="gk-kicker">RECALL, DON'T JUST REREAD</p><h2>Quick current-affairs quiz</h2><p>Try original questions based on the verified news notes on this page.</p></div>
            <span className="gk-section-mark"><CheckCircle2 size={20} /></span>
          </div>
          <div className="gk-quiz-intro">
            <div><strong>{gkQuizQuestions.length} questions</strong><span>From the latest news leads</span></div>
            <div><strong>Self-paced</strong><span>See explanations and source links</span></div>
            <button type="button" className="gk-button gk-button-primary" onClick={() => startQuiz()}>Start revision <ArrowRight size={16} /></button>
          </div>
        </section>
      );
    }

    if (showQuizResult) return renderQuizResults();

    const question = activeQuiz.questions[activeQuiz.index];
    const selected = activeQuiz.answers[question.id];
    const news = currentNewsSuggestions.find((item) => item.id === question.sourceId);
    return (
      <section className="gk-section">
        <div className="gk-section-heading">
          <div><p className="gk-kicker">CURRENT-AFFAIRS REVISION</p><h2>{activeQuiz.newsId ? news.headline : "Check what you recall"}</h2><p>Answer from the source note and its background context.</p></div>
          <span className="gk-question-count">{activeQuiz.index + 1} / {activeQuiz.questions.length}</span>
        </div>
        <div className="gk-quiz-card">
          <div className="gk-quiz-topic"><span>{gkTopics.find((topic) => topic.id === question.topicId)?.title}</span><span>{news.date}</span></div>
          <h3>{question.prompt}</h3>
          <div className="gk-options">
            {question.options.map((option, index) => (
              <button type="button" key={option} className={selected === index ? "selected" : ""} aria-pressed={selected === index} onClick={() => setAnswer(index)}>
                <span>{String.fromCharCode(65 + index)}</span>{option}
              </button>
            ))}
          </div>
          <a className="gk-source-link" href={news.url} target="_blank" rel="noreferrer">Read the official source at {news.source} <ArrowRight size={14} /></a>
          <div className="gk-quiz-controls">
            <button type="button" className="gk-button gk-button-plain" disabled={activeQuiz.index === 0} onClick={() => setActiveQuiz({ ...activeQuiz, index: activeQuiz.index - 1 })}>Previous</button>
            {activeQuiz.index < activeQuiz.questions.length - 1
              ? <button type="button" className="gk-button gk-button-primary" onClick={() => setActiveQuiz({ ...activeQuiz, index: activeQuiz.index + 1 })}>Next question <ArrowRight size={16} /></button>
              : <button type="button" className="gk-button gk-button-primary" onClick={endQuiz}>Finish quiz <Check size={16} /></button>}
          </div>
        </div>
      </section>
    );
  };

  const renderNews = () => (
    <section className="gk-section">
      <div className="gk-section-heading">
        <div><p className="gk-kicker">EDITOR'S DESK · UPDATED 4 NOVEMBER 2026</p><h2>Current-affairs leads worth revising</h2><p>These are recent verified developments and useful background themes—not predictions or claims about what will appear in the next paper. Check the linked source for updates.</p></div>
        <span className="gk-section-mark"><Sparkles size={20} /></span>
      </div>
      <div className="gk-news-grid">
        {currentNewsSuggestions.map((item) => <NewsCard key={item.id} item={item} onQuiz={(id) => startQuiz(id)} />)}
      </div>
    </section>
  );

  const renderTopics = () => (
    <section className="gk-section">
      <div className="gk-section-heading">
        <div><p className="gk-kicker">A WIDER GK CHECKLIST</p><h2>Cover the full range of CLAT GK</h2><p>Use current affairs as an entry point, then revise the static facts and context that help explain each story.</p></div>
        <span className="gk-section-mark"><Globe2 size={20} /></span>
      </div>
      <div className="gk-topic-controls">
        <div className="gk-topic-filters">
          {GROUPS.map((item) => <button type="button" className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="gk-topic-search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find a topic" aria-label="Find a GK topic" /></label>
      </div>
      <div className="gk-topic-grid">
        {filteredTopics.map((topic) => {
          const Icon = ICONS[topic.icon] || BookOpen;
          return <article className="gk-topic-card" key={topic.id}><span className="gk-topic-icon"><Icon size={20} /></span><span className="gk-topic-group">{topic.category}</span><h3>{topic.title}</h3><p>{topic.description}</p></article>;
        })}
        {!filteredTopics.length && <p className="gk-no-results">No topic matches this search. Try another keyword.</p>}
      </div>
      <aside className="gk-study-note"><BookOpen size={19} /><div><strong>Make each news story exam-ready</strong><p>For every item, note: what happened, where and when, the institution involved, key terms, relevant background, and why the development matters. Recheck fast-changing facts before the exam.</p></div></aside>
    </section>
  );

  const renderOverview = () => (
    <>
      <section className="gk-hero">
        <div className="gk-hero-content">
          <span className="gk-hero-kicker"><span /> WORLD WISE ACADEMY · CLAT UG</span>
          <h1>Know the news.<br /><em>Understand the context.</em></h1>
          <p>Build a stronger CLAT current-affairs routine with important news, background concepts, broad GK coverage and quick recall practice.</p>
          <div className="gk-hero-actions">
            <button type="button" className="gk-button gk-button-yellow" onClick={() => setActiveTab("news")}>Explore latest news <ArrowRight size={16} /></button>
            <button type="button" className="gk-button gk-button-outline" onClick={() => startQuiz()}>Take a quick quiz <CheckCircle2 size={16} /></button>
          </div>
          <div className="gk-hero-metrics">
            <div><strong>{gkTopics.length}</strong><span>GK topic areas</span></div>
            <div><strong>{currentNewsSuggestions.length}</strong><span>Recent source-checked leads</span></div>
            <div><strong>{progress}</strong><span>Questions practised on this device</span></div>
          </div>
        </div>
        <div className="gk-hero-visual" aria-hidden="true">
          <div className="gk-globe"><Globe2 size={130} strokeWidth={0.9} /></div>
          <div className="gk-orbit gk-orbit-one" />
          <div className="gk-orbit gk-orbit-two" />
          <div className="gk-news-float"><span><Sparkles size={16} /> THE BIG PICTURE</span><i /><i /><i className="short" /><b>Context matters</b></div>
          <div className="gk-current-float"><span>JUST ADDED</span><strong>Space &amp; science</strong><small>5 current-affairs leads</small></div>
          <div className="gk-hero-star"><Sparkles size={17} /></div>
        </div>
      </section>

      <section className="gk-overview-grid">
        <div className="gk-overview-main">
          <div className="gk-section-heading">
            <div><p className="gk-kicker">START WITH WHAT'S NEW</p><h2>Latest verified news leads</h2><p>Use recent developments to revise the science and wider GK concepts connected to them.</p></div>
            <button type="button" className="gk-heading-link" onClick={() => setActiveTab("news")}>All news leads <ArrowRight size={15} /></button>
          </div>
          <div className="gk-featured-news">
            {currentNewsSuggestions.slice(0, 3).map((item, index) => (
              <article key={item.id}>
                <span className="gk-featured-number">0{index + 1}</span>
                <div><span className="gk-news-category">{item.category} · {item.date}</span><h3>{item.headline}</h3><p>{item.whyItMatters}</p><button type="button" onClick={() => startQuiz(item.id)}>Revise with a question <ArrowRight size={14} /></button></div>
              </article>
            ))}
          </div>
          <div className="gk-section-heading gk-topic-preview-heading">
            <div><p className="gk-kicker">BEYOND THE HEADLINES</p><h2>Don't leave static GK behind</h2><p>CLAT questions reward understanding context, institutions and connected concepts.</p></div>
            <button type="button" className="gk-heading-link" onClick={() => setActiveTab("topics")}>Explore all areas <ArrowRight size={15} /></button>
          </div>
          <div className="gk-quick-topic-grid">
            {gkTopics.filter((topic) => ["India", "World", "Science and Environment"].includes(topic.category)).slice(0, 6).map((topic) => {
              const Icon = ICONS[topic.icon] || BookOpen;
              return <article key={topic.id}><span><Icon size={17} /></span><div><strong>{topic.title}</strong><small>{topic.category}</small></div></article>;
            })}
          </div>
        </div>
        <aside className="gk-overview-sidebar">
          <article className="gk-sidebar-card gk-routine-card">
            <span className="gk-sidebar-icon"><Clock3 size={18} /></span>
            <p className="gk-kicker">A SIMPLE DAILY ROUTINE</p>
            <h3>Read. Connect. Recall.</h3>
            <ol>
              <li><b>01</b><span>Read one reliable news report.</span></li>
              <li><b>02</b><span>Write the event and its background.</span></li>
              <li><b>03</b><span>Close your notes and recall key facts.</span></li>
              <li><b>04</b><span>Revisit the topic later in the week.</span></li>
            </ol>
          </article>
          <article className="gk-sidebar-card gk-stat-card">
            <span className="gk-sidebar-icon"><BarChart3 size={18} /></span>
            <p className="gk-kicker">YOUR LOCAL REVISION</p>
            <strong>{progress}</strong>
            <span>questions practised in this browser</span>
            <small>Demo progress only · not linked to an account</small>
          </article>
          <article className="gk-sidebar-card gk-clat-link-card">
            <span className="gk-sidebar-icon"><Landmark size={18} /></span>
            <h3>Keep your CLAT prep connected</h3>
            <Link to="/resources/clat-logical-reasoning">Logical reasoning <ArrowRight size={14} /></Link>
            <Link to="/resources/clat-legal-reasoning">Legal reasoning <ArrowRight size={14} /></Link>
            <Link to="/mock#clat-mock">Mock tests <ArrowRight size={14} /></Link>
          </article>
        </aside>
      </section>
      <section className="gk-latest-strip">
        <div><span><CalendarDays size={18} /></span><p><strong>News checked 4 November 2026</strong><small>Stories and dates are linked to official ISRO source material. Recheck current facts before the examination.</small></p></div>
        <button type="button" className="gk-button gk-button-dark" onClick={() => setActiveTab("news")}>See source links <ArrowRight size={15} /></button>
      </section>
    </>
  );

  const renderers = {
    overview: renderOverview,
    news: renderNews,
    topics: renderTopics,
    quiz: renderQuiz,
  };

  return (
    <main className="gk-centre">
      <div className="gk-centre-wrap">
        <div className="gk-breadcrumb"><Link to="/resources">Resources</Link><ChevronRight size={15} /><span>CLAT Current Affairs &amp; GK</span></div>
        <nav className="gk-centre-nav" aria-label="Current affairs and GK sections">
          {tabs.map(({ id, label, icon: Icon }) => <button type="button" key={id} className={activeTab === id ? "active" : ""} onClick={() => {
            setActiveTab(id);
            if (id !== "quiz") {
              setActiveQuiz(null);
              setShowQuizResult(false);
            }
          }}><Icon size={16} />{label}</button>)}
        </nav>
        {storageError && <p className="gk-storage-alert" role="status">{storageError}</p>}
        <div className="gk-content">{renderers[activeTab]()}</div>
        <footer className="gk-footer"><p><BookOpen size={15} /> Current-affairs notes are study suggestions, not forecasts. Always confirm date-sensitive facts with the linked original source.</p><Link to="/resources/clat">All CLAT resources <ArrowRight size={14} /></Link></footer>
      </div>
    </main>
  );
};

export default ClatGkCurrentAffairsCentre;
