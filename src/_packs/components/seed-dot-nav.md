---
title: "Dot nav"
description: "Component used for navigation or progression represented with series of dots. Includes support for a variation of sizes and styles."
section: "Component"
source: "https://github.com/helpscout/seed-dot-nav"
seed-pack: "seed-dot-nav"
keywords:
   - dot
   - dotnav
   - dot nav
   - nav
   - progress
---

Dot navigation component pack for Seed


## Install

```
npm install seed-dot-nav --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-props](/seed/packs/seed-props)
* [seed-publish](/seed/packs/seed-publish)


---


## Example

{% example html %}
<ul class="c-dot-nav">
  <li class="c-dot-nav__item is-active">
    <a href="#" class="c-dot-nav__link">Link</a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link">Link</a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link">Link</a>
  </li>
</ul>
{% endexample %}



---


## Modifiers


### Alignment

These size modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% modifiers %}
---
modifier: 
  - title: "Left"
    class: "c-dot-nav--left"
    description: "Aligns the component to the left"
  - title: "Center"
    class: "c-dot-nav--center"
    description: "Aligns the component in the center (horizontally)"
  - title: "Right"
    class: "c-dot-nav--right"
    description: "Aligns the component to the right"
---
{% example %}
<ul class="c-dot-nav $modifier">
  <li class="c-dot-nav__item is-active">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
</ul>
{% endexample %}

```html
<ul class="c-dot-nav $modifier">
  ...
</ul>
```
{% endmodifiers %}



### Sizing

These size modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% modifiers %}
---
modifier: 
  - title: "Large"
    class: "c-dot-nav--dot-lg"
    description: "Changes the dot sizes to 16px"
  - title: "Medium"
    class: "c-dot-nav--dot-md"
    description: "Changes the dot sizes to 10px (Default size)"
  - title: "Small"
    class: "c-dot-nav--dot-sm"
    description: "Changes the dot sizes to 8px"
---
{% example %}
<ul class="c-dot-nav $modifier">
  <li class="c-dot-nav__item is-active">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
</ul>
{% endexample %}

```html
<ul class="c-dot-nav $modifier">
  ...
</ul>
```
{% endmodifiers %}



---



## Styles

### Static

A static `.c-dot-nav` component is used to indicate progress, typically used in wizard or step-based interfaces. The `.c-dot-nav--static` modifier class removes hover styles and resets the cursor to the standard pointer.

{% example html %}
<p>
  Completed: 2/5
</p>
<ul class="c-dot-nav c-dot-nav--static">
  <li class="c-dot-nav__item is-active">
    <span href="#" class="c-dot-nav__link"></span>
  </li>
  <li class="c-dot-nav__item is-active">
    <span href="#" class="c-dot-nav__link"></span>
  </li>
  <li class="c-dot-nav__item">
    <span href="#" class="c-dot-nav__link"></span>
  </li>
  <li class="c-dot-nav__item">
    <span href="#" class="c-dot-nav__link"></span>
  </li>
  <li class="c-dot-nav__item">
    <span href="#" class="c-dot-nav__link"></span>
  </li>
</ul>
{% endexample %}



---



## States

Dot nav items can have individual states.

{% modifiers %}
---
modifier: 
  - title: "Active"
    class: "is-active"
    description: "Changes the default dot color"
  - title: "Disabled"
    class: "is-disabled"
    description: "Mutes the dot and disables the cursor"
---
{% example %}
<ul class="c-dot-nav">
  <li class="c-dot-nav__item $modifier">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
  <li class="c-dot-nav__item">
    <a href="#" class="c-dot-nav__link"></a>
  </li>
</ul>
{% endexample %}

```html
<ul class="c-dot-nav">
  <li class="c-dot-nav__item $modifier">
    ...
  </li>
</ul>
```
{% endmodifiers %}



---



## Configurations

{% include docs/config.html config="seed-dot-nav" %}



---



## Related

* [seed-list](/seed/packs/seed-list)
* [seed-pagination](/seed/packs/seed-pagination)
* [seed-progress-bar](/seed/packs/seed-progress-bar)
* [seed-nav](/seed/packs/seed-nav)
