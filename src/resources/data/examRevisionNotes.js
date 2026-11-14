export const examRevisionNotes = {
  clat: {
    name: "CLAT",
    title: "CLAT Quick Revision Notes",
    description:
      "Short revision prompts for active recall across the five CLAT sections.",
    accent: "from-red-950 via-red-900 to-rose-800",
    notes: [
      {
        title: "English Language",
        cue: "Read for structure, not isolated sentences.",
        points: [
          "Ask: What is the passage mainly arguing or explaining?",
          "Separate the author's view from views being described.",
          "Support every inference with a line or idea from the passage.",
          "Use nearby context to infer a word's meaning.",
        ],
      },
      {
        title: "Current Affairs & General Knowledge",
        cue: "Remember the event and the context around it.",
        points: [
          "Recall what happened, when and where.",
          "Name the people, institutions or countries involved.",
          "Connect the event to its background and significance.",
          "Answer passage questions from the information provided.",
        ],
      },
      {
        title: "Legal Reasoning",
        cue: "Principle + relevant facts → outcome.",
        points: [
          "Reduce the principle to its conditions and consequence.",
          "Check each condition against the facts.",
          "Apply stated exceptions before choosing an answer.",
          "Do not replace the given rule with personal ideas about fairness.",
        ],
      },
      {
        title: "Logical Reasoning",
        cue: "Conclusion, evidence, hidden assumption.",
        points: [
          "Mark the conclusion and the premises supporting it.",
          "Ask what unstated assumption links them.",
          "For strengthen/weaken questions, target that link.",
          "A sequence in time by itself does not prove cause.",
        ],
      },
      {
        title: "Quantitative Techniques",
        cue: "Values → operation → units → reasonableness check.",
        points: [
          "For a:b, total parts are a + b; one part is total ÷ (a + b).",
          "Percentage change = (change ÷ original value) × 100.",
          "Mean = sum of observations ÷ number of observations.",
          "For area and volume, write the required units before calculating.",
        ],
      },
    ],
  },
  cuet: {
    name: "CUET",
    title: "CUET Quick Revision Notes",
    description:
      "A compact checklist for recalling language, domain-subject and aptitude concepts.",
    accent: "from-yellow-500 via-amber-400 to-orange-500",
    notes: [
      {
        title: "Language Papers",
        cue: "Comprehension before vocabulary guessing.",
        points: [
          "Identify the passage's purpose and central idea.",
          "Use context clues before selecting a word meaning.",
          "Distinguish a directly stated detail from an inference.",
          "Check grammar by reading the complete sentence.",
        ],
      },
      {
        title: "Domain Subjects",
        cue: "Recall the concept, then apply it.",
        points: [
          "Define the key term without looking at your notes.",
          "Write the rule, relationship or process that governs the topic.",
          "Solve one representative question from memory.",
          "Mark uncertain units for another spaced review.",
        ],
      },
      {
        title: "Numerical Ability",
        cue: "Estimate first; calculate carefully.",
        points: [
          "Convert percentages to fractions or decimals consistently.",
          "Keep units attached to quantities through each step.",
          "Check whether a ratio is part-to-part or part-to-whole.",
          "Use an estimate to catch misplaced digits.",
        ],
      },
      {
        title: "Reasoning & General Awareness",
        cue: "Use only the conditions and facts given.",
        points: [
          "For patterns, compare the change between consecutive terms.",
          "For logic questions, test each option against every condition.",
          "For current events, recall event, date, place and key institution.",
          "Review mistakes by question type, not just by score.",
        ],
      },
    ],
  },
  jee: {
    name: "JEE",
    title: "JEE Formula & Concept Revision",
    description:
      "Concise reminders for formula recall, reaction review and problem setup across PCM.",
    accent: "from-slate-950 via-red-950 to-red-800",
    notes: [
      {
        title: "Physics",
        cue: "Draw the system and define positive directions first.",
        points: [
          "Check dimensions on both sides of an equation.",
          "For constant acceleration: v = u + at; s = ut + ½at².",
          "Work-energy reminder: net work = change in kinetic energy.",
          "In circuits, state current direction and sign convention before solving.",
          "Use limiting cases to test whether a result is physically plausible.",
        ],
      },
      {
        title: "Chemistry",
        cue: "Track species, conditions and conservation.",
        points: [
          "Balance atoms and charge in every chemical equation.",
          "For mole calculations, convert given mass using molar mass.",
          "Distinguish oxidation from reduction by tracking oxidation state.",
          "Record reagents and conditions alongside organic transformations.",
          "Use periodic trends with the correct comparison direction.",
        ],
      },
      {
        title: "Mathematics",
        cue: "State the domain before applying a transformation.",
        points: [
          "For a quadratic, discriminant D = b² − 4ac.",
          "For two vectors, a · b = |a||b| cos θ.",
          "Differentiate or integrate only after identifying the variable and interval.",
          "Check excluded values when multiplying or dividing by an expression.",
          "Substitute the final result into the original condition.",
        ],
      },
      {
        title: "Before a Timed Practice Set",
        cue: "Accuracy first, then efficient selection.",
        points: [
          "Scan the set and start with questions whose setup is clear.",
          "Write intermediate steps to reduce avoidable arithmetic errors.",
          "Mark uncertain questions and return after securing easier marks.",
          "Afterward, redo missed questions without reading the solution first.",
        ],
      },
    ],
  },
};
