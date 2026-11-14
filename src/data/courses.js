const courses = [
  {
    id: 1,
    slug: "clat-foundation",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
    title: "CLAT Foundation Course",
    description:
      "Build a steady CLAT preparation base through reading, reasoning, core concepts and regular question practice.",
    price: 5999,
    overview:
      "A foundation-focused starting point for students who want to understand the skills used across CLAT preparation. Build reading comprehension, reasoning habits and a consistent study routine before increasing the pace of timed practice.",
    suitableFor:
      "Students beginning CLAT preparation or looking to strengthen fundamental reading and reasoning skills.",
    focusAreas: [
      "Reading comprehension and vocabulary in context",
      "Logical and legal reasoning practice",
      "Current affairs reading and note-making habits",
      "Basic quantitative interpretation and question practice",
    ],
    studyApproach: [
      "Learn a concept or skill in focused study blocks",
      "Practise related questions and explain your reasoning",
      "Review errors and maintain a short list of topics to revisit",
    ],
  },
  {
    id: 2,
    slug: "clat-complete-preparation",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
    title: "CLAT Complete Preparation",
    description:
      "Prepare across CLAT areas with structured attention to English, current affairs, legal and logical reasoning, and quantitative techniques.",
    price: 12999,
    overview:
      "A broader CLAT preparation option for students who want to work across the major skill areas of the examination. Combine comprehension and reasoning practice with current-affairs revision, quantitative questions and regular evaluation.",
    suitableFor:
      "Students seeking preparation across multiple CLAT sections rather than support in a single area.",
    focusAreas: [
      "English language and reading comprehension",
      "Current affairs and general knowledge revision",
      "Legal reasoning and principle-based application",
      "Logical reasoning and quantitative techniques",
    ],
    studyApproach: [
      "Divide study time across the skills and topics in your current syllabus",
      "Practise sectional questions before attempting full-length mocks",
      "Analyse attempts to identify accuracy, comprehension and pacing gaps",
    ],
  },
  {
    id: 3,
    slug: "cuet-ug-preparation",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    title: "CUET UG Preparation",
    description:
      "Plan CUET UG preparation around your target programmes, required subjects, syllabus study and regular practice.",
    price: 7999,
    overview:
      "A structured preparation option for students exploring undergraduate admissions through CUET. Begin by confirming the subject combination and current requirements for the programmes you are considering, then organise learning, practice and revision around those subjects.",
    suitableFor:
      "Students preparing for CUET UG who need a structured way to organise their selected subjects and practice.",
    focusAreas: [
      "Checking programme and subject requirements",
      "Topic-wise study using the applicable syllabus",
      "Practice questions and revision for selected subjects",
      "Timed practice and review of question attempts",
    ],
    studyApproach: [
      "Confirm subject choices with current official university and exam information",
      "Break each syllabus into manageable weekly topics",
      "Balance concept study, question practice and revision",
    ],
  },
  {
    id: 4,
    slug: "cuet-commerce",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    title: "CUET Commerce Course",
    description:
      "Organise CUET preparation for commerce-oriented programmes with subject-wise study, concept revision and practice.",
    price: 6999,
    overview:
      "A subject-focused preparation option for commerce students planning their CUET pathway. Use the course as a structure for revising relevant concepts and practising questions after confirming the subject requirements for your intended programmes.",
    suitableFor:
      "Commerce students who have identified CUET programmes of interest and want a subject-wise preparation routine.",
    focusAreas: [
      "Reviewing the relevant subject syllabus and topic list",
      "Revising commerce concepts and definitions",
      "Practising subject questions and application-based problems",
      "Tracking difficult topics for follow-up revision",
    ],
    studyApproach: [
      "Check current subject requirements for each target programme",
      "Schedule concept review and practice for each selected subject",
      "Use errors from practice to plan targeted revision",
    ],
  },
  {
    id: 5,
    slug: "cuet-humanities",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    title: "CUET Humanities Course",
    description:
      "Prepare for CUET humanities pathways through syllabus-led subject study, reading, question practice and revision.",
    price: 6499,
    overview:
      "A preparation option for humanities students who want to organise their CUET work by subject and topic. Build a repeatable routine for studying prescribed material, understanding key ideas and practising questions.",
    suitableFor:
      "Humanities students preparing for CUET and looking for a structured approach to subject-wise study.",
    focusAreas: [
      "Confirming subject combinations for intended programmes",
      "Understanding syllabus topics and key concepts",
      "Reading carefully and practising subject-based questions",
      "Revising notes and reviewing practice attempts",
    ],
    studyApproach: [
      "Use the current official syllabus as a topic checklist",
      "Create concise notes while studying each topic",
      "Practise questions and revisit concepts that need more attention",
    ],
  },
  {
    id: 6,
    slug: "clat-mock-test",
    route: "/mock#clat-mock",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    title: "CLAT Mock Test Series",
    description:
      "Use exam-style CLAT practice to work on section strategy, time awareness and careful post-test review.",
    price: 2499,
    overview:
      "A practice-focused option for students who want to apply their CLAT preparation in test conditions. The value of each attempt comes from reviewing the questions, identifying patterns in mistakes and selecting concrete topics to revisit.",
    suitableFor:
      "Students who have begun studying CLAT topics and want to practise and evaluate their approach.",
    focusAreas: [
      "Applying reading and reasoning skills to test questions",
      "Building awareness of time spent across question types",
      "Reviewing incorrect and unanswered questions",
      "Using test observations to guide revision",
    ],
    studyApproach: [
      "Attempt a test in a focused setting and follow its displayed instructions",
      "Review every uncertain, incorrect or unanswered question",
      "Record recurring gaps and revisit the related concepts before the next attempt",
    ],
  },
  {
    id: 7,
    slug: "cuet-mock-test",
    route: "/mock#cuet-mock",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    title: "CUET Mock Test Series",
    description:
      "Practise CUET English, General Test and subject-based questions with timed mock-test preparation and review.",
    price: 2499,
    overview:
      "A practice-focused CUET mock-test option covering general ability, language and selected subject areas. Use results to identify weak topics and improve accuracy and time management.",
    suitableFor: "CUET UG aspirants who want timed practice based on their selected subject and programme requirements.",
    focusAreas: ["English language and reading practice", "General Test and quantitative aptitude", "Selected subject preparation", "Timed attempts and post-test review"],
    studyApproach: ["Choose the official CUET subjects required by your target programme", "Attempt tests in a distraction-free setting", "Review incorrect and unanswered questions before revising topics"],
  },
  {
    id: 8,
    slug: "jee-mock-test",
    route: "/jeemocktest",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
    title: "JEE Mock Test Series",
    description:
      "Attempt JEE preparation tests by subject and difficulty, with Physics, Chemistry and Mathematics practice routes.",
    price: 2999,
    overview:
      "A JEE-focused mock-test path with subject sections and levels. Choose a subject, select the appropriate difficulty, and review your performance using the on-screen test interface.",
    suitableFor: "JEE aspirants who want subject-wise practice and structured simulation levels.",
    focusAreas: ["Physics, Chemistry and Mathematics practice", "Basic, intermediate and advanced level questions", "Time management and question selection", "Performance review and focused revision"],
    studyApproach: ["Select your subject and start with the appropriate level", "Attempt questions under timed conditions", "Review solutions and return to weak concepts before the next test"],
  },
  {
    id: 9,
    slug: "law-entrance-crash-course",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800",
    title: "Law Entrance Crash Course",
    description:
      "Use focused revision and question practice to organise preparation for law entrance examinations.",
    price: 8999,
    overview:
      "A focused revision option for students preparing for law entrance examinations. Prioritise the topics and skills that need attention, revisit key notes and use practice questions to check understanding. Check the course details with the team for the specific exam coverage and schedule.",
    suitableFor:
      "Students seeking a concentrated revision routine for a law entrance examination.",
    focusAreas: [
      "Reviewing core reasoning and comprehension concepts",
      "Prioritising revision from the applicable exam syllabus",
      "Practising questions under time awareness",
      "Analysing mock attempts and revisiting weak areas",
    ],
    studyApproach: [
      "Confirm the relevant examination and course coverage before enrolling",
      "Identify priority topics using your syllabus and recent practice",
      "Keep revision focused and leave time to review mistakes",
    ],
  },
  {
    id: 10,
    slug: "current-affairs-gk",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
    title: "Current Affairs & GK",
    description:
      "Build a regular current-affairs habit with concise notes, topic revision and question-based practice.",
    price: 2999,
    overview:
      "A focused option for students who want to make current affairs and general knowledge part of a consistent study routine. Develop a manageable approach to reading, recording useful facts and revisiting topics instead of relying only on last-minute preparation.",
    suitableFor:
      "Students whose entrance-exam preparation includes current affairs or general knowledge.",
    focusAreas: [
      "Regular reading from reliable news and reference sources",
      "Concise notes organised by topic and date",
      "Revision of national, international and relevant legal developments",
      "Question practice to check recall and understanding",
    ],
    studyApproach: [
      "Set a realistic daily or weekly reading routine",
      "Write short notes that are easy to revise",
      "Use practice questions to spot topics that need another review",
    ],
  },
];

export default courses;
