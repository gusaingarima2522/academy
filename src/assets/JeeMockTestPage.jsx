import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBankedTests } from "../data/jeeTestBank";
import "../pages/JeeMockTestPage.css";
import laptop from "../assets/laptop.png";

const GUEST_STUDENT = {
  name: "Guest Student",
  email: "",
  phone: "",
};

const DESKTOP_QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

const PALETTE_PAGE_SIZE = 24;

const readStudent = (key) => {
  const saved = window.sessionStorage.getItem(key);
  if (!saved) return GUEST_STUDENT;

  try {
    const student = JSON.parse(saved);
    if (
      typeof student.name !== "string" ||
      typeof student.email !== "string" ||
      typeof student.phone !== "string"
    ) {
      throw new Error("Saved student details have an invalid shape.");
    }

    return student;
  } catch (error) {
    console.error("Unable to restore the saved student details.", error);
    return GUEST_STUDENT;
  }
};

const createInitialSession = () => ({
  started: false,
  submitted: false,
  exitedInBetween: false,
  current: 0,
  answers: {},
  visited: {},
  review: {},
  expiresAt: null,
  submittedAt: null,
});

const readSession = (key, questionCount) => {
  const saved = window.localStorage.getItem(key);
  if (!saved) return null;

  try {
    const session = JSON.parse(saved);
    if (
      session.questionCount !== questionCount ||
      typeof session.started !== "boolean" ||
      typeof session.submitted !== "boolean" ||
      !session.answers ||
      !session.visited ||
      !session.review
    ) {
      throw new Error("Saved test session has an invalid shape.");
    }

    return {
      ...session,
      submittedAt:
        session.submittedAt ?? (session.submitted ? Date.now() : null),
    };
  } catch (error) {
    console.error("Unable to restore the saved test session.", error);
    return null;
  }
};

const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

const formatMark = (mark) =>
  Number.isFinite(mark) ? `${mark > 0 ? "+" : ""}${mark}` : "Not specified";

const getQuestionStatus = (session, index) => {
  const hasAnswer = session.answers[index] !== undefined;
  const isMarked = Boolean(session.review[index]);

  if (hasAnswer && isMarked) return "answered-review";
  if (hasAnswer) return "answered";
  if (isMarked) return "review";
  if (session.visited[index]) return "not-answered";
  return "not-visited";
};

const isCorrectAnswer = (answer, question) => {
  if (question.type === "numerical" || !question.options) {
    const entered = Number(answer);
    const expected = Number(question.answer);
    return Number.isFinite(entered) && Number.isFinite(expected)
      ? entered === expected
      : String(answer).trim() === String(question.answer).trim();
  }

  return Number(answer) === Number(question.answer);
};

const PopupStructure = () => (
  <div className="exam-popup-structure" role="status" aria-label="Loading dialog">
    <span className="exam-popup-skeleton-title exam-skeleton-shimmer" />
    <span className="exam-popup-skeleton-copy exam-skeleton-shimmer" />
    <span className="exam-popup-skeleton-copy exam-skeleton-shimmer" />
    <div className="exam-popup-skeleton-card exam-skeleton-shimmer" />
    <div className="exam-popup-skeleton-card exam-skeleton-shimmer" />
    <div className="exam-popup-skeleton-actions">
      <span className="exam-skeleton-shimmer" />
      <span className="exam-skeleton-shimmer" />
    </div>
  </div>
);

const ExamScreenStructure = () => (
  <main className="exam-screen exam-screen-structure" role="status" aria-label="Loading test">
    <div className="exam-structure-header">
      <span className="exam-skeleton-shimmer" />
      <span className="exam-skeleton-shimmer" />
    </div>
    <div className="exam-structure-layout">
      <aside className="exam-structure-sidebar">
        <span className="exam-skeleton-shimmer" />
        <span className="exam-skeleton-shimmer" />
        <span className="exam-skeleton-shimmer" />
        <span className="exam-skeleton-shimmer" />
      </aside>
      <section className="exam-structure-question">
        <span className="exam-skeleton-shimmer" />
        <span className="exam-skeleton-shimmer" />
        <div className="exam-structure-option exam-skeleton-shimmer" />
        <div className="exam-structure-option exam-skeleton-shimmer" />
        <div className="exam-structure-option exam-skeleton-shimmer" />
        <div className="exam-structure-option exam-skeleton-shimmer" />
        <div className="exam-structure-actions">
          <span className="exam-skeleton-shimmer" />
          <span className="exam-skeleton-shimmer" />
        </div>
      </section>
    </div>
  </main>
);

const JeeMockTestPage = ({
  testOverride = null,
  sessionKeyOverride = null,
  backTo = null,
  examLabel = null,
}) => {
  const { slug, number } = useParams();
  const navigate = useNavigate();
  const level = Number(number);
  const test = testOverride || getBankedTests(slug).find((item) => item.level === level);
  const questionCount = test?.questions.length ?? 0;
  const sessionKey = sessionKeyOverride || `academy-exam:${slug}-${number}`;
  const [session, setSession] = useState(
    () => readSession(sessionKey, questionCount) || createInitialSession()
  );
  const [secondsLeft, setSecondsLeft] = useState(() =>
    session.expiresAt
      ? Math.max(0, Math.ceil((session.expiresAt - Date.now()) / 1000))
      : 0
  );
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [sidebarTab, setSidebarTab] = useState("palette");
  const [palettePage, setPalettePage] = useState(() =>
    Math.floor(session.current / PALETTE_PAGE_SIZE)
  );
  const [submitConfirmOpen, setSubmitConfirmOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calculatorValue, setCalculatorValue] = useState("0");
  const [credentialsOpen, setCredentialsOpen] = useState(false);
  const [fullscreenInfoOpen, setFullscreenInfoOpen] = useState(false);
  const [popupLoading, setPopupLoading] = useState(true);
  const [screenLoading, setScreenLoading] = useState(false);
  const [fullscreenMessage, setFullscreenMessage] = useState("");
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const [credentialsLoading, setCredentialsLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    window.matchMedia(DESKTOP_QUERY).matches
  );
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [student, setStudent] = useState(() => readStudent(sessionKey));
  const [fullscreenWarningOpen, setFullscreenWarningOpen] = useState(false);
  const [fullscreenSecondsLeft, setFullscreenSecondsLeft] = useState(60);
  const currentQuestionIndex = session.current;
  const credentialsVisible = credentialsOpen;
  const fullscreenWasEnteredRef = useRef(false);
  const fullscreenPausedAtRef = useRef(null);
  const paletteGridRef = useRef(null);
  const testStartingRef = useRef(false);

  useEffect(() => {
    const isWindowFullscreen = () =>
      Boolean(document.fullscreenElement) || window.innerHeight >= window.screen.height * 0.97;

    const handleFullscreenChange = () => {
      setIsFullscreenActive(isWindowFullscreen());
    };

    handleFullscreenChange();
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("fullscreenerror", handleFullscreenChange);
    window.addEventListener("resize", handleFullscreenChange);
    const pollId = window.setInterval(handleFullscreenChange, 1000);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("fullscreenerror", handleFullscreenChange);
      window.removeEventListener("resize", handleFullscreenChange);
      window.clearInterval(pollId);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const updateDesktopState = () => setIsDesktop(desktopQuery.matches);

    desktopQuery.addEventListener("change", updateDesktopState);
    return () => desktopQuery.removeEventListener("change", updateDesktopState);
  }, []);

  useEffect(() => {
    const hasOpenPopup =
      !session.started ||
      fullscreenInfoOpen ||
      credentialsVisible ||
      submitConfirmOpen ||
      fullscreenWarningOpen;
    if (!popupLoading || !hasOpenPopup) return undefined;

    const timer = window.setTimeout(() => setPopupLoading(false), 1000);
    return () => window.clearTimeout(timer);
  }, [
    credentialsVisible,
    fullscreenInfoOpen,
    fullscreenWarningOpen,
    isDesktop,
    popupLoading,
    session.started,
    submitConfirmOpen,
  ]);

  useEffect(() => {
    const grid = paletteGridRef.current;
    if (!grid) return;

    const activeButton = grid.querySelector(".exam-question-current");
    if (!activeButton) return;

    const desiredTop =
      activeButton.offsetTop - (grid.clientHeight - activeButton.offsetHeight) / 2;

    grid.scrollTo({ top: Math.max(0, desiredTop), behavior: "smooth" });
  }, [currentQuestionIndex]);

  useEffect(() => {
    setPalettePage(Math.floor(currentQuestionIndex / PALETTE_PAGE_SIZE));
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (!credentialsOpen || !credentialsLoading) return undefined;

    const timer = window.setTimeout(() => setCredentialsLoading(false), 1000);
    return () => window.clearTimeout(timer);
  }, [credentialsLoading, credentialsOpen]);

  useEffect(() => {
    if (!screenLoading) return undefined;

    const timer = window.setTimeout(() => setScreenLoading(false), 500);
    return () => window.clearTimeout(timer);
  }, [screenLoading]);

  useEffect(() => {
    if (!session.submitted) return undefined;

    fullscreenPausedAtRef.current = null;

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => { });
    }

    return undefined;
  }, [session.submitted]);

  useEffect(() => {
    if (session.submitted) return undefined;

    const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
    if (!isDesktop) return undefined;

    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        fullscreenWasEnteredRef.current = true;

        if (fullscreenPausedAtRef.current !== null) {
          const pausedDuration = Date.now() - fullscreenPausedAtRef.current;
          fullscreenPausedAtRef.current = null;

          setSession((currentSession) => {
            if (!currentSession.expiresAt) return currentSession;
            const resumedExpiresAt = currentSession.expiresAt + pausedDuration;
            return { ...currentSession, expiresAt: resumedExpiresAt };
          });
        }

        setFullscreenWarningOpen(false);
        setFullscreenSecondsLeft(60);
        return;
      }

      if (fullscreenWasEnteredRef.current) {
        if (fullscreenPausedAtRef.current === null) {
          fullscreenPausedAtRef.current = Date.now();
        }
        setFullscreenSecondsLeft(60);
        setPopupLoading(true);
        setFullscreenWarningOpen(true);
      }
    };

    const handleF11 = (event) => {
      if (event.key !== "F11") return;
      event.preventDefault();

      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => { });
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("keydown", handleF11);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("keydown", handleF11);
    };
  }, [session.started, session.submitted]);

  useEffect(() => {
    if (!fullscreenWarningOpen) return undefined;

    const countdownId = window.setInterval(() => {
      setFullscreenSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(countdownId);
          setScreenLoading(true);
          setCalculatorOpen(false);
          setCalculatorValue("0");
          setFullscreenWarningOpen(false);
          setSession((sessionNow) =>
            sessionNow.submitted
              ? sessionNow
              : {
                ...sessionNow,
                submitted: true,
                exitedInBetween: false,
                submittedAt: Date.now(),
              }
          );
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(countdownId);
  }, [fullscreenWarningOpen]);

  useEffect(() => {
    if (!session.started) return;
    window.localStorage.setItem(
      sessionKey,
      JSON.stringify({ ...session, questionCount })
    );
    window.sessionStorage.setItem(sessionKey, JSON.stringify(student));
  }, [questionCount, session, sessionKey, student]);

  useEffect(() => {
    if (!session.started || session.submitted || !session.expiresAt) return undefined;

    const updateTime = () => {
      const remaining = Math.max(
        0,
        Math.ceil((session.expiresAt - Date.now()) / 1000)
      );
      setSecondsLeft(remaining);

      if (remaining === 0) {
        setScreenLoading(true);
        setCalculatorOpen(false);
        setCalculatorValue("0");
        setFullscreenWarningOpen(false);
        setSession((currentSession) =>
          currentSession.submitted
            ? currentSession
            : {
              ...currentSession,
              submitted: true,
              submittedAt: Date.now(),
            }
        );
      }
    };

    const intervalId = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(intervalId);
  }, [session.expiresAt, session.started, session.submitted]);

  if (!test) {
    return (
      <section className="exam-message">
        <h1>Test not found</h1>
        <Link to={backTo || `/jeemocktest/${slug}`}>Back to tests</Link>
      </section>
    );
  }

  const currentQuestion = test.questions[session.current] ?? test.questions[0];
  const hasDuration = Number.isFinite(test.timeMinutes) && test.timeMinutes > 0;
  const answeredCount = Object.keys(session.answers).length;
  const reviewCount = Object.values(session.review).filter(Boolean).length;
  const notVisitedCount = test.questions.reduce(
    (count, _, index) => count + (session.visited[index] ? 0 : 1),
    0
  );
  const notAnsweredCount = test.questions.length - answeredCount - notVisitedCount;
  const score = test.questions.reduce((total, question, index) => {
    const answer = session.answers[index];
    if (answer === undefined) return total;

    const correct = isCorrectAnswer(answer, question);
    const mark = correct
      ? test.marking?.correct
      : question.type === "numerical" || !question.options
        ? test.marking?.incorrectNumerical
        : test.marking?.incorrect;

    return total + (Number.isFinite(mark) ? mark : 0);
  }, 0);
  const correctCount = test.questions.reduce((total, question, index) => {
    const answer = session.answers[index];
    return answer !== undefined && isCorrectAnswer(answer, question)
      ? total + 1
      : total;
  }, 0);
  const incorrectCount = answeredCount - correctCount;
  const scorePercentage =
    Number.isFinite(test.totalMarks) && test.totalMarks > 0
      ? Math.max(0, Math.min(100, (score / test.totalMarks) * 100))
      : null;
  const scoreBarColor =
    score > 30
      ? "exam-score-high"
      : score >= 15
        ? "exam-score-medium"
        : "exam-score-low";
  const markingDescription =
    test.marking?.description ??
    (test.marking
      ? `Correct: ${formatMark(test.marking.correct)}; incorrect MCQ: ${formatMark(
        test.marking.incorrect
      )}${test.questions.some((question) => question.type === "numerical")
        ? `; incorrect numerical: ${formatMark(test.marking.incorrectNumerical)}`
        : ""
      }`
      : "Not specified");

  if (screenLoading) {
    return <ExamScreenStructure />;
  }

  const enterFullscreen = async () => {
    setFullscreenMessage("");

    if (document.fullscreenElement) {
      setIsFullscreenActive(true);
      fullscreenWasEnteredRef.current = true;
      return;
    }

    if (!document.documentElement.requestFullscreen) {
      setFullscreenMessage("Fullscreen is not supported by this browser. Press F11 to enter fullscreen, then continue.");
      return;
    }

    try {
      await document.documentElement.requestFullscreen();
      const enteredFullscreen = Boolean(document.fullscreenElement);
      setIsFullscreenActive(enteredFullscreen);
      fullscreenWasEnteredRef.current = enteredFullscreen;
    } catch (error) {
      setIsFullscreenActive(false);
      fullscreenWasEnteredRef.current = false;
      setFullscreenMessage(error?.message || "Unable to enter fullscreen. Please allow it and retry.");
    }
  };

  const exitFullscreen = () => {
    if (!document.fullscreenElement || !document.exitFullscreen) return;

    document.exitFullscreen().catch((error) => {
      console.error("Unable to exit fullscreen.", error);
    });
    fullscreenWasEnteredRef.current = false;
  };

  const beginTest = (studentDetails) => {
    if (testStartingRef.current || session.started) return;
    testStartingRef.current = true;
    setScreenLoading(true);

    const expiresAt = hasDuration
      ? Date.now() + test.timeMinutes * 60 * 1000
      : null;

    setStudent(studentDetails);
    setCredentialsOpen(false);
    setSession({
      ...createInitialSession(),
      started: true,
      current: 0,
      visited: { 0: true },
      expiresAt,
      questionCount: test.questions.length,
    });
    setSecondsLeft(hasDuration ? test.timeMinutes * 60 : 0);

    if (document.fullscreenElement) {
      setIsFullscreenActive(true);
      fullscreenWasEnteredRef.current = true;
    }
  };

  const startTest = (event) => {
    event.preventDefault();
    beginTest({
      name: credentials.name.trim(),
      email: credentials.email.trim(),
      phone: credentials.phone.trim(),
    });
  };

  const clearAttempt = () => {
    testStartingRef.current = false;
    window.localStorage.removeItem(sessionKey);
    window.sessionStorage.removeItem(sessionKey);
    setSession(createInitialSession());
    setSecondsLeft(0);
    setStudent(GUEST_STUDENT);
  };

  const cancelBeforeStart = () => {
    exitFullscreen();
    clearAttempt();
    setCredentials({
      name: "",
      email: "",
      phone: "",
    });
    setCredentialsOpen(false);
    navigate(backTo || `/jeemocktest/${slug}`);
  };

  const returnToTests = () => {
    cancelBeforeStart();
  };

  const goToQuestion = (index) => {
    setSession((currentSession) => ({
      ...currentSession,
      current: index,
      visited: { ...currentSession.visited, [index]: true },
    }));
    setPaletteOpen(false);
  };

  const palettePageCount = Math.ceil(test.questions.length / PALETTE_PAGE_SIZE);
  const palettePageStart = palettePage * PALETTE_PAGE_SIZE;
  const palettePageEnd = Math.min(palettePageStart + PALETTE_PAGE_SIZE, test.questions.length);

  const moveToNextQuestion = (currentSession) => {
    if (currentSession.current >= test.questions.length - 1) {
      return currentSession.current;
    }

    return currentSession.current + 1;
  };

  const saveAndNext = () => {
    if (session.current >= test.questions.length - 1) {
      setPopupLoading(true);
      setSubmitConfirmOpen(true);
      return;
    }

    setSession((currentSession) => {
      const next = moveToNextQuestion(currentSession);
      return {
        ...currentSession,
        current: next,
        review: { ...currentSession.review, [currentSession.current]: false },
        visited: { ...currentSession.visited, [next]: true },
      };
    });
  };

  const saveAndMarkForReview = () => {
    setSession((currentSession) => {
      const next = moveToNextQuestion(currentSession);
      return {
        ...currentSession,
        current: next,
        review: { ...currentSession.review, [currentSession.current]: true },
        visited: { ...currentSession.visited, [next]: true },
      };
    });
  };

  const clearResponse = () => {
    setSession((currentSession) => {
      const answers = { ...currentSession.answers };
      delete answers[currentSession.current];
      return { ...currentSession, answers };
    });
  };

  const markForReviewAndNext = () => {
    setSession((currentSession) => {
      const next = moveToNextQuestion(currentSession);
      return {
        ...currentSession,
        current: next,
        review: { ...currentSession.review, [currentSession.current]: true },
        visited: { ...currentSession.visited, [next]: true },
      };
    });
  };

  const submitTest = () => {
    setScreenLoading(true);
    setCalculatorOpen(false);
    setCalculatorValue("0");
    setFullscreenWarningOpen(false);
    setSession((currentSession) => ({
      ...currentSession,
      submitted: true,
      exitedInBetween: false,
      submittedAt: Date.now(),
    }));
    setSubmitConfirmOpen(false);
  };

  const exitTestInBetween = () => {
    setScreenLoading(true);
    setCalculatorOpen(false);
    setCalculatorValue("0");
    setFullscreenWarningOpen(false);
    setSession((currentSession) => ({
      ...currentSession,
      submitted: true,
      exitedInBetween: true,
      submittedAt: Date.now(),
    }));
    setSubmitConfirmOpen(false);
  };

  const handleCalculatorInput = (key) => {
    if (key === "AC") {
      setCalculatorValue("0");
      return;
    }

    if (key === "DEL") {
      setCalculatorValue((current) => current.length > 1 ? current.slice(0, -1) : "0");
      return;
    }

    if (key === "=") {
      setCalculatorValue((current) => {
        if (!/^[0-9+\-*/%.().\s]+$/.test(current)) return "Error";
        try {
          const result = Function(`"use strict"; return (${current.replace(/%/g, "/100")})`)();
          return Number.isFinite(result) ? String(Number.parseFloat(result.toFixed(10))) : "Error";
        } catch {
          return "Error";
        }
      });
      return;
    }

    setCalculatorValue((current) => {
      if (current === "0" || current === "Error") return key;
      return `${current}${key}`;
    });
  };

  if (session.submitted) {
    const timeLimitSeconds = hasDuration ? test.timeMinutes * 60 : null;
    const remainingAtSubmit =
      session.expiresAt && session.submittedAt
        ? Math.max(0, Math.ceil((session.expiresAt - session.submittedAt) / 1000))
        : null;
    const timeTakenSeconds =
      timeLimitSeconds !== null && remainingAtSubmit !== null
        ? timeLimitSeconds - remainingAtSubmit
        : null;

    return (
      <main className="exam-screen exam-result">
        <div className="exam-result-card">
          <div className="exam-result-banner">
            <span className="exam-result-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="m6 12 4 4 8-8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
            </span>
            <p>{session.exitedInBetween ? "Test exited in between" : "Assessment complete"}</p>
            <h1>{session.exitedInBetween ? "Exit recorded" : "Test submitted"}</h1>
            <span>{examLabel || `Mock Test ${level}`} · {test.testName}</span>
          </div>

          <div className="exam-result-content">
            {timeTakenSeconds !== null && (
              <div className="exam-result-time">
                <div>
                  <span>Time taken</span>
                  <strong>{formatTime(timeTakenSeconds)}</strong>
                </div>
                <div>
                  <span>Time limit</span>
                  <strong>{formatTime(timeLimitSeconds)}</strong>
                </div>
              </div>
            )}
            <div className="exam-result-score-card">
              <span className="exam-result-label">Your score</span>
              {scorePercentage !== null && (
                <div
                  className={`exam-score-ring ${scoreBarColor}`}
                  role="progressbar"
                  aria-label={`Score percentage, ${score} marks`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={Math.round(scorePercentage)}
                  style={{ "--score-progress": `${scorePercentage}%` }}
                >
                  <div className="exam-score-ring-content">
                    <strong className="exam-result-score">{score}</strong>
                    <span className="exam-result-out-of">
                      out of {test.totalMarks ?? "—"} marks
                    </span>
                  </div>
                </div>
              )}
              {scorePercentage !== null && (
                <span className="exam-score-percent">
                  {Math.round(scorePercentage)}% of maximum marks
                </span>
              )}
            </div>

            <div className="exam-result-breakdown">
              <div>
                <span className="exam-result-stat-icon exam-stat-correct">✓</span>
                <span>Correct</span>
                <strong>{correctCount}</strong>
              </div>
              <div>
                <span className="exam-result-stat-icon exam-stat-incorrect">×</span>
                <span>Incorrect</span>
                <strong>{incorrectCount}</strong>
              </div>
              <div>
                <span className="exam-result-stat-icon exam-stat-unanswered">–</span>
                <span>Unanswered</span>
                <strong>{test.questions.length - answeredCount}</strong>
              </div>
            </div>

            <p className="exam-result-copy">
              {session.exitedInBetween
                ? "You exited the test before completing or submitting it. The attempt was ended in between, and unanswered questions are marked accordingly."
                : "Your responses have been finalized. Review your performance and keep building on your preparation."}
            </p>
            <button type="button" className="exam-button exam-button-primary" onClick={returnToTests}>
              Back to test levels
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!session.started) {
    const instructions = test.instructions ?? test.description;
    const sections = Array.isArray(test.sections)
      ? test.sections.length
      : test.sections;

    return (
      <main
        className={`exam-screen exam-instructions ${isFullscreenActive ? "exam-screen-fullscreen" : ""}`}
      >
        <section
            className="exam-modal exam-instructions-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="test-instructions-title"
            aria-busy={popupLoading}
          >
          <div className="exam-instructions-main">
          <div className="exam-instructions-heading">
            <h1 id="test-instructions-title">{test.testName}</h1>
            <p className="exam-modal-level">
              Read the important instructions and test details before starting.
            </p>
          </div>

          <dl className="exam-details exam-instructions-details">
            <div>
              <span className="exam-stat-icon exam-stat-icon-red" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3.5h8l4 4V20.5H6z" />
                  <path d="M14 3.5v4h4M9 12h6M9 16h6" />
                </svg>
              </span>
              <div>
                <dd>{test.questions.length}</dd>
                <dt>Questions</dt>
              </div>
            </div>
            <div>
              <span className="exam-stat-icon exam-stat-icon-red" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <dd>{hasDuration ? `${test.timeMinutes} Minutes` : "Not specified"}</dd>
                <dt>Time Limit</dt>
              </div>
            </div>
            <div>
              <span className="exam-stat-icon exam-stat-icon-yellow" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 19V11M12 19V5M19 19v-8" />
                </svg>
              </span>
              <div>
                <dd>{test.totalMarks ?? "Not specified"}</dd>
                <dt>Maximum Marks</dt>
              </div>
            </div>
            <div>
              <span className="exam-stat-icon exam-stat-icon-yellow" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 4.5h12v15H6zM9 8h6M9 12h6M9 16h3" />
                  <path d="m15.5 16 1 1 2-2" />
                </svg>
              </span>
              <div>
                <dd>{markingDescription}</dd>
                <dt>Marking Scheme</dt>
              </div>
            </div>
            {sections !== undefined && (
              <div>
                <dt>Sections</dt>
                <dd>{sections}</dd>
              </div>
            )}
          </dl>

          <div className="exam-instructions-notice">
            {/* <span className="exam-notice-icon" aria-hidden="true">Note: </span> */}
            <ol>
              <li>Review the marking scheme before starting.</li>
              <li>The countdown begins only after you confirm your student details or continue as a guest.</li>
              <li className="exam-fullscreen-bullet">
                To continue the test ,click and enter fullscreen mode first.
                {/* <span className="exam-fullscreen-action">
                  {isFullscreenActive ? (
                    <span className="exam-fullscreen-success" role="status" aria-label="Fullscreen enabled">✓</span>
                  ) : (
                    <button
                      type="button"
                      className="exam-button exam-fullscreen-button exam-fullscreen-icon-button"
                      aria-label="Enter fullscreen"
                      title="Enter fullscreen"
                      onClick={enterFullscreen}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
                        <path d="M3 8l4-4M21 8l-4-4M3 16l4 4M21 16l-4 4" />
                      </svg>
                    </button>
                  )}
                </span> */}
              </li>
            </ol>
          </div>

          {instructions && (
            <div className="exam-instructions-copy">
              <h2>Instructions</h2>
              <p>{instructions}</p>
            </div>
          )}
          {fullscreenMessage && (
            <p className="exam-fullscreen-message" role="alert">
              {fullscreenMessage}
            </p>
          )}
          <div className="exam-modal-actions exam-instructions-actions">
            <button type="button" className="exam-button exam-button-secondary" onClick={cancelBeforeStart}>
              Cancel
            </button>
            <button
              type="button"
              className="exam-button exam-button-primary"
              disabled={credentialsVisible}
              aria-disabled={credentialsVisible}
              onClick={() => {
                if (credentialsVisible) return;
                setFullscreenMessage("");
                setPopupLoading(true);
                if (isDesktop) {
                  setFullscreenInfoOpen(true);
                } else {
                  setCredentialsLoading(true);
                  setCredentialsOpen(true);
                }
              }}
            >
              Continue
            </button>
          </div>
          </div>
          {popupLoading && <PopupStructure />}
          </section>
        {isDesktop && fullscreenInfoOpen && !credentialsOpen && (
          <div className="exam-overlay exam-fullscreen-info-overlay">
            <section
              className="exam-modal exam-instructions-side-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="fullscreen-info-title"
              aria-busy={popupLoading}
            >
              <div className="exam-instructions-screen">
                <img className="exam-laptop" src={laptop} alt="" />
                <div className="exam-laptop-copy" aria-hidden="true">
                  {/* <svg viewBox="0 0 24 24">
                    <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
                    <path d="M3 8l5-5M21 8l-5-5M3 16l5 5M21 16l-5 5" />
                  </svg> */}
                </div>
              </div>

              <div className="exam-instructions-side-content">
                <h2 className="exam-side-title" id="fullscreen-info-title">
                  Why Fullscreen?
                </h2>
                <p className="exam-side-copy">
                  Fullscreen mode helps provide a distraction-free and secure
                  testing environment for a fair assessment.
                </p>
                <ul className="exam-side-features">
                  <li>
                    <span className="exam-side-feature-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 3 4.5 6v5c0 5 3.2 8 7.5 10 4.3-2 7.5-5 7.5-10V6L12 3Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <div><strong>Prevents Distractions</strong><span>Keeps you focused on the test.</span></div>
                  </li>
                  <li>
                    <span className="exam-side-feature-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    </span>
                    <div><strong>Monitors Test Integrity</strong><span>Detects if you leave the test screen.</span></div>
                  </li>
                  <li>
                    <span className="exam-side-feature-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </span>
                    <div><strong>Auto-Submission on Exit</strong><span>If you exit fullscreen, a warning will appear and the test will be auto-submitted in 1 minute.</span></div>
                  </li>
                </ul>
                <div className="exam-side-before">
                  <strong>Before you start</strong>
                  <ul>
                    <li>Ensure you are using a laptop or desktop.</li>
                    <li>Close unnecessary tabs and applications.</li>
                    <li>Keep a stable internet connection.</li>
                    <li>Click Continue to enter fullscreen and proceed.</li>
                  </ul>
                </div>
              </div>

              {fullscreenMessage && (
                <p className="exam-fullscreen-message" role="alert">
                  {fullscreenMessage}
                </p>
              )}
              <div className="exam-modal-actions exam-instructions-actions">
                <button
                  type="button"
                  className="exam-button exam-button-secondary"
                  onClick={() => {
                    setFullscreenInfoOpen(false);
                    setFullscreenMessage("");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="exam-button exam-button-secondary"
                  onClick={enterFullscreen}
                >
                  Enter Full Screen
                </button>
                <button
                  type="button"
                  className="exam-button exam-button-primary"
                  disabled={!isFullscreenActive}
                  aria-disabled={!isFullscreenActive}
                  onClick={() => {
                    if (!isFullscreenActive) return;
                    setFullscreenInfoOpen(false);
                    setPopupLoading(true);
                    setCredentialsLoading(true);
                    setCredentialsOpen(true);
                  }}
                >
                  Continue
                </button>
              </div>
              {popupLoading && <PopupStructure />}
            </section>
          </div>
        )}
        {credentialsVisible && (
          <div className="exam-overlay exam-credentials-overlay">
            <section
              className={`exam-modal exam-credentials-modal ${isFullscreenActive ? "exam-credentials-fullscreen" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="student-details-title"
              aria-busy={credentialsLoading || popupLoading}
            >
              <button
                type="button"
                className="exam-modal-close"
                aria-label="Close student details"
                onClick={() => {
                  if (!isDesktop) {
                    cancelBeforeStart();
                    return;
                  }
                  exitFullscreen();
                  clearAttempt();
                  setCredentialsOpen(false);
                }}
              >
                ×
              </button>
              {credentialsLoading ? (
                <div className="exam-credentials-skeleton" role="status" aria-live="polite">
                  <div className="exam-credentials-heading">
                    <span className="exam-credential-skeleton-icon exam-skeleton-shimmer" />
                    <div className="exam-credential-skeleton-heading">
                      <span className="exam-skeleton-shimmer" />
                      <h2 id="student-details-title">Preparing student details</h2>
                    </div>
                  </div>
                  <p className="exam-credentials-copy">
                    Getting the form ready for your test session...
                  </p>
                  <div className="exam-credential-skeleton-form">
                    {[1, 2, 3].map((field) => (
                      <div className="exam-credential-skeleton-field" key={field}>
                        <span className="exam-skeleton-shimmer" />
                        <span className="exam-skeleton-shimmer" />
                      </div>
                    ))}
                    <div className="exam-credential-skeleton-actions">
                      <span className="exam-skeleton-shimmer" />
                      <span className="exam-skeleton-shimmer" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="exam-credentials-heading">
                    <span className="exam-credentials-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="exam-eyebrow">Before you begin</p>
                      <h2 id="student-details-title">Student details</h2>
                    </div>
                  </div>
                  <p className="exam-credentials-copy">
                    Add your details to personalize your test session. This is
                    optional, and you can continue as a guest. Details stay in
                    this browser session and are not sent to a server.
                  </p>
                  <form className="exam-credentials-form" onSubmit={startTest}>
                    <label>
                      <span>Full name <span className="exam-required">*</span></span>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={credentials.name}
                        onChange={(event) =>
                          setCredentials((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        required
                      />
                    </label>
                    <label>
                      <span>Email address <span className="exam-required">*</span></span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={credentials.email}
                        onChange={(event) =>
                          setCredentials((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        required
                      />
                    </label>
                    <label>
                      <span>Phone number <span className="exam-required">*</span></span>
                      <input
                        type="number"
                        name="phone"
                        autoComplete="tel"
                        placeholder="Enter your phone number"
                        value={credentials.phone}
                        onChange={(event) =>
                          setCredentials((current) => ({
                            ...current,
                            phone: event.target.value,
                          }))
                        }
                        required
                      />
                    </label>
                    <div className="exam-modal-actions">
                      <button
                        type="button"
                        className="exam-button exam-button-secondary"
                        onClick={() => beginTest(GUEST_STUDENT)}
                      >
                        Continue as guest
                      </button>
                      <button type="submit" className="exam-button exam-button-primary">
                        Start Test
                      </button>
                    </div>
                  </form>
                </>
              )}
              {popupLoading && <PopupStructure />}
            </section>
          </div>
        )}
      </main>
    );
  }

  const calculatorLabels = { AC: "C", "/": "÷", "*": "×", "-": "−" };
  const calculatorContent = (
    <>
      <div className="exam-calculator-header">
        <strong>Calculator</strong>
        <button
          type="button"
          className="exam-calculator-close"
          aria-label="Close calculator"
          onClick={() => setCalculatorOpen(false)}
        >
          ×
        </button>
      </div>
      <output className="exam-calculator-display" aria-live="polite">
        {calculatorValue}
      </output>
      <div className="exam-calculator-grid" aria-label="Calculator buttons">
        {["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((key) => (
          <button
            key={key}
            type="button"
            className={`exam-calculator-key ${key === "=" ? "exam-calculator-equals" : ""} ${["AC", "/", "*", "-", "+"].includes(key) ? "exam-calculator-operator" : ""}`}
            onClick={() => handleCalculatorInput(key)}
          >
            {calculatorLabels[key] ?? key}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <main className="exam-screen">
      <header className="exam-header">
        <div className="exam-header-title">
          <div className="exam-brand">WORLD WISE EDUCATION</div>
          <h1>{examLabel || `Mock Test ${level}`}</h1>
          {/* <p className="exam-test-name">{test.level}</p> */}
        </div>
        <div className="exam-fullscreen-strip" role="status">
          <span className="exam-fullscreen-strip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></svg>
          </span>
          <div>
            <strong>You are in Fullscreen Mode</strong>
            <span>Do not exit fullscreen. If you exit, your test will be auto-submitted in 1 minute.</span>
          </div>
        </div>
        <div className="exam-header-controls">
          <div className="exam-header-student">
            <span className="exam-avatar" aria-hidden="true">
              {(student.name.trim().charAt(0) || "G").toUpperCase()}
            </span>
            <span>{student.name}</span>
          </div>
          <div className={`exam-timer ${secondsLeft < 300 ? "exam-timer-warning" : ""}`}>
            <span className="exam-timer-label">Time left</span>
            <strong>{hasDuration ? formatTime(secondsLeft) : "—"}</strong>
          </div>
          <button type="button" className="exam-button exam-exit-button" onClick={exitTestInBetween}>
            Exit test
          </button>
        </div>
      </header>

      {paletteOpen && (
        <button
          type="button"
          className="exam-palette-backdrop"
          aria-label="Close question palette"
          onClick={() => setPaletteOpen(false)}
        />
      )}

      <div className={`exam-layout ${paletteOpen ? "exam-layout-menu-open" : "exam-layout-menu-closed"}`}>
        <aside
          id="question-palette"
          className={`exam-sidebar ${paletteOpen ? "exam-sidebar-open" : ""}`}
        >
          {/* <section className="exam-compact-level" aria-label="Current test level">
            <span>Mock Test</span>
            <strong>{level}</strong>
          </section> */}

          <section className="exam-student-card">
            <span className="exam-avatar exam-avatar-large" aria-hidden="true">
              {(student.name.trim().charAt(0) || "G").toUpperCase()}
            </span>
            <div>
              <p className="exam-eyebrow">Candidate</p>
              {/* <strong>{student.name}</strong> */}
              {student.email ? (
                <span className="exam-student-email">{student.email}</span>
              ) : (
                <span className="exam-student-email">Guest attempt</span>
              )}
            </div>
          </section>

          <section className="exam-panel exam-question-palette-panel">
            <div className="exam-palette-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={sidebarTab === "palette"}
                className={`exam-palette-tab ${sidebarTab === "palette" ? "exam-palette-tab-active" : ""}`}
                onClick={() => setSidebarTab("palette")}
              >
                Question Palette
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={sidebarTab === "instructions"}
                className={`exam-palette-tab ${sidebarTab === "instructions" ? "exam-palette-tab-active" : ""}`}
                onClick={() => setSidebarTab("instructions")}
              >
                Instructions
              </button>
            </div>
            <div className="exam-panel-heading">
              {/* <h2>Question palette</h2> */}
              <span>{session.current + 1}/{test.questions.length}</span>
            </div>
            {sidebarTab === "instructions" && (
              <p className="exam-palette-instructions">
                Select a question number to jump to it. Use Save &amp; Next after answering to move forward.
                Palette colours show each question's status.
              </p>
            )}
            <div className="exam-question-nav">
              <button
                type="button"
                aria-label="Go to previous question"
                disabled={session.current === 0}
                onClick={() => goToQuestion(Math.max(0, session.current - 1))}
              >
                ▲
              </button>
            </div>
            {sidebarTab === "palette" && (
            <>
            <div className="exam-question-grid" ref={paletteGridRef}>
              {test.questions.slice(palettePageStart, palettePageEnd).map((_, offset) => {
                const index = palettePageStart + offset;
                const status = getQuestionStatus(session, index);
                return (
                  <button
                    key={index}
                    type="button"
                    className={`exam-question-number exam-state-${status} ${index === session.current ? "exam-question-current" : ""
                      }`}
                    aria-label={`Question ${index + 1}, ${status.replace("-", " ")}`}
                    aria-current={index === session.current ? "step" : undefined}
                    onClick={() => goToQuestion(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="exam-palette-pager">
              <button
                type="button"
                aria-label="Previous 24 questions"
                disabled={palettePage === 0}
                onClick={() => setPalettePage((page) => page - 1)}
              >
                ‹
              </button>
              <span>
                {palettePageStart + 1}–{palettePageEnd} of {test.questions.length}
              </span>
              <button
                type="button"
                aria-label="Next 24 questions"
                disabled={palettePage >= palettePageCount - 1}
                onClick={() => setPalettePage((page) => page + 1)}
              >
                ›
              </button>
            </div>
            </>
            )}
            <div className="exam-question-nav">
              <button
                type="button"
                aria-label="Go to next question"
                disabled={session.current === test.questions.length - 1}
                onClick={() => goToQuestion(Math.min(test.questions.length - 1, session.current + 1))}
              >
                ▼
              </button>
            </div>
            {(!calculatorOpen || sidebarTab === "instructions") && (
              <ul className="exam-legend">
                <li><span className="exam-legend-dot exam-state-not-visited" />Not visited</li>
                <li><span className="exam-legend-dot exam-state-answered" />Answered</li>
                <li><span className="exam-legend-dot exam-state-not-answered" />Not answered</li>
                <li><span className="exam-legend-dot exam-state-review" />Marked for review</li>
                <li><span className="exam-legend-dot exam-state-answered-review" />Answered + review</li>
              </ul>
            )}
          </section>

          {calculatorOpen && (
            <section className="exam-panel exam-calculator-inline" aria-label="Calculator">
              {calculatorContent}
            </section>
          )}

          <section className="exam-panel exam-submit-panel">
            <button
              type="button"
              className="exam-button exam-button-submit"
              onClick={() => {
                setPopupLoading(true);
                setSubmitConfirmOpen(true);
              }}
            >
              Submit Test
            </button>
          </section>
        </aside>

        <section className="exam-question-area" aria-labelledby="question-title">
          <div className="exam-question-meta">
            <button
              type="button"
              className={`exam-palette-toggle ${paletteOpen ? "exam-palette-toggle-open" : ""}`}
              aria-label={paletteOpen ? "Close question palette" : "Open question palette"}
              aria-controls="question-palette"
              aria-expanded={paletteOpen}
              onClick={() => setPaletteOpen((open) => !open)}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {paletteOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <span className="exam-question-count">
              Question {session.current + 1} of {test.questions.length}
            </span>
            {session.review[session.current] && <span className="exam-review-tag">Marked for review</span>}
            <button
              type="button"
              className="exam-button exam-calculator-toggle"
              aria-label={calculatorOpen ? "Close calculator" : "Open calculator"}
              aria-expanded={calculatorOpen}
              onClick={() => setCalculatorOpen((open) => !open)}
            >
              Calculator
            </button>
          </div>
          <article className="exam-question-card">
            {currentQuestion.passageText && (
              <div className="exam-passage">
                <p>{currentQuestion.passageText}</p>
              </div>
            )}
            <h2 id="question-title" className="exam-question-text">
              {currentQuestion.question}
            </h2>

            {currentQuestion.image && (
              <img
                src={currentQuestion.image}
                alt={`Figure for question ${session.current + 1}`}
                className="exam-question-image"
              />
            )}

            {currentQuestion.type === "numerical" || !currentQuestion.options ? (
              <label className="exam-numerical-answer">
                <span>Your answer</span>
                <input
                  type="number"
                  step="any"
                  value={session.answers[session.current] ?? ""}
                  onChange={(event) => {
                    const { value } = event.target;
                    setSession((currentSession) => {
                      const answers = { ...currentSession.answers };
                      if (value === "") {
                        delete answers[currentSession.current];
                      } else {
                        answers[currentSession.current] = value;
                      }
                      return { ...currentSession, answers };
                    });
                  }}
                  placeholder="Enter your answer"
                />
              </label>
            ) : (
              <div className="exam-options">
                {currentQuestion.options.map((option, optionIndex) => {
                  const answerValue = optionIndex + 1;
                  const checked = Number(session.answers[session.current]) === answerValue;

                  return (
                    <label
                      key={answerValue}
                      className={`exam-option ${checked ? "exam-option-selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name={`question-${session.current}`}
                        value={answerValue}
                        checked={checked}
                        onChange={() =>
                          setSession((currentSession) => ({
                            ...currentSession,
                            answers: {
                              ...currentSession.answers,
                              [currentSession.current]: answerValue,
                            },
                          }))
                        }
                      />
                      <span className="exam-option-letter">{String.fromCharCode(64 + answerValue)}</span>
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </article>

          <div className="exam-actions">
            <button
              type="button"
              className="exam-button exam-button-secondary"
              disabled={session.current === 0}
              onClick={() => goToQuestion(Math.max(0, session.current - 1))}
            >
              Previous
            </button>
            <button type="button" className="exam-button exam-button-primary" onClick={saveAndNext}>
              {session.current === test.questions.length - 1 ? "Submit" : "Save & Next"}
            </button>
            <button type="button" className="exam-button exam-button-review" onClick={saveAndMarkForReview}>
              Save &amp; Mark for Review
            </button>
            <button type="button" className="exam-button exam-button-secondary" onClick={clearResponse}>
              Clear Response
            </button>
            <button type="button" className="exam-button exam-button-review-outline" onClick={markForReviewAndNext}>
              Mark for Review &amp; Next
            </button>
          </div>
        </section>
      </div>

      {calculatorOpen && (
        <aside className="exam-calculator" role="dialog" aria-label="Calculator">
          {calculatorContent}
        </aside>
      )}

      {fullscreenWarningOpen && (
        <div className="exam-overlay exam-fullscreen-overlay" role="presentation">
          <section
            className="exam-modal exam-fullscreen-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fullscreen-warning-title"
            aria-busy={popupLoading}
          >
            <div className="exam-fullscreen-icon" aria-hidden="true">⛶</div>
            <p className="exam-eyebrow">Desktop fullscreen required</p>
            <h2 id="fullscreen-warning-title">You exited the full screen</h2>
            <p>Press <kbd>F11</kbd> to enter fullscreen mode and continue the test.</p>
            <div className="exam-fullscreen-countdown" aria-live="polite">
              <span>Auto-submit in</span>
              <strong>{formatTime(fullscreenSecondsLeft)}</strong>
            </div>
            <button
              type="button"
              className="exam-button exam-button-primary exam-fullscreen-button"
              onClick={enterFullscreen}
            >
              Enter fullscreen
            </button>
            {popupLoading && <PopupStructure />}
          </section>
        </div>
      )}

      {submitConfirmOpen && (
        <div className="exam-overlay" role="presentation">
          <section
            className="exam-modal exam-submit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="submit-confirm-title"
            aria-busy={popupLoading}
          >
            <p className="exam-eyebrow">Final submission</p>
            <h2 id="submit-confirm-title">Submit this test?</h2>
            <p>Review your progress before finalizing your responses.</p>
            <dl className="exam-details exam-confirm-details">
              <div><dt>Answered</dt><dd>{answeredCount} / {test.questions.length}</dd></div>
              <div><dt>Not answered</dt><dd>{notAnsweredCount}</dd></div>
              <div><dt>Not visited</dt><dd>{notVisitedCount}</dd></div>
              <div><dt>Marked for review</dt><dd>{reviewCount}</dd></div>
            </dl>
            <div className="exam-modal-actions">
              <button
                type="button"
                className="exam-button exam-button-secondary"
                onClick={() => setSubmitConfirmOpen(false)}
              >
                Cancel
              </button>
              <button type="button" className="exam-button exam-button-submit" onClick={submitTest}>
                Confirm Submit
              </button>
            </div>
            {popupLoading && <PopupStructure />}
          </section>
        </div>
      )}
    </main>
  );
};

export default JeeMockTestPage;
