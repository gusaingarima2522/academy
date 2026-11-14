import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import clatBookNotes from "../data/clatBookNotes.json";
import {
  englishTeachingGuides,
  logicalTeachingGuides,
  quantitativeTeachingGuides,
} from "../data/clatBookTeachingGuides";
import {
  currentNewsSuggestions,
  gkQuizQuestions,
  gkTopics,
} from "../data/clatCurrentAffairs";
import {
  legalPassages,
  legalQuestions,
  legalTopics,
} from "../data/clatLegalReasoningPractice";

const BOOK_CATEGORIES = [
  {
    title: "CLAT UG Professional Notes",
    slug: "clat-ug-professional-notes",
    description: "The CLAT UG professional notes PDF has not been uploaded yet.",
    available: false,
  },
  {
    title: "English Language",
    slug: "english-language",
    description: "Grammar, vocabulary, and reading comprehension notes.",
    available: true,
  },
  {
    title: "Current Affairs and GK",
    slug: "current-affairs-and-gk",
    description:
      "Learn how to build source-based notes for current affairs and revise the static GK connected to each topic.",
    available: true,
  },
  {
    title: "Legal Reasoning",
    slug: "legal-reasoning",
    description: "Principles, facts, and legal reasoning practice.",
    available: true,
  },
  {
    title: "Logical Reasoning",
    slug: "logical-reasoning",
    description: "Study topic-by-topic Logical Reasoning notes online.",
    available: true,
  },
  {
    title: "Quantitative Techniques",
    slug: "quantitative-techniques",
    description:
      "Study topic-by-topic quantitative notes, from number systems and arithmetic to data interpretation and mensuration.",
    available: true,
  },
];

const logicalReasoningNotes = [
  {
    title: "Analogy",
    fileName: "selfstudys_com_file.pdf",
    sections: [
      {
        heading: "Recognise the relationship",
        text: "An analogy tests whether you can identify the connection between one pair and apply the same connection to another. Common links include an object and its use, a worker and workplace, or a country and its capital.",
      },
      {
        heading: "A reliable approach",
        text: "Describe the first pair in a short, precise phrase before checking the options. For example, “pen is used for writing”; then choose the option with that same direction of relationship, not merely two related words.",
      },
    ],
  },
  {
    title: "Odd One Out",
    fileName: "selfstudys_com_file (1).pdf",
    sections: [
      {
        heading: "Find the shared rule",
        text: "In an odd-one-out question, most choices share a meaningful property and one does not. The property may involve category, spelling, number, shape, use, or a consistent mathematical pattern.",
      },
      {
        heading: "Check every option",
        text: "Look for a rule that explains all but one choice. For example, if three words name professions and one names a place, the place is the outlier. Avoid choosing based on a vague association.",
      },
    ],
  },
  {
    title: "Missing Term in Series",
    fileName: "selfstudys_com_file (2).pdf",
    sections: [
      {
        heading: "Test the sequence pattern",
        text: "A series may use letters, numbers, or both. Compare consecutive terms for a repeated increase or decrease, alternating steps, multiplication, squares, or a pattern based on alphabet positions.",
      },
      {
        heading: "Verify the missing term",
        text: "Write down the change from one term to the next and check that it works on both sides of the blank. For letter series, convert letters to positions (A = 1 through Z = 26) and account for wraparound where needed.",
      },
    ],
  },
  {
    title: "Missing Numbers in the Figure",
    fileName: "selfstudys_com_file (3).pdf",
    sections: [
      {
        heading: "Compare the number positions",
        text: "Number puzzles arranged in triangles, circles, or grids usually apply a consistent operation to each side, row, column, or group. Check how the known values combine before testing the blank.",
      },
      {
        heading: "Apply one rule consistently",
        text: "Test simple operations first: addition, subtraction, multiplication, division, squares, or differences. A valid rule should explain the completed examples as well as the figure containing the missing number.",
      },
    ],
  },
  {
    title: "Mathematical Operation and Arithmetical Reasoning",
    fileName: "selfstudys_com_file (4).pdf",
    sections: [
      {
        heading: "Decode the operators",
        text: "Some questions assign unusual meanings to familiar symbols. Translate each symbol into the operation stated in the question before evaluating the expression.",
      },
      {
        heading: "Use order of operations",
        text: "After replacing the symbols, follow the stated convention and standard precedence rules, such as brackets before multiplication or division and addition or subtraction. For arithmetic reasoning, turn the wording into a clear equation and check units and conditions.",
      },
    ],
  },
  {
    title: "Dictionary, Word Sequence and Word Formation",
    fileName: "selfstudys_com_file (5).pdf",
    sections: [
      {
        heading: "Dictionary order",
        text: "To arrange words alphabetically, compare their letters from left to right. The first position at which two words differ determines which comes first; if one word is a complete prefix of another, the shorter word comes first.",
      },
      {
        heading: "Word formation",
        text: "For word-formation questions, compare the available letters with the target word, respecting how many times each letter occurs. Do not use a letter that is absent or use a repeated letter more times than it appears.",
      },
    ],
  },
  {
    title: "Logical Venn Diagram",
    fileName: "selfstudys_com_file (6).pdf",
    sections: [
      {
        heading: "Represent set relationships",
        text: "Venn diagrams show how groups relate. A circle inside another can represent a subgroup; separate circles represent unrelated groups; overlapping circles show shared members.",
      },
      {
        heading: "Translate the wording carefully",
        text: "Identify whether the question says all, some, or none before drawing. For example, “all roses are flowers” places the rose set inside the flower set, but does not mean every flower is a rose.",
      },
    ],
  },
  {
    title: "Dice and Cube",
    fileName: "selfstudys_com_file (7).pdf",
    sections: [
      {
        heading: "Track faces and adjacency",
        text: "A cube has six faces. In dice questions, each view shows faces meeting at a corner; use repeated faces across views to determine which faces are adjacent or opposite.",
      },
      {
        heading: "Distinguish dice conventions",
        text: "Some questions use a standard die, where opposite faces total seven, while others use a non-standard die. Apply the sum-to-seven rule only when the question specifies or establishes a standard die.",
      },
    ],
  },
  {
    title: "Clock and Calendar",
    fileName: "selfstudys_com_file (8).pdf",
    sections: [
      {
        heading: "Clock angles",
        text: "The minute hand moves 6 degrees per minute and the hour hand moves 0.5 degrees per minute. Find each hand’s position from 12, then take the smaller angle between them.",
      },
      {
        heading: "Calendar odd days",
        text: "An ordinary year has 365 days (one day more than 52 full weeks); a leap year has 366 (two extra days). For a date question, count complete years and months, accounting for leap years and the weekday offset.",
      },
    ],
  },
  {
    title: "Figure Counting",
    fileName: "selfstudys_com_file (9).pdf",
    sections: [
      {
        heading: "Count systematically",
        text: "Figure-counting questions ask for the number of shapes hidden in a more complex drawing. Count the smallest shapes first, then combine adjacent parts to find larger shapes.",
      },
      {
        heading: "Avoid double-counting",
        text: "Use a fixed order—for example, count by size or by orientation—and trace each candidate shape’s complete boundary. Include only shapes whose sides are fully formed by the drawn lines.",
      },
    ],
  },
  {
    title: "Direction and Distance",
    fileName: "selfstudys_com_file (10).pdf",
    sections: [
      {
        heading: "Map each movement",
        text: "Sketch the route with north at the top, south at the bottom, east to the right, and west to the left. Mark each turn and distance from the current position rather than restarting from the origin.",
      },
      {
        heading: "Find the final direction or distance",
        text: "Combine horizontal and vertical movement separately. If the route forms a right triangle, use the Pythagorean theorem for the straight-line distance; distinguish that from the total distance travelled.",
      },
    ],
  },
  {
    title: "Blood Relation",
    fileName: "selfstudys_com_file (11).pdf",
    sections: [
      {
        heading: "Build a family tree",
        text: "Blood-relation problems describe family connections through short statements. Mark each person and connect generations clearly; label gender only when the statement gives enough information.",
      },
      {
        heading: "Read relationships from the named person",
        text: "Trace the chain one link at a time and pay attention to whose perspective is asked for. Do not assume a person’s gender, marriage, or relationship unless the clues establish it.",
      },
    ],
  },
  {
    title: "Figure Matrix",
    fileName: "selfstudys_com_file (12).pdf",
    sections: [
      {
        heading: "Compare rows and columns",
        text: "A figure matrix arranges symbols, letters, or numbers in rows and columns. The missing cell usually follows a transformation or relationship repeated across each row, each column, or both.",
      },
      {
        heading: "Test visual changes",
        text: "Compare position, rotation, count, shading, direction, and overlap separately. Find the simplest rule that fits all completed rows or columns, then apply it to the blank cell.",
      },
    ],
  },
  {
    title: "Statement and Conclusions",
    fileName: "selfstudys_com_file (13).pdf",
    sections: [
      {
        heading: "Use only the given statement",
        text: "A conclusion follows only when it is supported by the information stated. Treat the statement as true for the question, but do not add outside facts or assumptions.",
      },
      {
        heading: "Check what must follow",
        text: "Test each conclusion independently: could it be false while the statement remains true? If so, it does not necessarily follow. A conclusion that is merely possible or familiar is not automatically supported.",
      },
    ],
  },
  {
    title: "Coding-Decoding",
    fileName: "selfstudys_com_file (14).pdf",
    sections: [
      {
        heading: "Identify the code rule",
        text: "Coding-decoding questions transform letters, numbers, or words using a consistent rule. Common methods include shifting alphabet positions, reversing order, replacing symbols, or applying more than one step.",
      },
      {
        heading: "Apply the rule in the same direction",
        text: "Compare the original and coded examples position by position. Once the rule is clear, apply it consistently to the new item and verify the result against every example provided.",
      },
    ],
  },
  {
    title: "Statement and Assumption",
    fileName: "selfstudys_com_file (15).pdf",
    sections: [
      {
        heading: "What is an assumption?",
        text: "An assumption is an unstated idea taken for granted when a statement is made. It is not simply another conclusion or a fact that could be true independently.",
      },
      {
        heading: "Use the necessity test",
        text: "Ask whether the statement or proposed action would make sense without the assumption. Accept only ideas that the speaker must be taking for granted; avoid adding claims not implied by the wording.",
      },
    ],
  },
  {
    title: "Syllogism",
    fileName: "selfstudys_com_file (16).pdf",
    sections: [
      {
        heading: "Represent the statements",
        text: "Syllogisms test what conclusions follow from categorical statements such as all, no, and some. Use set diagrams to represent the groups and their overlap or separation.",
      },
      {
        heading: "Do not reverse a claim automatically",
        text: "“All A are B” means the A group lies within B; it does not establish that all B are A. Check each conclusion against every arrangement allowed by the statements.",
      },
    ],
  },
  {
    title: "Order, Ranking and Sitting Arrangement",
    fileName: "selfstudys_com_file (17).pdf",
    sections: [
      {
        heading: "Translate positions into a diagram",
        text: "Ranking questions describe positions from the left, right, top, or bottom. Arrangement questions add clues about neighbours, direction, and relative order; record each clue before deciding the positions.",
      },
      {
        heading: "Resolve clues step by step",
        text: "Draw a row, circle, or table that matches the arrangement. Fix definite relationships first, then test remaining possibilities against every clue. For circular seating, note whether people face the centre or face outward.",
      },
    ],
  },
].map(({ title, sections }) => ({
  title,
  sections,
  category: "logical-reasoning",
  ...logicalTeachingGuides[title],
}));

const quantitativeNotes = [
  {
    title: "Number System and Simplifications",
    fileName: "selfstudys_com_file.pdf",
    sections: [
      {
        heading: "Number types",
        text: "Classify values as natural numbers, whole numbers, integers, rational numbers, or irrational numbers. A rational number can be written as a fraction of integers with a non-zero denominator.",
      },
      {
        heading: "Simplify carefully",
        text: "Use brackets and order of operations consistently. Reduce fractions, check signs, and estimate the result to catch arithmetic errors.",
      },
    ],
  },
  {
    title: "LCM and HCF",
    fileName: "selfstudys_com_file (1).pdf",
    sections: [
      {
        heading: "Choose the right measure",
        text: "The HCF is the greatest number that divides each given number exactly. The LCM is the least positive number that is a multiple of every given number.",
      },
      {
        heading: "Prime factorisation method",
        text: "Write each integer as a product of primes. For the HCF, use common primes with the smallest powers; for the LCM, use every prime with the largest power present.",
      },
    ],
  },
  {
    title: "Surds and Indices",
    fileName: "selfstudys_com_file (2).pdf",
    sections: [
      {
        heading: "Index laws",
        text: "For non-zero a, multiplying like bases adds exponents, dividing like bases subtracts exponents, and raising a power to a power multiplies exponents: aᵐaⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, and (aᵐ)ⁿ = aᵐⁿ.",
      },
      {
        heading: "Simplify surds",
        text: "Factor out perfect squares before simplifying a square root. Combine only like surds, and rationalise a denominator only when the expression calls for it.",
      },
    ],
  },
  {
    title: "Ratio, Proportion and Partnership",
    fileName: "selfstudys_com_file (3).pdf",
    sections: [
      {
        heading: "Ratios and proportions",
        text: "A ratio compares quantities in the same units. Simplify a:b by dividing both terms by the same non-zero factor; a proportion states that two ratios are equal.",
      },
      {
        heading: "Partnership problems",
        text: "When partners invest for different lengths of time, compare capital multiplied by time. Divide the profit in the same ratio as these investment-time products, subject to the question’s conditions.",
      },
    ],
  },
  {
    title: "Mixture and Alligation",
    fileName: "selfstudys_com_file (4).pdf",
    sections: [
      {
        heading: "Weighted average",
        text: "The mean value of a mixture depends on both the component values and their quantities. Calculate total value divided by total quantity rather than taking an unweighted average.",
      },
      {
        heading: "Alligation",
        text: "For two components priced on either side of a target mean, compare each component’s difference from the mean. The quantities are in the inverse ratio of those differences.",
      },
    ],
  },
  {
    title: "Percentage",
    fileName: "selfstudys_com_file (5).pdf",
    sections: [
      {
        heading: "Convert between forms",
        text: "Percent means per hundred: x% = x/100. To find x% of a quantity, multiply the quantity by x/100; convert fractions and decimals before comparing values.",
      },
      {
        heading: "Percentage change",
        text: "Percentage increase or decrease is the change divided by the original value, multiplied by 100. For successive changes, apply each percentage to the updated value.",
      },
    ],
  },
  {
    title: "Profit and Loss",
    fileName: "selfstudys_com_file (6).pdf",
    sections: [
      {
        heading: "Cost price and selling price",
        text: "Profit = selling price − cost price when the selling price is higher. Loss = cost price − selling price when it is lower.",
      },
      {
        heading: "Calculate the percentage",
        text: "Unless a question states otherwise, profit or loss percentage is measured against cost price. Keep discounts, marked price, and selling price distinct when setting up the calculation.",
      },
    ],
  },
  {
    title: "Simple Interest and Compound Interest",
    fileName: "selfstudys_com_file (7).pdf",
    sections: [
      {
        heading: "Simple interest",
        text: "For principal P, annual rate R percent, and time T years, simple interest is P × R × T / 100. The amount is principal plus interest.",
      },
      {
        heading: "Compound interest",
        text: "With annual compounding, amount A = P(1 + R/100)ᵀ and compound interest is A − P. Match the compounding period and rate period before substituting values.",
      },
    ],
  },
  {
    title: "Average",
    fileName: "selfstudys_com_file (8).pdf",
    sections: [
      {
        heading: "Mean average",
        text: "Average = sum of all observations ÷ number of observations. If the average and count are known, total = average × count.",
      },
      {
        heading: "Changing a group",
        text: "When an item is added or removed, update both the total and the count. Recalculate the mean from the new total instead of adjusting the old average without checking.",
      },
    ],
  },
  {
    title: "Time and Work",
    fileName: "selfstudys_com_file (9).pdf",
    sections: [
      {
        heading: "Work rate",
        text: "If a person completes a job in d days, their rate is 1/d of the job per day. Add rates for people working together, then invert the combined rate to find the completion time.",
      },
      {
        heading: "Use consistent units",
        text: "For combined work problems, account for the amount of work, number of workers, and hours per day. Keep rates in the same time units before combining them.",
      },
    ],
  },
  {
    title: "Pipe and Cistern",
    fileName: "selfstudys_com_file (10).pdf",
    sections: [
      {
        heading: "Filling and emptying rates",
        text: "A pipe that fills a tank in x hours fills 1/x of the tank per hour. An outlet that empties it in y hours removes 1/y per hour.",
      },
      {
        heading: "Net rate",
        text: "Add the rates of filling pipes and subtract the rates of outlets. The time to fill or empty the tank is the reciprocal of the resulting positive or negative net rate.",
      },
    ],
  },
  {
    title: "Speed, Time and Distance",
    fileName: "selfstudys_com_file (11).pdf",
    sections: [
      {
        heading: "Core relationship",
        text: "Distance = speed × time. Rearrange to find speed or time, and convert units consistently; for example, converting km/h to m/s uses multiplication by 5/18.",
      },
      {
        heading: "Average speed",
        text: "Average speed is total distance divided by total time. For equal distances travelled at different speeds, use the harmonic mean rather than the simple average.",
      },
    ],
  },
  {
    title: "Boat and Stream",
    fileName: "selfstudys_com_file (12).pdf",
    sections: [
      {
        heading: "Upstream and downstream",
        text: "If still-water boat speed is b and stream speed is s, downstream speed is b + s and upstream speed is b − s, assuming the boat can travel against the stream.",
      },
      {
        heading: "Recover the component speeds",
        text: "Given downstream and upstream speeds, still-water speed is half their sum and stream speed is half their difference. Use distance = speed × time for each leg of a trip.",
      },
    ],
  },
  {
    title: "Data Interpretation",
    fileName: "selfstudys_com_file (13).pdf",
    sections: [
      {
        heading: "Read the representation first",
        text: "Data may be shown in tables, bar charts, line graphs, pie charts, or mixed displays. Check the title, units, labels, time period, and whether values are actual figures or scaled quantities.",
      },
      {
        heading: "Calculate and verify",
        text: "Identify what the question asks before calculating. Use totals, differences, ratios, averages, and percentages as needed; estimate first and check that the result matches the chart’s scale.",
      },
    ],
  },
  {
    title: "Line, Angle and Triangle",
    fileName: "selfstudys_com_file (14).pdf",
    sections: [
      {
        heading: "Angle relationships",
        text: "Angles on a straight line sum to 180°, angles around a point sum to 360°, and vertically opposite angles are equal. Parallel lines create equal corresponding and alternate angles.",
      },
      {
        heading: "Triangle facts",
        text: "The interior angles of a triangle sum to 180°. In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.",
      },
    ],
  },
  {
    title: "Circle",
    fileName: "selfstudys_com_file (15).pdf",
    sections: [
      {
        heading: "Parts of a circle",
        text: "The radius runs from the centre to the circumference. A diameter passes through the centre and is twice the radius; a chord joins two points on the circumference.",
      },
      {
        heading: "Circumference and area",
        text: "For radius r, circumference is 2πr and area is πr². Use the value of π and units requested by the question, and distinguish perimeter from area.",
      },
    ],
  },
  {
    title: "Quadrilaterals",
    fileName: "selfstudys_com_file (16).pdf",
    sections: [
      {
        heading: "Properties",
        text: "A quadrilateral has four sides and its interior angles sum to 360°. Parallelograms have opposite sides parallel and equal; rectangles also have four right angles.",
      },
      {
        heading: "Area and perimeter",
        text: "Use the formula that matches the shape and the measurements provided. Perimeter adds side lengths, while area measures the enclosed surface; keep the units appropriate.",
      },
    ],
  },
  {
    title: "Co-ordinate Geometry",
    fileName: "selfstudys_com_file (17).pdf",
    sections: [
      {
        heading: "Coordinates and quadrants",
        text: "A point is written (x, y): x is the horizontal coordinate and y is vertical. The signs in each coordinate identify the quadrant; points on an axis are not in a quadrant.",
      },
      {
        heading: "Distance between points",
        text: "For points (x₁, y₁) and (x₂, y₂), distance = √[(x₂ − x₁)² + (y₂ − y₁)²]. This follows from applying the Pythagorean theorem to horizontal and vertical differences.",
      },
    ],
  },
  {
    title: "Algebra",
    fileName: "selfstudys_com_file (18).pdf",
    sections: [
      {
        heading: "Expressions and identities",
        text: "Use algebraic identities to expand or factor expressions, such as (a + b)² = a² + 2ab + b². Keep like terms together and preserve signs when removing brackets.",
      },
      {
        heading: "Solve and check",
        text: "Perform the same operation on both sides of an equation to isolate the unknown. Substitute the result back into the original equation to verify it.",
      },
    ],
  },
  {
    title: "Trigonometry",
    fileName: "selfstudys_com_file (19).pdf",
    sections: [
      {
        heading: "Right-triangle ratios",
        text: "For an acute angle in a right triangle, sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent.",
      },
      {
        heading: "Choose the relevant ratio",
        text: "Label the sides relative to the angle given, then select the ratio containing the known and required sides. Check angle units and use only values or identities appropriate to the question.",
      },
    ],
  },
  {
    title: "Height and Distance",
    fileName: "selfstudys_com_file (20).pdf",
    sections: [
      {
        heading: "Draw the situation",
        text: "Represent the observer, object, horizontal line, and line of sight in a right-triangle diagram. The angle above the horizontal is the angle of elevation; below it is the angle of depression.",
      },
      {
        heading: "Apply trigonometric ratios",
        text: "Label the opposite, adjacent, and hypotenuse sides for the given angle. Choose sine, cosine, or tangent to relate the known distance or height to the required measurement.",
      },
    ],
  },
  {
    title: "Mensuration - Plane Figures",
    fileName: "selfstudys_com_file (21).pdf",
    sections: [
      {
        heading: "Plane area and perimeter",
        text: "Mensuration of plane figures deals with boundary length and enclosed area. Select the formula for the given shape, and convert measurements to consistent units first.",
      },
      {
        heading: "Composite figures",
        text: "Split an irregular figure into familiar shapes, calculate each area, and add or subtract the parts as appropriate. For a perimeter, count only the outside boundary.",
      },
    ],
  },
  {
    title: "Mensuration - Solids",
    fileName: "selfstudys_com_file (22).pdf",
    sections: [
      {
        heading: "Surface area and volume",
        text: "For three-dimensional solids, distinguish lateral or curved surface area, total surface area, and volume. Area is measured in square units; volume is measured in cubic units.",
      },
      {
        heading: "Identify the solid",
        text: "Choose the formula for the solid shown, such as a cuboid, cylinder, cone, or sphere. Check whether the question includes end faces and keep all dimensions in consistent units.",
      },
    ],
  },
].map(({ title, sections }) => ({
  title,
  sections,
  category: "quantitative-techniques",
  ...quantitativeTeachingGuides[title],
}));

const currentAffairsNotes = gkTopics.map((topic) => {
  const relatedQuestion = gkQuizQuestions.find(
    (question) => question.topicId === topic.id
  );
  const relatedNews = relatedQuestion
    ? currentNewsSuggestions.find((item) => item.id === relatedQuestion.sourceId)
    : undefined;

  return {
    title: topic.title,
    category: "current-affairs-and-gk",
    practice: relatedQuestion
      ? {
          question: relatedQuestion.prompt,
          options: relatedQuestion.options,
          answer: relatedQuestion.answer,
          explanation: relatedQuestion.explanation,
        }
      : undefined,
    sections: [
      { heading: "What this topic covers", text: topic.description },
      {
        heading: "Build a CLAT-ready topic note",
        text: "Start with one verified development or core concept. Record the date and place, the institution or person involved, the key term, what changed, and why it matters. Separate the source’s stated facts from your background explanation.",
      },
      {
        heading: "Revise it like a teacher",
        text: "Close your notes and explain the topic aloud in three steps: identify the event or concept, explain its context, then connect it to the relevant institution, geography, policy, or scientific idea. Reopen the source to correct gaps; revisit changing facts before the exam.",
      },
      {
        heading: "Worked example",
        text: relatedNews
          ? `${relatedNews.headline}. The study link is ${relatedNews.source}; use the date, named institution, development, and background connection in the note-taking method above. ${relatedNews.whyItMatters}`
          : `For a headline related to ${topic.title.toLowerCase()}, do not stop at the headline. Find the primary source, identify the named institution and the precise development, then explain one relevant background concept. Verify changing dates, figures, and office-holders close to the exam.`,
      },
    ],
    example: relatedNews
      ? `Read the linked ${relatedNews.source} report. Before looking at your notes, state what happened, name the institution, and explain this connection: ${relatedNews.whyItMatters}`
      : `Choose a reliable source about ${topic.title.toLowerCase()}. Summarise the development in one sentence, then add its date, institution, and one relevant background fact.`,
    misconception:
      "Do not memorise an unsourced headline as a complete fact. Verify names, dates, locations, and figures in the linked primary or authoritative source.",
    resourceLink: "/resources/current-affairs",
  };
});

const legalReasoningNotes = legalTopics.map((topic) => {
  const relatedQuestion = legalQuestions.find(
    (question) => question.topicId === topic.id
  );
  const relatedPassage = relatedQuestion
    ? legalPassages.find((passage) => passage.id === relatedQuestion.passageId)
    : undefined;
  const practice = relatedQuestion
    ? {
        question: relatedQuestion.prompt,
        options: relatedQuestion.options,
        answer: relatedQuestion.answer,
        explanation: `${relatedQuestion.explanation} ${relatedQuestion.optionExplanations?.[relatedQuestion.answer] || ""}`.trim(),
      }
    : undefined;

  return {
    title: topic.title,
    category: "legal-reasoning",
    sections: [
      { heading: "What this topic tests", text: topic.description },
      {
        heading: "First identify the rule",
        text: relatedPassage
          ? `${relatedPassage.content} Treat this as a fictional exercise: apply only the rule stated in the passage, not real-world law or facts you happen to know.`
          : "Read the principle in the passage carefully. For this practice, treat it as the complete rule and do not add outside legal knowledge.",
      },
      {
        heading: "Apply it like a teacher",
        text: "Break the rule into elements. Match each element to a fact in the question, mark any condition or exception, and then state the narrow conclusion that follows. If one required element is missing, do not fill the gap with a guess.",
      },
      ...(relatedQuestion
        ? [{
            heading: "Teacher walkthrough",
            text: `Question: ${relatedQuestion.prompt} Start by identifying the rule element being tested, then match it to the stated facts. ${relatedQuestion.explanation}`,
          }]
        : []),
    ],
    example: relatedQuestion
      ? `Try this fact pattern: ${relatedQuestion.prompt} Identify the rule and controlling facts before checking the practice question below.`
      : "Write the rule as a short checklist, then test each fact against one checklist item at a time.",
    misconception:
      "These are CLAT reasoning exercises, not legal advice. Do not substitute current statutes, cases, or personal assumptions for the fictional principle supplied in a passage.",
    practice,
    resourceLink: "/resources/clat-legal-reasoning",
  };
});

const allBookNotes = [
  ...clatBookNotes.map(({ pdfUrl: _pdfUrl, ...note }) => ({
    ...note,
    category: "english-language",
    ...englishTeachingGuides[note.title],
  })),
  ...logicalReasoningNotes,
  ...quantitativeNotes,
  ...currentAffairsNotes,
  ...legalReasoningNotes,
];

const toTopicSlug = (title) =>
  title
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .toLowerCase();

const getTopicPath = (topic) =>
  `/resources/clat/books/${toTopicSlug(topic.title)}`;

const getCategoryPath = (category) =>
  `/resources/clat/books/category/${category.slug}`;

const ClatBookNotes = () => {
  const { categorySlug, topicSlug } = useParams();
  const category = BOOK_CATEGORIES.find((item) => item.slug === categorySlug);
  const topic = allBookNotes.find(
    (item) => toTopicSlug(item.title) === topicSlug
  );
  const categoryNotes = allBookNotes.filter(
    (item) => item.category === category?.slug
  );
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  if (!topicSlug && !categorySlug) {
    return (
      <main className="min-h-[70vh] bg-gray-50">
        <header className="bg-gradient-to-br from-red-950 via-red-900 to-rose-800 px-4 py-12 text-white sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/resources/clat"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-white/20"
            >
              <span aria-hidden="true">←</span> CLAT resources
            </Link>
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-yellow-200">
              CLAT study library
            </p>
            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Book Notes
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Choose a CLAT section to explore its notes and study material.
            </p>
          </div>
        </header>

        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 sm:py-12 lg:grid-cols-3">
          {BOOK_CATEGORIES.map((item, index) => (
            <Link
              key={item.slug}
              to={getCategoryPath(item)}
              className="group flex min-h-48 flex-col rounded-2xl border border-gray-200 border-t-4 border-t-red-800 bg-white p-5 text-gray-800 no-underline shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 sm:p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-sm font-extrabold text-red-900">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-red-900">
                {item.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
              <span className="mt-4 flex items-center justify-between text-sm font-bold text-red-900">
                {item.available
                  ? `${allBookNotes.filter((note) => note.category === item.slug).length} topics`
                  : "Coming soon"}
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </section>
      </main>
    );
  }

  if (categorySlug) {
    if (!category) {
      return (
        <main className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-red-900">
            Section not found
          </h1>
          <Link
            to="/resources/clat/books"
            className="mt-5 inline-flex font-semibold text-red-900 underline"
          >
            Back to CLAT Book Notes
          </Link>
        </main>
      );
    }

    return (
      <main className="min-h-[70vh] bg-gray-50">
        <header className="bg-gradient-to-br from-red-950 via-red-900 to-rose-800 px-4 py-10 text-white sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Breadcrumb" className="text-sm text-red-100">
              <Link to="/resources" className="text-white underline">
                Resources
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link to="/resources/clat" className="text-white underline">
                CLAT
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link to="/resources/clat/books" className="text-white underline">
                Book Notes
              </Link>
            </nav>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-yellow-200">
              CLAT study library
            </p>
            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              {category.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              {category.description}
            </p>
          </div>
        </header>

        {category.available ? (
          <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
            {category.pdfUrl ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <a
                      href={category.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-red-900 px-4 py-3 text-sm font-bold text-white no-underline transition hover:bg-red-800"
                    >
                      Open PDF
                    </a>
                    <a
                      href={category.pdfUrl}
                      download
                      className="rounded-xl border border-red-900 px-4 py-3 text-sm font-bold text-red-900 no-underline transition hover:bg-red-50"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
                <iframe
                  className="mt-5 h-[70vh] min-h-[32rem] w-full rounded-xl border border-gray-200"
                  src={category.pdfUrl}
                  title={category.title}
                  loading="lazy"
                />
              </div>
            ) : (
              <>
                <h2 className="mb-5 text-xl font-bold text-gray-900">
                  {category.title} topics
                </h2>
                <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {categoryNotes.map((item, index) => (
                    <li key={item.title}>
                      <Link
                        to={getTopicPath(item)}
                        className="group flex min-h-16 items-center gap-3 rounded-xl border border-gray-200 border-l-4 border-l-red-700 bg-white px-3 py-3 text-gray-800 no-underline shadow-sm transition hover:border-red-800 hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 sm:px-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-red-50 text-xs font-bold text-red-800">
                          {index + 1}
                        </span>
                        <span className="min-w-0 flex-1 text-sm font-semibold text-red-900 group-hover:text-red-950 sm:text-base">
                          {item.title}
                        </span>
                        <span className="text-red-800" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
                {category.slug === "quantitative-techniques" && (
                  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                    <h3 className="font-bold text-gray-900">
                      CLAT syllabus focus
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      The official syllabus focuses on deriving and interpreting
                      numerical information, with Class 10 mathematics including
                      ratios and proportions, basic algebra, mensuration, and
                      statistical estimation.                       The cards above follow a practical topic order; some
                      chapters provide additional mathematics practice.
                    </p>
                    <a
                      href="https://clat2027.consortiumofnlus.ac.in/clat-2027/ug-syllabus.html"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex font-semibold text-red-900 underline underline-offset-4"
                    >
                      View the official CLAT 2027 syllabus
                    </a>
                  </div>
                )}
              </>
            )}
          </section>
        ) : (
          <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-10">
              <h2 className="text-xl font-bold text-gray-900">
                Notes coming soon
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Study material for {category.title} will be added here.
              </p>
            </div>
          </section>
        )}

        <div className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
          <Link
            to="/resources/clat/books"
            className="font-semibold text-red-900 underline underline-offset-4"
          >
            ← All Book Notes sections
          </Link>
        </div>
      </main>
    );
  }

  if (!topic) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">Topic not found</h1>
        <Link
          to="/resources/clat/books"
          className="mt-5 inline-flex font-semibold text-red-900 underline"
        >
          Back to CLAT Book Notes
        </Link>
      </main>
    );
  }

  const previewText = topic.sections
    .slice(0, 2)
    .map(({ text }) => text)
    .join(" ");
  const topicCollection = allBookNotes.filter(
    (item) => item.category === topic.category
  );
  const topicIndex = topicCollection.findIndex(
    (item) => item.title === topic.title
  );
  const suggestedTopics = Array.from(
    { length: Math.min(3, topicCollection.length - 1) },
    (_, index) =>
      topicCollection[(topicIndex + index + 1) % topicCollection.length]
  );

  const submitTopicQuiz = (event) => {
    event.preventDefault();
    setQuizSubmitted(true);
  };

  const updateQuizAnswer = (questionIndex, optionIndex) => {
    setQuizAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: optionIndex,
    }));
    setQuizSubmitted(false);
  };

  const topicQuiz = topic.quiz || (topic.practice ? [topic.practice] : []);
  const quizScore = topicQuiz.reduce(
    (score, question, index) =>
      score + (quizAnswers[index] === question.answer ? 1 : 0),
    0
  );

  return (
    <main className="min-h-[70vh] bg-slate-50">
      <header className="bg-gradient-to-br from-red-950 via-red-900 to-rose-800 px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-red-100">
                <Link to="/resources" className="text-white underline">
                  Resources
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <Link to="/resources/clat" className="text-white underline">
                  CLAT
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <Link to="/resources/clat/books" className="text-white underline">
                  Book Notes
                </Link>
              </nav>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-yellow-200">
                CLAT {BOOK_CATEGORIES.find((item) => item.slug === topic.category)?.title} · guided lesson
              </p>
              <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                {topic.title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
                {`Learn the core ideas and problem-solving approach for ${topic.title} with the notes and examples on this page.`}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-red-100 bg-gradient-to-r from-red-50 to-white px-5 py-5 sm:px-8 sm:py-7">
            <p className="text-xs font-bold uppercase tracking-wider text-red-800">
              Topic overview
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              {topic.sections.length > 0
                ? `${topic.title}: key points and examples`
                : topic.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
              {previewText || "Review the key ideas and examples for this topic."}
            </p>
          </div>

          <nav
            aria-label="Lesson contents"
            className="border-b border-gray-100 bg-slate-50 px-5 py-5 sm:px-8"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-red-800">
              In this lesson
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {topic.sections.map((section, index) => (
                <a
                  key={section.heading}
                  href={`#${toTopicSlug(section.heading)}`}
                  className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-900 no-underline hover:bg-red-50"
                >
                  {index + 1}. {section.heading}
                </a>
              ))}
              {topic.example && (
                <a
                  href="#teacher-example"
                  className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-900 no-underline hover:bg-red-50"
                >
                  Worked example
                </a>
              )}
              {topic.voiceExamples && (
                <a
                  href="#voice-examples"
                  className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-900 no-underline hover:bg-red-50"
                >
                  Voice examples
                </a>
              )}
              {topic.tenseRules && (
                <a
                  href="#tense-patterns"
                  className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-900 no-underline hover:bg-red-50"
                >
                  Tense patterns
                </a>
              )}
              {topic.commonMistakes && (
                <a
                  href="#common-mistakes"
                  className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-900 no-underline hover:bg-red-50"
                >
                  Common mistakes
                </a>
              )}
              {topicQuiz.length > 0 && (
                <a
                  href="#topic-practice"
                  className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-900 no-underline hover:bg-red-50"
                >
                  Check your understanding
                </a>
              )}
            </div>
          </nav>

          {topic.sections.length > 0 && (
            <div id="topic-details" className="space-y-7 px-5 py-6 sm:px-8 sm:py-8">
              {topic.sections.map((section, index) => (
                <section
                  key={section.heading}
                  id={toTopicSlug(section.heading)}
                  className="flex scroll-mt-28 gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-xs font-extrabold text-amber-900">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {section.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700 sm:text-base">
                      {section.text}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          )}

          {topic.example && (
            <section
              id="teacher-example"
              className="scroll-mt-28 border-t border-red-100 bg-red-50/60 px-5 py-6 sm:px-8 sm:py-8"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-red-800">
                Teacher’s worked example
              </p>
              <h3 className="mt-1 text-xl font-bold text-gray-900">
                Let’s reason it through
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-700 sm:text-base">
                {topic.example}
              </p>
              {topic.misconception && (
                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Common trap
                  </p>
                  <p className="mt-1 text-sm leading-6 text-amber-950">
                    {topic.misconception}
                  </p>
                </div>
              )}
            </section>
          )}

          {topic.tenseRules && (
            <section
              id="tense-patterns"
              className="scroll-mt-28 border-t border-gray-100 px-5 py-6 sm:px-8 sm:py-8"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Tense patterns at a glance
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                The tense stays the same when you change voice. Use the matching
                form of “be,” followed by the main verb in V3.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[36rem] text-left text-sm">
                  <thead className="bg-red-50 text-gray-900">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-bold">Tense</th>
                      <th scope="col" className="px-4 py-3 font-bold">Active verb</th>
                      <th scope="col" className="px-4 py-3 font-bold">Passive form</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {topic.tenseRules.map((rule) => (
                      <tr key={rule.tense}>
                        <th scope="row" className="px-4 py-3 font-semibold">{rule.tense}</th>
                        <td className="px-4 py-3">{rule.active}</td>
                        <td className="px-4 py-3">{rule.passive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {topic.voiceExamples && (
            <section
              id="voice-examples"
              className="scroll-mt-28 border-t border-gray-100 px-5 py-6 sm:px-8 sm:py-8"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Examples: active to passive
              </h3>
              <div className="mt-4 space-y-3">
                {topic.voiceExamples.map(({ active, passive }) => (
                  <div
                    key={active}
                    className="grid gap-2 rounded-xl bg-slate-50 p-4 text-sm leading-6 sm:grid-cols-2"
                  >
                    <p><span className="font-bold text-gray-900">Active:</span> {active}</p>
                    <p><span className="font-bold text-red-900">Passive:</span> {passive}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {topic.commonMistakes && (
            <section
              id="common-mistakes"
              className="scroll-mt-28 border-t border-gray-100 px-5 py-6 sm:px-8 sm:py-8"
            >
              <h3 className="text-xl font-bold text-gray-900">
                Common mistakes to avoid
              </h3>
              <div className="mt-4 space-y-3">
                {topic.commonMistakes.map(({ incorrect, correct }) => (
                  <div
                    key={incorrect}
                    className="grid gap-2 rounded-xl border border-gray-100 p-4 text-sm leading-6 sm:grid-cols-2"
                  >
                    <p><span className="font-bold text-red-700">Incorrect:</span> {incorrect}</p>
                    <p><span className="font-bold text-green-800">Correct:</span> {correct}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {topicQuiz.length > 0 && (
            <section
              id="topic-practice"
              aria-labelledby="topic-quiz-heading"
              className="border-t border-gray-100 bg-slate-50 px-5 py-6 sm:px-8 sm:py-8"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-red-800">
                CLAT practice · {topicQuiz.length} {topicQuiz.length === 1 ? "question" : "questions"}
              </p>
              <h3 id="topic-quiz-heading" className="mt-1 text-xl font-bold text-gray-900">
                Teach it back
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Choose an answer, submit, then read the explanation before moving on.
              </p>
              <form className="mt-5 space-y-5" onSubmit={submitTopicQuiz}>
                {topicQuiz.map((question, questionIndex) => (
                  <fieldset
                    key={question.question}
                    className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5"
                  >
                    <legend className="px-1 text-sm font-bold leading-6 text-gray-900">
                      Q{questionIndex + 1}. {question.question}
                    </legend>
                    <div className="mt-3 space-y-2">
                      {question.options.map((option, optionIndex) => {
                        const isCorrect = optionIndex === question.answer;
                        const isSelected = quizAnswers[questionIndex] === optionIndex;
                        const resultClass = quizSubmitted && isCorrect
                          ? "border-green-300 bg-green-50"
                          : quizSubmitted && isSelected
                            ? "border-red-300 bg-red-50"
                            : "border-gray-100 hover:bg-gray-50";

                        return (
                          <label
                            key={option}
                            className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm leading-6 text-gray-700 transition ${resultClass}`}
                          >
                            <input
                              className="h-4! w-4! min-h-0! shrink-0 accent-red-900"
                              type="radio"
                              name={`topic-question-${questionIndex}`}
                              value={optionIndex}
                              checked={isSelected}
                              onChange={() => updateQuizAnswer(questionIndex, optionIndex)}
                              required
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                    {quizSubmitted && (
                      <p className="mt-3 text-sm leading-6 text-gray-700">
                        <span className="font-bold">
                          {quizAnswers[questionIndex] === question.answer
                            ? "Correct. "
                            : "Review. "}
                        </span>
                        {question.explanation}
                      </p>
                    )}
                  </fieldset>
                ))}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="rounded-lg bg-red-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
                  >
                    Submit Answers
                  </button>
                  {quizSubmitted && (
                    <p aria-live="polite" className="font-bold text-gray-900">
                      Your score: {quizScore} / {topicQuiz.length}
                    </p>
                  )}
                </div>
              </form>
            </section>
          )}

          {topic.resourceLink && (
            <div className="border-t border-gray-100 px-5 py-5 sm:px-8">
              <Link
                to={topic.resourceLink}
                className="inline-flex items-center gap-2 font-semibold text-red-900 underline underline-offset-4"
              >
                Continue to the interactive {topic.category === "legal-reasoning" ? "legal reasoning" : "current affairs"} practice centre
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}

        </article>

        {suggestedTopics.length > 0 && (
          <section className="mt-8" aria-labelledby="suggested-topics-heading">
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-800">
                Keep learning
              </p>
              <h2
                id="suggested-topics-heading"
                className="mt-1 text-2xl font-extrabold text-gray-900"
              >
                Suggested topics
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedTopics.map((suggestedTopic) => (
                <Link
                  key={suggestedTopic.title}
                  to={getTopicPath(suggestedTopic)}
                  className="group rounded-xl border border-gray-200 bg-white p-5 text-gray-800 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-red-900">
                    {suggestedTopic.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                    {suggestedTopic.sections[0]?.text ??
                      "Open this topic to review its study material."}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-900">
                    Explore topic <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/resources/clat/books"
            className="font-semibold text-red-900 underline underline-offset-4"
          >
            ← All CLAT Book Notes
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ClatBookNotes;
