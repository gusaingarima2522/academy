export const examStudyMaterial = {
  clat: {
    name: "CLAT",
    title: "CLAT Study Material",
    description:
      "Learn practical methods for reading, reasoning and working through common CLAT question styles.",
    accent: "from-red-950 via-red-900 to-rose-800",
    sourceNote:
      "Prepared as an original learning guide based on the CLAT 2027 UG syllabus published by the Consortium of NLUs. This is not an official Consortium publication.",
    areas: [
      {
        title: "Reading a passage actively",
        description:
          "Build a compact map of a passage before moving to its questions.",
        topics: [
          "Give each paragraph a short margin label",
          "Mark claims, examples and contrast words",
          "Separate the author's view from a view being discussed",
          "Return to the relevant passage lines before choosing",
          "Infer unfamiliar words from surrounding sentences",
        ],
        approach:
          "After reading a passage, summarise each paragraph briefly. Then state the central argument and use only passage evidence to answer questions.",
      },
      {
        title: "Building current-affairs recall",
        description:
          "Turn reading into connected, revisable notes instead of a list of headlines.",
        topics: [
          "Use an event card: what, who, when, where and why it matters",
          "Add one paragraph of background for major developments",
          "Link institutions, policies and people to the event",
          "Keep dated notes so facts can be updated",
          "Use weekly recall questions to revisit older material",
        ],
        approach:
          "For each important story, note what happened, who was involved, when it happened and why it matters. Revise by recalling the facts before rereading.",
      },
      {
        title: "Applying a principle",
        description:
          "Use a repeatable rule-to-facts method without relying on outside legal knowledge.",
        topics: [
          "Underline the trigger conditions in the rule",
          "Match each condition to a specific fact",
          "Check exceptions and who bears a duty",
          "Test changed facts one at a time",
          "Explain why tempting alternatives fail a condition",
        ],
        approach:
          "Rewrite the principle as an if/then rule, identify which facts satisfy its conditions, and avoid importing outside assumptions.",
      },
      {
        title: "Mapping an argument",
        description:
          "Make the reasoning visible so you can test the support for a conclusion.",
        topics: [
          "Write the conclusion separately from its evidence",
          "Ask what must be assumed for the evidence to support the claim",
          "For strengthen/weaken questions, target that assumption",
          "Distinguish correlation from proof of causation",
          "Check whether an inference must follow, not merely seem likely",
        ],
        approach:
          "State the conclusion in one sentence, list its supporting reasons, and ask what must be true for those reasons to support that conclusion.",
      },
      {
        title: "Setting up numerical questions",
        description:
          "Translate words and data into a clear calculation before doing arithmetic.",
        topics: [
          "Write down quantities with their units",
          "Choose a base value before calculating a percentage change",
          "Represent unknowns with variables",
          "Sketch and label shapes before using a mensuration formula",
          "Estimate the size of the answer as a final check",
        ],
        approach:
          "Write down the values and units first, identify what the question asks, select the relevant operation, and check whether the result is reasonable.",
      },
    ],
    studyPlan: [
      "Practise reading passages daily and summarise the main point without looking back.",
      "Rotate through all five sections during the week instead of leaving one section untouched.",
      "Keep an error log that distinguishes concept gaps, misreading, unsupported assumptions and time pressure.",
      "Revisit missed questions after a gap and explain why the correct answer follows from the passage.",
    ],
  },
  cuet: {
    name: "CUET",
    title: "CUET Study Material",
    description:
      "Use practical study routines to understand concepts and practise the CUET papers relevant to your course choices.",
    accent: "from-yellow-500 via-amber-400 to-orange-500",
    sourceNote:
      "Organised around the language, domain-subject and general-test categories in the NTA CUET UG syllabus listing. Select subjects according to the requirements of your intended courses.",
    areas: [
      {
        title: "Comprehension practice",
        description:
          "Use a short repeatable routine to improve comprehension and language accuracy.",
        topics: [
          "Preview the passage structure before answering",
          "Answer direct-detail questions from evidence",
          "Use context to resolve unfamiliar vocabulary",
          "Read grammar choices in the full sentence",
          "Review why distractor options do not fit",
        ],
        approach:
          "Read a short passage, identify its purpose and tone, then answer detail and inference questions using evidence from the text.",
      },
      {
        title: "Learning a domain concept",
        description:
          "Organise learning around the subject papers you have selected.",
        topics: [
          "Start with definitions and prerequisite ideas",
          "Create a concept map linking related terms",
          "Recall processes or relationships without notes",
          "Solve representative questions and explain each step",
          "Revisit weak concepts after increasing time intervals",
        ],
        approach:
          "Study one syllabus unit at a time: recall key definitions and relationships, solve representative questions, then record topics that need another review.",
      },
      {
        title: "Numerical and reasoning practice",
        description:
          "Practise a method first, then improve speed while keeping accuracy.",
        topics: [
          "Estimate calculations before choosing an answer",
          "Write conditions explicitly for logic problems",
          "Read chart titles, units and legends before comparing values",
          "Use elimination only after checking each condition",
          "Keep an error log by question type",
        ],
        approach:
          "Practise untimed questions first to establish accuracy. Add a time limit only after you can explain the method used for each answer.",
      },
      {
        title: "Planning a weekly study cycle",
        description:
          "Balance new learning, retrieval practice and correction across your chosen papers.",
        topics: [
          "Set a small number of measurable weekly outcomes",
          "Alternate new concepts with review of earlier units",
          "Use short quizzes to identify gaps early",
          "Reserve a session to correct errors and retry questions",
        ],
        approach:
          "Maintain one checklist per selected paper and mark each topic as new, practising or ready for revision.",
      },
    ],
    studyPlan: [
      "Write down your target courses and the CUET papers you plan to take.",
      "Divide each selected subject into small units and set weekly completion goals.",
      "Use active recall: close your notes and explain a concept or solve a problem from memory.",
      "Review mistakes by subject and return to the underlying concept before repeating the question.",
    ],
  },
  jee: {
    name: "JEE",
    title: "JEE Study Material",
    description:
      "Learn problem-solving workflows for Physics, Chemistry and Mathematics, then use them in deliberate practice.",
    accent: "from-slate-950 via-red-950 to-red-800",
    sourceNote:
      "An original subject-wise revision guide for JEE Main preparation. Check the current NTA syllabus and exam notice for the applicable year before finalising topic coverage.",
    areas: [
      {
        title: "Physics problem setup",
        description:
          "Translate a physical situation into a diagram, a principle and a checkable result.",
        topics: [
          "Choose a system and draw a labelled diagram",
          "List knowns and unknowns with SI units",
          "Select a governing law before substituting values",
          "Keep sign conventions consistent through the calculation",
          "Check dimensions and limiting cases",
        ],
        approach:
          "Draw a diagram, list known quantities with units, identify the governing principle, and check dimensions and limiting cases in the result.",
      },
      {
        title: "Chemistry problem workflow",
        description:
          "Combine chemical representation, conservation and conditions when solving.",
        topics: [
          "Convert quantities to moles before comparing reacting amounts",
          "Track atoms, charge and oxidation state",
          "Record reagents and conditions with reaction transformations",
          "Distinguish observation from the explanation of a trend",
          "Check significant figures and units in numerical answers",
        ],
        approach:
          "Keep separate revision sheets for formulas, trends and reaction transformations. For every reaction, record the conditions and the reason the product forms.",
      },
      {
        title: "Mathematics solution workflow",
        description:
          "Make algebraic steps verifiable and test the final result against the original question.",
        topics: [
          "State domains and restrictions before transforming expressions",
          "Select a relevant identity, theorem or definition",
          "Keep equivalent transformations clear and reversible",
          "Check excluded values and boundary cases",
          "Substitute candidate answers into the original condition",
        ],
        approach:
          "Before solving, identify the relevant definition or theorem. Show intermediate steps so that algebraic slips can be found during review.",
      },
      {
        title: "Deliberate problem practice",
        description:
          "Turn each practice attempt into a focused next step rather than just a score.",
        topics: [
          "Attempt a problem before reading its worked solution",
          "Classify errors as concept, setup, algebra or execution",
          "Redo missed questions after a delay",
          "Mix familiar and unfamiliar problem types",
          "Use timed sets only after the method is reliable",
        ],
        approach:
          "Classify each missed question as a concept gap, setup error, calculation error or time-management issue, then practise that specific weakness.",
      },
    ],
    studyPlan: [
      "Set weekly goals for all three subjects and reserve time for revisiting older topics.",
      "Learn a concept, study one worked example, and then solve questions without seeing the solution.",
      "Maintain concise formula, reaction and method sheets in your own words.",
      "Use timed practice to assess readiness, but spend at least as much effort reviewing errors as attempting questions.",
    ],
  },
};
