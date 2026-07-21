// Grade 1 uses structured blocks so examples remain text rather than executable HTML.
const paragraph = (text) => ({ type: "paragraph", text });
const heading = (text, level = 3) => ({ type: "heading", level, text });
const unordered = (...items) => ({ type: "list", style: "unordered", items });
const ordered = (...items) => ({ type: "list", style: "ordered", items });
const code = (language, source) => ({ type: "code", language, code: source });
const quote = (text) => ({ type: "quote", text });
const callout = (text) => ({ type: "callout", text });
const flow = (text) => ({ type: "flow", text });

const grade1Curriculum = {
  id: "grade-1",
  grade: 1,
  title: "Grade 1",
  subtitle: "First Interactive Programs",
  purpose: [
    "Grade 1 introduces the basic building blocks used to make a webpage respond to a user. The objective is not to learn a large amount of JavaScript syntax. It is to become comfortable creating a project, connecting its files, changing information and producing a visible result."
  ],
  sections: [
    {
      id: "grade-1-you-will-learn",
      title: "You will learn",
      blocks: [
        heading("By the end of Grade 1, you should understand:"),
        unordered(
          "How to create a project folder", "How to open a project folder in Visual Studio Code",
          "Why each project should keep its related files together", "How HTML, CSS and JavaScript files connect",
          "How to open a local webpage in the browser", "How to make a change, save it and refresh the browser",
          "What a value is", "What a variable is", "The basic difference between numbers, strings and Booleans",
          "What a function is", "What an event is", "How a button click can run JavaScript",
          "How JavaScript can change displayed webpage content", "How an array stores an ordered collection",
          "How JavaScript can select a random array item", "How to read a value entered into an HTML input",
          "How to convert entered text into a number", "How to perform a basic calculation",
          "How a function can receive an input and produce a result", "How both projects follow Input, Process and Output"
        ),
        heading("You are not expected to:"),
        unordered(
          "Memorise all HTML tags", "Memorise CSS properties", "Memorise JavaScript syntax",
          "Build the projects without reference material", "Understand complex conditions or loops",
          "Make the projects visually polished", "Work from a completely blank page without guidance", "Avoid errors"
        ),
        quote("The goal is to complete the cycle from files to interaction. A simple working project is more valuable than a complicated unfinished one.")
      ]
    },
    {
      id: "grade-1-overview", title: "Grade 1 overview", blocks: [
        paragraph("Grade 1 contains two practical projects:"), ordered("Magic 8-Ball", "Unit Converter"),
        paragraph("The projects behave differently but use the same underlying pattern:"),
        callout("Input → Process → Output"), heading("Magic 8-Ball"),
        unordered("Input: The user clicks a button.", "Process: JavaScript randomly selects an answer.", "Output: The selected answer appears on the page."),
        heading("Unit Converter"),
        unordered("Input: The user enters a number.", "Process: JavaScript applies a conversion formula.", "Output: The converted number appears on the page."),
        paragraph("The projects should be built in separate folders. Repeating the setup process is intentional. Creating folders, files and connections should become familiar rather than remaining a special procedure.")
      ]
    },
    {
      id: "grade-1-working-cycle", title: "The Grade 1 working cycle", blocks: [
        callout("Plan → Create → Connect → Predict → Run → Observe → Adjust"),
        heading("Plan"), paragraph("Identify the minimum visible parts and behaviours the project requires."),
        heading("Create"), paragraph("Create the project folder and its files."),
        heading("Connect"), paragraph("Connect the HTML to the CSS and JavaScript."),
        heading("Predict"), paragraph("Before refreshing or clicking, decide what you expect to happen."),
        heading("Run"), paragraph("Open or refresh the project in the browser."),
        heading("Observe"), paragraph("Compare the actual result with the prediction."),
        heading("Adjust"), paragraph("Change one thing, then repeat the cycle."),
        paragraph("Do not wait until the entire project has been written before testing it."),
        paragraph("A useful project should be built through many small working stages.")
      ]
    },
    {
      id: "grade-1-creating-project", title: "Creating a web project", blocks: [
        paragraph("Every project should have its own folder."),
        paragraph("A project folder is a toolbox containing everything required for one job."),
        paragraph("For both Grade 1 projects, create:"),
        code("text", "ProjectName/\n├── index.html\n├── style.css\n└── script.js"),
        heading("`index.html`"), paragraph("Contains the webpage content and structure."),
        heading("`style.css`"), paragraph("Contains the visual presentation."),
        heading("`script.js`"), paragraph("Contains behaviour and interaction."),
        heading("Setup process"), ordered(
          "Create the project folder in File Explorer.", "Open Visual Studio Code.", "Select File → Open Folder.",
          "Open the project folder rather than an individual file.", "Create `index.html`.", "Create `style.css`.",
          "Create `script.js`.", "Save all files.", "Open `index.html` in the browser.",
          "Keep both Visual Studio Code and the browser available."
        ),
        quote("Opening the folder allows Visual Studio Code to treat the files as one project.")
      ]
    },
    {
      id: "grade-1-connecting-files", title: "Connecting the files", blocks: [
        paragraph("Creating three files does not automatically connect them."), heading("Connect CSS from HTML"),
        code("html", '<link rel="stylesheet" href="style.css">'),
        unordered('`rel="stylesheet"` tells the browser what kind of file it is.', '`href="style.css"` tells the browser where to find it.'),
        heading("Connect JavaScript from HTML"), code("html", '<script src="script.js"></script>'),
        paragraph("Place the script near the end of the HTML body for these beginner projects."),
        unordered('`src="script.js"` tells the browser which JavaScript file to load.', "The browser reads the files using their filenames and locations.", "A misspelled filename breaks the connection."),
        heading("Connection test"), paragraph("In `script.js`:"), code("javascript", 'console.log("JavaScript is connected.");'),
        paragraph("Open Developer Tools and verify the message appears in the Console."),
        callout("This is a useful diagnostic step. Before investigating more complicated code, first confirm that the correct file is connected and running.")
      ]
    },
    {
      id: "grade-1-values-types", title: "Values and data types", blocks: [
        paragraph("A value is one piece of information used by a program."), paragraph("Grade 1 introduces three value types in detail."),
        heading("Number"), code("javascript", "42\n3.5\n-10"), unordered("Scores", "Measurements", "Money", "Conversion results", "Counts"),
        heading("String"), code("javascript", '"Hello"\n"Ask again later"\n"Kilometres"'),
        paragraph("A string is text and is normally written inside quotation marks."), unordered("Messages", "Names", "Labels", "Answers"),
        heading("Boolean"), code("javascript", "true\nfalse"), paragraph("A Boolean represents one of two states."),
        unordered("Is the game running?", "Has the button been clicked?", "Is the answer visible?"),
        paragraph("The kind of value matters because JavaScript may treat numbers and text differently."),
        code("javascript", "2 + 3"), paragraph("Produces:"), code("javascript", "5"),
        paragraph("But:"), code("javascript", '"2" + "3"'), paragraph("Produces:"), code("javascript", '"23"'),
        paragraph("The second example joins text rather than adding numbers.")
      ]
    },
    {
      id: "grade-1-variables", title: "Variables", blocks: [
        paragraph("A variable is a named place where the program keeps a value."),
        paragraph("Think of a variable as a labelled drawer."), code("javascript", "let score = 10;"),
        unordered("`let` declares a variable that can later hold a different value.", "`score` is the variable name.", "`=` assigns a value.", "`10` is the current value."),
        code("javascript", "score = 15;"), paragraph("The drawer remains labelled `score`, but its contents change from `10` to `15`."),
        heading("Using `const`"), code("javascript", "const conversionRate = 0.621371;"),
        paragraph("Use `const` when the variable does not need to be assigned a different value later."),
        heading("Beginner rule"), unordered("Use `const` by default.", "Use `let` when the value must be reassigned.", "Recognise `var` in older JavaScript, but do not use it in these projects."),
        heading("Naming guidance"), paragraph("Prefer:"), code("javascript", "const possibleAnswers = [];\nconst convertedDistance = 0;"),
        paragraph("Avoid unclear names such as:"), code("javascript", "const x = [];\nconst thing = 0;")
      ]
    },
    {
      id: "grade-1-functions", title: "Functions", blocks: [
        paragraph("A function is a named group of instructions that performs a task."), heading("Remote control"),
        paragraph("The function name is the label on the button. Using the function is like pressing the button."),
        heading("Machine"), paragraph("Information may go in. Work happens. A result may come out."),
        code("javascript", 'function showGreeting() {\n  console.log("Hello");\n}'),
        paragraph("The function is defined but does not run until called:"), code("javascript", "showGreeting();"),
        paragraph("Defining the function creates its instructions. Calling the function tells JavaScript to perform them."),
        callout("A function should ideally have one clear responsibility."),
        unordered("`giveAnswer()`", "`convertDistance()`", "`displayResult()`")
      ]
    },
    {
      id: "grade-1-events", title: "Events and event handlers", blocks: [
        paragraph("An event is something that happens."), unordered("A button is clicked", "A key is pressed", "An input changes", "A page finishes loading"),
        paragraph("An event handler is the function assigned to respond."),
        code("html", '<button id="answer-button">Ask the Magic 8-Ball</button>'),
        code("javascript", 'const answerButton = document.querySelector("#answer-button");\n\nanswerButton.addEventListener("click", giveAnswer);'),
        ordered("JavaScript finds the button.", "It assigns `giveAnswer` to the button’s click event.", "The browser waits.", "The user clicks.", "The browser calls `giveAnswer`."),
        paragraph("Office analogy: the event is a bell. The event handler is the worker assigned to respond when that bell rings.")
      ]
    },
    {
      id: "grade-1-magic-goal", title: "Magic 8-Ball project goal", blocks: [
        heading("Minimum working version"), paragraph("The page must contain:"), unordered("A heading", "A short instruction", "A button", "An area where the answer will appear"),
        paragraph("When the button is clicked:"), ordered("JavaScript chooses one answer.", "The answer appears on the page."),
        paragraph("The first version does not need:"), unordered("Animation", "Sound", "Answer history", "Complicated styling", "Twenty official Magic 8-Ball answers"),
        callout("Build the project in small stages. Each stage should work before the next stage is added.")
      ]
    },
    {
      id: "grade-1-magic-html", title: "Magic 8-Ball HTML", blocks: [
        paragraph("Create a project folder named:"), code("text", "magic-8-ball"),
        code("text", "magic-8-ball/\n├── index.html\n├── style.css\n└── script.js"),
        code("html", `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magic 8-Ball</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Magic 8-Ball</h1>
    <p>Ask a question, then reveal your answer.</p>
    <button id="answer-button">Reveal Answer</button>
    <p id="answer-output">Your answer will appear here.</p>
  </main>
  <script src="script.js"></script>
</body>
</html>`),
        heading("Discuss"), unordered("Which elements physically exist?", "Which element can the user interact with?", "Which element will JavaScript change?", "Why do the button and output have IDs?"),
        paragraph("The IDs give JavaScript reliable labels it can use to find the elements.")
      ]
    },
    {
      id: "grade-1-magic-css", title: "Magic 8-Ball CSS", blocks: [
        paragraph("Keep styling deliberately modest."),
        code("css", `body {
  font-family: sans-serif;
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
}

main {
  max-width: 32rem;
  padding: 2rem;
  text-align: center;
}

button {
  padding: 0.75rem 1rem;
  font: inherit;
  cursor: pointer;
}

#answer-output {
  min-height: 1.5rem;
  margin-top: 1.5rem;
}`),
        unordered("HTML created the heading, paragraph and button.", "CSS did not create new content.", "CSS changed layout, spacing and appearance."),
        callout("Do not spend the session pursuing visual polish.")
      ]
    },
    {
      id: "grade-1-magic-interaction", title: "Magic 8-Ball first interaction", blocks: [
        paragraph("Begin with a fixed answer."),
        code("javascript", `const answerButton = document.querySelector("#answer-button");
const answerOutput = document.querySelector("#answer-output");

function giveAnswer() {
  answerOutput.textContent = "Yes.";
}

answerButton.addEventListener("click", giveAnswer);`),
        heading("Find the button"), code("javascript", 'const answerButton = document.querySelector("#answer-button");'), paragraph("JavaScript asks the document for the element with the matching ID."),
        heading("Find the output"), code("javascript", 'const answerOutput = document.querySelector("#answer-output");'), paragraph("JavaScript keeps a reference to the paragraph it will change."),
        heading("Define the action"), code("javascript", 'function giveAnswer() {\n  answerOutput.textContent = "Yes.";\n}'), paragraph("The function changes the text displayed inside the output element."),
        heading("Connect the event"), code("javascript", 'answerButton.addEventListener("click", giveAnswer);'), paragraph("The browser should call `giveAnswer` when the button is clicked."),
        quote("At this point, the project is already a complete interactive program.")
      ]
    },
    {
      id: "grade-1-arrays", title: "Arrays", blocks: [
        paragraph("A fixed answer is interactive, but it is not yet a useful Magic 8-Ball. The project needs a collection of possible answers."),
        paragraph("An array is an ordered collection."),
        code("javascript", `const possibleAnswers = [
  "Yes.",
  "No.",
  "Maybe.",
  "Ask again later.",
  "The signs point to yes.",
  "Do not count on it."
];`),
        heading("Shelf analogy"), unordered("The array is the shelf.", "Each string is one item on the shelf.", "Each item has a numbered position.", "JavaScript array positions begin at zero."),
        code("text", '0 → "Yes."\n1 → "No."\n2 → "Maybe."\n3 → "Ask again later."'),
        paragraph("If an array contains four items, its valid indexes are `0`, `1`, `2` and `3`.")
      ]
    },
    {
      id: "grade-1-random-selection", title: "Random selection", blocks: [
        code("javascript", "Math.random()"), paragraph("`Math.random()` produces a decimal from zero up to, but not including, one."),
        paragraph("To select an array item:"), code("javascript", "const randomIndex = Math.floor(\n  Math.random() * possibleAnswers.length\n);"),
        heading("`possibleAnswers.length`"), paragraph("How many answers are on the shelf?"),
        heading("`Math.random()`"), paragraph("Produce a decimal within the random range."),
        heading("Multiplication"), paragraph("Scale the decimal to the size of the array."),
        heading("`Math.floor()`"), paragraph("Round downward to a valid whole-number index."),
        paragraph("Then select and display the answer:"), code("javascript", "const selectedAnswer = possibleAnswers[randomIndex];\nanswerOutput.textContent = selectedAnswer;"),
        code("javascript", `function giveAnswer() {
  const randomIndex = Math.floor(
    Math.random() * possibleAnswers.length
  );

  const selectedAnswer = possibleAnswers[randomIndex];

  answerOutput.textContent = selectedAnswer;
}`),
        paragraph("The important idea is not memorising the random-number formula. It is understanding the process:"),
        ordered("Count the available answers.", "Generate a valid random position.", "Retrieve the answer at that position.", "Display it.")
      ]
    },
    {
      id: "grade-1-magic-testing", title: "Magic 8-Ball testing and debugging", blocks: [
        paragraph("Test the project in stages."), heading("Connection test"), paragraph("Does the Console show a prepared message from `script.js`?"),
        heading("Element test"), paragraph("Does JavaScript successfully find the button and output? Temporarily inspect:"), code("javascript", "console.log(answerButton);\nconsole.log(answerOutput);"),
        heading("Function test"), paragraph("Does clicking the button run `giveAnswer()`? Temporarily add:"), code("javascript", 'console.log("The button was clicked.");'),
        heading("Random answer test"), paragraph("Does repeated clicking display different valid answers?"),
        heading("Deliberate error exercise"), paragraph("Temporarily misspell `possibleAnswers` in one location. Observe the error in the Console. Then correct it."),
        callout("The purpose of the deliberate error is to show that an error message identifies useful evidence, not that the student has failed.")
      ]
    },
    {
      id: "grade-1-magic-extensions", title: "Magic 8-Ball optional extensions", blocks: [
        paragraph("Only attempt extensions after the minimum working version is complete."),
        unordered("Add more answers", "Change the heading", "Improve colours and spacing", "Display how many times the button has been clicked", "Prevent the same answer appearing twice in a row", "Add an input where the user can type a question", "Clear the previous answer before showing the next one", "Add a small reveal delay", "Add a CSS animation", "Group answers into positive, uncertain and negative categories"),
        paragraph("For each extension, first ask:"), unordered("What new information must the program remember?", "What new element must exist?", "What function should perform the work?", "What event should begin the work?"),
        callout("Do not allow optional polish to prevent completion of the core project.")
      ]
    },
    {
      id: "grade-1-magic-review", title: "Magic 8-Ball review", blocks: [
        unordered("What was the input?", "What was the process?", "What was the output?", "What did HTML create?", "What did CSS change?", "What did JavaScript do?", "What caused the function to run?", "Why was an array useful?", "How did the program select an answer?", "Which part of the page did JavaScript update?"),
        flow("User clicks button\n        ↓\nClick event occurs\n        ↓\ngiveAnswer() runs\n        ↓\nRandom array index is selected\n        ↓\nAnswer is retrieved\n        ↓\nPage output is updated")
      ]
    },
    {
      id: "grade-1-converter-goal", title: "Unit Converter project goal", blocks: [
        heading("Minimum working version"), paragraph("Create a distance converter that:"), unordered("Accepts kilometres from the user", "Converts the value into miles", "Displays the result"),
        paragraph("Use the approximate formula:"), code("text", "miles = kilometres × 0.621371"),
        paragraph("The page should contain:"), unordered("A heading", "A numeric input", "A conversion button", "A result area"),
        paragraph("The first version does not need:"), unordered("Multiple conversion types", "Live updating", "Conversion history", "Advanced validation", "Complicated styling")
      ]
    },
    {
      id: "grade-1-converter-setup", title: "Unit Converter project setup", blocks: [
        paragraph("Create a new project folder:"), code("text", "unit-converter"),
        paragraph("Create the three files again:"), code("text", "unit-converter/\n├── index.html\n├── style.css\n└── script.js"),
        paragraph("Do not copy the entire previous project. Recreate the basic setup so the process becomes familiar."),
        paragraph("Identify:"), unordered("Which file creates the input?", "Which file controls its appearance?", "Which file performs the conversion?")
      ]
    },
    {
      id: "grade-1-converter-html", title: "Unit Converter HTML", blocks: [
        code("html", `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unit Converter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Kilometres to Miles</h1>
    <label for="kilometres-input">Kilometres</label>
    <input id="kilometres-input" type="number" step="any">
    <button id="convert-button">Convert</button>
    <p id="conversion-output">Your result will appear here.</p>
  </main>
  <script src="script.js"></script>
</body>
</html>`),
        heading("Discuss"), unordered("Why is the label connected to the input?", "What does `type=\"number\"` change?", "Why does JavaScript need IDs?", "Which element contains the input?", "Which element displays the output?")
      ]
    },
    {
      id: "grade-1-reading-input", title: "Reading user input", blocks: [
        code("javascript", `const kilometresInput = document.querySelector(
  "#kilometres-input"
);

const convertButton = document.querySelector(
  "#convert-button"
);

const conversionOutput = document.querySelector(
  "#conversion-output"
);`),
        paragraph("The input element exists in HTML. JavaScript must find it before it can read it."),
        paragraph("Read its current value inside the conversion function:"), code("javascript", "const enteredValue = kilometresInput.value;"),
        callout("HTML input values are normally read as strings, even when the input is designed for numbers."),
        code("javascript", "console.log(enteredValue);\nconsole.log(typeof enteredValue);")
      ]
    },
    {
      id: "grade-1-number-conversion", title: "Converting text into a number", blocks: [
        code("javascript", "const kilometres = Number(kilometresInput.value);"),
        paragraph("`Number()` asks JavaScript to convert the input text into a numeric value."),
        paragraph("Compare:"), code("javascript", '"10" + 5'), paragraph("with:"), code("javascript", 'Number("10") + 5'),
        paragraph('The first may join text and produce `"105"`. The second performs numeric addition and produces `15`.'),
        callout("This is why the program should be clear about the kind of information it is using.")
      ]
    },
    {
      id: "grade-1-function-input-output", title: "Functions with inputs and outputs", blocks: [
        paragraph("Extend the machine analogy."), code("javascript", "function convertKilometresToMiles(kilometres) {\n  return kilometres * 0.621371;\n}"),
        heading("Parameter"), paragraph("`kilometres` is the labelled input the function expects."),
        heading("Argument"), paragraph("In:"), code("javascript", "convertKilometresToMiles(10);"), paragraph("`10` is the actual value supplied."),
        heading("Return value"), paragraph("The calculated miles value is returned to the caller."), code("javascript", "const miles = convertKilometresToMiles(kilometres);"),
        flow("10 kilometres\n      ↓\nconvertKilometresToMiles\n      ↓\n6.21371 miles"),
        callout("The conversion function does not need to know about buttons or paragraphs. Its responsibility is only to perform the conversion.")
      ]
    },
    {
      id: "grade-1-completing-conversion", title: "Completing the conversion", blocks: [
        code("javascript", `const conversionRate = 0.621371;

function convertKilometresToMiles(kilometres) {
  return kilometres * conversionRate;
}

function handleConversion() {
  const kilometres = Number(kilometresInput.value);
  const miles = convertKilometresToMiles(kilometres);

  conversionOutput.textContent =
    \`\${kilometres} kilometres is \${miles.toFixed(2)} miles.\`;
}

convertButton.addEventListener("click", handleConversion);`),
        heading("`conversionRate`"), paragraph("Stores a fixed value used in the calculation."),
        heading("`handleConversion()`"), paragraph("Coordinates the user interaction:"), ordered("Read the input.", "Convert it to a number.", "Call the conversion function.", "Display the returned result."),
        heading("`toFixed(2)`"), paragraph("Formats the displayed result to two decimal places. `toFixed()` returns formatted text for display.")
      ]
    },
    {
      id: "grade-1-validation-preview", title: "Simple validation preview", blocks: [
        paragraph("Keep validation deliberately limited because branching logic will be explored properly in Grade 2."),
        unordered("What happens if the input is empty?", "What happens if the value cannot be converted into a number?"),
        code("javascript", `function handleConversion() {
  const kilometres = Number(kilometresInput.value);

  if (Number.isNaN(kilometres)) {
    conversionOutput.textContent =
      "Please enter a valid number.";
    return;
  }

  const miles = convertKilometresToMiles(kilometres);
  conversionOutput.textContent =
    \`\${kilometres} kilometres is \${miles.toFixed(2)} miles.\`;
}`),
        paragraph("Treat this as a preview rather than a full conditions lesson."),
        unordered("`if` asks a true-or-false question.", "`Number.isNaN()` checks whether conversion failed.", "`return` stops the function after displaying the error.", "Grade 2 will explore conditions in detail."),
        paragraph("Optionally also prevent an empty input:"),
        code("javascript", `if (kilometresInput.value.trim() === "") {
  conversionOutput.textContent =
    "Please enter a distance.";
  return;
}`),
        callout("Do not expand into compound conditions unless the student is comfortable and time permits.")
      ]
    },
    {
      id: "grade-1-converter-testing", title: "Unit Converter testing and debugging", blocks: [
        heading("Ordinary value"), paragraph("Input:"), code("text", "10"), paragraph("Expected result: approximately `6.21 miles`."),
        heading("Zero"), paragraph("Input: `0`. Expected result: `0.00 miles`."),
        heading("Decimal"), paragraph("Input: `1.5`. Expected result: approximately `0.93 miles`."),
        heading("Empty input"), paragraph("Expected result: a helpful message rather than an unexplained calculation."),
        heading("Deliberate type exercise"), paragraph("Temporarily remove `Number()`. Compare the value and type in the Console. Restore `Number()`."),
        heading("Deliberate selector error"), paragraph("Temporarily misspell one element ID in JavaScript. Observe what `document.querySelector()` returns. Correct it."),
        callout("Testing should include ordinary values, boundary values and unexpected input.")
      ]
    },
    {
      id: "grade-1-converter-extensions", title: "Unit Converter optional extensions", blocks: [
        paragraph("Only attempt after the basic converter works."),
        unordered("Convert miles back to kilometres", "Add Celsius to Fahrenheit", "Add kilograms to pounds", "Add a conversion direction selector", "Convert while the user types", "Add a reset button", "Add conversion history", "Format singular and plural units correctly", "Save the most recent conversion", "Improve accessibility and keyboard flow"),
        paragraph("Avoid using live currency conversion as an early extension because real exchange rates require current external data and introduce networking concepts not yet covered."),
        paragraph("For each extension, identify:"), unordered("The input", "The process", "The output", "Any new state", "Any new event", "Any new function")
      ]
    },
    {
      id: "grade-1-converter-review", title: "Unit Converter review", blocks: [
        unordered("What was the input?", "What was the process?", "What was the output?", "Why did the input value need numeric conversion?", "What did the conversion function receive?", "What did it return?", "What caused `handleConversion()` to run?", "Why were the calculation and the click handling kept in separate functions?", "Which value was stored using `const`?", "What happened when the input was invalid?"),
        flow("User enters value\n        ↓\nUser clicks Convert\n        ↓\nhandleConversion() runs\n        ↓\nInput text is read\n        ↓\nText is converted to a number\n        ↓\nConversion function calculates miles\n        ↓\nReturned result is formatted\n        ↓\nPage output is updated")
      ]
    },
    {
      id: "grade-1-comparing-projects", title: "Comparing the two projects", blocks: [
        heading("Magic 8-Ball"), paragraph("Input: Button click"), paragraph("Process: Randomly choose an item from an array"), paragraph("Output: Display selected text"),
        heading("Unit Converter"), paragraph("Input: Entered number and button click"), paragraph("Process: Convert text to a number and apply a formula"), paragraph("Output: Display calculated text"),
        heading("Shared concepts"), unordered("A project folder", "HTML", "CSS", "JavaScript", "Variables", "Functions", "Events", "DOM element selection", "Page updates", "Input, Process and Output", "Prediction", "Testing", "Debugging"),
        paragraph("The projects look different because their data and rules differ."), paragraph("Their underlying programming structure is closely related.")
      ]
    },
    {
      id: "grade-1-takeaways", title: "Grade 1 takeaways", blocks: [
        unordered(
          "A web project keeps related files in one folder.", "HTML describes what exists.", "CSS controls appearance.", "JavaScript provides behaviour.",
          "The files must be explicitly connected.", "A value is one piece of information.", "Numbers, strings and Booleans are different value types.",
          "A variable is a named place holding or referring to a value.", "`const` is used when a variable will not be reassigned.", "`let` is used when a variable must be reassigned.",
          "A function groups instructions under a name.", "Defining a function is different from calling it.", "An event is something that happens.",
          "An event handler responds to an event.", "JavaScript can find and change HTML through the DOM.", "An array stores an ordered collection.",
          "Array positions begin at zero.", "Random selection requires a valid array index.", "HTML input values are commonly read as strings.",
          "`Number()` converts suitable text into a number.", "Parameters describe function inputs.", "Arguments are the actual supplied values.",
          "`return` sends a result back from a function.", "Small working stages are easier to test and debug than one large unfinished implementation."
        )
      ]
    },
    {
      id: "grade-1-preparing-grade-2", title: "Preparing for Grade 2", blocks: [
        paragraph("Grade 1 programs can:"), unordered("Receive input", "Perform actions", "Store values", "Select random information", "Calculate results", "Update the page"),
        paragraph("However, they have very limited ability to make choices. Grade 2 will introduce rule-based decisions."),
        unordered("Is a guess too high or too low?", "Is the entered information valid?", "Does a character meet a requirement?", "Has the player won?", "Should the program continue or stop?"),
        flow("Variables hold facts\n        ↓\nConditions ask questions about those facts\n        ↓\nBranches choose what happens next"),
        callout("Grade 2 will explore these ideas in detail; this section is only a preview.")
      ]
    },
    {
      id: "grade-1-quiz-time", title: "Quiz Time!", blocks: [
        ordered(
          "Why should each project have its own folder?", "What are the three standard files used in these Grade 1 projects?", "What does `index.html` contain?", "What does `style.css` contain?", "What does `script.js` contain?",
          "How does the HTML file connect to the CSS file?", "How does the HTML file connect to the JavaScript file?", "What is the normal edit-and-test cycle?", "What is a value?", "What is a number in JavaScript?",
          "What is a string?", "What is a Boolean?", 'Why does `"2" + "3"` behave differently from `2 + 3`?', "What is a variable?", "In the drawer analogy, what is the label?",
          "In the drawer analogy, what is the stored value?", "When should `const` normally be used?", "When should `let` normally be used?", "Why is `var` not being used in these projects?", "What is a function?",
          "What is the difference between defining and calling a function?", "What is an event?", "What is an event handler?", "What does `addEventListener()` do?", "What does `document.querySelector()` do?",
          "What does `textContent` change?", "What was the input in the Magic 8-Ball project?", "What was the process in the Magic 8-Ball project?", "What was the output in the Magic 8-Ball project?", "Why was an array useful for the Magic 8-Ball?",
          "What is an array index?", "At what number does JavaScript begin counting array positions?", "What does `possibleAnswers.length` tell the program?", "What broad steps were used to select a random answer?", "What was the input in the Unit Converter?",
          "What was the process in the Unit Converter?", "What was the output in the Unit Converter?", "Why was `Number()` used?", "What is a function parameter?", "What is a function argument?",
          "What is a return value?", "What does `toFixed(2)` do for the displayed result?", "Why was the conversion calculation placed in its own function?", "Where should JavaScript errors normally be inspected?", "What should you do before running a change?",
          "Why should a project be tested after each small stage?", "Name at least three concepts used by both Grade 1 projects.", "What new capability will Grade 2 add?", "If you were the computer, what exact steps would you follow after the user clicks the Magic 8-Ball button?", "If you were the computer, what exact steps would you follow after the user clicks Convert?"
        ),
        quote("You may use the glossary, source code and lesson content. The purpose of the quiz is to practise locating, connecting and explaining concepts.")
      ]
    }
  ]
};
