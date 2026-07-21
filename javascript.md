# JavaScript Language and Syntax Reference

## How to Use This Reference

This glossary covers JavaScript-specific words, symbols and built-in features that commonly appear in beginner and intermediate code.

Each entry includes a type:

* **Keyword:** A word with a special meaning built into JavaScript
* **Literal:** A value written directly into code
* **Operator:** A symbol or word that performs an operation
* **Syntax:** A structural pattern used when writing JavaScript
* **Built-in:** A function or object provided by JavaScript itself
* **Method:** A function attached to an object or value
* **Property:** Information attached to an object
* **Browser API:** A feature supplied by the web browser rather than the JavaScript language itself
* **DOM API:** A browser feature used to read or change a webpage

Not every item needs to be memorised. This reference is intended to explain unfamiliar JavaScript when it appears.

---

# A

## `addEventListener()`

**Type:** DOM API method

Attaches a function to an element so that the function runs when a particular event occurs.

Common events include:

* `click`
* `input`
* `change`
* `keydown`
* `submit`

Example:

```javascript
button.addEventListener("click", showMessage);
```

**Think of it as:** Assigning a worker to respond whenever a particular bell rings.

---

## `alert()`

**Type:** Browser API function

Displays a simple browser message box.

Example:

```javascript
alert("Hello");
```

Alerts are useful for very small demonstrations but are rarely used in polished applications because they interrupt the user.

---

## `arguments`

**Type:** Function object

An older array-like object containing the arguments passed to a traditional function.

Example:

```javascript
function showArguments() {
  console.log(arguments);
}
```

Arrow functions do not have their own `arguments` object.

Modern code often uses rest parameters instead.

---

## `Array`

**Type:** Built-in object

The built-in JavaScript object used to create and work with arrays.

Example:

```javascript
const scores = Array(5);
```

Most arrays are created using square brackets instead:

```javascript
const scores = [];
```

---

## `Array.isArray()`

**Type:** Built-in method

Checks whether a value is an array.

Example:

```javascript
Array.isArray(["Sword", "Shield"]);
```

Returns:

```javascript
true
```

---

## `async`

**Type:** Keyword

Marks a function as asynchronous.

An asynchronous function automatically returns a Promise and can use `await`.

Example:

```javascript
async function loadData() {
  const response = await fetch("/data");
}
```

**Think of it as:** Declaring that the worker may begin a task that finishes later.

---

## `await`

**Type:** Keyword

Pauses an asynchronous function until a Promise settles.

Example:

```javascript
const response = await fetch("/data");
```

It pauses that asynchronous function, not the entire browser.

**Think of it as:** The current worker waits for a delivery while the rest of the organisation continues operating.

---

# B

## Backticks

```javascript
`Hello`
```

**Type:** Syntax

Backticks create template literals.

Template literals can:

* Contain variables
* Span multiple lines
* Evaluate expressions

Example:

```javascript
const name = "Alex";
const message = `Hello, ${name}`;
```

---

## `Boolean()`

**Type:** Built-in function

Converts a value into `true` or `false`.

Example:

```javascript
Boolean(1);
```

Returns:

```javascript
true
```

Example:

```javascript
Boolean(0);
```

Returns:

```javascript
false
```

---

## `break`

**Type:** Keyword

Immediately exits a loop or `switch` statement.

Example:

```javascript
for (const card of deck) {
  if (card === "Commander") {
    break;
  }
}
```

**Think of it as:** Telling the repeating worker to stop immediately.

---

# C

## `case`

**Type:** Keyword

Defines one possible matching branch inside a `switch` statement.

Example:

```javascript
switch (direction) {
  case "left":
    moveLeft();
    break;
}
```

---

## `catch`

**Type:** Keyword and Promise method

Handles an error.

### With `try`

```javascript
try {
  performTask();
} catch (error) {
  console.error(error);
}
```

### With a Promise

```javascript
loadData().catch(handleError);
```

**Think of it as:** A designated worker handling a problem instead of allowing the entire process to fail.

---

## `class`

**Type:** Keyword

Defines a template for creating related objects with shared properties and methods.

Example:

```javascript
class Enemy {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}
```

---

## `classList`

**Type:** DOM property

Provides methods for managing the CSS classes attached to an HTML element.

Common methods include:

```javascript
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");
```

---

## `clearInterval()`

**Type:** Browser API function

Stops an interval previously created with `setInterval()`.

Example:

```javascript
const timerId = setInterval(updateTimer, 1000);

clearInterval(timerId);
```

The interval identifier must be retained so the correct interval can be stopped.

---

## `clearTimeout()`

**Type:** Browser API function

Cancels a delayed action previously scheduled with `setTimeout()`.

Example:

```javascript
const timeoutId = setTimeout(showMessage, 3000);

clearTimeout(timeoutId);
```

---

## `confirm()`

**Type:** Browser API function

Displays a simple confirmation box with OK and Cancel options.

Example:

```javascript
const accepted = confirm("Delete this item?");
```

It returns a Boolean value.

---

## `console`

**Type:** Browser and runtime object

Provides methods for displaying diagnostic information.

Common methods include:

* `console.log()`
* `console.error()`
* `console.warn()`
* `console.table()`

---

## `console.error()`

**Type:** Method

Displays an error message in the console.

Example:

```javascript
console.error("The file could not be loaded.");
```

This does not automatically stop the program.

---

## `console.log()`

**Type:** Method

Displays information in the developer console.

Example:

```javascript
console.log(score);
```

It is commonly used to inspect values and understand program flow.

---

## `console.table()`

**Type:** Method

Displays arrays or objects in a table-like format in the console.

Example:

```javascript
console.table(players);
```

This can make collections easier to inspect.

---

## `console.warn()`

**Type:** Method

Displays a warning message in the console.

Example:

```javascript
console.warn("This setting is deprecated.");
```

---

## `const`

**Type:** Keyword

Declares a block-scoped name that cannot be reassigned.

Example:

```javascript
const playerName = "Alex";
```

This is not allowed:

```javascript
playerName = "Jordan";
```

However, the contents of an object or array declared with `const` can usually still be changed:

```javascript
const inventory = [];

inventory.push("Sword");
```

`const` protects the binding, not necessarily the value’s internal contents.

Use `const` by default when the variable itself does not need to be reassigned.

---

## `constructor`

**Type:** Class method

A special method that runs when a new class instance is created.

Example:

```javascript
class Player {
  constructor(name) {
    this.name = name;
  }
}
```

---

## `continue`

**Type:** Keyword

Skips the remainder of the current loop iteration and moves to the next iteration.

Example:

```javascript
for (const score of scores) {
  if (score < 0) {
    continue;
  }

  console.log(score);
}
```

---

## Curly braces

```javascript
{ }
```

**Type:** Syntax

Curly braces commonly define a block of code or an object.

### Code block

```javascript
if (score > 10) {
  showBonus();
}
```

### Object

```javascript
const player = {
  name: "Alex",
  score: 10
};
```

The meaning depends on context.

---

# D

## `Date`

**Type:** Built-in object

Represents a date and time.

Example:

```javascript
const now = new Date();
```

Dates can be compared, formatted and adjusted, although JavaScript date handling has some complexities.

---

## `debugger`

**Type:** Keyword

Pauses JavaScript execution when Developer Tools are open.

Example:

```javascript
let score = calculateScore();

debugger;

showScore(score);
```

This allows current variables and program flow to be inspected.

---

## `decodeURIComponent()`

**Type:** Built-in function

Converts URL-encoded text back into normal text.

Example:

```javascript
decodeURIComponent("Hello%20World");
```

Returns:

```javascript
"Hello World"
```

---

## `default`

**Type:** Keyword

Provides a fallback branch in a `switch` statement.

Example:

```javascript
switch (direction) {
  case "left":
    moveLeft();
    break;

  default:
    stopMoving();
}
```

It is also used with default exports.

---

## `delete`

**Type:** Operator

Removes a property from an object.

Example:

```javascript
delete player.temporaryStatus;
```

It is not normally used to remove items from arrays because it can leave an empty position.

---

## Destructuring

**Type:** Syntax

Extracts values from arrays or objects into separate variables.

### Object destructuring

```javascript
const player = {
  name: "Alex",
  score: 20
};

const { name, score } = player;
```

### Array destructuring

```javascript
const colours = ["red", "green"];

const [first, second] = colours;
```

---

## `document`

**Type:** DOM API object

Represents the current webpage.

JavaScript uses `document` to find, create and modify HTML elements.

Example:

```javascript
document.querySelector("#score");
```

**Think of it as:** The browser’s organised representation of the webpage.

---

## `DOMContentLoaded`

**Type:** Browser event

Occurs after the HTML document has been read and converted into the DOM.

Example:

```javascript
document.addEventListener("DOMContentLoaded", startApplication);
```

This can ensure that JavaScript waits until the required HTML elements exist.

---

## `do...while`

**Type:** Keyword structure

Creates a loop that runs at least once before checking its condition.

Example:

```javascript
do {
  attempts++;
} while (attempts < 3);
```

A regular `while` loop may run zero times. A `do...while` loop always runs at least once.

---

## Dot notation

```javascript
player.score
```

**Type:** Syntax

Accesses a property or method on an object.

Example:

```javascript
player.name
player.attack()
```

---

# E

## `else`

**Type:** Keyword

Defines what happens when an `if` condition is false.

Example:

```javascript
if (score >= 100) {
  showVictory();
} else {
  keepPlaying();
}
```

---

## `else if`

**Type:** Keyword combination

Checks another condition when an earlier condition was false.

Example:

```javascript
if (score >= 100) {
  showVictory();
} else if (score >= 50) {
  showProgress();
} else {
  showEncouragement();
}
```

---

## `encodeURIComponent()`

**Type:** Built-in function

Converts text into a form that is safe to include inside a URL.

Example:

```javascript
encodeURIComponent("Magic 8 Ball");
```

Returns text similar to:

```javascript
"Magic%208%20Ball"
```

---

## `entries()`

**Type:** Method

Produces key-value pairs from an object or array.

Example:

```javascript
Object.entries(player);
```

Might return:

```javascript
[
  ["name", "Alex"],
  ["score", 10]
]
```

---

## `Error`

**Type:** Built-in object

Represents an error.

Example:

```javascript
throw new Error("The score cannot be negative.");
```

An Error object commonly includes:

* A message
* A name
* A stack trace

---

## `event`

**Type:** Browser event object

An object containing information about something that happened.

Example:

```javascript
button.addEventListener("click", function (event) {
  console.log(event.target);
});
```

The event object may contain:

* The element involved
* Mouse position
* Pressed key
* Whether a form was submitted
* Event timing

---

## `export`

**Type:** Keyword

Makes a value, function or class available to other JavaScript modules.

Example:

```javascript
export function calculateScore() {
}
```

---

## `extends`

**Type:** Keyword

Creates a class based on another class.

Example:

```javascript
class Boss extends Enemy {
}
```

The new class inherits behaviour from the original class.

---

# F

## `false`

**Type:** Boolean literal

Represents a negative Boolean value.

It is not a string and should not be placed inside quotation marks.

```javascript
const isComplete = false;
```

---

## `fetch()`

**Type:** Browser API function

Sends a network request.

It is commonly used to retrieve information from:

* APIs
* JSON files
* Servers

Example:

```javascript
const response = await fetch("/cards.json");
```

`fetch()` returns a Promise.

A successful network response can still contain an HTTP error status, so response status may need to be checked.

---

## `filter()`

**Type:** Array method

Creates a new array containing only items that pass a test.

Example:

```javascript
const highScores = scores.filter(score => score >= 100);
```

The original array is not changed.

---

## `finally`

**Type:** Keyword and Promise method

Defines work that should happen after success or failure.

### With `try`

```javascript
try {
  loadData();
} catch (error) {
  showError(error);
} finally {
  hideLoadingMessage();
}
```

### With a Promise

```javascript
loadData().finally(hideLoadingMessage);
```

---

## `find()`

**Type:** Array method

Returns the first array item that passes a test.

Example:

```javascript
const card = deck.find(card => card.name === "Sol Ring");
```

Returns `undefined` if no matching item is found.

---

## `findIndex()`

**Type:** Array method

Returns the index of the first item that passes a test.

Example:

```javascript
const position = deck.findIndex(card => card.name === "Sol Ring");
```

Returns `-1` if nothing matches.

---

## `for`

**Type:** Keyword

Creates a loop.

A traditional `for` loop usually contains:

1. A starting value
2. A condition
3. An update

Example:

```javascript
for (let index = 0; index < 5; index++) {
  console.log(index);
}
```

---

## `for...in`

**Type:** Keyword structure

Loops through the enumerable property names of an object.

Example:

```javascript
for (const key in player) {
  console.log(key);
}
```

It is generally used with objects rather than arrays.

---

## `for...of`

**Type:** Keyword structure

Loops through the values in an iterable collection, such as an array.

Example:

```javascript
for (const card of hand) {
  console.log(card);
}
```

---

## `forEach()`

**Type:** Array method

Runs a function once for every item in an array.

Example:

```javascript
hand.forEach(card => {
  console.log(card);
});
```

Unlike `map()`, it does not create a new transformed array.

---

## `from`

**Type:** Module syntax word

Used when importing from another module.

Example:

```javascript
import { calculateScore } from "./score.js";
```

It is not normally used by itself as a general keyword.

---

## `function`

**Type:** Keyword

Declares a function.

Example:

```javascript
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
```

A function groups instructions under a reusable name.

Traditional functions have their own `this` behaviour and can access `arguments`.

---

# G

## `get`

**Type:** Keyword

Defines a getter on an object or class.

A getter allows a property-like value to be calculated when it is read.

Example:

```javascript
const player = {
  firstName: "Alex",
  lastName: "Smith",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
```

---

## `getElementById()`

**Type:** DOM API method

Finds an HTML element using its `id`.

Example:

```javascript
const scoreElement = document.getElementById("score");
```

Returns `null` if no matching element exists.

---

## `globalThis`

**Type:** Built-in global reference

Provides a standard way to access the global object across different JavaScript environments.

In a browser, the global object is also commonly accessed through `window`.

---

# I

## `if`

**Type:** Keyword

Runs a block of code only when a condition is true.

Example:

```javascript
if (score >= 100) {
  showVictory();
}
```

---

## `includes()`

**Type:** Array and string method

Checks whether a value is present.

### Array

```javascript
inventory.includes("Sword");
```

### String

```javascript
message.includes("Victory");
```

Returns a Boolean.

---

## `indexOf()`

**Type:** Array and string method

Returns the position of a matching value.

Example:

```javascript
inventory.indexOf("Sword");
```

Returns `-1` if the value is not found.

---

## `Infinity`

**Type:** Number value

Represents mathematical infinity.

Example:

```javascript
1 / 0;
```

Produces:

```javascript
Infinity
```

It is a number value, although it is not a finite number.

---

## `innerHTML`

**Type:** DOM property

Reads or replaces the HTML content inside an element.

Example:

```javascript
result.innerHTML = "<strong>Victory!</strong>";
```

Be careful when inserting user-provided content because unsafe HTML can create security problems.

Use `textContent` when HTML formatting is not required.

---

## `instanceof`

**Type:** Operator

Checks whether an object was created from a particular class or constructor.

Example:

```javascript
enemy instanceof Enemy;
```

Returns a Boolean.

---

## `isNaN()`

**Type:** Built-in function

Checks whether a value becomes `NaN` when treated as a number.

Its automatic conversion can produce surprising results.

The stricter alternative is:

```javascript
Number.isNaN(value);
```

---

# J

## `join()`

**Type:** Array method

Combines array items into one string.

Example:

```javascript
const words = ["Magic", "8", "Ball"];

words.join(" ");
```

Returns:

```javascript
"Magic 8 Ball"
```

---

## `JSON`

**Type:** Built-in object

Provides methods for converting between JavaScript data and JSON text.

The two main methods are:

* `JSON.stringify()`
* `JSON.parse()`

---

## `JSON.parse()`

**Type:** Built-in method

Converts JSON text into JavaScript data.

Example:

```javascript
const player = JSON.parse(savedText);
```

Invalid JSON causes an error.

---

## `JSON.stringify()`

**Type:** Built-in method

Converts JavaScript data into JSON text.

Example:

```javascript
const savedText = JSON.stringify(player);
```

This is commonly used before saving structured information.

---

# L

## `length`

**Type:** Property

Reports the size of a string or array.

Example:

```javascript
cards.length;
```

For an array, it reports the number of positions.

For a string, it reports the number of text units.

---

## `let`

**Type:** Keyword

Declares a block-scoped variable that can later be reassigned.

Example:

```javascript
let score = 0;

score = score + 10;
```

Use `let` when the variable needs to hold a different value later.

---

## `localStorage`

**Type:** Browser API object

Stores small amounts of text data in the browser.

Example:

```javascript
localStorage.setItem("highScore", "100");
```

Stored values remain after the page closes.

Local Storage stores strings, so objects and arrays usually need `JSON.stringify()` and `JSON.parse()`.

---

## `localStorage.getItem()`

**Type:** Browser API method

Reads a stored value.

Example:

```javascript
const highScore = localStorage.getItem("highScore");
```

Returns `null` if the key does not exist.

---

## `localStorage.removeItem()`

**Type:** Browser API method

Deletes one stored value.

Example:

```javascript
localStorage.removeItem("highScore");
```

---

## `localStorage.setItem()`

**Type:** Browser API method

Stores a text value using a key.

Example:

```javascript
localStorage.setItem("playerName", "Alex");
```

---

# M

## `map()`

**Type:** Array method

Creates a new array by transforming every item in an existing array.

Example:

```javascript
const doubled = numbers.map(number => number * 2);
```

The new array has the same number of items as the original array.

---

## `Math`

**Type:** Built-in object

Provides mathematical constants and methods.

Common examples include:

* `Math.random()`
* `Math.floor()`
* `Math.ceil()`
* `Math.round()`
* `Math.min()`
* `Math.max()`

---

## `Math.ceil()`

**Type:** Built-in method

Rounds a number upward to the next integer.

Example:

```javascript
Math.ceil(3.1);
```

Returns:

```javascript
4
```

---

## `Math.floor()`

**Type:** Built-in method

Rounds a number downward to the previous integer.

Example:

```javascript
Math.floor(3.9);
```

Returns:

```javascript
3
```

It is commonly used when selecting a random array index.

---

## `Math.max()`

**Type:** Built-in method

Returns the largest supplied number.

Example:

```javascript
Math.max(4, 10, 7);
```

Returns:

```javascript
10
```

---

## `Math.min()`

**Type:** Built-in method

Returns the smallest supplied number.

Example:

```javascript
Math.min(4, 10, 7);
```

Returns:

```javascript
4
```

---

## `Math.random()`

**Type:** Built-in method

Returns a pseudo-random decimal number from zero up to, but not including, one.

Example:

```javascript
Math.random();
```

A six-sided dice result can be produced with:

```javascript
Math.floor(Math.random() * 6) + 1;
```

---

## `Math.round()`

**Type:** Built-in method

Rounds a number to the nearest integer.

Example:

```javascript
Math.round(3.6);
```

Returns:

```javascript
4
```

---

# N

## `NaN`

**Type:** Number value

Means “Not a Number”.

It commonly appears when a numeric operation cannot produce a valid numeric result.

Example:

```javascript
Number("hello");
```

Produces:

```javascript
NaN
```

Despite its name, JavaScript considers `NaN` to be part of the number type.

---

## `new`

**Type:** Keyword

Creates a new object using a constructor or class.

Example:

```javascript
const player = new Player("Alex");
```

---

## `null`

**Type:** Literal

Represents an intentional absence of a value.

Example:

```javascript
let selectedCard = null;
```

This might mean that no card is currently selected.

---

## `Number()`

**Type:** Built-in function

Converts a value into a number.

Example:

```javascript
Number("42");
```

Returns:

```javascript
42
```

If conversion fails, it returns `NaN`.

---

## `Number.isFinite()`

**Type:** Built-in method

Checks whether a value is a real finite number.

Example:

```javascript
Number.isFinite(42);
```

Returns:

```javascript
true
```

---

## `Number.isInteger()`

**Type:** Built-in method

Checks whether a number is an integer.

Example:

```javascript
Number.isInteger(4);
```

Returns:

```javascript
true
```

---

## `Number.isNaN()`

**Type:** Built-in method

Checks specifically whether a value is `NaN`.

Example:

```javascript
Number.isNaN(Number("hello"));
```

Returns:

```javascript
true
```

---

# O

## `Object`

**Type:** Built-in object

Provides features for creating and working with JavaScript objects.

Most ordinary objects are created with curly braces:

```javascript
const player = {
  name: "Alex",
  score: 10
};
```

---

## `Object.assign()`

**Type:** Built-in method

Copies properties from one or more objects into another object.

Example:

```javascript
Object.assign(player, updatedValues);
```

It performs a shallow copy.

---

## `Object.entries()`

**Type:** Built-in method

Returns an array of key-value pairs from an object.

Example:

```javascript
Object.entries(player);
```

---

## `Object.keys()`

**Type:** Built-in method

Returns an array containing an object’s property names.

Example:

```javascript
Object.keys(player);
```

Might return:

```javascript
["name", "score"]
```

---

## `Object.values()`

**Type:** Built-in method

Returns an array containing an object’s property values.

Example:

```javascript
Object.values(player);
```

Might return:

```javascript
["Alex", 10]
```

---

## Optional chaining

```javascript
?.
```

**Type:** Operator

Safely accesses a property or calls a method only when the preceding value is not `null` or `undefined`.

Example:

```javascript
player.equipment?.weapon?.name;
```

If part of the path is missing, the expression returns `undefined` rather than immediately causing an error.

---

# P

## Parentheses

```javascript
( )
```

**Type:** Syntax

Parentheses are used for several purposes, including:

* Calling functions
* Defining parameters
* Grouping expressions
* Writing conditions

Examples:

```javascript
rollDice();

function greet(name) {
}

if (score > 10) {
}

const result = (2 + 3) * 4;
```

---

## `parseFloat()`

**Type:** Built-in function

Reads a decimal number from the beginning of a string.

Example:

```javascript
parseFloat("3.14 metres");
```

Returns:

```javascript
3.14
```

---

## `parseInt()`

**Type:** Built-in function

Reads an integer from the beginning of a string.

Example:

```javascript
parseInt("42 points", 10);
```

Returns:

```javascript
42
```

The second argument specifies the number base. Use `10` for ordinary decimal numbers.

---

## `pop()`

**Type:** Array method

Removes and returns the final item from an array.

Example:

```javascript
const lastCard = deck.pop();
```

This changes the original array.

---

## `preventDefault()`

**Type:** Event method

Stops the browser’s normal action for an event.

A common example is preventing a form from reloading the page:

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

---

## `Promise`

**Type:** Built-in object

Represents an asynchronous result that may become available later.

A Promise can be:

* Pending
* Fulfilled
* Rejected

Promises can be handled using:

* `.then()`
* `.catch()`
* `.finally()`
* `async` and `await`

**Think of it as:** A receipt promising that a result or failure report will be provided later.

---

## `prompt()`

**Type:** Browser API function

Displays a browser input box.

Example:

```javascript
const name = prompt("What is your name?");
```

It returns text or `null`.

Like `alert()`, it is useful for demonstrations but uncommon in polished interfaces.

---

## Property access with brackets

```javascript
object[key]
```

**Type:** Syntax

Accesses an object property using a calculated or stored key.

Example:

```javascript
const fieldName = "score";

player[fieldName];
```

Bracket access is also used for array indexes:

```javascript
cards[0];
```

---

## `push()`

**Type:** Array method

Adds one or more items to the end of an array.

Example:

```javascript
inventory.push("Sword");
```

Returns the array’s new length.

This changes the original array.

---

# Q

## `querySelector()`

**Type:** DOM API method

Returns the first HTML element matching a CSS selector.

Example:

```javascript
const button = document.querySelector("#roll-button");
```

Returns `null` if nothing matches.

---

## `querySelectorAll()`

**Type:** DOM API method

Returns all elements matching a CSS selector.

Example:

```javascript
const buttons = document.querySelectorAll(".game-button");
```

The result is a NodeList rather than a normal array, although it supports several similar operations.

---

# R

## `reduce()`

**Type:** Array method

Combines all array items into one result.

Example:

```javascript
const total = scores.reduce((sum, score) => sum + score, 0);
```

It is commonly used for:

* Totals
* Counts
* Grouping
* Building objects

---

## `remove()`

**Type:** DOM method

Removes an element from the webpage.

Example:

```javascript
taskElement.remove();
```

---

## `replace()`

**Type:** String method

Returns a new string with matching text replaced.

Example:

```javascript
const result = "Hello World".replace("World", "Alex");
```

Strings are immutable, so the original string is not changed.

---

## `return`

**Type:** Keyword

Ends a function and optionally sends a value back to the code that called it.

Example:

```javascript
function add(first, second) {
  return first + second;
}
```

Code after `return` in the same function path is not executed.

---

# S

## `set`

**Type:** Keyword

Defines a setter on an object or class.

A setter controls what happens when a property is assigned.

Example:

```javascript
const player = {
  _score: 0,

  set score(value) {
    this._score = Math.max(0, value);
  }
};
```

---

## `setAttribute()`

**Type:** DOM API method

Sets an HTML attribute on an element.

Example:

```javascript
image.setAttribute("alt", "A six-sided dice");
```

Many common attributes can also be accessed as properties.

---

## `setInterval()`

**Type:** Browser API function

Runs a function repeatedly after a specified delay.

Example:

```javascript
const timerId = setInterval(updateTimer, 1000);
```

The delay is measured in milliseconds.

`1000` milliseconds equals one second.

`setInterval()` is the JavaScript feature commonly meant when someone informally says “interval”.

---

## `setTimeout()`

**Type:** Browser API function

Runs a function once after a specified delay.

Example:

```javascript
setTimeout(showMessage, 2000);
```

The delay is measured in milliseconds.

---

## `shift()`

**Type:** Array method

Removes and returns the first item from an array.

Example:

```javascript
const firstCard = deck.shift();
```

This changes the original array.

---

## `slice()`

**Type:** Array and string method

Creates a copy of part of an array or string.

### Array

```javascript
const openingHand = deck.slice(0, 7);
```

### String

```javascript
const shortName = fullName.slice(0, 5);
```

It does not change the original value.

---

## `some()`

**Type:** Array method

Checks whether at least one array item passes a test.

Example:

```javascript
const hasLand = hand.some(card => card.type === "Land");
```

Returns a Boolean.

---

## `sort()`

**Type:** Array method

Reorders items in an array.

Example:

```javascript
numbers.sort((first, second) => first - second);
```

By default, values are sorted as strings, which can produce surprising results for numbers.

`sort()` changes the original array.

---

## Spread syntax

```javascript
...
```

**Type:** Syntax

Expands the contents of an array, object or iterable.

### Copy an array

```javascript
const copiedHand = [...hand];
```

### Combine arrays

```javascript
const allCards = [...hand, ...deck];
```

### Copy an object

```javascript
const updatedPlayer = {
  ...player,
  score: 20
};
```

Spread syntax performs a shallow copy.

---

## `splice()`

**Type:** Array method

Adds, removes or replaces items within an array.

Example:

```javascript
tasks.splice(2, 1);
```

This removes one item starting at index `2`.

`splice()` changes the original array.

Do not confuse it with `slice()`, which creates a copied section.

---

## Square brackets

```javascript
[ ]
```

**Type:** Syntax

Square brackets commonly:

* Create arrays
* Access array positions
* Access object properties dynamically

Examples:

```javascript
const cards = ["Forest", "Island"];

cards[0];

player["score"];
```

---

## `static`

**Type:** Keyword

Defines a class method or property that belongs to the class itself rather than to individual instances.

Example:

```javascript
class Dice {
  static roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

Dice.roll();
```

---

## `String()`

**Type:** Built-in function

Converts a value into text.

Example:

```javascript
String(42);
```

Returns:

```javascript
"42"
```

---

## `super`

**Type:** Keyword

Accesses a parent class from a child class.

It is commonly used to call the parent constructor.

Example:

```javascript
class Boss extends Enemy {
  constructor(name, health, phase) {
    super(name, health);
    this.phase = phase;
  }
}
```

---

## `switch`

**Type:** Keyword

Selects one branch from several possible matching values.

Example:

```javascript
switch (direction) {
  case "left":
    moveLeft();
    break;

  case "right":
    moveRight();
    break;

  default:
    stopMoving();
}
```

---

# T

## `target`

**Type:** Event property

Identifies the element where an event originated.

Example:

```javascript
function handleClick(event) {
  console.log(event.target);
}
```

---

## Template literal

**Type:** Syntax

A string written using backticks.

Template literals can include expressions using:

```javascript
${ }
```

Example:

```javascript
const message = `Your score is ${score}.`;
```

---

## Ternary operator

```javascript
condition ? valueIfTrue : valueIfFalse
```

**Type:** Operator

Provides a compact way to select between two values.

Example:

```javascript
const message = score >= 100 ? "Victory" : "Keep trying";
```

It is best used for short and readable decisions.

---

## `.then()`

**Type:** Promise method

Runs a function when a Promise is fulfilled.

Example:

```javascript
fetch("/cards.json")
  .then(response => response.json())
  .then(cards => console.log(cards));
```

`async` and `await` provide another way to work with Promises.

---

## `this`

**Type:** Keyword

Refers to a context-dependent object.

Its value depends on how the current function was called.

Inside an object method:

```javascript
const player = {
  score: 10,

  showScore() {
    console.log(this.score);
  }
};
```

Here, `this` refers to `player`.

Arrow functions do not create their own `this`.

Because its behaviour varies by context, `this` should be introduced carefully.

---

## `throw`

**Type:** Keyword

Creates or raises an exception.

Example:

```javascript
if (score < 0) {
  throw new Error("Score cannot be negative.");
}
```

Execution moves to an appropriate error handler if one exists.

---

## `toLowerCase()`

**Type:** String method

Returns a new string converted to lowercase.

Example:

```javascript
"HELLO".toLowerCase();
```

Returns:

```javascript
"hello"
```

---

## `toUpperCase()`

**Type:** String method

Returns a new string converted to uppercase.

Example:

```javascript
"hello".toUpperCase();
```

Returns:

```javascript
"HELLO"
```

---

## `trim()`

**Type:** String method

Removes whitespace from the beginning and end of a string.

Example:

```javascript
"  Alex  ".trim();
```

Returns:

```javascript
"Alex"
```

It is commonly used when validating user input.

---

## `true`

**Type:** Boolean literal

Represents a positive Boolean value.

```javascript
const isActive = true;
```

It is not a string and should not be written inside quotation marks.

---

## `try`

**Type:** Keyword

Begins a block of code whose errors can be handled using `catch`.

Example:

```javascript
try {
  const data = JSON.parse(savedText);
} catch (error) {
  console.error("Saved data was invalid.");
}
```

---

## `typeof`

**Type:** Operator

Returns a string describing the broad type of a value.

Example:

```javascript
typeof 42;
```

Returns:

```javascript
"number"
```

Example:

```javascript
typeof "Hello";
```

Returns:

```javascript
"string"
```

A historical JavaScript quirk is:

```javascript
typeof null;
```

which returns:

```javascript
"object"
```

---

# U

## `undefined`

**Type:** Primitive value

Usually means that a value has not been assigned or is unavailable.

Example:

```javascript
let selectedCard;

console.log(selectedCard);
```

The result is `undefined`.

---

## `unshift()`

**Type:** Array method

Adds one or more items to the beginning of an array.

Example:

```javascript
queue.unshift("First");
```

This changes the original array.

---

# V

## `value`

**Type:** DOM property

Represents the current value of an input control.

Example:

```javascript
const name = nameInput.value;
```

Values read from HTML inputs are generally strings, even when the input visually contains a number.

Numeric input may need conversion:

```javascript
const age = Number(ageInput.value);
```

---

## `var`

**Type:** Keyword

Declares a variable using older JavaScript scoping rules.

Example:

```javascript
var score = 0;
```

Unlike `let` and `const`, `var` is function-scoped rather than block-scoped and has behaviour related to hoisting that can be confusing.

Modern beginner code should usually prefer:

* `const` when reassignment is not needed
* `let` when reassignment is needed

`var` remains important because it appears frequently in older JavaScript.

---

## `void`

**Type:** Operator

Evaluates an expression and returns `undefined`.

It is uncommon in ordinary beginner JavaScript.

It may appear in older links, generated code or advanced expressions.

---

# W

## `while`

**Type:** Keyword

Creates a loop that continues while a condition remains true.

Example:

```javascript
while (health > 0) {
  takeTurn();
}
```

The condition should eventually become false or the loop may never stop.

---

## `window`

**Type:** Browser API object

Represents the browser window and acts as the global object in ordinary browser JavaScript.

Many browser functions are available through `window`, including:

```javascript
window.alert();
window.setTimeout();
```

The `window.` prefix is often optional.

---

# Y

## `yield`

**Type:** Keyword

Pauses a generator function and produces a value.

Example:

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
}
```

Generators are an advanced feature used to produce sequences gradually.

---

# Common JavaScript Operators

## Assignment

```javascript
=
```

Assigns a value.

Example:

```javascript
let score = 10;
```

This does not mean “is equal to” in the mathematical comparison sense.

---

## Addition

```javascript
+
```

Adds numbers or joins strings.

Examples:

```javascript
2 + 3;
```

Returns `5`.

```javascript
"Hello " + "Alex";
```

Returns `"Hello Alex"`.

Because `+` can perform two roles, type conversion can produce unexpected results.

---

## Subtraction

```javascript
-
```

Subtracts one number from another.

```javascript
score - penalty;
```

---

## Multiplication

```javascript
*
```

Multiplies numbers.

```javascript
price * quantity;
```

---

## Division

```javascript
/
```

Divides one number by another.

```javascript
total / count;
```

---

## Remainder

```javascript
%
```

Returns the remainder after division.

Example:

```javascript
10 % 3;
```

Returns:

```javascript
1
```

It is commonly used to determine whether a number is even:

```javascript
number % 2 === 0;
```

---

## Exponentiation

```javascript
**
```

Raises a number to a power.

Example:

```javascript
2 ** 3;
```

Returns:

```javascript
8
```

---

## Increment

```javascript
++
```

Increases a variable by one.

Example:

```javascript
score++;
```

Equivalent in simple cases to:

```javascript
score = score + 1;
```

---

## Decrement

```javascript
--
```

Decreases a variable by one.

Example:

```javascript
attempts--;
```

---

## Addition assignment

```javascript
+=
```

Adds a value and assigns the result.

Example:

```javascript
score += 10;
```

Equivalent to:

```javascript
score = score + 10;
```

---

## Subtraction assignment

```javascript
-=
```

Subtracts a value and assigns the result.

Example:

```javascript
health -= damage;
```

---

## Strict equality

```javascript
===
```

Checks whether two values have the same type and value.

Example:

```javascript
score === 10;
```

This is the preferred equality operator in most JavaScript code.

---

## Loose equality

```javascript
==
```

Checks equality after attempting type conversion.

Example:

```javascript
"10" == 10;
```

Returns:

```javascript
true
```

This automatic conversion can be confusing.

Beginners should generally prefer `===`.

---

## Strict inequality

```javascript
!==
```

Checks whether two values differ in type or value.

Example:

```javascript
score !== 10;
```

---

## Loose inequality

```javascript
!=
```

Checks whether values differ after type conversion.

Beginners should generally prefer `!==`.

---

## Greater than

```javascript
>
```

Checks whether the left value is greater.

```javascript
score > 100;
```

---

## Greater than or equal to

```javascript
>=
```

Checks whether the left value is greater than or equal to the right value.

---

## Less than

```javascript
<
```

Checks whether the left value is smaller.

---

## Less than or equal to

```javascript
<=
```

Checks whether the left value is smaller than or equal to the right value.

---

## Logical AND

```javascript
&&
```

Returns a truthy result only when both sides are truthy.

Example:

```javascript
hasKey && doorIsLocked;
```

It also short-circuits, meaning the right side is not evaluated when the left side is falsy.

---

## Logical OR

```javascript
||
```

Returns a truthy result when at least one side is truthy.

Example:

```javascript
isAdmin || isOwner;
```

It also short-circuits.

---

## Logical NOT

```javascript
!
```

Reverses a truthy or falsy value.

Example:

```javascript
!isComplete;
```

---

## Nullish coalescing

```javascript
??
```

Uses a fallback value only when the left side is `null` or `undefined`.

Example:

```javascript
const name = savedName ?? "Guest";
```

Unlike `||`, it does not replace valid values such as `0`, `false` or an empty string.

---

# Common JavaScript Syntax Patterns

## Arrow function

```javascript
() => {}
```

**Type:** Syntax

A shorter way to write a function.

Example:

```javascript
const add = (first, second) => {
  return first + second;
};
```

For one expression, the result can be returned automatically:

```javascript
const add = (first, second) => first + second;
```

Arrow functions do not have their own `this` or `arguments`.

---

## Default parameter

**Type:** Syntax

Provides a fallback value when an argument is not supplied.

Example:

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

---

## Rest parameter

```javascript
...values
```

**Type:** Syntax

Collects multiple supplied arguments into an array.

Example:

```javascript
function total(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
```

It uses the same `...` symbol as spread syntax, but performs the opposite job.

Spread expands.

Rest collects.

---

## Short-circuit evaluation

**Type:** Language behaviour

Logical operators may stop evaluating as soon as the result is known.

Example:

```javascript
isLoggedIn && showDashboard();
```

`showDashboard()` runs only when `isLoggedIn` is truthy.

---

## Semicolon

```javascript
;
```

**Type:** Syntax

Marks the end of a statement.

JavaScript can automatically insert some semicolons, but explicit semicolons can make statement boundaries clearer and avoid uncommon parsing problems.

---

## Comment

**Type:** Syntax

Comments contain notes for people reading the code.

JavaScript ignores them when running the program.

### Single-line comment

```javascript
// Increase the score.
score += 10;
```

### Multi-line comment

```javascript
/*
  This function calculates
  the final score.
*/
```

Comments should explain useful intent rather than repeat obvious code.

---

# Truthy and Falsy Values

JavaScript conditions can treat values as though they were `true` or `false`.

## Common falsy values

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Most other values are truthy.

Notably, these are truthy:

```javascript
[]
{}
"false"
"0"
```

Truthy and falsy behaviour is useful but can be confusing when first encountered.

---

# Recommended Beginner Declaration Rule

Use:

```javascript
const
```

when the variable will not be reassigned.

Use:

```javascript
let
```

when the variable needs to be reassigned.

Recognise:

```javascript
var
```

when reading older code, but generally avoid introducing it into new beginner projects.

---

# Commonly Confused JavaScript Terms

## `let`, `const` and `var`

`let`:

Block-scoped and can be reassigned.

`const`:

Block-scoped and cannot be reassigned.

`var`:

Older function-scoped declaration with different hoisting behaviour.

---

## `slice()` and `splice()`

`slice()`:

Copies part of an array without changing the original.

`splice()`:

Adds, removes or replaces items and changes the original array.

---

## `map()` and `forEach()`

`map()`:

Creates a new array of transformed values.

`forEach()`:

Performs work for every item but does not create a transformed array.

---

## `find()` and `filter()`

`find()`:

Returns the first matching item.

`filter()`:

Returns an array containing every matching item.

---

## `==` and `===`

`==`:

May convert types before comparing.

`===`:

Requires matching types and values.

Prefer `===` for ordinary JavaScript.

---

## `null` and `undefined`

`null`:

Usually means intentionally empty.

`undefined`:

Usually means no value has been assigned or found.

---

## `innerHTML` and `textContent`

`innerHTML`:

Reads or writes HTML markup.

`textContent`:

Reads or writes plain text.

Prefer `textContent` when HTML formatting is not required.

---

## `setTimeout()` and `setInterval()`

`setTimeout()`:

Runs once after a delay.

`setInterval()`:

Runs repeatedly after each delay.

---

## `return` and `console.log()`

`return`:

Sends a result back from a function.

`console.log()`:

Displays information for inspection.

Logging a value does not return it.

Returning a value does not automatically display it.

---

## Property and method

Property:

Information attached to an object.

```javascript
player.score
```

Method:

A function attached to an object.

```javascript
player.attack()
```

---

## Spread and rest

Both use:

```javascript
...
```

Spread expands a collection.

Rest gathers several values into a collection.

Their meaning depends on where the syntax appears.

---

# Final Reminder

JavaScript vocabulary becomes familiar through repeated use.

The aim is not to memorise this entire reference.

The useful skill is recognising that a term has a specific meaning, looking it up, and understanding how it relates to the code currently being read.
