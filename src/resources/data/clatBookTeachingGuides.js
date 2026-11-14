const guide = (example, misconception, question, options, answer, explanation) => ({
  example,
  misconception,
  practice: { question, options, answer, explanation },
});

export const englishTeachingGuides = {
  Adjectives: guide(
    "In “the three old wooden desks”, “three” tells number, “old” tells age, and “wooden” tells material. The noun is desks.",
    "Do not use a comparative with “most” or “more” twice: write “more careful” or “most careful”, not “more most careful”.",
    "Choose the grammatically correct phrase.",
    ["the most useful answer", "the usefulest answer", "the more most useful answer", "the most usefulest answer"],
    0,
    "“Useful” normally forms its superlative with “most”; the other choices use a non-standard form or double comparison."
  ),
  Adverbs: guide(
    "Compare “She gave a careful answer” with “She answered carefully.” Careful describes the noun answer; carefully modifies the verb answered.",
    "After linking verbs such as feel, seem, look, and taste, use an adjective for the subject’s state: “The plan seems sensible.”",
    "Choose the correct word: “The witness spoke ___.”",
    ["clear", "clearly", "clearness", "clearing"],
    1,
    "The blank modifies the action “spoke”, so the adverb “clearly” is needed."
  ),
  "Antonyms and Synonyms": guide(
    "In “The judge gave a brief summary,” brief means short. “Concise” fits; “rude” may be an antonym in another context but does not fit here.",
    "A familiar synonym is not automatically correct. Check the sentence’s meaning, grammar, intensity, and tone before choosing.",
    "In “The evidence was scarce,” which word is the closest antonym of scarce?",
    ["limited", "rare", "abundant", "insufficient"],
    2,
    "Abundant means plentiful, the opposite of scarce. The other options are close in meaning to scarcity."
  ),
  Articles: guide(
    "Choose by the first sound: “a European court” begins with the consonant /y/ sound; “an honest decision” begins with a vowel sound.",
    "Do not choose a/an from spelling alone, and do not add “the” before an abstract noun used generally: “Justice matters.”",
    "Complete the sentence: “She filed ___ honest account of the event.”",
    ["a", "an", "the", "no article"],
    1,
    "Honest begins with a vowel sound because its h is silent, so “an” is correct."
  ),
  "Cloze Test": guide(
    "Read the sentence around a blank: “The road was flooded; ___, the match was postponed.” The cause-and-effect link calls for “therefore”.",
    "Do not fill each blank in isolation. A choice must fit sentence grammar and the paragraph’s logic and tone.",
    "Choose the connector: “The proposal was popular. ___, it was too costly to implement.”",
    ["For example", "However", "Similarly", "Therefore"],
    1,
    "The second sentence contrasts popularity with cost, so “However” expresses the required contrast."
  ),
  "Commonly Mis-spelt Words": guide(
    "Check “necessary” by splitting it: one c, two s’s. Then check “accommodate”: two c’s and two m’s.",
    "Do not rely only on “i before e”; it has many exceptions. Learn a word’s spelling in a sentence and verify doubtful forms.",
    "Choose the correctly spelt word.",
    ["definately", "definitely", "definitly", "definetely"],
    1,
    "The standard spelling is definitely. The incorrect forms replace or omit letters in the middle syllables."
  ),
  Idioms: guide(
    "If a report says a decision “opened the floodgates”, ask what happened next: it allowed many similar cases or actions to follow.",
    "Do not translate an idiom word-for-word. First infer its conventional meaning, then test whether that meaning fits the sentence.",
    "“After months of delay, the committee finally got the ball rolling.” What does the idiom mean?",
    ["Stopped the work", "Started the process", "Changed the rules", "Won an argument"],
    1,
    "“Get the ball rolling” means to begin an activity or process."
  ),
  "Narration (Direct and Indirect Speech)": guide(
    "Direct: Riya said, “I am ready.” Reported later by a listener: Riya said that she was ready. The pronoun and tense shift because the speaker and reporting time changed.",
    "A reported question uses statement word order: “He asked where I lived,” not “He asked where did I live.”",
    "Choose the correct report: He asked, “Where do you study?”",
    ["He asked where did I study.", "He asked where I studied.", "He asked where do I study.", "He said where I study."],
    1,
    "An indirect question uses the question word followed by subject and verb; the reporting verb is past, so “study” commonly backshifts to “studied”."
  ),
  Nouns: guide(
    "In “The committee reviewed the evidence,” committee is a collective noun and evidence is an uncountable noun. We say “a piece of evidence”, not “an evidence”.",
    "Some nouns ending in s are singular (news); some uncountable nouns do not take a plural s (advice, furniture, information).",
    "Choose the correct phrase.",
    ["many informations", "an advice", "a piece of advice", "two furnitures"],
    2,
    "Advice is uncountable in standard English; “a piece of advice” makes the unit countable."
  ),
  "One Word Substitution": guide(
    "Phrase: “a person who can use several languages.” Identify the defining clue—several languages—before matching the term polyglot.",
    "Do not select a word merely because it shares a prefix. Check the whole definition and the word’s part of speech.",
    "A person who compiles a dictionary is a:",
    ["biographer", "lexicographer", "cartographer", "calligrapher"],
    1,
    "A lexicographer writes or compiles dictionaries; the other words refer to biographies, maps, and decorative handwriting."
  ),
  "Para Jumbles": guide(
    "If one sentence introduces a city library and another begins “This institution…”, the second depends on the first. Keep that pair together and place the introduction earlier.",
    "Do not order sentences by a connector alone. Confirm what each pronoun refers to and whether the cause precedes the result.",
    "Which sentence is the best opening for a paragraph about public libraries?",
    ["This change has made them easier to reach.", "They also lend books to local readers.", "A public library gives a community shared access to information.", "For this reason, many residents visit them."],
    2,
    "The broad definition introduces the subject. “They”, “this change”, and “for this reason” need earlier information."
  ),
  "Phrasal Verbs": guide(
    "“The panel put off the hearing” means it postponed it. With a pronoun, a separable verb takes the pronoun between verb and particle: “put it off”.",
    "Particles can change a verb’s meaning; do not infer from the main verb alone. Also learn whether the object can be separated.",
    "Choose the correct sentence.",
    ["The board called off it.", "The board called it off.", "The board off called it.", "The board called it out off."],
    1,
    "Call off is separable, and a pronoun object must sit between “call” and “off”."
  ),
  Prepositions: guide(
    "Use “at” for a point, “in” for an enclosed area, and “on” for a surface: at the gate, in the hall, on the desk.",
    "Learn fixed combinations as units—“depend on”, “interested in”, “good at”. Avoid inserting a preposition after verbs that do not need one.",
    "Choose the correct phrase: “The result depends ___ the facts.”",
    ["at", "on", "for", "with"],
    1,
    "The standard collocation is “depend on”."
  ),
  Pronouns: guide(
    "“Maya spoke to Nisha after she read the order” is unclear: she could mean Maya or Nisha. Repeat the name or restructure the sentence to identify the reader.",
    "Use subject forms for subjects (she and I) and object forms after verbs or prepositions (between you and me).",
    "Choose the correct phrase: “The clerk gave the file to Arun and ___.”",
    ["I", "me", "myself", "mine"],
    1,
    "The pronoun is the object of “to”, so the object form “me” is required."
  ),
  "Question Tags": guide(
    "“The clerk completed the form” has no auxiliary. Use did in the tag and reverse polarity: “The clerk completed the form, didn’t they?”",
    "Keep the auxiliary and tense consistent. A positive statement usually takes a negative tag; a negative statement usually takes a positive tag.",
    "Complete the tag: “She can explain the rule, ___?”",
    ["can she", "doesn’t she", "can’t she", "isn’t she"],
    2,
    "Repeat the modal “can” and use a negative tag after the positive statement."
  ),
  "Reading Comprehension – Practice Set 2": guide(
    "For the parks passage, connect the repeated ideas—exercise, recreation, shade, play, and meeting neighbours. Together they support the main idea that parks serve several urban needs.",
    "A detail is not automatically the main idea. Choose the option that covers the passage as a whole without adding outside claims.",
    "Which choice best states the parks passage’s central idea?",
    ["Only children benefit from parks.", "Urban parks provide social, recreational, and environmental benefits.", "All cities have enough public parks.", "Trees remove every effect of urban heat."],
    1,
    "This option combines the passage’s recurring benefits without making claims it never states."
  ),
  "Reading Comprehension": guide(
    "For an inference question, locate the relevant lines, combine only the clues they provide, and choose the smallest conclusion that must follow.",
    "Do not use outside knowledge to strengthen an answer. “Could be true” is weaker than “is supported by this passage.”",
    "A passage says a city added evening buses and late-shift workers then had more ways to travel home. Which inference is best supported?",
    ["Every worker now uses a bus.", "The added service may improve travel options for some late-shift workers.", "The city has eliminated traffic.", "The buses are always full."],
    1,
    "The passage supports improved options for some workers, not universal use or claims about traffic and capacity."
  ),
  Tenses: guide(
    "“By the time the hearing began, the witness had arrived.” The arrival happened first, so past perfect marks the earlier past action.",
    "After did, use the base verb: “Did she attend?” not “Did she attended?” Match time markers to the intended tense.",
    "Choose the correct form: “By noon tomorrow, the team ___ the review.”",
    ["completes", "completed", "will have completed", "has completed"],
    2,
    "“By noon tomorrow” sets a future deadline; future perfect describes completion before that point."
  ),
};

export const logicalTeachingGuides = {
  Analogy: guide(
    "Pen : writing means “an instrument is used for an action.” Apply the same direction: key : unlocking, not merely two related objects.",
    "State the relationship in a short sentence before looking at choices. Reversing the direction is a common trap.",
    "Choose the pair with the same relation as “thermometer : temperature”.",
    ["clock : time", "temperature : thermometer", "doctor : hospital", "book : library"],
    0,
    "A thermometer measures temperature; a clock measures time. Both are instrument-to-measurement relations."
  ),
  "Odd One Out": guide(
    "For 2, 3, 5, 9, test a simple shared property: 2, 3, and 5 are prime; 9 is composite. State the rule before selecting.",
    "Do not invent a complicated rule to defend a choice. Prefer the simplest property that accounts for every other option.",
    "Which number is the odd one out: 4, 9, 16, 20?",
    ["4", "9", "16", "20"],
    3,
    "4, 9, and 16 are perfect squares; 20 is not."
  ),
  "Missing Term in Series": guide(
    "In 3, 7, 11, 15, __, compare differences: each step adds 4, so the next term is 19. Verify the same difference at every step.",
    "Check alternating positions if one simple difference fails. Do not decide from just the first two terms.",
    "Find the next term: 2, 6, 12, 20, __.",
    ["26", "28", "30", "32"],
    2,
    "The differences are +4, +6, +8; the next is +10, giving 30."
  ),
  "Missing Numbers in the Figure": guide(
    "If each completed row adds its first two values to make the third, test that rule on every visible row before using it for the blank.",
    "A pattern that fits only one row is not enough. Check direction, operation, and whether the same rule works throughout the figure.",
    "Rows follow “first + second = third”: 3, 5, 8 and 4, 7, 11. What completes 6, 9, __?",
    ["13", "14", "15", "16"],
    2,
    "The same row rule gives 6 + 9 = 15."
  ),
  "Mathematical Operation and Arithmetical Reasoning": guide(
    "If a question defines ★ as “add 2, then multiply by 3”, evaluate 4 ★ as (4 + 2) × 3 = 18. Substitute the definition before calculating.",
    "Do not apply ordinary symbol meanings when the question redefines them. Preserve brackets and operation order.",
    "If a △ b means a + 2b, what is 3 △ 4?",
    ["11", "14", "20", "24"],
    0,
    "Substitute into the definition: 3 + 2(4) = 11."
  ),
  "Dictionary, Word Sequence and Word Formation": guide(
    "Compare words letter by letter: “court” comes before “courage” because c and o match, then u matches, and r precedes t at the first difference.",
    "For word formation, track letter counts, not just whether a letter appears. One available E cannot supply two E’s.",
    "Which word comes first alphabetically?",
    ["legal", "legality", "legend", "legible"],
    2,
    "All begin “leg”; at the next letter, “e” in legend precedes “a” in legal/legality and “i” in legible."
  ),
  "Logical Venn Diagram": guide(
    "“All advocates are graduates” places the advocate set inside the graduate set. It does not prove that every graduate is an advocate.",
    "Never reverse an “all” statement. “Some” means at least one; it does not mean all.",
    "All judges are lawyers. Which statement must follow?",
    ["All lawyers are judges.", "Some judges are not lawyers.", "Every judge is a lawyer.", "No lawyer is a judge."],
    2,
    "This repeats the given subset relation; the reverse and the other options are not established."
  ),
  "Dice and Cube": guide(
    "If two views show the same face, compare which faces touch it in each view. Common adjacent faces help align the views and identify opposites.",
    "Do not assume opposite faces total seven unless the question explicitly says the die is standard.",
    "A standard die is specified. Which pair is opposite under the usual numbering?",
    ["1 and 6", "1 and 5", "2 and 3", "4 and 5"],
    0,
    "On a standard die, opposite faces total seven; 1 + 6 = 7."
  ),
  "Clock and Calendar": guide(
    "At 3:00, the minute hand is at 12 and the hour hand at 3. Each hour mark spans 30°, so the smaller angle is 3 × 30° = 90°.",
    "The hour hand moves continuously between numbers. For calendars, count extra days modulo seven and include leap years where relevant.",
    "What is the smaller angle at 6:00?",
    ["90°", "120°", "150°", "180°"],
    3,
    "At 6:00 the hands point in opposite directions: six intervals × 30° = 180°."
  ),
  "Figure Counting": guide(
    "In a row split into two equal adjacent squares, count two small squares and the one larger outer square: total 3.",
    "Fix an order—small to large, or by orientation—and trace a complete boundary to avoid counting fragments as shapes.",
    "A square is divided by one vertical line into two equal rectangles. How many squares are present?",
    ["1", "2", "3", "4"],
    0,
    "Only the outer shape is a square; the two smaller regions are rectangles."
  ),
  "Direction and Distance": guide(
    "Walk 3 km north and 4 km east. The route is 7 km, but the straight-line distance is √(3² + 4²) = 5 km.",
    "Keep total distance travelled separate from displacement. Re-anchor after every turn and use the final position for direction.",
    "A person walks 5 m east, then 5 m west. How far are they from the start?",
    ["0 m", "5 m", "10 m", "25 m"],
    0,
    "The movements cancel, so the final position is the starting point."
  ),
  "Blood Relation": guide(
    "“A is B’s mother; B is C’s brother.” A is C’s mother too, because B and C are siblings. Track each link rather than guessing from names.",
    "Do not assume gender, marriage, or whose perspective is being asked. Translate the chain and then answer from the named person’s viewpoint.",
    "P is Q’s father. Q is R’s sister. How is P related to R?",
    ["Father", "Uncle", "Brother", "Cannot be determined"],
    0,
    "Q and R are siblings, so Q’s father P is also R’s father."
  ),
  "Figure Matrix": guide(
    "Compare one feature at a time—count, rotation, shading, or position. If the first two cells add one dot and the third has two, test whether the same rule works in the next row.",
    "Do not combine several visual changes until each has been checked independently across all completed rows and columns.",
    "A row contains 1, 2, then 3 dots; the next row follows the same count pattern. How many dots belong in its last cell?",
    ["1", "2", "3", "4"],
    2,
    "The stated pattern increases by one across the row, so the third cell contains 3 dots."
  ),
  "Statement and Conclusions": guide(
    "Statement: “Some applications were received after the deadline.” Conclusion: “At least one application was late.” This is a restatement; “all applications were late” is not.",
    "Ask whether a conclusion must be true whenever the statement is true. Plausible, likely, or outside facts do not count as logical support.",
    "Statement: “All shortlisted candidates attended the interview.” Which conclusion follows?",
    ["Everyone who attended was shortlisted.", "Every shortlisted candidate attended the interview.", "No candidate was shortlisted.", "The interview was difficult."],
    1,
    "This is exactly what “all shortlisted candidates” states; the other claims add information."
  ),
  "Coding-Decoding": guide(
    "If each letter shifts one place forward, CAT becomes DBU: C→D, A→B, T→U. Apply the same shift to every position and check the sample.",
    "Test the rule on all given examples and watch for wraparound (Z to A). Do not reverse a shift unless the direction is clear.",
    "With each letter shifted one place forward, LAW becomes:",
    ["MBX", "KZV", "MBW", "LBX"],
    0,
    "L→M, A→B, and W→X, giving MBX."
  ),
  "Statement and Assumption": guide(
    "“Install a ramp so every visitor can enter” assumes the ramp will improve access. It does not necessarily assume that every visitor uses a wheelchair.",
    "Use the negation test: if denying the proposed assumption makes the statement’s recommendation collapse, it may be necessary; if not, it may be extra.",
    "A school says, “Provide shaded drinking water points to reduce heat discomfort.” Which is a necessary assumption?",
    ["Students may experience heat discomfort.", "Every student dislikes water.", "The school will close permanently.", "Shade increases the temperature."],
    0,
    "The recommendation is aimed at reducing heat discomfort, so the existence of that concern is necessary; the other claims are unsupported."
  ),
  Syllogism: guide(
    "All A are B; no B are C. Since A lies inside B and B is separate from C, no A can be C.",
    "“All A are B” does not mean “all B are A”. Test conclusions against every arrangement allowed by the premises.",
    "All editors are readers. No reader is careless. What follows?",
    ["Some editors are careless.", "No editor is careless.", "All readers are editors.", "Some careless people are editors."],
    1,
    "Editors are within the reader group, and no reader is careless; therefore no editor is careless."
  ),
  "Order, Ranking and Sitting Arrangement": guide(
    "If A is left of B and B is left of C, write A–B–C before adding other clues. For a circle, mark who faces inward because left/right reverses when facing outward.",
    "Do not solve each clue in your head. Draw a fixed row or circle, record certain relations first, and test every candidate against all clues.",
    "In a row, P is left of Q and Q is left of R. Who is in the middle?",
    ["P", "Q", "R", "Cannot be determined"],
    1,
    "The order is P–Q–R, so Q is between P and R."
  ),
};

export const quantitativeTeachingGuides = {
  "Number System and Simplifications": guide(
    "Simplify 18 ÷ 3 × 2. Multiplication and division have equal precedence, so work left to right: 6 × 2 = 12.",
    "Do not multiply before division just because multiplication is often listed first. Handle brackets, powers, and equal-precedence operations carefully.",
    "Evaluate: 20 − 3 × 4.",
    ["8", "17", "68", "80"],
    0,
    "Multiply first: 3 × 4 = 12; then 20 − 12 = 8."
  ),
  "LCM and HCF": guide(
    "For 12 = 2²×3 and 18 = 2×3², HCF uses shared primes at smaller powers: 2×3 = 6. LCM uses all primes at larger powers: 2²×3² = 36.",
    "Use HCF for the largest equal grouping or repeated cutting; use LCM for the first shared event or common multiple.",
    "What is the LCM of 6 and 8?",
    ["12", "18", "24", "48"],
    2,
    "Multiples meet first at 24: 6×4 = 24 and 8×3 = 24."
  ),
  "Surds and Indices": guide(
    "√72 = √(36×2) = 6√2. For indices, 2³×2² = 2⁵ because multiplying like bases means adding exponents.",
    "Do not add unlike surds: √2 + √3 cannot be combined. Apply exponent laws only when bases and operation match.",
    "Simplify 3² × 3⁴.",
    ["3⁶", "3⁸", "9⁶", "6⁶"],
    0,
    "The bases match and are multiplied, so add exponents: 3² × 3⁴ = 3⁶."
  ),
  "Ratio, Proportion and Partnership": guide(
    "If 2:3 represents a total of 25, there are 5 equal parts; one part is 5, so the shares are 10 and 15.",
    "Convert quantities to the same units before forming a ratio. In partnership questions, include time invested as well as capital.",
    "Divide 48 in the ratio 5:3. What is the larger share?",
    ["18", "24", "30", "36"],
    2,
    "There are 8 parts; each is 6. The larger share is 5×6 = 30."
  ),
  "Mixture and Alligation": guide(
    "Mix 2 kg at ₹10/kg with 3 kg at ₹20/kg: total cost is ₹80 for 5 kg, so the mean price is ₹16/kg.",
    "Do not take a simple average unless quantities are equal. A weighted mean uses each component’s quantity.",
    "Mix equal quantities priced at ₹8 and ₹12 per unit. What is the mean price?",
    ["₹8", "₹9", "₹10", "₹12"],
    2,
    "Equal quantities give the midpoint: (8 + 12) ÷ 2 = ₹10."
  ),
  Percentage: guide(
    "A price rises from 200 to 230. The change is 30, and the original is 200; percentage rise = 30/200 × 100 = 15%.",
    "For successive changes, apply the second percentage to the new value, not the starting value.",
    "Find 25% of 240.",
    ["40", "50", "60", "80"],
    2,
    "25% is one quarter; 240 ÷ 4 = 60."
  ),
  "Profit and Loss": guide(
    "If cost price is ₹400 and selling price ₹460, profit is ₹60; profit percentage is 60/400 × 100 = 15%.",
    "Profit and loss percentages are normally calculated on cost price, while discount is calculated on marked price.",
    "An item costs ₹500 and sells for ₹450. What is the loss percentage?",
    ["5%", "10%", "11%", "50%"],
    1,
    "Loss = ₹50; 50/500 × 100 = 10%."
  ),
  "Simple Interest and Compound Interest": guide(
    "On ₹1,000 at 10% simple interest for 2 years, interest is 1000×10×2/100 = ₹200. Each year’s interest is calculated on the original principal.",
    "With compound interest, interest is added to the balance each period. Match the rate period to the time period before calculating.",
    "Find the simple interest on ₹2,000 at 5% per year for 2 years.",
    ["₹100", "₹200", "₹400", "₹500"],
    1,
    "SI = PRT/100 = 2000×5×2/100 = ₹200."
  ),
  Average: guide(
    "Five scores average 12, so their total is 5×12 = 60. If a sixth score of 18 is added, the new average is 78/6 = 13.",
    "When the group changes, update both its total and its count before calculating the new mean.",
    "The average of 4 numbers is 9. What is their sum?",
    ["13", "27", "36", "45"],
    2,
    "Total = average × number of values = 9×4 = 36."
  ),
  "Time and Work": guide(
    "A completes a job in 6 days (1/6 per day); B in 3 days (1/3 per day). Together they do 1/2 per day, so finish in 2 days.",
    "Add work rates, not completion times. Use a common unit of work and time.",
    "A worker completes a task in 8 days. What fraction is completed in one day at a constant rate?",
    ["1/4", "1/6", "1/8", "8"],
    2,
    "One day’s rate is the reciprocal of the total completion time: 1/8 of the task."
  ),
  "Pipe and Cistern": guide(
    "An inlet fills 1/4 of a tank per hour; an outlet empties 1/6. Net filling rate is 1/4−1/6 = 1/12 tank per hour.",
    "Treat filling as positive and emptying as negative. If the net rate is zero or negative, the tank will not fill under those conditions.",
    "A pipe fills 1/5 of a tank per hour. How much does it fill in 2 hours?",
    ["1/10", "2/5", "2/10", "5/2"],
    1,
    "At a constant rate, 2×1/5 = 2/5 of the tank."
  ),
  "Speed, Time and Distance": guide(
    "At 60 km/h for 2 hours, distance = 60×2 = 120 km. For a return journey, average speed is total distance divided by total time.",
    "Convert units before calculating and do not average two speeds directly unless the time or distance conditions justify it.",
    "A car travels 150 km in 3 hours. What is its average speed?",
    ["45 km/h", "50 km/h", "75 km/h", "450 km/h"],
    1,
    "Average speed = total distance ÷ total time = 150/3 = 50 km/h."
  ),
  "Boat and Stream": guide(
    "Still-water speed 12 km/h and stream speed 3 km/h give downstream 15 km/h and upstream 9 km/h.",
    "The stream helps downstream and opposes upstream. Keep the two directions distinct when calculating journey times.",
    "A boat’s still-water speed is 10 km/h and stream speed is 2 km/h. What is its upstream speed?",
    ["8 km/h", "10 km/h", "12 km/h", "20 km/h"],
    0,
    "Upstream speed = boat speed − stream speed = 10−2 = 8 km/h."
  ),
  "Data Interpretation": guide(
    "If a table shows 40 cases in Year 1 and 50 in Year 2, the increase is 10; percentage increase uses Year 1 as the base: 10/40×100 = 25%.",
    "Read units, time period, and scale before comparing. A chart value is not a percentage unless the data or question makes it one.",
    "A value rises from 80 to 100. What is the percentage increase?",
    ["20%", "25%", "80%", "125%"],
    1,
    "Increase is 20 on an original base of 80: 20/80×100 = 25%."
  ),
  "Line, Angle and Triangle": guide(
    "If two angles of a triangle are 50° and 60°, the third is 180°−110° = 70°.",
    "Use the matching fact: straight line 180°, around a point 360°, triangle 180°. Mark parallel-line relationships before solving.",
    "Two angles of a triangle are 35° and 85°. Find the third.",
    ["50°", "60°", "70°", "85°"],
    1,
    "Triangle angles total 180°: 180−35−85 = 60°."
  ),
  Circle: guide(
    "A circle has radius 7 cm. Its circumference is 2πr = 14π cm; its area is πr² = 49π cm². Notice the different units.",
    "Do not confuse circumference (length) with area (square units), or radius with diameter.",
    "A circle has diameter 10 cm. What is its radius?",
    ["2 cm", "5 cm", "10 cm", "20 cm"],
    1,
    "Radius is half the diameter: 10÷2 = 5 cm."
  ),
  Quadrilaterals: guide(
    "A rectangle of length 8 and width 3 has area 8×3 = 24 square units and perimeter 2(8+3) = 22 units.",
    "Area measures the enclosed surface; perimeter adds boundary lengths. Do not attach linear units to area.",
    "What is the sum of the interior angles of any quadrilateral?",
    ["180°", "270°", "360°", "540°"],
    2,
    "A quadrilateral’s interior angles sum to 360°."
  ),
  "Co-ordinate Geometry": guide(
    "Between (1,2) and (4,6), horizontal change is 3 and vertical change is 4; distance is √(3²+4²)=5.",
    "Keep x and y in order and subtract corresponding coordinates consistently. A point on an axis is not inside a quadrant.",
    "Which quadrant contains (−2, 3)?",
    ["I", "II", "III", "IV"],
    1,
    "Negative x and positive y place the point in Quadrant II."
  ),
  Algebra: guide(
    "Solve 3x+5=20: subtract 5 from both sides to get 3x=15, then divide by 3; x=5. Substitute to check.",
    "Whatever operation you perform on one side of an equation, perform it on the other. Preserve negative signs when expanding brackets.",
    "Solve: 2x−4=10.",
    ["3", "5", "7", "14"],
    2,
    "Add 4 to get 2x=14; divide by 2, so x=7."
  ),
  Trigonometry: guide(
    "Relative to angle θ, if opposite=3 and hypotenuse=5, then sin θ=3/5. Label sides from the angle, not from the page orientation.",
    "Opposite and adjacent depend on the chosen angle; the hypotenuse is always opposite the right angle.",
    "In a right triangle, which ratio is opposite ÷ hypotenuse?",
    ["sin θ", "cos θ", "tan θ", "cot θ"],
    0,
    "By definition, sin θ = opposite/hypotenuse."
  ),
  "Height and Distance": guide(
    "From a point 20 m from a tower, an elevation angle θ gives tan θ = height/20. Draw and label the right triangle before choosing a ratio.",
    "The angle of depression equals the corresponding angle of elevation only because the horizontal lines are parallel; identify the geometry before using it.",
    "A person stands 10 m from a pole. If tan θ = height/10 and tan θ = 1, what is the pole’s height?",
    ["5 m", "10 m", "20 m", "100 m"],
    1,
    "height/10 = 1, so height = 10 m."
  ),
  "Mensuration - Plane Figures": guide(
    "For a rectangle 9 cm by 4 cm, area is 36 cm². For a composite shape, split it into familiar parts and add their areas.",
    "For a composite perimeter, count only the outside boundary; shared internal edges are not part of the perimeter.",
    "A square has side 6 cm. What is its area?",
    ["12 cm²", "24 cm²", "36 cm²", "36 cm"],
    2,
    "Area = side² = 6² = 36 cm²; area uses square units."
  ),
  "Mensuration - Solids": guide(
    "A cuboid 2×3×4 has volume 24 cubic units. Its total surface area is 2(lw+lh+wh), so keep volume and surface area separate.",
    "Check whether the question asks for curved/lateral area, total surface area, or volume, and whether open ends are included.",
    "A cube has edge 3 cm. What is its volume?",
    ["9 cm²", "18 cm³", "27 cm³", "27 cm²"],
    2,
    "Volume = side³ = 3³ = 27 cm³."
  ),
};
