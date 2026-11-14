export const examSyllabus = {
  clat: {
    name: "CLAT",
    title: "CLAT UG Syllabus",
    description:
      "The official CLAT UG syllabus focuses on comprehension and reasoning skills needed for legal education, rather than testing prior knowledge.",
    accent: "from-red-950 via-red-900 to-rose-800",
    overview:
      "The two-hour test has 120 multiple-choice questions worth one mark each, with 0.25 marks deducted for every incorrect answer. Prior knowledge is generally not required, although it may occasionally help with Current Affairs including General Knowledge.",
    pattern: [
      ["Duration", "2 hours"],
      ["Questions", "120 multiple-choice"],
      ["Correct answer", "+1 mark"],
      ["Incorrect answer", "−0.25 mark"],
    ],
    weightage: [
      ["English Language", "22–26", "~20%"],
      ["Current Affairs including GK", "28–32", "~25%"],
      ["Legal Reasoning", "28–32", "~25%"],
      ["Logical Reasoning", "22–26", "~20%"],
      ["Quantitative Techniques", "10–14", "~10%"],
      ["Total", "120", "100%"],
    ],
    sections: [
      {
        title: "English Language",
        description:
          "Passages of about 450 words, drawn from contemporary or historically significant fiction and non-fiction. Each is followed by questions testing comprehension and language skills.",
        topics: [
          "Main ideas, arguments and viewpoints",
          "Inferences and conclusions",
          "Passage summaries",
          "Comparison of arguments or viewpoints",
          "Meaning of words and phrases in context",
          "Passages are intended to be readable by a Class 12 student in about 5–7 minutes",
        ],
      },
      {
        title: "Current Affairs, including General Knowledge",
        description:
          "Passages of up to 450 words from news, journalistic sources and other non-fiction writing. Questions may examine legal information discussed in or related to a passage, without requiring additional legal knowledge.",
        topics: [
          "Contemporary events of significance in India and globally",
          "Arts and culture",
          "International affairs",
          "Historical events of continuing significance",
        ],
      },
      {
        title: "Legal Reasoning",
        description:
          "Passages of around 450 words involving legal matters, public policy or moral-philosophical enquiries. No prior knowledge of law is required; awareness of contemporary legal and moral issues can help.",
        topics: [
          "Identify and infer rules and principles in the passage",
          "Apply rules and principles to different fact situations",
          "Understand how changes to rules or principles alter their application",
        ],
      },
      {
        title: "Logical Reasoning",
        description:
          "Short passages of about 450 words, followed by one or more questions testing critical analysis and application of reasoning.",
        topics: [
          "Arguments, premises and conclusions",
          "Analyse reasoning patterns and how conclusions depend on premises or evidence",
          "Assess how changing premises or supporting facts strengthens or weakens conclusions",
          "Draw inferences and apply them to new situations",
          "Identify relationships, analogies, contradictions and equivalence; assess argument effectiveness",
        ],
      },
      {
        title: "Quantitative Techniques",
        description:
          "Short sets of facts, propositions or other textual representations of numerical information. Derive information and apply mathematical operations to it.",
        topics: [
          "Derive, infer and manipulate numerical information",
          "Apply mathematical operations at approximately the Class 10 level",
          "Ratios and proportions, basic algebra, mensuration and statistical estimation",
        ],
      },
    ],
    sourceNote:
      "Source: Official CLAT UG syllabus published by the Consortium of National Law Universities (consortiumofnlus.ac.in). Section-wise question counts and percentages are approximate. This page is an easy-reference extraction, not an official publication.",
  },
  clatPg: {
    name: "CLAT PG",
    title: "CLAT PG Syllabus",
    description:
      "The PG-CLAT places emphasis on candidates' comprehension abilities and is based on mandatory subjects from the undergraduate law programme.",
    accent: "from-red-950 via-red-900 to-rose-800",
    overview:
      "The test is 120 minutes long and has 120 objective-type questions worth one mark each, with 0.25 marks deducted for every incorrect answer.",
    pattern: [
      ["Duration", "120 minutes"],
      ["Questions", "120 objective-type"],
      ["Correct answer", "+1 mark"],
      ["Incorrect answer", "−0.25 mark"],
    ],
    weightageNote:
      "The Consortium does not publish fixed section-wise weightage for the PG paper. Constitutional Law and Jurisprudence have traditionally carried greater importance in previous years' papers.",
    sections: [
      {
        title: "Mandatory undergraduate law subjects",
        description:
          "The paper is based on the mandatory subjects of the undergraduate law programme.",
        topics: [
          "Constitutional Law",
          "Jurisprudence",
          "Administrative Law",
          "Law of Contract",
          "Torts",
          "Family Law",
          "Criminal Law",
          "Property Law",
          "Company Law",
          "Public International Law",
          "Tax Law",
          "Environmental Law",
          "Labour and Industrial Law",
        ],
      },
      {
        title: "Objective section – question style",
        description:
          "Questions follow extracts from primary legal materials, including important court decisions, statutes and regulations.",
        topics: [
          "Read and comprehend issues, arguments and viewpoints in a passage",
          "Understand the issues discussed and related legal issues and facts arising from the passage and its source judgment or statute",
          "Summarise the passage",
          "Apply knowledge of the fields of law discussed in the passage",
        ],
      },
    ],
    sourceNote:
      "Source: Official CLAT PG syllabus published by the Consortium of National Law Universities (consortiumofnlus.ac.in). This page is an easy-reference extraction, not an official publication.",
  },
  cuet: {
    name: "CUET",
    title: "CUET UG Syllabus",
    description:
      "Organise syllabus coverage by language papers, domain subjects and the General Aptitude Test.",
    accent: "from-yellow-500 via-amber-400 to-orange-500",
    sections: [
      {
        title: "Language Papers",
        description:
          "Choose from the languages listed for the relevant CUET UG cycle.",
        topics: [
          "Reading comprehension",
          "Vocabulary and language use",
          "Grammar and verbal ability",
          "Paper choice depends on the target course and university",
        ],
      },
      {
        title: "Domain Subjects",
        description:
          "Select domain papers according to the requirements of your intended courses.",
        topics: [
          "Sciences, including Physics, Chemistry and Biology",
          "Mathematics and Applied Mathematics",
          "Commerce subjects, including Accountancy, Business Studies and Economics",
          "Humanities and other listed domain subjects",
          "Prepare the subject-specific topics for each paper selected",
        ],
      },
      {
        title: "General Aptitude Test",
        description:
          "Take this paper when it is required or appropriate for your chosen courses.",
        topics: [
          "General knowledge and current affairs",
          "General mental ability and numerical ability",
          "Quantitative reasoning",
          "Logical and analytical reasoning",
        ],
      },
      {
        title: "Course and Subject Mapping",
        description:
          "There is no single subject combination that applies to every applicant.",
        topics: [
          "List intended programmes and universities",
          "Map each programme to its required CUET papers",
          "Build a separate topic checklist for every selected paper",
        ],
      },
    ],
    sourceNote:
      "This high-level outline follows the NTA CUET UG paper categories. Exact paper availability and course requirements vary by examination year, programme and university.",
  },
  jee: {
    name: "JEE",
    title: "JEE Main Syllabus",
    description:
      "A subject-wise coverage outline for Physics, Chemistry and Mathematics preparation.",
    accent: "from-slate-950 via-red-950 to-red-800",
    sections: [
      {
        title: "Physics",
        description: "Core areas commonly covered across the Physics paper.",
        topics: [
          "Physics and measurement",
          "Mechanics and properties of matter",
          "Thermodynamics, kinetic theory, oscillations and waves",
          "Electrostatics, current electricity and magnetism",
          "Electromagnetic induction, optics and modern physics",
        ],
      },
      {
        title: "Chemistry",
        description:
          "Prepare physical, inorganic and organic chemistry as separate but connected strands.",
        topics: [
          "Physical chemistry: atomic structure, states, equilibrium and kinetics",
          "Inorganic chemistry: periodicity, bonding, elements and compounds",
          "Organic chemistry: fundamentals, functional groups and reactions",
          "Practical chemistry and principles of qualitative analysis",
        ],
      },
      {
        title: "Mathematics",
        description:
          "Coverage spans algebra, geometry, calculus and statistics-related topics.",
        topics: [
          "Sets, relations, functions, complex numbers and sequences",
          "Matrices, determinants, probability and statistics",
          "Trigonometry and coordinate geometry",
          "Limits, continuity, differentiation and integration",
          "Vectors and three-dimensional geometry",
        ],
      },
    ],
    sourceNote:
      "This page is a broad, original subject map, not a year-specific official syllabus. Confirm exact chapter inclusion against the current NTA JEE Main syllabus before planning.",
  },
};
