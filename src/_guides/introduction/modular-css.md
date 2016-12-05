---
title: Introduction to Modular CSS
---

Modern CSS has evolved from writing tons of one-time use styles to a more systematic approach that focuses modular reusable pieces of UI. Modular code is incredibly flexible and powerful. Above all else, modular code is **scalable**.

Regardless of what CSS design philosophy you follow from Object Oriented CSS (OOCSS), to Atomic CSS, to modern hotness of "Block, Element, Modifier" (BEM). They all strive to accomplish the same basic goal — creating reusable bits of modular CSS.


## The "component"

"Component" is the term used to describe these modular CSS styles. A component is reusable UI element that performs a role and is self-contained. A great example of a CSS component would be a button.

In the example below, we can create a CSS button component in our markup by adding the class of `.c-button` to a plain ol' HTML `<button>`.

{% example html %}
<button>Default HTML Button</button>
<button class="c-button">CSS Button</button>
{% endexample %}

The `.c-button` class can be used multiple times.

{% example html %}
<button class="c-button">Regular Button</button>
<button class="c-button">Another Button</button>
<a class="c-button">Link Button</a>
{% endexample %}

This design pattern makes it very **fast** and **easy** to build reliable user interfaces at scale. Every single time the `.c-button` class is used in markup (`HTML`), it always references the same `.c-button` component class styles that exists in the CSS.

```button.css
.c-button {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #ddd;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
  box-sizing: border-box;
  color: #2b2b2b;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: normal;
  height: 36px;
  line-height: 34px;
  outline: none;
  padding: 0 1em;
  transition: all 0.1s ease;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
}
```


## Modular namespaces

### Components

### Objects

### Utilities

### Themes

### Scope

### Text
