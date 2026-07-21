# Commonly Confused Terms and Syntax
## `HTML element vs HTML tag`

Explain:

* A tag is the written marker, such as `<button>`.
* An element is the complete represented item, including tags, attributes, content and DOM representation.

Example:

```html
<button class="primary">Save</button>
```

---

## `id vs class`

Explain:

* `id` uniquely identifies one element.
* `class` is a reusable label shared by any number of elements.
* JavaScript may use either, but CSS generally favours classes for reusable styling.

---

## `href vs src`

Explain:

* `href` references a destination or related resource.
* `src` loads or embeds a resource into the current document.

Examples:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

---

## `<head>` vs `<header>`

Explain:

* `<head>` contains document metadata and resource references.
* `<header>` is visible semantic content introducing a page or section.

---

## `<title>` vs `<h1>`

Explain:

* `<title>` names the browser tab and belongs in `<head>`.
* `<h1>` is the primary visible heading in the page content.

---

## `<section>` vs `<div>`

Explain:

* `<section>` represents a meaningful document section and normally has a heading.
* `<div>` is a generic grouping element without additional semantic meaning.

---

## `<button>` vs `<input type="button">`

Explain:

* Both can create buttons.
* `<button>` can contain richer HTML and is generally more flexible.
* Inside forms, specify the intended button type.

---

## `disabled vs hidden`

Explain:

* Disabled controls remain visible but cannot be used normally.
* Hidden content is removed from the current rendered interface.
* They communicate different states.

---

## `margin vs padding`

Explain:

* Margin creates space outside the border.
* Padding creates space inside the border around the content.

---

## `class selector vs ID selector`

Explain:

* `.name` selects a class.
* `#name` selects an ID.
* ID selectors have greater specificity and are less reusable.

---

## `cascade vs specificity vs inheritance`

Explain:

* The cascade is the complete decision process.
* Specificity compares selector strength within part of that process.
* Inheritance passes some property values from ancestors to descendants.

---

## `display: none vs visibility: hidden vs opacity: 0`

Explain:

* `display: none` removes layout and rendering.
* `visibility: hidden` preserves layout space but hides the element.
* `opacity: 0` makes it transparent while generally preserving layout and interaction.

---

## `position: relative vs absolute vs fixed vs sticky`

Explain:

* Relative remains in normal flow and may establish a containing block.
* Absolute leaves normal flow and uses a containing block.
* Fixed attaches to the viewport.
* Sticky changes behaviour according to scrolling.

---

## `width vs max-width`

Explain:

* `width` provides the preferred width.
* `max-width` prevents the used width exceeding a limit.
* Combining flexible width with a maximum often supports responsive layouts.

---

## `px vs rem vs em`

Explain:

* `px` represents CSS pixels.
* `rem` relates to the root font size.
* `em` relates to the relevant element’s font size and can compound through nesting.

---

## `pseudo-class vs pseudo-element`

Explain:

* A pseudo-class selects an existing element in a state or relationship, such as `:hover`.
* A pseudo-element targets or creates a conceptual part, such as `::before`.

---

## `transition vs animation`

Explain:

* A transition responds to a property changing between states.
* An animation follows a named keyframe sequence and may run independently.

---

## `Flexbox vs CSS Grid`

Explain:

* Flexbox is primarily one-dimensional.
* Grid is designed for rows and columns.
* Either may be appropriate for simple layouts.

---

## `justify-content vs align-items`

Explain:

* `justify-content` acts along the main axis.
* `align-items` acts along the cross axis.
* The axes depend on layout direction.

---

## `media query vs container query`

Explain:

* Media queries respond to the viewport or environment.
* Container queries respond to a containing element.

---

