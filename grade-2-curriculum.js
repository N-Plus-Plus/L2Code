// Grade 2 uses the shared curriculum block renderer. Examples remain text and are never injected as HTML.
const g2Paragraph = (text) => ({ type: "paragraph", text });
const g2Heading = (text, level = 3) => ({ type: "heading", level, text });
const g2Unordered = (...items) => ({ type: "list", style: "unordered", items });
const g2Ordered = (...items) => ({ type: "list", style: "ordered", items });
const g2Code = (language, source) => ({ type: "code", language, code: source });
const g2Quote = (text) => ({ type: "quote", text });
const g2Callout = (text) => ({ type: "callout", text });
const g2Flow = (text) => ({ type: "flow", text });

const grade2Curriculum = {
  id: "grade-2",
  grade: 2,
  title: "Grade 2",
  subtitle: "Decisions and Logic",
  allowMultipleSections: true,
  purpose: [
    "Grade 2 teaches programs to choose between different outcomes. The student will use stored information, comparisons and conditions to create rule-based behaviour, track changing state and evaluate structured information."
  ],
  sections: [
    {
      id: "grade-2-you-will-learn",
      title: "You will learn",
      blocks: [
        g2Heading("By the end of Grade 2, you should understand:"),
        g2Unordered(
          "How a program asks true-or-false questions", "What a comparison is", "What Boolean values represent",
          "How `if` runs code when a condition is true", "How `else` provides an alternative path", "How `else if` supports several possible outcomes",
          "How `&&` represents AND", "How `||` represents OR", "How `!` represents NOT", "Why strict equality normally uses `===`",
          "How variables can describe changing program state", "How a program can remember a hidden value", "How an object groups related information",
          "What object keys, properties and values are", "How dot notation reads an object property", "How user input can be compared with stored information",
          "How to create a simple attempt-based score", "How to reset a small application", "How to validate basic user input",
          "How to trace a decision through several possible branches"
        ),
        g2Heading("You are not expected to:"),
        g2Unordered(
          "Memorise every comparison operator", "Write complex nested conditions from memory", "Create a sophisticated scoring system",
          "Build advanced artificial intelligence", "Use loops extensively", "Build the projects without reference material",
          "Make every optional extension", "Avoid logic mistakes"
        ),
        g2Quote("Grade 2 is about expressing rules clearly. The objective is not to create the shortest possible condition, but to create one that can be read and explained.")
      ]
    },
    {
      id: "grade-2-overview", title: "Grade 2 overview", blocks: [
        g2Paragraph("Grade 1 programs could:"),
        g2Unordered("Receive input", "Perform calculations", "Select random information", "Respond to events", "Update the page"),
        g2Paragraph("Grade 2 adds the ability to make decisions."),
        g2Flow("Information\n    ↓\nQuestion\n    ↓\nDecision\n    ↓\nOutcome"),
        g2Heading("Number Guessing Game"),
        g2Paragraph("The program stores a secret number and compares each guess against it."),
        g2Paragraph("Possible outcomes:"), g2Unordered("Too low", "Too high", "Correct"),
        g2Heading("Eligibility Checker"),
        g2Paragraph("The program stores information about a person or character and compares it against several requirements."),
        g2Paragraph("Possible outcomes:"), g2Unordered("Eligible", "Not eligible", "Eligible for some options but not others"),
        g2Callout("Both projects use variables as facts and conditions as questions about those facts.")
      ]
    },
    {
      id: "grade-2-actions-to-decisions", title: "From actions to decisions", blocks: [
        g2Paragraph("Grade 1 functions followed the same path each time they ran."),
        g2Code("javascript", `function showMessage() {
  output.textContent = "Hello";
}`),
        g2Paragraph("Grade 2 functions can choose a path."),
        g2Code("javascript", `function showResult(score) {
  if (score >= 10) {
    output.textContent = "You passed.";
  } else {
    output.textContent = "Try again.";
  }
}`),
        g2Unordered(
          "Variables are facts stored in labelled drawers.",
          "Conditions are questions asked about those facts.",
          "Branches are the different corridors the program can follow after receiving an answer."
        ),
        g2Flow("Fact: score is 12\n        ↓\nQuestion: is score at least 10?\n        ↓\nAnswer: true\n        ↓\nOutcome: show “You passed”")
      ]
    },
    {
      id: "grade-2-comparisons", title: "Comparisons", blocks: [
        g2Paragraph("A comparison asks how two values relate and produces a Boolean result."),
        g2Code("javascript", `===  strictly equal to
!==  not strictly equal to
>    greater than
<    less than
>=   greater than or equal to
<=   less than or equal to`),
        g2Code("javascript", `score === 10
guess > secretNumber
age >= 18
name !== ""`),
        g2Paragraph("Strict equality compares both value and type."),
        g2Code("javascript", "10 === 10"), g2Paragraph("This returns `true`."),
        g2Code("javascript", '"10" === 10'),
        g2Paragraph("This returns `false`. The values look similar but have different types."),
        g2Quote("Prefer `===` and `!==` for ordinary JavaScript comparisons."),
        g2Paragraph("The `==` operator also exists, but it can convert values in ways that produce unexpected results. Detailed loose-equality rules are not needed in Grade 2.")
      ]
    },
    {
      id: "grade-2-booleans", title: "Booleans and truth", blocks: [
        g2Paragraph("A Boolean has only two possible values:"), g2Code("javascript", "true\nfalse"),
        g2Paragraph("Comparisons produce Booleans."),
        g2Code("javascript", "const isCorrect = guess === secretNumber;"),
        g2Paragraph("If the values match, `isCorrect` is `true`. Otherwise it is `false`."),
        g2Heading("Checkbox analogy"), g2Unordered("Checked: `true`", "Unchecked: `false`"),
        g2Paragraph("Boolean values can also directly describe state."),
        g2Code("javascript", "let gameIsFinished = false;"), g2Paragraph("Later:"), g2Code("javascript", "gameIsFinished = true;"),
        g2Paragraph("Boolean variable names should often read like questions:"),
        g2Unordered("`isCorrect`", "`hasWon`", "`isEligible`", "`gameIsFinished`")
      ]
    },
    {
      id: "grade-2-conditions", title: "Conditions", blocks: [
        g2Paragraph("The basic `if` structure asks a question and runs its block only when the answer is true."),
        g2Code("javascript", `if (condition) {
  // Run these instructions when the condition is true.
}`),
        g2Code("javascript", `if (guess === secretNumber) {
  feedback.textContent = "Correct!";
}`),
        g2Paragraph("Use `else` to provide an alternative path."),
        g2Code("javascript", `if (hasEnoughGold) {
  buyItem();
} else {
  showNotEnoughGoldMessage();
}`),
        g2Heading("Security-guard analogy"),
        g2Unordered("The guard checks the rule.", "The guard does not use intuition.", "The guard follows the matching instruction."),
        g2Paragraph("Curly braces contain the instructions belonging to each branch.")
      ]
    },
    {
      id: "grade-2-multiple-branches", title: "Multiple branches", blocks: [
        g2Paragraph("Use `else if` when there are several possible outcomes but only one should be selected."),
        g2Code("javascript", `if (guess === secretNumber) {
  feedback.textContent = "Correct!";
} else if (guess < secretNumber) {
  feedback.textContent = "Too low.";
} else {
  feedback.textContent = "Too high.";
}`),
        g2Paragraph("The order is:"),
        g2Ordered("Check whether the guess is correct.", "If not, check whether it is too low.", "If neither is true, it must be too high."),
        g2Callout("Only the first matching branch runs."),
        g2Paragraph("Order conditions so that an earlier branch does not incorrectly capture a later case. Avoid deeply nested conditions at this stage.")
      ]
    },
    {
      id: "grade-2-combining-conditions", title: "Combining conditions", blocks: [
        g2Heading("AND"), g2Code("javascript", "&&"), g2Paragraph("Both conditions must be true."),
        g2Code("javascript", "strength >= 8 && intelligence >= 6"),
        g2Heading("OR"), g2Code("javascript", "||"), g2Paragraph("At least one condition must be true."),
        g2Code("javascript", "hasInvitation || isStaffMember"),
        g2Heading("NOT"), g2Code("javascript", "!"), g2Paragraph("NOT reverses a Boolean meaning."),
        g2Code("javascript", "!gameIsFinished"),
        g2Paragraph("Say conditions aloud before trusting them."),
        g2Code("javascript", "age >= 18 && hasIdentification"),
        g2Quote("The person is at least 18 AND has identification."),
        g2Paragraph("Split long conditions into clearly named Boolean variables when that makes them easier to read."),
        g2Code("javascript", `const hasRequiredStrength = character.strength >= 8;
const hasRequiredIntelligence = character.intelligence >= 6;

const isEligible =
  hasRequiredStrength && hasRequiredIntelligence;`)
      ]
    },
    {
      id: "grade-2-state", title: "State", blocks: [
        g2Paragraph("State is the information describing the program at a particular moment."),
        g2Paragraph("For the Number Guessing Game, state may include:"),
        g2Code("javascript", `let secretNumber = 7;
let attemptCount = 0;
let score = 100;
let gameIsFinished = false;`),
        g2Paragraph("At a later moment:"),
        g2Code("javascript", `attemptCount = 3;
score = 80;
gameIsFinished = true;`),
        g2Paragraph("State is a snapshot of the current contents of all relevant drawers."),
        g2Heading("Fixed information"), g2Code("javascript", "const maximumScore = 100;"),
        g2Heading("Changing information"), g2Code("javascript", "let attemptCount = 0;"),
        g2Callout("The webpage should be updated whenever visible state changes.")
      ]
    },
    {
      id: "grade-2-objects-properties", title: "Objects and properties", blocks: [
        g2Paragraph("An object groups related information describing one thing."),
        g2Code("javascript", `const character = {
  name: "Alex",
  strength: 8,
  dexterity: 6,
  intelligence: 7
};`),
        g2Paragraph("Think of the object as a character folder. Properties are labelled fields inside it."),
        g2Code("text", `Key              Value
name             "Alex"
strength         8
dexterity        6
intelligence     7`),
        g2Paragraph("Read properties using dot notation:"),
        g2Code("javascript", "character.name\ncharacter.strength\ncharacter.intelligence"),
        g2Paragraph("An object is clearer than unrelated variables when all the information belongs to the same thing. Classes, constructors and advanced object methods are reserved for later grades.")
      ]
    },
    {
      id: "grade-2-guessing-game", title: "Project 1: Number Guessing Game", blocks: [
        g2Heading("Minimum working version"),
        g2Paragraph("The page should contain:"),
        g2Unordered("A heading", "An instruction", "A number input", "A Guess button", "A feedback area", "An attempt count", "A score display", "A Play Again button"),
        g2Paragraph("The program should:"),
        g2Ordered(
          "Generate a secret whole number.", "Read the user’s guess.", "Compare the guess with the secret number.",
          "Display too low, too high or correct.", "Increase the attempt count.", "Reduce the score for incorrect guesses.",
          "End the round after a correct guess.", "Allow the game to reset."
        ),
        g2Heading("Suggested rules"),
        g2Unordered("Range: `1 to 20`", "Starting score: `100`", "Incorrect-guess penalty: `10`", "Keep the score at or above zero.")
      ]
    },
    {
      id: "grade-2-building-guessing-game", title: "Building the Number Guessing Game", blocks: [
        g2Paragraph("Use the established Grade 1 project setup."),
        g2Code("text", "number-guessing-game/\n├── index.html\n├── style.css\n└── script.js"),
        g2Heading("Suggested HTML elements"),
        g2Code("html", `<h1>Number Guessing Game</h1>

<p>Guess a number from 1 to 20.</p>

<label for="guess-input">Your guess</label>

<input
  id="guess-input"
  type="number"
  min="1"
  max="20"
>

<button id="guess-button">
  Submit Guess
</button>

<p id="feedback-output">
  Enter a guess to begin.
</p>

<p>Attempts: <span id="attempt-output">0</span></p>
<p>Score: <span id="score-output">100</span></p>

<button id="reset-button">
  Play Again
</button>`),
        g2Heading("Starting JavaScript state"),
        g2Code("javascript", `const minimumNumber = 1;
const maximumNumber = 20;
const startingScore = 100;
const incorrectGuessPenalty = 10;

let secretNumber = generateSecretNumber();
let attemptCount = 0;
let score = startingScore;
let gameIsFinished = false;`),
        g2Unordered(
          "Constants describe fixed rules.", "Variables describe changing state.",
          "The secret number is stored but not displayed.", "The interface shows only the state the player should see."
        )
      ]
    },
    {
      id: "grade-2-guessing-logic", title: "Guessing Game logic", blocks: [
        g2Heading("Generate the secret number"),
        g2Code("javascript", `function generateSecretNumber() {
  const rangeSize =
    maximumNumber - minimumNumber + 1;

  return Math.floor(
    Math.random() * rangeSize
  ) + minimumNumber;
}`),
        g2Heading("Handle a guess"),
        g2Code("javascript", `function handleGuess() {
  if (gameIsFinished) {
    return;
  }

  const guess = Number(guessInput.value);

  if (
    Number.isNaN(guess) ||
    guess < minimumNumber ||
    guess > maximumNumber
  ) {
    feedbackOutput.textContent =
      \`Enter a number from \${minimumNumber} to \${maximumNumber}.\`;

    return;
  }

  attemptCount += 1;

  if (guess === secretNumber) {
    feedbackOutput.textContent =
      "Correct! You found the number.";

    gameIsFinished = true;
  } else if (guess < secretNumber) {
    feedbackOutput.textContent = "Too low.";
    reduceScore();
  } else {
    feedbackOutput.textContent = "Too high.";
    reduceScore();
  }

  renderGame();
}`),
        g2Paragraph("The order is:"),
        g2Ordered(
          "Ignore guesses after the round has ended.", "Read and convert the input.", "Validate the guess.",
          "Count the attempt.", "Compare with the secret number.", "Update state.", "Render the visible result."
        ),
        g2Quote("An early return means: stop this function because no further instructions should run in this situation.")
      ]
    },
    {
      id: "grade-2-guessing-score-reset", title: "Guessing Game score and reset", blocks: [
        g2Heading("Reduce the score"),
        g2Code("javascript", `function reduceScore() {
  score = Math.max(
    0,
    score - incorrectGuessPenalty
  );
}`),
        g2Paragraph("`Math.max()` prevents the score dropping below zero."),
        g2Heading("Render visible state"),
        g2Code("javascript", `function renderGame() {
  attemptOutput.textContent = attemptCount;
  scoreOutput.textContent = score;

  guessButton.disabled = gameIsFinished;
}`),
        g2Heading("Reset the round"),
        g2Code("javascript", `function resetGame() {
  secretNumber = generateSecretNumber();
  attemptCount = 0;
  score = startingScore;
  gameIsFinished = false;

  guessInput.value = "";
  feedbackOutput.textContent =
    "Enter a guess to begin.";

  renderGame();
}`),
        g2Heading("Connect events"),
        g2Code("javascript", `guessButton.addEventListener(
  "click",
  handleGuess
);

resetButton.addEventListener(
  "click",
  resetGame
);`),
        g2Callout("The reset function restores every piece of round state."),
        g2Paragraph("Resetting only the visible text is not enough. The stored state must also return to its starting values.")
      ]
    },
    {
      id: "grade-2-guessing-testing", title: "Guessing Game testing and extensions", blocks: [
        g2Heading("Suggested tests"),
        g2Unordered(
          "Guess below the permitted range.", "Guess above the permitted range.", "Leave the input empty.",
          "Enter the correct number.", "Enter a lower number.", "Enter a higher number.",
          "Confirm attempts increase only for valid guesses.", "Confirm the score does not fall below zero.",
          "Confirm guesses stop after the round ends.", "Confirm reset creates a fresh round."
        ),
        g2Heading("Useful debugging line"), g2Code("javascript", 'console.log("Secret number:", secretNumber);'),
        g2Paragraph("This line may be temporarily enabled while developing and removed or disabled for normal play."),
        g2Heading("Optional extensions"),
        g2Unordered(
          "Easy, medium and hard ranges", "Best score", "Maximum number of attempts", "Warm and cold hints",
          "Enter-key submission", "Previous-guesses display", "Prevent repeated guesses", "Custom score penalties"
        ),
        g2Callout("Only implement extensions after the minimum version works.")
      ]
    },
    {
      id: "grade-2-eligibility-checker", title: "Project 2: Eligibility Checker", blocks: [
        g2Heading("Minimum working version"),
        g2Paragraph("The user enters character information:"), g2Unordered("Name", "Strength", "Dexterity", "Intelligence"),
        g2Paragraph("The program determines eligibility for several fictional roles."),
        g2Heading("Warrior"), g2Code("text", "Strength 8 or higher"),
        g2Heading("Ranger"), g2Code("text", "Dexterity 8 or higher"),
        g2Heading("Mage"), g2Code("text", "Intelligence 8 or higher"),
        g2Heading("Paladin"), g2Code("text", "Strength 8 or higher\nAND\nIntelligence 6 or higher"),
        g2Heading("Scout"), g2Code("text", "Dexterity 7 or higher\nOR\nIntelligence 7 or higher"),
        g2Paragraph("The output should explain which roles the character qualifies for.")
      ]
    },
    {
      id: "grade-2-eligibility-data", title: "Defining eligibility data", blocks: [
        g2Paragraph("Create a character object from the entered values:"),
        g2Code("javascript", `const character = {
  name: nameInput.value.trim(),
  strength: Number(strengthInput.value),
  dexterity: Number(dexterityInput.value),
  intelligence: Number(intelligenceInput.value)
};`),
        g2Paragraph("The object keeps related character facts together."),
        g2Paragraph("Define requirement information as an object:"),
        g2Code("javascript", `const roleRequirements = {
  warrior: {
    label: "Warrior",
    strength: 8
  },

  ranger: {
    label: "Ranger",
    dexterity: 8
  },

  mage: {
    label: "Mage",
    intelligence: 8
  },

  paladin: {
    label: "Paladin",
    strength: 8,
    intelligence: 6
  }
};`),
        g2Paragraph("The Scout’s OR rule may initially remain in its evaluation function because its logic differs from simple minimum properties."),
        g2Callout("Avoid designing a completely generic rule engine in Grade 2. The objective is to understand objects and conditions, not to abstract every rule.")
      ]
    },
    {
      id: "grade-2-evaluating-requirements", title: "Evaluating requirements", blocks: [
        g2Paragraph("Create clear functions. Each asks one named question and returns a Boolean answer."),
        g2Code("javascript", `function isEligibleForWarrior(character) {
  return character.strength >= 8;
}`),
        g2Code("javascript", `function isEligibleForRanger(character) {
  return character.dexterity >= 8;
}`),
        g2Code("javascript", `function isEligibleForMage(character) {
  return character.intelligence >= 8;
}`),
        g2Code("javascript", `function isEligibleForPaladin(character) {
  return (
    character.strength >= 8 &&
    character.intelligence >= 6
  );
}`),
        g2Code("javascript", `function isEligibleForScout(character) {
  return (
    character.dexterity >= 7 ||
    character.intelligence >= 7
  );
}`),
        g2Code("javascript", "isEligibleForWarrior(character)"),
        g2Quote("Is this character eligible for Warrior?"),
        g2Paragraph("Named questions are preferable to hiding every rule inside one large unreadable condition.")
      ]
    },
    {
      id: "grade-2-displaying-eligibility", title: "Displaying eligibility results", blocks: [
        g2Paragraph("Create an array to collect qualifying roles:"),
        g2Code("javascript", "const eligibleRoles = [];"),
        g2Paragraph("Evaluate each role:"),
        g2Code("javascript", `if (isEligibleForWarrior(character)) {
  eligibleRoles.push("Warrior");
}

if (isEligibleForRanger(character)) {
  eligibleRoles.push("Ranger");
}

if (isEligibleForMage(character)) {
  eligibleRoles.push("Mage");
}

if (isEligibleForPaladin(character)) {
  eligibleRoles.push("Paladin");
}

if (isEligibleForScout(character)) {
  eligibleRoles.push("Scout");
}`),
        g2Paragraph("Display the result:"),
        g2Code("javascript", `if (eligibleRoles.length === 0) {
  resultOutput.textContent =
    \`\${character.name} does not currently meet any role requirements.\`;
} else {
  resultOutput.textContent =
    \`\${character.name} qualifies for: \${eligibleRoles.join(", ")}.\`;
}`),
        g2Unordered(
          "Each condition may add one role to the result array.",
          "Unlike an `if / else if` chain, several independent `if` statements can all succeed.",
          "This matters because one character may qualify for several roles."
        ),
        g2Heading("Use `if / else if / else`"), g2Paragraph("When only one branch should run."),
        g2Heading("Use several separate `if` statements"), g2Paragraph("When several conditions may all be true.")
      ]
    },
    {
      id: "grade-2-eligibility-testing", title: "Eligibility Checker testing and extensions", blocks: [
        g2Heading("Single qualification"), g2Paragraph("Test a character who qualifies only for Warrior."),
        g2Heading("Multiple qualifications"), g2Paragraph("Test a character who qualifies for Warrior, Mage and Paladin."),
        g2Heading("OR condition"), g2Paragraph("Test Scout qualification through Dexterity, then test again through Intelligence."),
        g2Heading("No qualifications"), g2Paragraph("Test a character who falls below every requirement."),
        g2Heading("Boundary values"), g2Paragraph("Test exact minimums such as:"), g2Code("text", "Strength 8"),
        g2Paragraph("Ensure the use of `>=` includes the boundary."),
        g2Heading("Invalid values"),
        g2Unordered("Empty name", "Empty statistic", "Negative statistic", "Statistic above the permitted maximum", "Text entered where a number is required"),
        g2Paragraph("Keep validation clear and limited. Suggested permitted statistic range:"), g2Code("text", "1 to 10"),
        g2Heading("Optional extensions"),
        g2Unordered(
          "Add more roles", "Display failed requirements", "Show near-qualifications", "Use checkboxes for equipment or licences",
          "Add a total-points limit", "Load role requirements from structured data", "Add an eligibility summary table"
        ),
        g2Callout("Do not build a complex generic requirements engine during Grade 2.")
      ]
    },
    {
      id: "grade-2-comparing-projects", title: "Comparing the two projects", blocks: [
        g2Heading("Number Guessing Game"),
        g2Paragraph("Facts:"), g2Unordered("Secret number", "Guess", "Attempt count", "Score", "Whether the game is finished"),
        g2Paragraph("Questions:"), g2Unordered("Is the guess valid?", "Is it correct?", "Is it too low?", "Is it too high?", "Has the round ended?"),
        g2Heading("Eligibility Checker"),
        g2Paragraph("Facts:"), g2Unordered("Name", "Strength", "Dexterity", "Intelligence"),
        g2Paragraph("Questions:"), g2Unordered("Is Strength at least 8?", "Is Dexterity at least 8?", "Are both Paladin requirements met?", "Is either Scout requirement met?"),
        g2Heading("Shared concepts"),
        g2Unordered(
          "User input", "Numeric conversion", "Variables", "Functions", "Conditions", "Boolean results",
          "Objects", "State", "Page updates", "Validation", "Testing", "Input, Process and Output"
        ),
        g2Paragraph("The Number Guessing Game uses branches to choose one outcome for a guess."),
        g2Paragraph("The Eligibility Checker uses several independent conditions because several outcomes may all be valid.")
      ]
    },
    {
      id: "grade-2-takeaways", title: "Grade 2 takeaways", blocks: [
        g2Unordered(
          "Comparisons produce true-or-false results.", "Booleans represent `true` or `false`.", "`if` runs code when a condition is true.",
          "`else` provides an alternative path.", "`else if` supports additional exclusive branches.", "`===` checks strict equality.",
          "`!==` checks strict inequality.", "`&&` requires both conditions.", "`||` requires at least one condition.",
          "`!` reverses a Boolean meaning.", "Conditions should be readable in plain language.", "State describes the program at a particular moment.",
          "Changing variables can represent changing state.", "Objects group related information.", "Object properties can be read using dot notation.",
          "A function can return a Boolean answer.", "Separate `if` statements may all run.",
          "An `if / else if / else` chain selects only the first matching branch.",
          "Resetting a program requires resetting stored state as well as visible content.", "Boundary values should be tested.",
          "Invalid input should produce a useful response."
        )
      ]
    },
    {
      id: "grade-2-preparing-grade-3", title: "Preparing for Grade 3", blocks: [
        g2Paragraph("Grade 2 programs can make decisions, but repeated work is still written manually."),
        g2Paragraph("Examples:"),
        g2Unordered(
          "Check every card.", "Roll six character statistics.", "Update a countdown every second.",
          "Process every item in a collection.", "Repeat until a condition changes."
        ),
        g2Paragraph("Grade 3 will introduce repetition and time."),
        g2Flow("Conditions make decisions\n        ↓\nLoops repeat decisions and actions\n        ↓\nTimers cause actions as time passes"),
        g2Callout("Grade 3 will teach the program to perform repetitive work rather than requiring each repetition to be written separately.")
      ]
    },
    {
      id: "grade-2-quiz-time", title: "Quiz Time!", blocks: [
        g2Paragraph("Questions only: answers are not revealed automatically. You may use the glossary, Grade 2 content, project source code, Developer Tools and existing notes."),
        g2Ordered(
          "What does a comparison produce?", "What are the two Boolean values?", "What does `===` check?", 'Why is `"10" === 10` false?',
          "What does `!==` mean?", "What does `>` mean?", "What does `>=` mean?", "What does an `if` statement do?",
          "What does `else` provide?", "When is `else if` useful?", "In an `if / else if / else` chain, how many branches normally run?",
          "What does `&&` mean?", "What does `||` mean?", "What does `!` do?", "Why can named Boolean variables make conditions easier to read?",
          "What is state?", "Give three examples of state from the Number Guessing Game.", "Why is the secret number part of state?",
          "What is an object?", "What is an object property?", "What are keys and values?", "What does dot notation do?",
          "Why is a character object useful?", "What was the input in the Number Guessing Game?", "What was the process in the Number Guessing Game?",
          "What was the output in the Number Guessing Game?", "Why did the game use `let` for the score?", "Why were the game rules stored using `const`?",
          "What happens when a guess is too low?", "What happens when a guess is correct?", "Why should the game ignore guesses after it has finished?",
          "What must the reset function restore?", "Why should the score be prevented from falling below zero?", "What was the input in the Eligibility Checker?",
          "What was the process in the Eligibility Checker?", "What was the output in the Eligibility Checker?", "Why can one character qualify for several roles?",
          "Why are separate `if` statements useful in the Eligibility Checker?", "What is the difference between AND and OR?", "How does the Paladin rule use AND?",
          "How does the Scout rule use OR?", "Why should exact boundary values be tested?", "If the minimum Strength is 8, should a Strength of exactly 8 qualify?",
          "What should happen when entered information is invalid?", "What is the difference between a fact and a condition?",
          "Translate this into plain language: `strength >= 8 && intelligence >= 6`.",
          "Translate this into plain language: `dexterity >= 7 || intelligence >= 7`.", "What new capability will Grade 3 introduce?",
          "If you were the computer, what steps would you follow after a guess is submitted?",
          "If you were the computer, what steps would you follow when checking Paladin eligibility?"
        ),
        g2Quote("You may use reference material while answering. The purpose is to practise tracing rules and explaining decisions, not to memorise every operator.")
      ]
    }
  ]
};
