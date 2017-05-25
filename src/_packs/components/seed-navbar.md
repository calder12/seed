---
title: "Navbar"
description: "Component used for the main header navigation, with support for links and dropdowns, optimized for multiple device sizes"
section: "Component"
source: "https://github.com/helpscout/seed-navbar"
seed-pack: "seed-navbar"
keywords:
  - navbar
  - navigation
  - nav
  - collapse
  - nav bar
  - bar
  - header
---

A component used for the main header navigation, with support for links and dropdowns, optimized for multiple device sizes.

This component's Javascript interactions are powered by [Bootstrap](https://v4-alpha.getbootstrap.com/components/navbar/).


## Install

```
npm install seed-navbar --save
```


### Dependencies

* [seed-button](/seed/packs/seed-button)
* [seed-dropdown](/seed/packs/seed-dropdown)
* [seed-nav](/seed/packs/seed-nav)
* [seed-publish](/seed/packs/seed-publish)


---


## Example

{% example html %}
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    <div class="c-navbar__item">
      <a href="#" class="c-navbar__brand">Brand</a>
    </div>
    <div class="c-navbar__item c-navbar__item--right">
      <button class="c-navbar__toggle c-button" data-toggle="collapse" data-target="#navbar">
        <span class="c-navbar__toggle-icon"></span>
      </button>
    </div>
  </div>
  <div class="c-navbar__item collapse navbar-collapse" id="navbar">
    <ul class="c-nav c-nav--sm c-nav--md@md c-nav--stacked c-nav--list@md">
      <li>
        <a class="c-nav__link is-active" href="#">
          Home
        </a>
      </li>
      <li>
        <a class="c-nav__link" href="#">
          Features
        </a>
      </li>
      <li class="c-dropdown dropdown c-nav__item">
        <a class="c-nav__link c-dropdown__toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
          Dropdown button
        </a>
        <div class="c-card c-dropdown__menu c-dropdown__menu--truncate dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="c-list">
            <a class="c-list__item dropdown-item" href="#">Action</a>
            <a class="c-list__item dropdown-item" href="#">Another action</a>
            <a class="c-list__item dropdown-item disabled" href="#">Something else here</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endexample %}



---



## Components

The Navbar component contains a variety of smaller sub-components for content and structural purposes.

### Main component

The main component for Navbar is a `<div>` selector that has a class name of `.c-navbar` **and** `.navbar`. The additional `.navbar` class is necessary for Bootstrap's Javascript to work correctly.

```html
<div class="c-navbar navbar">
  ...
</div>
```


---


### Sub-components

#### Header

This sub-component provides structure and contains elements to be presented on devices with smaller viewport sizes.

```html
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    ...
  </div>
</div>
```


---


#### Nav Item

This sub-component provides structure and wraps inner content and components with the Navbar.

```html
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    <div class="c-navbar__item">
      ...
    </div>
    ...
  </div>
</div>
```

**Modifiers**

These alignment modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

| Modifier | Description |
| --- | --- |
| `.c-navbar__item--left` | Aligns the nav item to the left. |
| `.c-navbar__item--right` | Aligns the nav item to the right. |


---


#### Brand

**(Optional)**

This sub-component provides adjusted styles for text-based branding. This component isn't necessary, as it can be subtituted with an image logo or other text.

```html
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    <div class="c-navbar__item">
      <a href="#" class="c-navbar__brand">Brand</a>
    </div>
    ...
  </div>
</div>
```


---


#### Toggle

This sub-component toggles the collapse/expand of the Navbar's links. This component only appears for devices with smaller viewports.

`data` attributes are necessary for Bootstrap's Javascript to work correctly.

```html
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    ...
    <div class="c-navbar__item">
      <button class="c-navbar__toggle c-button" data-toggle="collapse" data-target="#navbar">
        <span class="c-navbar__toggle-icon"></span>
      </button>
    </div>
  </div>
</div>
```


---


#### Collapse

This sub-component contains the navigation links (and dropdowns) within the Navbar. Items added within this component will be hidden for devices with smaller viewports until the Navbar's [toggle](#toggle) is triggered.

The `id` attribute and `collapse navbar-collapse` class names are necessary for Bootstrap's Javascript to work correctly.

```html
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    ...
  </div>
  <div class="c-navbar__item collapse navbar-collapse" id="navbar">
    ...
  </div>
</div>
```


---


#### Nav

This sub-component uses [seed-nav](/seed/packs/seed-nav) to provide structure for the Navbar's links.

The additional `c-nav` modifiers are necessary for the Nav component to render correctly for multiple viewport sizes.

```html
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    ...
  </div>
  <div class="c-navbar__item collapse navbar-collapse" id="navbar">
    <ul class="c-nav c-nav--sm c-nav--md@md c-nav--stacked c-nav--list@md">
      <li>
        <a class="c-nav__link is-active" href="#">
          ...
        </a>
      </li>
    </ul>
  </div>
</div>
```


---


#### Dropdown

**(Optional)**

This sub-component uses [seed-dropdown](/seed/packs/seed-dropdown) to provide structure for the Navbar's dropdown links.

Check out the [seed-dropdown documentation](/seed/packs/seed-dropdown) for more information about how the Dropdown component works.

```html
<div class="c-navbar navbar">
  <div class="c-navbar__header">
    ...
  </div>
  <div class="c-navbar__item collapse navbar-collapse" id="navbar">
    <ul class="c-nav c-nav--sm c-nav--md@md c-nav--stacked c-nav--list@md">
      ...
      <li>
      </li>
      <li class="c-dropdown dropdown c-nav__item">
        ...
      </li>
    </ul>
  </div>
</div>
```


---



## Configurations

{% include docs/config.html config="seed-navbar" %}



---



## Related

* [seed-dropdown](/seed/packs/seed-dropdown)
* [seed-nav](/seed/packs/seed-nav)
