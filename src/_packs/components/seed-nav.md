---
title: "Nav"
description: "Component used for navigation represented with a list of links. Includes support for a variation of sizes and styles."
section: "Component"
source: "https://github.com/helpscout/seed-nav"
seed-pack: "seed-nav"
keywords:
  - nav
  - navigation
  - stack
  - tab
  - tabnav
  - navtab
  - navtabs
  - tabs
---

Navigation component pack for Seed


## Install

```
npm install seed-nav --save
```


### Dependencies

* [seed-border](/seed/packs/seed-border)
* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)


---


## Example

{% example html %}
<nav class="c-nav">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link c-nav__link--right@lg">
    Right Aligned Link
  </a>
</nav>
{% endexample %}



---


## Modifiers

### Tabs

{% example %}
<nav class="c-nav c-nav--tabs">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--tabs">
  ...
</nav>
```



### Hover

Changes the background color of the hovered link item.

{% example %}
<nav class="c-nav c-nav--hover">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--hover">
  ...
</nav>
```


### Orientation

These size modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

**List**
{% example %}
<nav class="c-nav c-nav--list">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--list">
  ...
</nav>
```


**Stacked**
{% example %}
<nav class="c-nav c-nav--stacked">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--stacked">
  ...
</nav>
```



### Alignment

These size modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

**Left**
{% example %}
<nav class="c-nav c-nav--left">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--left">
  ...
</nav>
```


**Center**
{% example %}
<nav class="c-nav c-nav--center">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--center">
  ...
</nav>
```

**Right**
{% example %}
<nav class="c-nav c-nav--right">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--right">
  ...
</nav>
```


#### Items

{% example %}
<nav class="c-nav">
  <a href="#" class="c-nav__link c-nav__link--left">
    Link
  </a>
  <a href="#" class="c-nav__link c-nav__link--right">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav">
  <a href="#" class="c-nav__link c-nav__link--left">
    ...
  </a>
  <a href="#" class="c-nav__link c-nav__link--right">
    ...
  </a>
</nav>
```


### Sizing

The default size for this component is `lg`.
These size modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example %}
<nav class="c-nav c-nav--xs">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
<nav class="c-nav c-nav--sm">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
<nav class="c-nav c-nav--md">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
<nav class="c-nav c-nav--lg">
  <a href="#" class="c-nav__link is-active">
    Active Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
  <a href="#" class="c-nav__link">
    Link
  </a>
</nav>
{% endexample %}

```html
<nav class="c-nav c-nav--xs">
  ...
</nav>
<nav class="c-nav c-nav--sm">
  ...
</nav>
<nav class="c-nav c-nav--md">
  ...
</nav>
<nav class="c-nav c-nav--lg">
  ...
</nav>
```


---



## Configurations

{% include docs/config.html config="seed-nav" %}



---



## Related

* [seed-list](/seed/packs/seed-list)
* [seed-pagination](/seed/packs/seed-pagination)
