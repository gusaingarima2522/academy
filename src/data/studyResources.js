export const studyResources = [
  {
    id: "clat-syllabus",
    title: "CLAT Syllabus & Exam Guide",
    category: "CLAT",
    description:
      "Understand the major sections of CLAT and start your preparation with a clear study plan.",
    icon: "/icons/guide.png",
    button: "View Syllabus",
    officialUrl:
      "https://clat2027.consortiumofnlus.ac.in/clat-2027/ug-syllabus.html",
    officialLabel: "Check the official CLAT syllabus",
    introduction:
      "Use the syllabus as a checklist, then build your preparation around passage-based reading, reasoning and regular review. Always confirm the current pattern and requirements with the Consortium of NLUs.",
    highlights: [
      "Understand the five broad question areas",
      "Build a balanced weekly study plan",
      "Use official updates as your source of truth",
    ],
    quickTask: {
      prompt: "Before you plan your week, what should you check first?",
      answer:
        "Check the latest official syllabus and exam information, then list the sections and topics you need to cover.",
    },
    sections: [
      {
        heading: "Core areas to prepare",
        items: [
          "English language: reading comprehension, vocabulary in context and understanding an author's argument.",
          "Current affairs and general knowledge: important events, context and the ability to understand related passages.",
          "Legal reasoning: applying principles to facts and evaluating legal situations described in a passage.",
          "Logical reasoning: identifying arguments, assumptions, inferences and relationships between ideas.",
          "Quantitative techniques: interpreting numerical information and solving questions using basic mathematical skills.",
        ],
      },
      {
        heading: "Turn the syllabus into a plan",
        items: [
          "Take a short diagnostic practice set in each area and record where you lose time or confidence.",
          "Set weekly reading and practice goals for each section instead of studying only your strongest subject.",
          "Review mistakes after every practice session and schedule the underlying concept for revision.",
        ],
      },
    ],
  },
  {
    id: "clat-legal-reasoning",
    title: "CLAT Legal Reasoning Practice",
    category: "CLAT",
    description:
      "Practice principle-based questions and improve your ability to analyse legal situations.",
    icon: "/icons/assessment.png",
    button: "Study Material",
    introduction:
      "Legal reasoning passages test how carefully you can understand a stated principle and apply it to new facts. Focus on the rule provided in the passage before relying on assumptions or outside knowledge.",
    highlights: [
      "Break a principle into conditions and outcomes",
      "Separate relevant facts from distractions",
      "Apply rules consistently to new situations",
    ],
    quickTask: {
      prompt:
        "A rule says borrowed equipment must be returned when the agreed period ends. Sam borrows a camera until Friday but keeps it through Sunday. What fact matters most?",
      answer:
        "Sam kept using the camera after the agreed borrowing period ended. Apply only the rule and facts given in the question.",
    },
    sections: [
      {
        heading: "A reliable solving method",
        items: [
          "Read the principle and restate its condition and consequence in your own words.",
          "Separate the relevant facts from details that do not affect the rule.",
          "Apply the principle consistently, including any exceptions stated in the passage.",
          "Compare every option with the facts and rule; avoid choosing an answer based only on what seems fair.",
        ],
      },
      {
        heading: "Try this mini exercise",
        items: [
          "Principle: A person who knowingly uses another person's property without permission must return it when asked.",
          "Facts: Mira borrows a neighbour's book with permission for one day. The neighbour asks for it back the next morning, but Mira keeps it for another week.",
          "Question: Which fact matters most when applying the principle?",
          "Review: The key issue is that Mira keeps using the book after permission has ended and it has been requested back.",
        ],
      },
    ],
  },
  {
    id: "clat-logical-reasoning",
    title: "CLAT Logical Reasoning",
    category: "CLAT",
    description:
      "Improve arguments, inference, assumptions and critical reasoning through regular practice.",
    icon: "/icons/reasoning.png",
    button: "Study Material",
    introduction:
      "Logical reasoning practice is about understanding how a conclusion follows from evidence. Read for the structure of an argument, not just for familiar keywords.",
    highlights: [
      "Identify conclusions and supporting reasons",
      "Spot assumptions and unsupported leaps",
      "Test whether evidence strengthens or weakens a claim",
    ],
    quickTask: {
      prompt:
        "A café added outdoor seating, and sales rose the next month. Does this prove the new seating caused the increase?",
      answer:
        "No. It shows a sequence in time, not proof of cause. Consider other changes, such as a seasonal increase in customers or a new menu.",
    },
    sections: [
      {
        heading: "Skills to practise",
        items: [
          "Find the conclusion and identify the reasons offered in its support.",
          "Distinguish a fact stated in the passage from an assumption needed by the argument.",
          "Check whether an inference must be true based on the information given.",
          "Test how new evidence would strengthen or weaken the conclusion.",
        ],
      },
      {
        heading: "Try this mini exercise",
        items: [
          "Argument: The school introduced a quiet reading period, and library visits increased the following month. Therefore, the reading period caused the increase.",
          "Question: What should you check before accepting the conclusion?",
          "Review: Look for other changes during that month, such as a new book collection or a change in library access. A timing relationship alone does not establish cause.",
        ],
      },
    ],
  },
  {
    id: "current-affairs",
    title: "Current Affairs & GK",
    category: "General Knowledge",
    description:
      "Keep track of important national and international events and strengthen your general awareness.",
    icon: "/icons/gk.png",
    button: "Read More",
    introduction:
      "Build general awareness with consistent reading and short, organised revision. The aim is to remember what happened, why it matters and the context behind it.",
    highlights: [
      "Turn daily reading into concise notes",
      "Connect events with relevant background",
      "Revise actively instead of rereading passively",
    ],
    quickTask: {
      prompt:
        "After reading a news story, which four details are useful to capture in your notes?",
      answer:
        "Record what happened, who or which institution was involved, when it happened, and the relevant background. Verify details with reliable sources.",
    },
    sections: [
      {
        heading: "A practical daily routine",
        items: [
          "Read a reliable news source and note a small number of significant developments.",
          "For each item, record the event, people or institutions involved, date and background.",
          "Group notes by themes such as government, economy, science, environment, awards and international relations.",
          "At the end of the week, close your notes and try to recall the key points before checking them.",
        ],
      },
      {
        heading: "Make revision active",
        items: [
          "Turn each note into a question so that revision requires recall rather than rereading.",
          "Connect an event to its wider context, but keep confirmed facts separate from opinion.",
          "Revisit older notes at regular intervals and update them when reliable information changes.",
        ],
      },
    ],
  },
  {
    id: "cuet-syllabus",
    title: "CUET UG Syllabus",
    category: "CUET",
    description:
      "Access the official CUET UG subject-wise syllabus and understand what you need to prepare.",
    icon: "/icons/syllabus.png",
    button: "View Syllabus",
    officialUrl: "https://cuet.nta.nic.in/cuetug-2026-syllabus/",
    officialLabel: "Check the official CUET UG syllabus",
    introduction:
      "CUET subject choices and preparation requirements depend on the courses and universities you are targeting. Use the current official syllabus and verify eligibility and subject combinations with each university.",
    highlights: [
      "Match required subjects to your target courses",
      "Create a syllabus checklist for each subject",
      "Verify current eligibility with universities",
    ],
    quickTask: {
      prompt:
        "You have two possible university courses in mind. What should you verify before choosing CUET subjects?",
      answer:
        "Check the current eligibility criteria and required CUET subject combinations for both courses, then confirm them with the universities.",
    },
    sections: [
      {
        heading: "Plan your subject combination",
        items: [
          "List the courses and universities you may apply to.",
          "Check each course's current eligibility rules and required CUET subjects.",
          "Compare those requirements with the subjects you studied and can select in the current examination cycle.",
          "Use the official syllabus to make a topic checklist for every selected subject.",
        ],
      },
      {
        heading: "Study from the syllabus",
        items: [
          "Mark each topic as not started, in progress or ready for revision.",
          "Use the prescribed subject material to learn concepts before attempting timed questions.",
          "Recheck official notifications for changes to subjects, examination format or dates.",
        ],
      },
    ],
  },
  {
    id: "cuet-general-aptitude",
    title: "CUET General Aptitude",
    category: "CUET",
    description:
      "Practice quantitative ability, reasoning, general knowledge and other aptitude-based questions.",
    icon: "/icons/bulb.png",
    button: "Study Material",
    introduction:
      "Aptitude practice improves with accuracy first and speed second. Check the current CUET notification to confirm whether a General Aptitude Test is required for your target course.",
    highlights: [
      "Practise numerical and logical reasoning",
      "Improve accuracy before adding time pressure",
      "Use an error log to guide revision",
    ],
    quickTask: {
      prompt: "A notebook costs ₹240. What is 15% of its price?",
      answer:
        "₹36. One way to calculate it is 10% of ₹240 (₹24) plus 5% (₹12).",
    },
    sections: [
      {
        heading: "Areas for regular practice",
        items: [
          "Quantitative reasoning: percentages, ratios, averages, basic arithmetic and interpreting tables or charts.",
          "Logical reasoning: patterns, relationships, sequences and conclusions supported by given information.",
          "General awareness: important developments and foundational knowledge relevant to the examination.",
          "Reading and interpretation: understand instructions and extract details accurately before answering.",
        ],
      },
      {
        heading: "Use an error log",
        items: [
          "Record the question type, your answer and the reason your approach worked or failed.",
          "Classify each error as a concept gap, calculation slip, misread instruction or time-management issue.",
          "Redo missed questions after a short gap without looking at the solution first.",
        ],
      },
    ],
  },
  {
    id: "english-practice",
    title: "English Language Practice",
    category: "Practice",
    description:
      "Improve vocabulary, comprehension, grammar and reading skills through regular practice.",
    icon: "/icons/language.png",
    button: "Practice Now",
    introduction:
      "Short, consistent reading and practice can strengthen comprehension, vocabulary and grammar. Focus on understanding how language works in context.",
    highlights: [
      "Find a passage's main idea and supporting details",
      "Infer unfamiliar words from context",
      "Review grammar through your own writing",
    ],
    quickTask: {
      prompt:
        "A student read a passage, underlined every unfamiliar word, and missed the main argument. What could they try next time?",
      answer:
        "First identify the passage's main idea and the role of each paragraph. Use nearby clues to infer only the words that affect understanding.",
    },
    sections: [
      {
        heading: "Build a balanced routine",
        items: [
          "Read an article or passage and summarise its main idea in one sentence.",
          "Use surrounding sentences to infer unfamiliar words before checking a dictionary.",
          "Practise identifying the author's tone, purpose and supporting evidence.",
          "Review grammar through your own writing and note recurring errors.",
        ],
      },
      {
        heading: "Try this comprehension check",
        items: [
          "Passage: A community garden began with only a few volunteers. As more neighbours joined, the group added a compost area and shared weekly growing tips.",
          "Question: Which detail best shows that participation expanded the project?",
          "Answer: The group added shared activities and facilities after more neighbours joined.",
        ],
      },
    ],
  },
  {
    id: "mock-test-resources",
    title: "Mock Test Resources",
    category: "Mock Tests",
    description:
      "Use mock tests to improve your speed, accuracy and examination strategy.",
    icon: "/icons/test.png",
    button: "Start Practice",
    introduction:
      "A mock test is most useful when you review it carefully. Simulate exam conditions for the attempt, then spend time understanding both incorrect answers and questions that took too long.",
    highlights: [
      "Practise pacing in realistic conditions",
      "Review incorrect and low-confidence answers",
      "Turn results into specific revision goals",
    ],
    quickTask: {
      prompt:
        "After a mock test, you find a question you answered incorrectly. What should you record besides the correct answer?",
      answer:
        "Record why you missed it, such as a concept gap, misread detail, calculation error or time pressure, then choose a focused follow-up task.",
    },
    sections: [
      {
        heading: "Before and during a test",
        items: [
          "Choose a quiet time and check the test duration and instructions before starting.",
          "Keep track of time without rushing through questions you do not understand.",
          "Mark difficult questions for review and return to them if time allows.",
        ],
      },
      {
        heading: "After you submit",
        items: [
          "Review every incorrect, unanswered and low-confidence response.",
          "Identify whether each issue came from a concept gap, misreading, calculation or pacing.",
          "Choose two or three specific topics to revise before your next attempt.",
        ],
      },
    ],
    actionTo: "/jeemocktest",
    actionLabel: "Browse available JEE mock tests",
  },
];
