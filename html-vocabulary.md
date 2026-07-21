# HTML Vocabulary
# HTML: Grade 1 Foundations

## `HTML`

**Type:** HTML concept
**Aliases:** HyperText Markup Language

**Definition:**

HTML is the language used to describe the content and structure of a webpage. It identifies items such as headings, paragraphs, buttons, images and input fields.

**Example:**

```html
<h1>Magic 8-Ball</h1>
<p>Ask a question, then reveal an answer.</p>
<button>Reveal Answer</button>
```

**Notes:**

* HTML describes what exists.
* CSS controls appearance.
* JavaScript provides behaviour.

**Related terms:**

HTML document, HTML element, CSS, JavaScript, DOM

---

## `HTML document`

**Type:** HTML concept
**Aliases:** webpage source, HTML file

**Definition:**

An HTML document is a text file containing the structure and content of a webpage. The browser reads the document and creates a DOM representation of it.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Example Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

**Notes:**

* `index.html` is a common name for the starting document.
* The HTML source and the browser’s DOM are related but not identical concepts.

**Related terms:**

`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, DOM

---

## `<!DOCTYPE html>`

**Type:** HTML syntax
**Aliases:** doctype, document type declaration

**Definition:**

`<!DOCTYPE html>` tells the browser to interpret the document using modern HTML rules.

**Example:**

```html
<!DOCTYPE html>
```

**Notes:**

* It belongs at the beginning of the HTML document.
* It is a declaration rather than a normal HTML element.

**Related terms:**

HTML document, standards mode

---

## `HTML element`

**Type:** HTML concept
**Aliases:** element

**Definition:**

An HTML element is one part of a webpage, such as a heading, paragraph, button or input field.

**Example:**

```html
<button>Convert</button>
```

The complete button, including its tags and content, is the element.

**Notes:**

* Elements can contain text or other elements.
* JavaScript commonly finds and changes elements through the DOM.

**Related terms:**

HTML tag, nesting, DOM, `document.querySelector()`

---

## `HTML tag`

**Type:** HTML syntax
**Aliases:** tag

**Definition:**

A tag is the written markup that identifies the type and boundaries of an HTML element.

**Example:**

```html
<p>Hello</p>
```

`<p>` is the opening tag and `</p>` is the closing tag.

**Notes:**

* A tag is part of the source.
* An element is the complete represented item.

**Related terms:**

HTML element, opening tag, closing tag

---

## `Opening and closing tags`

**Type:** HTML syntax
**Aliases:** opening tag, closing tag, end tag

**Definition:**

An opening tag begins an element and a closing tag ends it.

**Example:**

```html
<h1>Page Title</h1>
```

**Notes:**

* Closing tags include a forward slash.
* Some elements, such as `<input>` and `<meta>`, do not wrap content and do not use a closing tag.

**Related terms:**

HTML tag, void element, nesting

---

## `Nesting`

**Type:** HTML concept
**Aliases:** nested elements

**Definition:**

Nesting means placing one HTML element inside another.

**Example:**

```html
<main>
  <h1>Unit Converter</h1>
  <p>Enter a value below.</p>
</main>
```

**Notes:**

* Inner elements should be closed before their containing element is closed.
* Indentation helps make nesting visible to people reading the source.

**Related terms:**

parent element, child element, DOM tree

---

## `Parent and child elements`

**Type:** HTML concept
**Aliases:** parent element, child element, ancestor, descendant

**Definition:**

A parent element directly contains another element. The contained element is its child.

**Example:**

```html
<main>
  <button>Roll</button>
</main>
```

`<main>` is the parent and `<button>` is the child.

**Notes:**

* These relationships form the DOM tree.
* CSS selectors often use parent and descendant relationships.

**Related terms:**

nesting, DOM tree, descendant selector, child selector

---

## `HTML attribute`

**Type:** HTML concept
**Aliases:** attribute

**Definition:**

An attribute provides extra information or configuration for an HTML element.

**Example:**

```html
<input id="age-input" type="number">
```

`id` and `type` are attributes.

**Notes:**

* Attributes are written inside the opening tag.
* Some attributes have values and some act as Boolean switches.

**Related terms:**

`id`, `class`, `type`, Boolean attribute

---

## `id`

**Type:** HTML attribute
**Aliases:** ID attribute

**Definition:**

The `id` attribute gives an element a unique identifier within the document.

**Example:**

```html
<button id="roll-button">Roll</button>
```

**Notes:**

* JavaScript can find the element using `#roll-button`.
* CSS can select it with an ID selector.
* An ID should not be repeated within the same page.

**Related terms:**

ID selector, `document.querySelector()`, `getElementById()`

---

## `class`

**Type:** HTML attribute
**Aliases:** class attribute

**Definition:**

The `class` attribute assigns one or more reusable labels to an element.

**Example:**

```html
<button class="game-button primary-button">
  Roll
</button>
```

**Notes:**

* Many elements may share the same class.
* CSS commonly styles groups of elements through class selectors.

**Related terms:**

class selector, `classList`, CSS selector

---

## `lang`

**Type:** HTML attribute
**Aliases:** language attribute

**Definition:**

The `lang` attribute identifies the language used by a document or element.

**Example:**

```html
<html lang="en-AU">
```

**Notes:**

* It helps screen readers, browsers and search systems interpret the content.
* Use the most appropriate language code for the document.

**Related terms:**

`<html>`, accessibility, locale

---

## `HTML document structure`

**Type:** HTML concept
**Aliases:** `<html>`, `<head>`, `<body>`

**Definition:**

A normal HTML document is organised around the `<html>`, `<head>` and `<body>` elements.

**Example:**

```html
<html lang="en-AU">
  <head>
    <title>Example</title>
  </head>
  <body>
    <main>Visible content</main>
  </body>
</html>
```

**Notes:**

* `<html>` contains the document.
* `<head>` contains metadata and resource references.
* `<body>` contains the visible page content.

**Related terms:**

HTML document, `<title>`, `<meta>`, `<main>`

---

## `<title>`

**Type:** HTML element
**Aliases:** title element, page title

**Definition:**

The `<title>` element defines the name displayed in the browser tab and commonly used when bookmarking the page.

**Example:**

```html
<title>Number Guessing Game</title>
```

**Notes:**

* It belongs inside `<head>`.
* It is different from a visible heading such as `<h1>`.

**Related terms:**

`<head>`, heading elements, document metadata

---

## `<meta>`

**Type:** HTML document metadata
**Aliases:** meta element, metadata

**Definition:**

The `<meta>` element supplies document information that is not normally displayed as page content.

**Example:**

```html
<meta charset="UTF-8">
```

**Notes:**

* Common uses include character encoding and viewport configuration.
* It belongs inside `<head>`.

**Related terms:**

character encoding, viewport meta tag, `<head>`

---

## `Character encoding`

**Type:** HTML document metadata
**Aliases:** charset, UTF-8

**Definition:**

Character encoding defines how stored values represent written characters.

**Example:**

```html
<meta charset="UTF-8">
```

**Notes:**

* UTF-8 supports a very wide range of writing systems and symbols.
* Declare it near the beginning of `<head>`.

**Related terms:**

`<meta>`, Unicode, encoding

---

## `Viewport meta tag`

**Type:** HTML document metadata
**Aliases:** viewport

**Definition:**

The viewport meta tag helps a webpage use the device’s actual display width and scale correctly on mobile devices.

**Example:**

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
```

**Notes:**

* It is normally included in responsive web projects.
* Without it, mobile browsers may render the page as though it were much wider.

**Related terms:**

responsive design, media query, viewport units

---

## `<link>`

**Type:** HTML element
**Aliases:** link element

**Definition:**

The `<link>` element connects the HTML document to an external resource, most commonly a CSS stylesheet.

**Example:**

```html
<link rel="stylesheet" href="style.css">
```

**Notes:**

* It normally belongs inside `<head>`.
* It does not create a clickable hyperlink.

**Related terms:**

stylesheet, `rel`, `href`, `<a>`

---

## `href`

**Type:** HTML attribute
**Aliases:** hyperlink reference

**Definition:**

The `href` attribute specifies the destination or referenced resource for elements such as `<a>` and `<link>`.

**Example:**

```html
<link rel="stylesheet" href="style.css">
```

**Notes:**

* `href` identifies a referenced destination.
* `src` identifies content that is embedded or loaded into the current document.

**Related terms:**

`src`, relative path, URL, `<link>`

---

## `rel`

**Type:** HTML attribute
**Aliases:** relationship attribute

**Definition:**

The `rel` attribute describes the relationship between the current document and a linked resource.

**Example:**

```html
<link rel="stylesheet" href="style.css">
```

**Notes:**

* `stylesheet` tells the browser that the linked file contains CSS.
* Other relationship values serve different purposes.

**Related terms:**

`<link>`, stylesheet, `href`

---

## `<script>`

**Type:** HTML element
**Aliases:** script element

**Definition:**

The `<script>` element loads or contains JavaScript.

**Example:**

```html
<script src="script.js"></script>
```

**Notes:**

* Beginner projects may place it near the end of `<body>`.
* Module scripts and deferred scripts provide other loading behaviours.

**Related terms:**

JavaScript, `src`, module script, `defer`, `async`

---

## `src`

**Type:** HTML attribute
**Aliases:** source attribute

**Definition:**

The `src` attribute identifies a resource that an element should load or embed.

**Example:**

```html
<script src="script.js"></script>
```

**Notes:**

* It is also used by images, audio, video and other elements.
* A misspelled path prevents the resource from loading.

**Related terms:**

`href`, relative path, URL, `<script>`

---

## `<main>`

**Type:** HTML element
**Aliases:** main element, main landmark

**Definition:**

The `<main>` element contains the primary content of the page.

**Example:**

```html
<main>
  <h1>Magic 8-Ball</h1>
</main>
```

**Notes:**

* A page should normally have one main content area.
* It provides useful semantic information to assistive technology.

**Related terms:**

semantic HTML, landmark, `<body>`

---

## `Heading elements`

**Type:** HTML element
**Aliases:** `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

**Definition:**

Heading elements identify titles and sections in a hierarchy.

**Example:**

```html
<h1>Programming Course</h1>
<h2>Grade 1</h2>
<h3>Magic 8-Ball</h3>
```

**Notes:**

* Choose heading levels by document structure rather than visual size.
* CSS can change their appearance.

**Related terms:**

semantic HTML, document outline, `<title>`

---

## `<p>`

**Type:** HTML element
**Aliases:** paragraph element

**Definition:**

The `<p>` element represents a paragraph of text.

**Example:**

```html
<p>Your result will appear here.</p>
```

**Notes:**

* Use paragraphs for blocks of prose.
* Do not use empty paragraphs solely to create spacing. Use CSS instead.

**Related terms:**

HTML element, margin, typography

---

## `<button>`

**Type:** HTML element
**Aliases:** button element

**Definition:**

The `<button>` element creates an interactive control that can be activated by mouse, keyboard or assistive technology.

**Example:**

```html
<button id="convert-button" type="button">
  Convert
</button>
```

**Notes:**

* JavaScript commonly responds to its `click` event.
* Inside a form, specify the button type when it should not submit the form.

**Related terms:**

event, `addEventListener()`, form submission, `type`

---

## `<label>`

**Type:** HTML element
**Aliases:** label element

**Definition:**

The `<label>` element provides a readable name for a form control.

**Example:**

```html
<label for="distance-input">Kilometres</label>
<input id="distance-input" type="number">
```

**Notes:**

* Activating the label focuses or toggles its associated control.
* The `for` value should match the control’s `id`.

**Related terms:**

`<input>`, accessibility, `for`, accessible name

---

## `<input>`

**Type:** HTML element
**Aliases:** input element, input control

**Definition:**

The `<input>` element accepts information from the user.

**Example:**

```html
<input id="guess-input" type="number">
```

**Notes:**

* Its behaviour depends on the `type` attribute.
* JavaScript commonly reads its current `.value`.

**Related terms:**

`value`, input event, `type`, validation attributes

---

## `type`

**Type:** HTML attribute
**Aliases:** type attribute

**Definition:**

The `type` attribute selects the behaviour of certain elements, particularly `<input>`, `<button>` and `<script>`.

**Example:**

```html
<input type="number">
<button type="button">Convert</button>
```

**Notes:**

* The valid values depend on the element.
* A button inside a form defaults to submission behaviour unless configured otherwise.

**Related terms:**

`<input>`, `<button>`, form submission, module script

---

## `HTML comment`

**Type:** HTML syntax
**Aliases:** comment

**Definition:**

An HTML comment contains a note that is ignored when the page is rendered.

**Example:**

```html
<!-- The result is updated by JavaScript. -->
<p id="result-output"></p>
```

**Notes:**

* Comments remain visible to anyone inspecting the page source.
* Do not place secrets in comments.

**Related terms:**

source code, CSS comment, JavaScript comment

---

## `Relative path`

**Type:** HTML concept
**Aliases:** relative URL, file path

**Definition:**

A relative path identifies a resource based on its location compared with the current file.

**Example:**

```html
<link rel="stylesheet" href="styles/main.css">
<script src="../scripts/app.js"></script>
```

**Notes:**

* `./` refers to the current folder.
* `../` moves up one folder.
* Incorrect paths are a common reason resources fail to load.

**Related terms:**

URL, `href`, `src`, project folder

---

# HTML: Grade 2 Decisions and Forms

## `<form>`

**Type:** HTML element
**Aliases:** form element

**Definition:**

The `<form>` element groups controls that collect and submit related information.

**Example:**

```html
<form id="eligibility-form">
  <label for="strength-input">Strength</label>
  <input id="strength-input" name="strength" type="number">

  <button type="submit">Check Eligibility</button>
</form>
```

**Notes:**

* Forms can be handled entirely by JavaScript.
* A submit event provides keyboard-friendly behaviour.

**Related terms:**

form submission, `<input>`, `<button>`, `preventDefault()`

---

## `Form submission`

**Type:** HTML concept
**Aliases:** submit, submit button

**Definition:**

Form submission occurs when the user activates a submit control or presses Enter in an appropriate field.

**Example:**

```html
<button type="submit">Check</button>
```

```javascript
form.addEventListener("submit", handleSubmit);
```

**Notes:**

* Browsers normally attempt to navigate or reload after submission.
* JavaScript can call `event.preventDefault()` to handle the form locally.

**Related terms:**

`<form>`, submit event, `preventDefault()`

---

## `name`

**Type:** HTML attribute
**Aliases:** name attribute

**Definition:**

The `name` attribute identifies a form control’s value when form data is collected or submitted.

**Example:**

```html
<input
  id="strength-input"
  name="strength"
  type="number"
>
```

**Notes:**

* `id` identifies the element within the document.
* `name` identifies its submitted data field.

**Related terms:**

`id`, form data, `<input>`

---

## `value`

**Type:** HTML attribute
**Aliases:** value attribute

**Definition:**

The `value` attribute provides an initial value or submitted value for a form control.

**Example:**

```html
<input type="number" value="10">
```

**Notes:**

* JavaScript reads the current control value through its `.value` property.
* For checkboxes and radio buttons, `value` identifies the value represented by that option.

**Related terms:**

DOM property, `<input>`, `Number()`

---

## `Validation attributes`

**Type:** HTML attribute
**Aliases:** `required`, `min`, `max`, `step`, `pattern`

**Definition:**

Validation attributes describe basic rules that a form control’s value should satisfy.

**Example:**

```html
<input
  type="number"
  required
  min="1"
  max="10"
  step="1"
>
```

**Notes:**

* Browser validation improves the interface but should not be the only validation used by a secure backend.
* JavaScript may provide additional rule-based validation.

**Related terms:**

validation, `:valid`, `:invalid`, `<form>`

---

## `disabled`

**Type:** HTML attribute
**Aliases:** disabled attribute

**Definition:**

The `disabled` attribute prevents a supported control from being activated or edited.

**Example:**

```html
<button disabled>Submit Guess</button>
```

**Notes:**

* Disabled controls are normally skipped by keyboard focus.
* Disabled form controls are not included in submitted form data.

**Related terms:**

`:disabled`, Boolean attribute, game state

---

## `<output>`

**Type:** HTML element
**Aliases:** output element

**Definition:**

The `<output>` element represents the result of a calculation or user action.

**Example:**

```html
<output id="score-output">100</output>
```

**Notes:**

* A paragraph or span can also display results.
* `<output>` provides more specific semantic meaning.

**Related terms:**

output, form, `textContent`

---

## `aria-live`

**Type:** HTML accessibility attribute
**Aliases:** live region

**Definition:**

`aria-live` asks assistive technology to announce content when it changes dynamically.

**Example:**

```html
<p id="feedback-output" aria-live="polite">
  Enter a guess.
</p>
```

**Notes:**

* `polite` waits for an appropriate pause before announcing.
* Do not place it on large regions that change constantly.

**Related terms:**

ARIA, accessibility, dynamic content

---

# HTML: Grade 3 Timing and Repetition

## `<progress>`

**Type:** HTML element
**Aliases:** progress element

**Definition:**

The `<progress>` element displays completion toward a known maximum.

**Example:**

```html
<progress value="6" max="10">6 of 10</progress>
```

**Notes:**

* It is suitable for countdowns, loading and task progress.
* It is not intended to display a measurement that is not progress.

**Related terms:**

`<meter>`, timer, value, max

---

## `<meter>`

**Type:** HTML element
**Aliases:** meter element

**Definition:**

The `<meter>` element displays a measurement within a known range.

**Example:**

```html
<meter value="72" min="0" max="100">
  72
</meter>
```

**Notes:**

* Use it for measurements such as capacity, rating or resource level.
* Use `<progress>` when representing task completion.

**Related terms:**

`<progress>`, min, max, value

---

## `hidden`

**Type:** HTML attribute
**Aliases:** hidden attribute

**Definition:**

The `hidden` attribute marks an element as not currently relevant for display.

**Example:**

```html
<section id="results" hidden>
  Results appear here.
</section>
```

**Notes:**

* JavaScript can toggle the element’s `hidden` property.
* Do not use hidden content when it must remain available to assistive technology.

**Related terms:**

`display: none`, DOM property, state

---

## `data-* attributes`

**Type:** HTML attribute
**Aliases:** custom data attribute, dataset

**Definition:**

Attributes beginning with `data-` store small pieces of application-specific information on an element.

**Example:**

```html
<button data-difficulty="hard">
  Hard Mode
</button>
```

JavaScript can read it through:

```javascript
button.dataset.difficulty
```

**Notes:**

* Dataset values are strings.
* Important application state should not be scattered through markup without a clear reason.

**Related terms:**

dataset, DOM, attribute

---

# HTML: Grade 4 Collections and Data

## `List elements`

**Type:** HTML element
**Aliases:** `<ul>`, `<ol>`, `<li>`, unordered list, ordered list

**Definition:**

List elements represent collections of related items.

**Example:**

```html
<ul id="task-list">
  <li>Review deck list</li>
  <li>Test opening hand</li>
</ul>
```

**Notes:**

* Use `<ol>` when the order has meaning.
* Use `<ul>` when the items form an unordered collection.

**Related terms:**

array, collection, list-style

---

## `Table elements`

**Type:** HTML element
**Aliases:** `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`

**Definition:**

Table elements represent data arranged into related rows and columns.

**Example:**

```html
<table>
  <thead>
    <tr>
      <th>Card</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sol Ring</td>
      <td>Artifact</td>
    </tr>
  </tbody>
</table>
```

**Notes:**

* Use tables for tabular data rather than general page layout.
* Header cells help users understand row and column meaning.

**Related terms:**

structured data, accessibility, CSS Grid

---

## `<template>`

**Type:** HTML element
**Aliases:** template element

**Definition:**

The `<template>` element stores HTML content that is not rendered until JavaScript copies and inserts it.

**Example:**

```html
<template id="task-template">
  <li class="task">
    <span class="task-name"></span>
  </li>
</template>
```

**Notes:**

* Template content is inert while it remains inside the template.
* It can reduce repeated HTML construction in JavaScript.

**Related terms:**

DOM, clone, render, collection

---

## `<details>` and `<summary>`

**Type:** HTML element
**Aliases:** disclosure widget, details element, summary element

**Definition:**

`<details>` creates a native expandable region and `<summary>` provides its visible heading.

**Example:**

```html
<details>
  <summary>Card Details</summary>
  <p>Additional information appears here.</p>
</details>
```

**Notes:**

* Browsers provide keyboard and basic accessibility behaviour automatically.
* Custom accordions may still be required when more control is needed.

**Related terms:**

accordion, disclosure, accessibility

---

# HTML: Grade 5 Systems and State

## `<select>` and `<option>`

**Type:** HTML element
**Aliases:** select element, option element, dropdown

**Definition:**

`<select>` allows the user to choose from a collection of `<option>` values.

**Example:**

```html
<select id="item-select">
  <option value="potion">Potion</option>
  <option value="sword">Sword</option>
</select>
```

**Notes:**

* The selected option’s value is available through the select element’s `.value`.
* Use a visible label.

**Related terms:**

`value`, `<label>`, change event

---

## `Checkbox and radio inputs`

**Type:** HTML element
**Aliases:** checkbox, radio button, `type="checkbox"`, `type="radio"`

**Definition:**

Checkboxes represent independently selectable options. Radio buttons represent one selection from a named group.

**Example:**

```html
<label>
  <input type="checkbox" name="upgrades" value="automation">
  Automation
</label>
```

```html
<label>
  <input type="radio" name="difficulty" value="easy">
  Easy
</label>
```

**Notes:**

* JavaScript reads their `.checked` property.
* Radio buttons belong to the same group when they share a `name`.

**Related terms:**

Boolean, checked, `<label>`, form controls

---

## `<fieldset>` and `<legend>`

**Type:** HTML element
**Aliases:** fieldset element, legend element

**Definition:**

`<fieldset>` groups related form controls and `<legend>` names the group.

**Example:**

```html
<fieldset>
  <legend>Difficulty</legend>

  <label>
    <input type="radio" name="difficulty" value="easy">
    Easy
  </label>
</fieldset>
```

**Notes:**

* They provide useful structure for assistive technology.
* They are particularly helpful for groups of radio buttons and checkboxes.

**Related terms:**

form, accessibility, radio input

---

## `autocomplete`

**Type:** HTML attribute
**Aliases:** autocomplete attribute

**Definition:**

The `autocomplete` attribute tells the browser what kind of information a field expects and whether stored values may be suggested.

**Example:**

```html
<input
  id="player-name"
  name="playerName"
  autocomplete="name"
>
```

**Notes:**

* Use recognised autocomplete tokens where applicable.
* Do not disable autocomplete without a clear reason.

**Related terms:**

form, input, accessibility

---

# HTML: Grade 6 Space and Simulation

## `<canvas>`

**Type:** HTML element
**Aliases:** canvas element

**Definition:**

The `<canvas>` element provides a drawable pixel surface controlled through JavaScript.

**Example:**

```html
<canvas
  id="game-canvas"
  width="640"
  height="480"
></canvas>
```

**Notes:**

* Canvas content is not automatically represented as normal HTML elements.
* Provide accessible alternatives where the visual output conveys important information.

**Related terms:**

Canvas API, game loop, coordinate, render

---

## `SVG`

**Type:** HTML concept
**Aliases:** Scalable Vector Graphics, `<svg>`

**Definition:**

SVG is markup for drawing scalable vector shapes within a webpage.

**Example:**

```html
<svg viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="12" r="8"></circle>
</svg>
```

**Notes:**

* SVG shapes remain sharp at different sizes.
* SVG elements can be styled with CSS and manipulated through JavaScript.

**Related terms:**

`viewBox`, SVG shapes, vector, DOM

---

## `SVG basic shapes`

**Type:** SVG element
**Aliases:** `<circle>`, `<rect>`, `<line>`, `<polyline>`, `<polygon>`, `<path>`

**Definition:**

SVG provides elements for drawing common geometric and free-form shapes.

**Example:**

```html
<svg viewBox="0 0 24 24">
  <polygon points="12,2 22,20 2,20"></polygon>
</svg>
```

**Notes:**

* `<path>` can represent complex shapes.
* `<polygon>` automatically closes the final edge.

**Related terms:**

SVG, `viewBox`, coordinate, path data

---

## `viewBox`

**Type:** SVG attribute
**Aliases:** SVG view box

**Definition:**

The `viewBox` attribute defines the SVG’s internal coordinate system and visible region.

**Example:**

```html
<svg viewBox="0 0 24 24">
```

The values represent:

```text
minimum x, minimum y, width, height
```

**Notes:**

* The SVG may be displayed at a different physical size while retaining the same internal coordinates.
* A 24 by 24 view box is common for interface icons.

**Related terms:**

SVG, coordinate system, responsive graphics

---

# HTML: Grade 7 Organisation and Accessibility

## `Semantic HTML`

**Type:** HTML concept
**Aliases:** semantic elements, semantic markup

**Definition:**

Semantic HTML uses elements whose meaning describes their purpose rather than only their appearance.

**Example:**

```html
<nav>...</nav>
<main>...</main>
<article>...</article>
<footer>...</footer>
```

**Notes:**

* Semantic elements help accessibility, maintenance and automated interpretation.
* Use a `<div>` when no more meaningful element applies.

**Related terms:**

landmark elements, accessibility, `<section>`, `<article>`

---

## `Landmark elements`

**Type:** HTML element
**Aliases:** `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, landmarks

**Definition:**

Landmark elements identify major regions of a page.

**Example:**

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

**Notes:**

* Landmarks help assistive-technology users navigate between major regions.
* Avoid creating many indistinguishable landmarks without labels.

**Related terms:**

semantic HTML, ARIA, accessibility

---

## `<section>` and `<article>`

**Type:** HTML element
**Aliases:** section element, article element

**Definition:**

`<section>` groups a meaningful part of a document. `<article>` represents self-contained content that could reasonably stand on its own.

**Example:**

```html
<section aria-labelledby="grade-one-title">
  <h2 id="grade-one-title">Grade 1</h2>

  <article>
    <h3>Magic 8-Ball</h3>
  </article>
</section>
```

**Notes:**

* Sections normally have a heading.
* Do not replace every `<div>` with `<section>`.

**Related terms:**

semantic HTML, heading elements, landmark

---

## `ARIA`

**Type:** HTML accessibility concept
**Aliases:** Accessible Rich Internet Applications

**Definition:**

ARIA provides additional accessibility information when native HTML alone cannot express a custom interface’s meaning or state.

**Example:**

```html
<button
  aria-expanded="false"
  aria-controls="grade-one-content"
>
  Grade 1
</button>
```

**Notes:**

* Prefer native HTML semantics where available.
* Incorrect ARIA can make an interface less accessible.

**Related terms:**

`role`, `aria-live`, accessible name, semantic HTML

---

## `role`

**Type:** HTML accessibility attribute
**Aliases:** ARIA role

**Definition:**

The `role` attribute communicates an element’s interface purpose to assistive technology.

**Example:**

```html
<div role="status">Saved successfully.</div>
```

**Notes:**

* Native elements often already provide the correct role.
* Do not add redundant or incorrect roles.

**Related terms:**

ARIA, semantic HTML, accessibility

---

## `alt`

**Type:** HTML accessibility attribute
**Aliases:** alternative text, alt attribute

**Definition:**

The `alt` attribute provides a text alternative for an image.

**Example:**

```html
<img
  src="dice-result.png"
  alt="A six-sided die showing four"
>
```

**Notes:**

* Decorative images should normally use `alt=""`.
* Good alternative text describes the image’s purpose in context.

**Related terms:**

`<img>`, accessibility, accessible name

---

## `tabindex`

**Type:** HTML accessibility attribute
**Aliases:** tab index

**Definition:**

The `tabindex` attribute controls whether an element can receive keyboard focus and whether it participates in normal tab order.

**Example:**

```html
<div tabindex="0">Focusable custom region</div>
```

**Notes:**

* `tabindex="0"` joins normal keyboard order.
* `tabindex="-1"` permits programmatic focus without adding normal tab order.
* Avoid positive tabindex values.

**Related terms:**

keyboard accessibility, focus, `:focus-visible`

---

## `Module script`

**Type:** HTML syntax
**Aliases:** `type="module"`, JavaScript module

**Definition:**

A module script allows JavaScript to use `import` and `export` and gives each file its own module scope.

**Example:**

```html
<script type="module" src="app.js"></script>
```

**Notes:**

* Module scripts are deferred automatically.
* Local module loading may require the project to be served rather than opened directly as a file.

**Related terms:**

module, `import`, `export`, scope

---

## `defer`

**Type:** HTML attribute
**Aliases:** deferred script

**Definition:**

The `defer` attribute downloads an external script without blocking HTML parsing, then runs it after the document has been parsed.

**Example:**

```html
<script defer src="app.js"></script>
```

**Notes:**

* Deferred scripts preserve their document order.
* It is useful when the script depends on elements in the document.

**Related terms:**

`<script>`, `async`, DOMContentLoaded

---

## `async`

**Type:** HTML attribute
**Aliases:** asynchronous script attribute

**Definition:**

The `async` attribute downloads an external script without blocking HTML parsing and runs it as soon as it is ready.

**Example:**

```html
<script async src="analytics.js"></script>
```

**Notes:**

* Async scripts do not reliably preserve document order.
* Use them for independent scripts that do not depend on page parsing or other scripts.

**Related terms:**

`defer`, asynchronous, `<script>`

---

# HTML: Grade 8 Project Design

## `<dialog>`

**Type:** HTML element
**Aliases:** dialog element, modal dialog

**Definition:**

The `<dialog>` element represents a dialog box that can be opened normally or as a modal.

**Example:**

```html
<dialog id="settings-dialog">
  <h2>Settings</h2>
  <button id="close-dialog">Close</button>
</dialog>
```

JavaScript can open it with:

```javascript
settingsDialog.showModal();
```

**Notes:**

* Native dialogs provide useful focus and modal behaviour.
* The interface still requires a clear way to close the dialog.

**Related terms:**

modal, focus management, `showModal()`

---

## `<figure>` and `<figcaption>`

**Type:** HTML element
**Aliases:** figure element, figcaption element

**Definition:**

`<figure>` groups self-contained media or illustrative content and `<figcaption>` provides its caption.

**Example:**

```html
<figure>
  <img src="concept-map.png" alt="Programming concept map">
  <figcaption>The completed Grade 7 concept web.</figcaption>
</figure>
```

**Notes:**

* A figure may contain images, diagrams, code or other illustrative content.
* The caption should explain the figure’s role.

**Related terms:**

image, alt, semantic HTML

---

## `Responsive images`

**Type:** HTML concept
**Aliases:** `<picture>`, `<source>`, `srcset`, `sizes`

**Definition:**

Responsive-image features allow the browser to choose an appropriate image source for the display size, resolution or supported format.

**Example:**

```html
<img
  src="board-800.png"
  srcset="
    board-400.png 400w,
    board-800.png 800w
  "
  sizes="(max-width: 600px) 400px, 800px"
  alt="A game board"
>
```

**Notes:**

* The browser selects the source based on the provided rules.
* Always provide a normal `src` fallback and useful `alt` text.

**Related terms:**

responsive design, `<picture>`, lazy loading

---

## `Media elements`

**Type:** HTML element
**Aliases:** `<audio>`, `<video>`, `<track>`

**Definition:**

HTML media elements embed audio and video, while `<track>` can provide captions, subtitles and other timed text.

**Example:**

```html
<video controls>
  <source src="lesson.mp4" type="video/mp4">
  <track
    kind="captions"
    src="lesson-captions.vtt"
    srclang="en"
  >
</video>
```

**Notes:**

* Provide captions for spoken video content.
* Avoid automatically playing sound without a clear user action.

**Related terms:**

accessibility, source element, captions

---

## `<noscript>`

**Type:** HTML element
**Aliases:** noscript element

**Definition:**

The `<noscript>` element provides content for environments where JavaScript is unavailable or disabled.

**Example:**

```html
<noscript>
  This application requires JavaScript.
</noscript>
```

**Notes:**

* It may provide a warning or a useful fallback.
* It does not replace broader progressive-enhancement planning.

**Related terms:**

JavaScript, fallback, progressive enhancement

---

# HTML: Grade 9 Capstone

## `Lazy loading`

**Type:** HTML attribute
**Aliases:** `loading="lazy"`

**Definition:**

Lazy loading asks the browser to delay loading eligible off-screen resources until they are nearer to being needed.

**Example:**

```html
<img
  src="large-map.png"
  loading="lazy"
  alt="World map"
>
```

**Notes:**

* It can reduce unnecessary initial network work.
* Avoid lazily loading critical content already visible at page load.

**Related terms:**

performance, responsive images, network request

---

## `decoding`

**Type:** HTML attribute
**Aliases:** image decoding hint

**Definition:**

The `decoding` attribute gives the browser a hint about how image decoding should relate to other page work.

**Example:**

```html
<img
  src="character.png"
  decoding="async"
  alt="Player character"
>
```

**Notes:**

* It is a performance hint rather than a guarantee.
* Ordinary projects often work correctly without specifying it.

**Related terms:**

image, performance, asynchronous

---

## `inert`

**Type:** HTML attribute
**Aliases:** inert attribute

**Definition:**

The `inert` attribute disables interaction and focus within an element subtree.

**Example:**

```html
<main inert>
  ...
</main>
```

**Notes:**

* It is useful when another interface region, such as a modal, should temporarily receive all interaction.
* Do not leave important content inert accidentally.

**Related terms:**

focus management, modal, accessibility

---

