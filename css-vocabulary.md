# CSS Vocabulary
# CSS: Grade 1 Foundations

## `CSS`

**Type:** CSS concept
**Aliases:** Cascading Style Sheets

**Definition:**

CSS is the language used to control the appearance and layout of HTML elements.

**Example:**

```css
button {
  padding: 0.75rem 1rem;
  font: inherit;
}
```

**Notes:**

* HTML describes what exists.
* CSS describes how it looks and is arranged.

**Related terms:**

HTML, stylesheet, CSS rule set

---

## `Stylesheet`

**Type:** CSS concept
**Aliases:** CSS file, external stylesheet

**Definition:**

A stylesheet is a collection of CSS rules, commonly stored in a `.css` file.

**Example:**

```html
<link rel="stylesheet" href="style.css">
```

**Notes:**

* External stylesheets can be shared across several pages.
* The HTML document must reference the correct file path.

**Related terms:**

`<link>`, `rel`, CSS rule set

---

## `CSS rule set`

**Type:** CSS syntax
**Aliases:** CSS rule, ruleset

**Definition:**

A CSS rule set selects one or more elements and contains declarations describing how they should appear.

**Example:**

```css
button {
  padding: 0.75rem;
  cursor: pointer;
}
```

**Notes:**

* `button` is the selector.
* The lines inside the braces are declarations.

**Related terms:**

CSS selector, CSS declaration, CSS property

---

## `CSS selector`

**Type:** CSS selector
**Aliases:** selector

**Definition:**

A selector identifies which HTML elements a CSS rule should affect.

**Example:**

```css
.game-button {
  font-weight: bold;
}
```

**Notes:**

* Selectors can target element types, classes, IDs, attributes and relationships.
* A selector may match one element or many.

**Related terms:**

type selector, class selector, ID selector, specificity

---

## `CSS declaration`

**Type:** CSS syntax
**Aliases:** declaration

**Definition:**

A declaration assigns a value to a CSS property.

**Example:**

```css
color: white;
```

**Notes:**

* The property appears before the colon.
* The value appears after the colon.
* A semicolon normally ends the declaration.

**Related terms:**

CSS property, CSS value, CSS rule set

---

## `CSS property`

**Type:** CSS concept
**Aliases:** property

**Definition:**

A CSS property identifies which visual or layout characteristic should change.

**Example:**

```css
font-size: 1.25rem;
```

`font-size` is the property.

**Notes:**

* Each property accepts particular kinds of values.
* Unsupported or invalid declarations are ignored.

**Related terms:**

CSS declaration, CSS value

---

## `CSS value`

**Type:** CSS concept
**Aliases:** value

**Definition:**

A CSS value specifies the setting assigned to a property.

**Example:**

```css
color: rebeccapurple;
```

`rebeccapurple` is the value.

**Notes:**

* Values may be keywords, measurements, colours or functions.
* The valid values depend on the property.

**Related terms:**

CSS property, CSS unit, CSS function

---

## `Type selector`

**Type:** CSS selector
**Aliases:** element selector

**Definition:**

A type selector targets HTML elements by their tag name.

**Example:**

```css
button {
  cursor: pointer;
}
```

**Notes:**

* It affects every matching element unless another rule changes the result.
* Type selectors have lower specificity than class and ID selectors.

**Related terms:**

HTML tag, class selector, specificity

---

## `Class selector`

**Type:** CSS selector
**Aliases:** `.class`

**Definition:**

A class selector targets elements containing a particular class.

**Example:**

```css
.primary-button {
  font-weight: bold;
}
```

**Notes:**

* Class selectors begin with a full stop.
* Classes are the normal reusable styling mechanism.

**Related terms:**

`class`, ID selector, specificity

---

## `ID selector`

**Type:** CSS selector
**Aliases:** `#id`

**Definition:**

An ID selector targets the element with a particular `id`.

**Example:**

```css
#score-output {
  font-size: 2rem;
}
```

**Notes:**

* ID selectors begin with `#`.
* Their high specificity can make overrides more difficult.
* Prefer classes for reusable styling.

**Related terms:**

`id`, class selector, specificity

---

## `Universal and grouping selectors`

**Type:** CSS selector
**Aliases:** universal selector, `*`, grouping selector

**Definition:**

The universal selector matches every element. A grouping selector applies the same rule to several selectors separated by commas.

**Example:**

```css
* {
  box-sizing: border-box;
}
```

```css
h1,
h2,
h3 {
  line-height: 1.2;
}
```

**Notes:**

* Use the universal selector carefully because it has a broad effect.
* Grouping avoids repeating identical declarations.

**Related terms:**

CSS selector, box-sizing, CSS rule set

---

## `Cascade`

**Type:** CSS concept
**Aliases:** cascading

**Definition:**

The cascade is the process CSS uses to decide which declaration wins when several rules affect the same property.

**Example:**

```css
button {
  color: white;
}

.primary-button {
  color: gold;
}
```

A button with the class `primary-button` receives the more specific colour rule.

**Notes:**

* Origin, importance, cascade layer, specificity and source order all contribute.
* The cascade is a core CSS feature rather than an error.

**Related terms:**

specificity, source order, inheritance, `!important`

---

## `Specificity`

**Type:** CSS concept
**Aliases:** selector specificity

**Definition:**

Specificity is part of the cascade and measures how specifically a selector identifies its target.

**Example:**

```css
button {
  color: white;
}

.game-panel button {
  color: cyan;
}
```

The second selector is more specific.

**Notes:**

* ID selectors are generally more specific than class selectors.
* Class selectors are generally more specific than type selectors.
* Avoid treating specificity as a score to maximise.

**Related terms:**

cascade, selector, source order

---

## `Inheritance`

**Type:** CSS concept
**Aliases:** inherited property

**Definition:**

Inheritance allows some CSS property values to pass from a parent element to its descendants.

**Example:**

```css
body {
  color: white;
  font-family: sans-serif;
}
```

Text inside the body generally inherits these values.

**Notes:**

* Not every property inherits.
* Layout properties such as margin normally do not inherit.

**Related terms:**

parent element, cascade, `inherit`

---

## `Box model`

**Type:** CSS concept
**Aliases:** CSS box model

**Definition:**

The box model describes an element as content surrounded by padding, border and margin.

**Example:**

```text
margin
  border
    padding
      content
```

**Notes:**

* Width and height normally apply to the content box unless `box-sizing` changes the calculation.
* Understanding the box model is essential for spacing and sizing.

**Related terms:**

margin, padding, border, box-sizing

---

## `box-sizing`

**Type:** CSS property
**Aliases:** border-box

**Definition:**

`box-sizing` controls how an element’s declared width and height are calculated.

**Example:**

```css
* {
  box-sizing: border-box;
}
```

**Notes:**

* `border-box` includes padding and border inside the declared size.
* It generally makes interface sizing easier to reason about.

**Related terms:**

box model, width, padding, border

---

## `margin`

**Type:** CSS property
**Aliases:** outer spacing

**Definition:**

`margin` creates space outside an element’s border.

**Example:**

```css
section {
  margin-block: 2rem;
}
```

**Notes:**

* Margin separates an element from surrounding elements.
* Vertical margins may collapse in some normal-flow situations.

**Related terms:**

padding, border, box model, logical properties

---

## `padding`

**Type:** CSS property
**Aliases:** inner spacing

**Definition:**

`padding` creates space between an element’s content and border.

**Example:**

```css
button {
  padding: 0.75rem 1rem;
}
```

**Notes:**

* Padding increases the clickable area of controls.
* Backgrounds extend through the padding area.

**Related terms:**

margin, border, box model

---

## `border`

**Type:** CSS property
**Aliases:** element border

**Definition:**

`border` draws a line around an element’s padding and content.

**Example:**

```css
.card {
  border: 1px solid currentColor;
}
```

**Notes:**

* Border shorthand sets width, style and colour.
* A border may affect the element’s total size depending on `box-sizing`.

**Related terms:**

box model, `currentColor`, border-radius

---

## `Size properties`

**Type:** CSS property
**Aliases:** `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`

**Definition:**

CSS size properties control an element’s preferred, minimum or maximum dimensions.

**Example:**

```css
main {
  width: min(100%, 48rem);
  min-height: 100vh;
}
```

**Notes:**

* `max-width` is commonly used to prevent content becoming excessively wide.
* Fixed dimensions should be used carefully when content may grow.

**Related terms:**

CSS unit, responsive design, `min()`

---

## `Colour properties`

**Type:** CSS property
**Aliases:** `color`, `background-color`, foreground colour, background colour

**Definition:**

`color` controls foreground text and line colour. `background-color` controls the element’s background.

**Example:**

```css
body {
  color: #f5f5f5;
  background-color: #181818;
}
```

**Notes:**

* Ensure sufficient contrast between foreground and background.
* SVG strokes using `currentColor` inherit the `color` value.

**Related terms:**

`currentColor`, accessibility, contrast

---

## `Typography properties`

**Type:** CSS property
**Aliases:** `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`

**Definition:**

Typography properties control the appearance, size, weight, spacing and alignment of text.

**Example:**

```css
body {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}
```

**Notes:**

* Comfortable line height improves readability.
* Text should not rely on size alone to communicate document hierarchy.

**Related terms:**

heading elements, inheritance, rem

---

## `display`

**Type:** CSS property
**Aliases:** display property

**Definition:**

The `display` property controls how an element participates in layout.

**Example:**

```css
main {
  display: grid;
}
```

**Notes:**

* Common values include `block`, `inline`, `inline-block`, `flex`, `grid` and `none`.
* Different values establish different layout behaviour.

**Related terms:**

block and inline layout, Flexbox, CSS Grid, `display: none`

---

## `Block, inline and inline-block`

**Type:** CSS value
**Aliases:** `display: block`, `display: inline`, `display: inline-block`

**Definition:**

Block elements normally take their own line. Inline elements flow within text. Inline-block elements flow inline while allowing box-like sizing.

**Example:**

```css
.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
}
```

**Notes:**

* The element’s HTML type provides a default display value.
* CSS can change that value.

**Related terms:**

display, normal flow, box model

---

## `display: grid`

**Type:** CSS layout system
**Aliases:** Grid container

**Definition:**

`display: grid` turns an element into a CSS Grid container.

**Example:**

```css
body {
  display: grid;
  place-items: center;
}
```

**Notes:**

* Direct children become grid items.
* Grid can control rows and columns or simply centre content.

**Related terms:**

CSS Grid, `place-items`, grid template

---

## `place-items`

**Type:** CSS property
**Aliases:** place items

**Definition:**

`place-items` is shorthand for aligning grid items along both layout axes.

**Example:**

```css
body {
  display: grid;
  place-items: center;
}
```

**Notes:**

* It commonly provides simple horizontal and vertical centring.
* Its effect depends on the layout context.

**Related terms:**

CSS Grid, `align-items`, `justify-items`

---

## `cursor`

**Type:** CSS property
**Aliases:** cursor property

**Definition:**

The `cursor` property suggests which pointer shape should appear over an element.

**Example:**

```css
button {
  cursor: pointer;
}
```

**Notes:**

* Cursor appearance does not create actual interactivity.
* Native buttons already provide appropriate semantics.

**Related terms:**

`<button>`, interaction, pointer events

---

## `CSS units`

**Type:** CSS concept
**Aliases:** `px`, `rem`, `em`, `%`, `vh`, `vw`, viewport units

**Definition:**

CSS units describe measurements.

**Example:**

```css
main {
  max-width: 48rem;
  padding: 2rem;
  min-height: 100vh;
}
```

**Notes:**

* `px` is a CSS pixel.
* `rem` relates to the root font size.
* `em` relates to the relevant element’s font size.
* `%` relates to another calculated size.
* `vh` and `vw` relate to viewport dimensions.

**Related terms:**

responsive design, size properties, typography

---

## `CSS comment`

**Type:** CSS syntax
**Aliases:** comment

**Definition:**

A CSS comment contains a note ignored by the browser’s styling engine.

**Example:**

```css
/* Keep controls large enough for comfortable interaction. */
button {
  min-height: 2.75rem;
}
```

**Notes:**

* CSS comments use `/*` and `*/`.
* Comments remain visible in delivered source files.

**Related terms:**

HTML comment, JavaScript comment, source code

---

# CSS: Grade 2 Decisions and State Styling

## `Pseudo-class`

**Type:** CSS pseudo-class
**Aliases:** pseudo class

**Definition:**

A pseudo-class selects an element based on a state, position or condition rather than an added HTML class.

**Example:**

```css
button:hover {
  background-color: rebeccapurple;
}
```

**Notes:**

* Pseudo-classes begin with one colon.
* Examples include `:hover`, `:focus`, `:disabled` and `:nth-child()`.

**Related terms:**

CSS selector, pseudo-element, element state

---

## `:hover`

**Type:** CSS pseudo-class
**Aliases:** hover state

**Definition:**

`:hover` selects an element while a pointing device is positioned over it.

**Example:**

```css
button:hover {
  transform: translateY(-1px);
}
```

**Notes:**

* Hover is not available in the same way on touch-only devices.
* Do not make essential information available only through hover.

**Related terms:**

pseudo-class, interaction, transition

---

## `:focus` and `:focus-visible`

**Type:** CSS pseudo-class
**Aliases:** focus state, focus-visible

**Definition:**

`:focus` selects the element that currently has input focus. `:focus-visible` targets focus when a visible indicator is appropriate, commonly during keyboard navigation.

**Example:**

```css
button:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}
```

**Notes:**

* Do not remove focus indicators without providing a clear replacement.
* Keyboard users depend on visible focus.

**Related terms:**

keyboard accessibility, tabindex, outline

---

## `:disabled`

**Type:** CSS pseudo-class
**Aliases:** disabled state

**Definition:**

`:disabled` selects supported controls that currently have the `disabled` attribute or property.

**Example:**

```css
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
```

**Notes:**

* Styling should reinforce the disabled behaviour rather than create it.
* The HTML or DOM disabled state controls the actual interaction.

**Related terms:**

disabled, pseudo-class, opacity

---

## `:valid` and `:invalid`

**Type:** CSS pseudo-class
**Aliases:** valid state, invalid state

**Definition:**

`:valid` and `:invalid` select form controls based on whether their current values satisfy HTML validation rules.

**Example:**

```css
input:invalid {
  border-color: crimson;
}
```

**Notes:**

* Avoid displaying an error style before the user has reasonably interacted with the form.
* Colour should not be the only error indicator.

**Related terms:**

validation attributes, form, accessibility

---

## `Attribute selector`

**Type:** CSS selector
**Aliases:** `[attribute]`

**Definition:**

An attribute selector targets elements according to the presence or value of an HTML attribute.

**Example:**

```css
input[type="number"] {
  font-variant-numeric: tabular-nums;
}
```

**Notes:**

* Attribute selectors use square brackets.
* They can match exact values or more complex value patterns.

**Related terms:**

HTML attribute, CSS selector, specificity

---

## `CSS combinator`

**Type:** CSS selector
**Aliases:** descendant selector, child selector, sibling selector

**Definition:**

A combinator describes a relationship between selected elements.

**Example:**

```css
.module-panel button {
  width: 100%;
}
```

This selects buttons that are descendants of `.module-panel`.

```css
.grade-list > li {
  list-style: none;
}
```

This selects direct child list items.

**Notes:**

* Common combinators include descendant space, `>`, `+` and `~`.
* Excessively deep selectors can become difficult to maintain.

**Related terms:**

parent and child elements, selector, nesting

---

## `display: none`

**Type:** CSS value
**Aliases:** hidden with display

**Definition:**

`display: none` removes an element from layout and normal rendering.

**Example:**

```css
.is-hidden {
  display: none;
}
```

**Notes:**

* Content removed this way is generally unavailable to assistive technology.
* Use it only when the content should truly be absent from the current interface.

**Related terms:**

hidden, visibility, opacity

---

## `visibility`

**Type:** CSS property
**Aliases:** `visibility: hidden`

**Definition:**

The `visibility` property controls whether an element is visible while normally preserving its layout space.

**Example:**

```css
.preview {
  visibility: hidden;
}
```

**Notes:**

* This differs from `display: none`, which removes layout participation.
* Hidden visibility generally also removes normal interaction.

**Related terms:**

display none, opacity

---

## `opacity`

**Type:** CSS property
**Aliases:** transparency

**Definition:**

The `opacity` property controls the transparency of an entire element.

**Example:**

```css
button:disabled {
  opacity: 0.5;
}
```

**Notes:**

* `opacity: 0` makes an element invisible but does not automatically remove layout or interaction.
* Low opacity can create contrast problems.

**Related terms:**

visibility, display none, transition

---

## `pointer-events`

**Type:** CSS property
**Aliases:** pointer events property

**Definition:**

The `pointer-events` property controls whether an element can become the target of pointer interaction.

**Example:**

```css
.decorative-overlay {
  pointer-events: none;
}
```

**Notes:**

* It does not necessarily remove keyboard interaction.
* Do not use it as the sole way to represent a disabled control.

**Related terms:**

event, cursor, disabled

---

## `!important`

**Type:** CSS syntax
**Aliases:** important declaration

**Definition:**

`!important` raises a declaration’s priority within the cascade.

**Example:**

```css
.is-hidden {
  display: none !important;
}
```

**Notes:**

* It can make future overrides difficult.
* Use it deliberately rather than as a routine solution to specificity problems.

**Related terms:**

cascade, specificity, source order

---

# CSS: Grade 3 Timing and Motion

## `transition`

**Type:** CSS property
**Aliases:** CSS transition

**Definition:**

A transition animates the change between an element’s old and new property values.

**Example:**

```css
button {
  transition:
    transform 150ms ease,
    background-color 150ms ease;
}
```

**Notes:**

* A transition needs a property value to change.
* Not every CSS property can animate smoothly.

**Related terms:**

animation, transform, timing function

---

## `Transition timing`

**Type:** CSS property
**Aliases:** `transition-duration`, `transition-delay`, `transition-timing-function`

**Definition:**

Transition timing properties control how long a transition takes, when it begins and how its rate changes over time.

**Example:**

```css
.card {
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}
```

**Notes:**

* Very long interface transitions can make controls feel unresponsive.
* Timing functions such as `linear`, `ease` and `ease-out` produce different motion.

**Related terms:**

transition, animation duration, reduced motion

---

## `transform`

**Type:** CSS property
**Aliases:** CSS transform

**Definition:**

The `transform` property visually moves, rotates, scales or skews an element.

**Example:**

```css
button:hover {
  transform: translateY(-2px) scale(1.02);
}
```

**Notes:**

* Transforming an element does not normally change the surrounding layout.
* Transforms are commonly animated.

**Related terms:**

`translate()`, `scale()`, `rotate()`, transition

---

## `Transform functions`

**Type:** CSS function
**Aliases:** `translate()`, `translateX()`, `translateY()`, `scale()`, `rotate()`

**Definition:**

Transform functions describe individual visual transformations.

**Example:**

```css
.tile {
  transform: translateX(2rem) rotate(5deg);
}
```

**Notes:**

* Multiple transform functions can be combined in one declaration.
* Their order can affect the final result.

**Related terms:**

transform, coordinate, animation

---

## `animation`

**Type:** CSS property
**Aliases:** CSS animation

**Definition:**

CSS animation applies a named `@keyframes` sequence to an element.

**Example:**

```css
.answer {
  animation: reveal-answer 300ms ease-out;
}
```

**Notes:**

* Animations can run automatically without a property first changing.
* Avoid motion that distracts from the task or causes discomfort.

**Related terms:**

`@keyframes`, transition, prefers-reduced-motion

---

## `@keyframes`

**Type:** CSS at-rule
**Aliases:** keyframes

**Definition:**

`@keyframes` defines the stages of a CSS animation.

**Example:**

```css
@keyframes reveal-answer {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**Notes:**

* Stages may use `from` and `to` or percentages.
* The keyframe name is referenced by an animation declaration.

**Related terms:**

animation, transform, opacity

---

## `Animation settings`

**Type:** CSS property
**Aliases:** `animation-duration`, `animation-delay`, `animation-iteration-count`, `animation-fill-mode`

**Definition:**

Animation settings control timing, repetition and how animated styles apply before and after the sequence.

**Example:**

```css
.target {
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
```

**Notes:**

* Infinite animations should be used sparingly.
* The animation shorthand can combine several settings.

**Related terms:**

animation, transition timing, keyframes

---

## `prefers-reduced-motion`

**Type:** CSS media feature
**Aliases:** reduced motion

**Definition:**

`prefers-reduced-motion` detects whether the user has requested less non-essential motion.

**Example:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms;
    transition-duration: 0.01ms;
  }
}
```

**Notes:**

* Prefer reducing or removing non-essential motion rather than merely making it faster.
* Respecting this preference improves accessibility.

**Related terms:**

media query, animation, accessibility

---

# CSS: Grade 4 Collections and Layout

## `Flexbox`

**Type:** CSS layout system
**Aliases:** flexible box layout, flex container

**Definition:**

Flexbox arranges items primarily along one row or one column.

**Example:**

```css
.toolbar {
  display: flex;
  gap: 0.75rem;
}
```

**Notes:**

* Direct children become flex items.
* Flexbox is well suited to toolbars, navigation and one-dimensional arrangements.

**Related terms:**

`display: flex`, CSS Grid, gap

---

## `flex-direction`

**Type:** CSS property
**Aliases:** flex direction

**Definition:**

`flex-direction` selects the main direction in which flex items are arranged.

**Example:**

```css
.task-list {
  display: flex;
  flex-direction: column;
}
```

**Notes:**

* Common values are `row` and `column`.
* Reversed values also reverse the visual order and should be used carefully.

**Related terms:**

Flexbox, main axis, cross axis

---

## `justify-content`

**Type:** CSS property
**Aliases:** flex main-axis alignment

**Definition:**

`justify-content` distributes items along a layout container’s main axis.

**Example:**

```css
.toolbar {
  display: flex;
  justify-content: space-between;
}
```

**Notes:**

* In a normal row flex container, the main axis is horizontal.
* Its visible effect requires available extra space.

**Related terms:**

Flexbox, `align-items`, main axis

---

## `align-items`

**Type:** CSS property
**Aliases:** cross-axis alignment

**Definition:**

`align-items` controls how items align along a layout container’s cross axis.

**Example:**

```css
.entry-row {
  display: flex;
  align-items: center;
}
```

**Notes:**

* In a normal row flex container, the cross axis is vertical.
* Do not confuse it with `justify-content`.

**Related terms:**

Flexbox, `justify-content`, place-items

---

## `gap`

**Type:** CSS property
**Aliases:** row gap, column gap

**Definition:**

`gap` creates consistent space between flex or grid items.

**Example:**

```css
.grade-list {
  display: grid;
  gap: 0.75rem;
}
```

**Notes:**

* Gap does not add space around the outside of the container.
* It is often clearer than adding margins to every child.

**Related terms:**

Flexbox, CSS Grid, margin

---

## `flex-wrap`

**Type:** CSS property
**Aliases:** flex wrapping

**Definition:**

`flex-wrap` allows flex items to move onto additional lines when they do not fit.

**Example:**

```css
.filter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
```

**Notes:**

* The default is `nowrap`.
* Wrapping can improve small-screen layouts.

**Related terms:**

Flexbox, responsive design

---

## `CSS Grid`

**Type:** CSS layout system
**Aliases:** Grid layout

**Definition:**

CSS Grid arranges content using rows and columns.

**Example:**

```css
.application-layout {
  display: grid;
  grid-template-columns: 18rem 1fr;
}
```

**Notes:**

* Grid is well suited to two-dimensional page and board layouts.
* Flexbox and Grid solve different but overlapping layout problems.

**Related terms:**

grid template, Flexbox, two-dimensional array

---

## `Grid template`

**Type:** CSS property
**Aliases:** `grid-template-columns`, `grid-template-rows`

**Definition:**

Grid-template properties define the tracks used by a grid.

**Example:**

```css
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
```

**Notes:**

* A track is a row or column.
* `fr` distributes available space proportionally.

**Related terms:**

CSS Grid, `repeat()`, grid placement

---

## `Grid placement`

**Type:** CSS property
**Aliases:** `grid-column`, `grid-row`, grid area

**Definition:**

Grid-placement properties control which tracks an item occupies.

**Example:**

```css
.sidebar {
  grid-column: 1;
  grid-row: 1 / -1;
}
```

**Notes:**

* Items may be placed explicitly or allowed to flow automatically.
* Negative line numbers can count from the end of the grid.

**Related terms:**

CSS Grid, coordinate, grid template

---

## `repeat()` and `minmax()`

**Type:** CSS function
**Aliases:** `repeat()`, `minmax()`, `auto-fit`, `auto-fill`

**Definition:**

`repeat()` avoids repeating track definitions. `minmax()` gives a track a permitted size range.

**Example:**

```css
.card-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(12rem, 1fr));
}
```

**Notes:**

* `auto-fit` and `auto-fill` support responsive repeated tracks.
* Their empty-track behaviour differs.

**Related terms:**

CSS Grid, responsive design, grid template

---

## `overflow`

**Type:** CSS property
**Aliases:** overflow-x, overflow-y

**Definition:**

`overflow` controls what happens when content extends beyond an element’s box.

**Example:**

```css
.entry-list {
  overflow-y: auto;
}
```

**Notes:**

* Common values include `visible`, `hidden`, `auto` and `scroll`.
* Scrollable regions should remain keyboard accessible.

**Related terms:**

size properties, scrolling, clipping

---

## `:nth-child()`

**Type:** CSS pseudo-class
**Aliases:** nth child

**Definition:**

`:nth-child()` selects elements according to their position among siblings.

**Example:**

```css
tbody tr:nth-child(even) {
  background-color: rgb(255 255 255 / 0.04);
}
```

**Notes:**

* It counts sibling positions beginning at one.
* It can accept numbers, keywords and formulas.

**Related terms:**

pseudo-class, parent and child elements, table

---

# CSS: Grade 5 Systems and Reusable Styling

## `Custom property`

**Type:** CSS concept
**Aliases:** CSS variable, `--custom-property`

**Definition:**

A custom property stores a reusable CSS value under a name beginning with two hyphens.

**Example:**

```css
:root {
  --surface-colour: #202020;
}
```

**Notes:**

* Custom properties participate in the cascade.
* They are read using `var()`.

**Related terms:**

`:root`, `var()`, design token, cascade

---

## `:root`

**Type:** CSS pseudo-class
**Aliases:** root selector

**Definition:**

`:root` selects the document’s root element and is commonly used to define application-wide custom properties.

**Example:**

```css
:root {
  --spacing-medium: 1rem;
  --radius-medium: 0.75rem;
}
```

**Notes:**

* In an HTML document, the root element is `<html>`.
* Custom properties may also be defined more locally.

**Related terms:**

custom property, scope, `var()`

---

## `var()`

**Type:** CSS function
**Aliases:** CSS variable function

**Definition:**

`var()` reads the value of a CSS custom property.

**Example:**

```css
.panel {
  background-color: var(--surface-colour);
}
```

A fallback may be supplied:

```css
color: var(--text-colour, white);
```

**Notes:**

* The fallback is used when the referenced custom property is unavailable or invalid.
* Custom-property names are case-sensitive.

**Related terms:**

custom property, `:root`, CSS function

---

## `calc()`

**Type:** CSS function
**Aliases:** CSS calculation

**Definition:**

`calc()` performs a calculation using compatible CSS values.

**Example:**

```css
.content {
  min-height: calc(100vh - 4rem);
}
```

**Notes:**

* It can combine different units where the operation is meaningful.
* Include spaces around addition and subtraction operators.

**Related terms:**

CSS unit, size properties, responsive design

---

## `min()`, `max()` and `clamp()`

**Type:** CSS function
**Aliases:** `min()`, `max()`, `clamp()`

**Definition:**

These functions select values according to minimum, maximum or bounded responsive rules.

**Example:**

```css
main {
  width: min(100% - 2rem, 60rem);
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

**Notes:**

* `clamp(minimum, preferred, maximum)` is useful for fluid sizing.
* Keep responsive calculations understandable.

**Related terms:**

responsive design, CSS unit, size properties

---

## `Logical properties`

**Type:** CSS concept
**Aliases:** `margin-inline`, `margin-block`, `padding-inline`, `padding-block`, `inset-inline`

**Definition:**

Logical properties describe directions according to text flow rather than fixed physical left, right, top and bottom directions.

**Example:**

```css
.panel {
  padding-inline: 1.5rem;
  margin-block: 2rem;
}
```

**Notes:**

* They adapt more naturally to different writing directions.
* `inline` broadly follows the text line and `block` follows the stacking direction.

**Related terms:**

internationalisation, margin, padding

---

## `currentColor`

**Type:** CSS value
**Aliases:** current colour

**Definition:**

`currentColor` uses the element’s current `color` value.

**Example:**

```css
.icon {
  stroke: currentColor;
}

.panel {
  color: rebeccapurple;
  border-color: currentColor;
}
```

**Notes:**

* It is especially useful for icons that should inherit surrounding text colour.
* The word uses American spelling because it is CSS syntax.

**Related terms:**

colour properties, SVG, inheritance

---

## `accent-color`

**Type:** CSS property
**Aliases:** form accent colour

**Definition:**

`accent-color` sets the accent colour used by supported native form controls.

**Example:**

```css
input[type="checkbox"] {
  accent-color: rebeccapurple;
}
```

**Notes:**

* Browser rendering still varies.
* Preserve sufficient contrast and recognisable control states.

**Related terms:**

checkbox, radio input, appearance

---

## `appearance`

**Type:** CSS property
**Aliases:** native appearance

**Definition:**

The `appearance` property controls whether supported controls use their usual platform-native presentation.

**Example:**

```css
.custom-control {
  appearance: none;
}
```

**Notes:**

* Removing native appearance also removes useful visual behaviour that must be recreated.
* Use it cautiously for interactive controls.

**Related terms:**

form controls, accessibility, accent-color

---

# CSS: Grade 6 Space and Simulation

## `position`

**Type:** CSS property
**Aliases:** positioned element

**Definition:**

The `position` property selects how an element is positioned and how offset properties affect it.

**Example:**

```css
.game-board {
  position: relative;
}
```

**Notes:**

* Common values are `static`, `relative`, `absolute`, `fixed` and `sticky`.
* Positioning affects layout and containing-block behaviour.

**Related terms:**

relative positioning, absolute positioning, inset, z-index

---

## `position: relative`

**Type:** CSS value
**Aliases:** relative positioning

**Definition:**

Relative positioning keeps an element in normal flow while allowing it to be visually offset and to establish a containing block for positioned descendants.

**Example:**

```css
.board {
  position: relative;
}
```

**Notes:**

* Without offsets, the element may not visibly move.
* It is commonly used as the reference container for absolute children.

**Related terms:**

position, absolute positioning, containing block

---

## `position: absolute`

**Type:** CSS value
**Aliases:** absolute positioning

**Definition:**

Absolute positioning removes an element from normal flow and positions it relative to an appropriate containing block.

**Example:**

```css
.game-piece {
  position: absolute;
  inset-inline-start: 4rem;
  inset-block-start: 2rem;
}
```

**Notes:**

* Nearby content behaves as though the element does not occupy its normal space.
* It is useful for overlays and coordinate-based placement.

**Related terms:**

position, relative positioning, inset, coordinate

---

## `position: fixed` and `position: sticky`

**Type:** CSS value
**Aliases:** fixed positioning, sticky positioning

**Definition:**

Fixed positioning attaches an element relative to the viewport. Sticky positioning behaves normally until a scroll threshold is reached.

**Example:**

```css
.toolbar {
  position: sticky;
  top: 0;
}
```

**Notes:**

* Sticky behaviour depends on scrolling and containing elements.
* Fixed elements can obscure content if spacing is not planned.

**Related terms:**

position, viewport, scroll container

---

## `Inset and stacking`

**Type:** CSS property
**Aliases:** `top`, `right`, `bottom`, `left`, `inset`, `z-index`

**Definition:**

Inset properties offset positioned elements. `z-index` influences their stacking order within relevant stacking contexts.

**Example:**

```css
.overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
}
```

**Notes:**

* A larger `z-index` does not escape every stacking context.
* Prefer logical inset properties where writing direction matters.

**Related terms:**

position, stacking context, logical properties

---

## `aspect-ratio`

**Type:** CSS property
**Aliases:** aspect ratio

**Definition:**

`aspect-ratio` supplies a preferred width-to-height relationship.

**Example:**

```css
.game-board {
  width: min(90vw, 40rem);
  aspect-ratio: 1;
}
```

**Notes:**

* It is useful for square boards, media and cards.
* Actual dimensions still depend on other size constraints.

**Related terms:**

size properties, responsive design

---

## `object-fit`

**Type:** CSS property
**Aliases:** image fitting

**Definition:**

`object-fit` controls how replaced content such as an image or video fits inside its box.

**Example:**

```css
.card-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}
```

**Notes:**

* `cover` may crop content.
* `contain` preserves the entire content but may leave empty space.

**Related terms:**

image, size properties, aspect-ratio

---

## `transform-origin`

**Type:** CSS property
**Aliases:** transformation origin

**Definition:**

`transform-origin` defines the point around which a transform is applied.

**Example:**

```css
tile {
  transform-origin: center;
}
```

**Notes:**

* Changing the origin changes rotation and scaling behaviour.
* It does not change the element’s layout position.

**Related terms:**

transform, rotate, scale

---

# CSS: Grade 7 Organisation and Responsive Design

## `Media query`

**Type:** CSS at-rule
**Aliases:** `@media`

**Definition:**

A media query applies CSS only when specified environment conditions are met.

**Example:**

```css
@media (max-width: 48rem) {
  .application-layout {
    grid-template-columns: 1fr;
  }
}
```

**Notes:**

* Media queries commonly respond to viewport size and user preferences.
* They should support the content rather than target particular device models.

**Related terms:**

breakpoint, responsive design, prefers-reduced-motion

---

## `Breakpoint`

**Type:** CSS concept
**Aliases:** responsive breakpoint

**Definition:**

A breakpoint is a condition at which the layout changes to better suit available space.

**Example:**

```css
@media (min-width: 60rem) {
  .application-layout {
    grid-template-columns: 20rem 1fr;
  }
}
```

**Notes:**

* Choose breakpoints according to where the content needs to change.
* Do not assume a fixed list of device widths.

**Related terms:**

media query, mobile-first, responsive design

---

## `Mobile-first`

**Type:** CSS concept
**Aliases:** mobile-first CSS

**Definition:**

Mobile-first styling begins with a layout suitable for constrained space, then adds enhancements for wider conditions.

**Example:**

```css
.application-layout {
  display: block;
}

@media (min-width: 60rem) {
  .application-layout {
    display: grid;
    grid-template-columns: 20rem 1fr;
  }
}
```

**Notes:**

* Mobile-first does not mean mobile-only.
* It often results in simpler default styles.

**Related terms:**

media query, breakpoint, responsive design

---

## `@supports`

**Type:** CSS at-rule
**Aliases:** feature query

**Definition:**

`@supports` applies CSS when the browser recognises a particular property and value.

**Example:**

```css
@supports (display: grid) {
  .application-layout {
    display: grid;
  }
}
```

**Notes:**

* It supports progressive enhancement.
* It tests syntax support rather than whether a feature is entirely bug-free.

**Related terms:**

browser compatibility, fallback, progressive enhancement

---

## `@layer`

**Type:** CSS at-rule
**Aliases:** cascade layer

**Definition:**

`@layer` creates named cascade layers with an explicit priority order.

**Example:**

```css
@layer reset, base, components, utilities;

@layer components {
  .button {
    padding: 0.75rem 1rem;
  }
}
```

**Notes:**

* Layer order participates in the cascade before specificity within those layers.
* It can reduce specificity conflicts across large stylesheets.

**Related terms:**

cascade, specificity, source order

---

## `@import`

**Type:** CSS at-rule
**Aliases:** CSS import

**Definition:**

`@import` loads another stylesheet from within CSS.

**Example:**

```css
@import url("./components/buttons.css");
```

**Notes:**

* HTML `<link>` elements are often preferable for primary stylesheets.
* Import order affects the cascade.

**Related terms:**

stylesheet, cascade, module

---

## `CSS reset and normalisation`

**Type:** CSS concept
**Aliases:** CSS reset, normalize, normalisation

**Definition:**

A CSS reset removes or standardises browser default styles so the application begins from a more predictable base.

**Example:**

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

**Notes:**

* A reset removes defaults more aggressively.
* Normalisation preserves useful defaults while reducing differences.

**Related terms:**

browser default, box-sizing, stylesheet

---

## `Vendor prefix`

**Type:** CSS syntax
**Aliases:** prefixed property, `-webkit-`

**Definition:**

A vendor prefix marks an experimental or browser-specific property or value.

**Example:**

```css
-webkit-font-smoothing: antialiased;
```

**Notes:**

* Modern build tools may add required prefixes automatically.
* Do not add prefixed properties without understanding their support and purpose.

**Related terms:**

browser compatibility, build tool, fallback

---

## `Source order`

**Type:** CSS concept
**Aliases:** order of appearance

**Definition:**

When competing declarations otherwise have equal cascade priority, the declaration appearing later normally wins.

**Example:**

```css
.button {
  color: white;
}

.button {
  color: gold;
}
```

The button becomes gold.

**Notes:**

* Source order is only one part of the cascade.
* Reordering files can therefore change results.

**Related terms:**

cascade, specificity, `@layer`

---

# CSS: Grade 8 Project Design

## `Container query`

**Type:** CSS concept
**Aliases:** container queries, `@container`

**Definition:**

Container queries apply styles according to the size or state of a containing element rather than the viewport.

**Example:**

```css
.card-region {
  container-type: inline-size;
}

@container (min-width: 30rem) {
  .card {
    grid-template-columns: 8rem 1fr;
  }
}
```

**Notes:**

* They are useful for reusable components appearing in different layouts.
* The container must be configured for the queried feature.

**Related terms:**

responsive design, media query, component

---

## `prefers-color-scheme`

**Type:** CSS media feature
**Aliases:** preferred colour scheme, dark mode media query

**Definition:**

`prefers-color-scheme` detects whether the user has requested a light or dark interface theme.

**Example:**

```css
@media (prefers-color-scheme: dark) {
  :root {
    --surface-colour: #181818;
    --text-colour: #f5f5f5;
  }
}
```

**Notes:**

* A manual application setting may override the system preference.
* Ensure both themes maintain sufficient contrast.

**Related terms:**

media query, custom property, `color-scheme`

---

## `color-scheme`

**Type:** CSS property
**Aliases:** colour scheme property

**Definition:**

The `color-scheme` property tells the browser which light or dark colour schemes an element supports.

**Example:**

```css
:root {
  color-scheme: dark;
}
```

**Notes:**

* It can affect browser-rendered controls and default colours.
* The property name uses American spelling because it is CSS syntax.

**Related terms:**

prefers-color-scheme, form controls, theme

---

## `CSS nesting`

**Type:** CSS syntax
**Aliases:** nested CSS

**Definition:**

CSS nesting allows related selectors to be written inside another rule.

**Example:**

```css
.grade-button {
  color: white;

  &:hover {
    color: gold;
  }
}
```

**Notes:**

* The `&` symbol refers to the outer selector.
* Avoid nesting so deeply that the final selectors become difficult to understand.

**Related terms:**

selector, combinator, Sass

---

## `Pseudo-element`

**Type:** CSS pseudo-element
**Aliases:** pseudo element

**Definition:**

A pseudo-element styles a generated or selected part of an element rather than a separate HTML element.

**Example:**

```css
.required-label::after {
  content: " *";
}
```

**Notes:**

* Pseudo-elements normally use two colons.
* Common examples include `::before`, `::after` and `::first-line`.

**Related terms:**

pseudo-class, `::before`, `content`

---

## `::before` and `::after`

**Type:** CSS pseudo-element
**Aliases:** before pseudo-element, after pseudo-element

**Definition:**

`::before` and `::after` create generated boxes before or after an element’s content.

**Example:**

```css
.external-link::after {
  content: " ↗";
}
```

**Notes:**

* They normally require the `content` property.
* Essential information should not exist only in generated content.

**Related terms:**

pseudo-element, `content`, accessibility

---

## `content`

**Type:** CSS property
**Aliases:** generated content

**Definition:**

The `content` property supplies generated content for supported pseudo-elements.

**Example:**

```css
.completed-task::before {
  content: "✓";
}
```

**Notes:**

* It is mainly used with `::before` and `::after`.
* Important text should generally remain in HTML.

**Related terms:**

pseudo-element, semantic HTML, accessibility

---

# CSS: Grade 9 Capstone and Performance

## `Critical CSS`

**Type:** CSS performance concept
**Aliases:** above-the-fold CSS

**Definition:**

Critical CSS is the minimum styling required to render the initially visible interface correctly.

**Example:**

A production build may inline essential layout and typography while loading the remaining stylesheet separately.

**Notes:**

* This is an optimisation technique rather than a normal beginner requirement.
* Poorly maintained critical CSS can duplicate or drift from the main stylesheet.

**Related terms:**

performance, build, stylesheet

---

## `CSS containment`

**Type:** CSS performance concept
**Aliases:** `contain`

**Definition:**

CSS containment allows a component to limit how much its layout, style or painting affects the rest of the page.

**Example:**

```css
game-panel {
  contain: layout paint;
}
```

**Notes:**

* Containment can improve performance in complex interfaces.
* It can also change sizing and positioning behaviour.

**Related terms:**

performance, layout, paint

---

## `content-visibility`

**Type:** CSS property
**Aliases:** content visibility

**Definition:**

`content-visibility` allows the browser to skip rendering work for content that is not currently needed.

**Example:**

```css
.long-module-section {
  content-visibility: auto;
}
```

**Notes:**

* It may improve large-page rendering performance.
* Test accessibility, scrolling and intrinsic-size behaviour carefully.

**Related terms:**

performance, containment, lazy loading

---

## `will-change`

**Type:** CSS property
**Aliases:** will change

**Definition:**

`will-change` warns the browser that a property is likely to change soon so it may prepare an optimisation.

**Example:**

```css
.drag-preview {
  will-change: transform;
}
```

**Notes:**

* Apply it shortly before the change where practical.
* Excessive use can consume memory and reduce performance.

**Related terms:**

transform, performance, animation

---

## `Reflow and repaint`

**Type:** CSS performance concept
**Aliases:** layout, reflow, paint, repaint

**Definition:**

Reflow or layout recalculates element geometry. Repaint redraws pixels after visual changes.

**Example:**

Changing an element’s width may require layout and paint. Changing a composited transform may avoid broad layout recalculation.

**Notes:**

* Modern browsers perform several optimisation stages.
* Do not make performance assumptions without measuring.

**Related terms:**

render, transform, performance profiling

---

