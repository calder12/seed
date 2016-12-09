---
title: Dropdown
description: "Component to encapsulate multiple user-actions . Includes support for a variation of sizes, styles, and states."
section: Component
source: https://github.com/helpscout/seed-dropdown
seed-pack: seed-dropdown
keywords: dropdown, select, bootstrap
---

Dropdown component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-dropdown --save
```


### Dependencies

* [seed-border](/seed/packs/seed-border)
* [seed-bootstrap-fade](https://github.com/helpscout/seed-bootstrap-fade)
* [seed-button](/seed/packs/seed-button)
* [seed-control-group](/seed/packs/seed-control-group)
* [seed-card](/seed/packs/seed-card)
* [seed-dash](/seed/packs/seed-dash)
* [seed-family](/seed/packs/seed-family)
* [seed-list](/seed/packs/seed-list)
* [seed-publish](/seed/packs/seed-publish)
* [seed-this](/seed/packs/seed-this)



---



## Bootstrap

### Javascript

This component's interactions are powered by [Bootstrap](http://getbootstrap.com/javascript/). Refer to their [dropdown documentation](http://getbootstrap.com/javascript/#dropdowns-usage) for Javascript usage.


### CSS

This component **does not** require any of Bootstrap's CSS for style. In fact, it is recommended that Bootstrap's CSS are omitted for `seed-dropdown` to be styled properly.


#### Class names

In the markup examples (below), you will notice that for certain components there is a mixture of seed class names and Bootstrap class names. In order for dropdown's to work properly, Bootstrap's Javascript **requires** certain elements to have certain class names. `seed-dropdown` does not use any of these classes for styling.



---



## Example

{% example html %}
<div class="c-dropdown dropdown">
  <button class="c-button c-dropdown__toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="c-card c-dropdown__menu c-dropdown__menu--truncate dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="c-list">
      <a class="c-list__item dropdown-item" href="#">Action</a>
      <a class="c-list__item dropdown-item" href="#">Another action</a>
      <a class="c-list__item dropdown-item disabled" href="#">Something else here</a>
    </div>
  </div>
</div>
{% endexample %}



### Headers and Dividers

{% example html %}
<div class="c-dropdown dropdown">
  <button class="c-button c-dropdown__toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="c-card c-dropdown__menu c-dropdown__menu--truncate dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="c-list">
      <h5 class="c-dropdown__header">Dropdown header</h5>
      <a class="c-list__item dropdown-item" href="#">Action</a>
      <a class="c-list__item dropdown-item" href="#">Another action</a>
      <a class="c-list__item dropdown-item disabled" href="#">Something else here</a>
    </div>
    <div class="c-list">
      <h5 class="c-dropdown__header">Another header</h5>
      <a class="c-list__item dropdown-item" href="#">Action</a>
    </div>
  </div>
</div>
{% endexample %}



---



## Directions


The dropdown menu's direction can be modified by adding directional based modifications to `.c-dropdown`.

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-dropdown.directions %}

The following dropdown menu drops up and is positioned to the right.

{% example html %}
<div class="c-dropdown c-dropdown--up c-dropdown--right dropdown">
  <button class="c-button c-dropdown__toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="c-card c-dropdown__menu c-dropdown__menu--truncate dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="c-list">
      <a class="c-list__item dropdown-item" href="#">Action</a>
    </div>
  </div>
</div>
{% endexample %}



---



## Sizes

`seed-dropdown` uses [`seed-button`](/seed/packs/seed-button) as its dropdown toggle.

See `seed-button`'s [size documentation](/seed/packs/seed-button/#sizes) for more details on sizes.

{% example html %}
<div class="c-dropdown dropdown">
  <button class="c-button c-button--sm c-dropdown__toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Small dropdown button
  </button>
  <div class="c-card c-dropdown__menu c-dropdown__menu--truncate dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="c-list">
      <a class="c-list__item dropdown-item" href="#">Action</a>
    </div>
  </div>
</div>
{% endexample %}



---



## States

`seed-dropdown` uses [`seed-button`](/seed/packs/seed-button) as its dropdown toggle.

See `seed-button`'s [state documentation](/seed/packs/seed-button/#states) for more details on states.

{% example html %}
<div class="c-dropdown dropdown">
  <button class="c-button is-success c-dropdown__toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Success dropdown
  </button>
  <div class="c-card c-dropdown__menu c-dropdown__menu--truncate dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="c-list">
      <a class="c-list__item dropdown-item" href="#">Action</a>
    </div>
  </div>
</div>
{% endexample %}



---



## Control groups

The borders of the `seed-dropdown` toggles will automatically adjust when placed inside of a [`seed-control-group`](/seed/packs/seed-control-group).

{% example html %}
<div class="o-control-group">
  <button class="c-button">
    Button
  </button>
  <div class="c-dropdown dropdown">
    <button class="c-button c-dropdown__toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div class="c-card c-dropdown__menu c-dropdown__menu--truncate dropdown-menu" aria-labelledby="dropdownMenuButton">
      <div class="c-list">
        <a class="c-list__item dropdown-item" href="#">Action</a>
      </div>
    </div>
  </div>
</div>
{% endexample %}



---



## Related

* [seed-button](/seed/packs/seed-button)
* [seed-card](/seed/packs/seed-card)
* [seed-control-group](/seed/packs/seed-control-group)
* [seed-list](/seed/packs/seed-button)
* [seed-popover](/seed/packs/seed-popover)
