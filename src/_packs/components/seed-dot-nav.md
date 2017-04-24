---
title: Dot Nav
description: "Component used for navigation or progression represented with series of dots. Includes support for a variation of sizes and styles."
section: Component
source: https://github.com/helpscout/seed-dot-nav
seed-pack: seed-dot-nav
keywords: dot, dots, dot nav, nav, progress, 
---

Dot navigation component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

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

**Left**
{% example %}
<ul class="c-dot-nav c-dot-nav--left">
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
<ul class="c-dot-nav c-dot-nav--left">
  ...
</ul>
```


**Center**
{% example %}
<ul class="c-dot-nav c-dot-nav--center">
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
<ul class="c-dot-nav c-dot-nav--center">
  ...
</ul>
```


**Right**
{% example %}
<ul class="c-dot-nav c-dot-nav--right">
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
<ul class="c-dot-nav c-dot-nav--right">
  ...
</ul>
```



### Sizing

These size modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example %}
<ul class="c-dot-nav c-dot-nav--dot-lg c-dot-nav--center">
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
{% example %}
<ul class="c-dot-nav c-dot-nav--dot-md c-dot-nav--center">
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
{% example %}
<ul class="c-dot-nav c-dot-nav--dot-sm c-dot-nav--center">
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
<ul class="c-dot-nav c-dot-nav--dot-lg">
  ...
</ul>
<ul class="c-dot-nav c-dot-nav--dot-md">
  ...
</ul>
<ul class="c-dot-nav c-dot-nav--dot-sm">
  ...
</ul>
```


---



## States

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

### Active

{% example html %}
<ul class="c-dot-nav">
  <li class="c-dot-nav__item is-active">
    <a href="#" class="c-dot-nav__link">Link</a>
  </li>
</ul>
{% endexample %}


### Disabled

{% example html %}
<ul class="c-dot-nav">
  <li class="c-dot-nav__item is-disabled">
    <a href="#" class="c-dot-nav__link">Link</a>
  </li>
</ul>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-dot-nav" %}



---



## Related

* [seed-list](/seed/packs/seed-list)
* [seed-pagination](/seed/packs/seed-pagination)
* [seed-progress-bar](/seed/packs/seed-progress-bar)
* [seed-nav](/seed/packs/seed-nav)
