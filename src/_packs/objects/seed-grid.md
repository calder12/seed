---
title: Grid system
section: Object
layout: docs
source: https://github.com/helpscout/seed-grid
seed-pack: seed-grid
---

Grid system pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-grid --save
```



### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## About

Seed's grid system is a modified abstraction Bootstrap's (v4) grid.

The grid class names have been modified to match Seed's CSS naming conventions:

* ``.container`` was renamed to ``.o-container``
* ``.row`` was renamed to ``.o-row``
* ``.col`` was heavily modified.

  <a href="http://v4-alpha.getbootstrap.com/layout/grid/" target="_blank">Learn more</a> about Bootstraps' grid system.


---


## Columns

The column implementation of Seed is based on Bootstrap. However, the naming convention was heavily modified.

### Sizes

The grid system uses a base of 12 (columns).

<table class="c-table">
  <thead>
    <tr>
      <th>
        Class
      </th>
      <th>
        Width (%)
      </th>
    </tr>
  </thead>
  <tbody>
    {% assign container = 1140 %}
    {% assign columns = 12 %}

    {% for n in (1..columns) %}
      <tr>
        <td>
          <code>.o-col-{{ n }}</code>
        </td>
        <td>
          {{ n | get_column_percentage }}%
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>



### Default classes

<table class="c-table">
  <thead>
    <tr>
      <th>
        Breakpoint
      </th>
      <th>
        Example
      </th>
      <th>
        The column's width will be set…
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        None
      </td>
      <td>
        <code>.o-col-4</code>
      </td>
      <td>
        Always.
      </td>
    </tr>
    <tr>
      <td>
        <code>@sm</code>
      </td>
      <td>
        <code>.o-col-4@sm</code>
      </td>
      <td>
        when the viewport is larger than 544px.
      </td>
    </tr>
    <tr>
      <td>
        <code>@md</code>
      </td>
      <td>
        <code>.o-col-4@md</code>
      </td>
      <td>
        when the viewport is larger than 768px.
      </td>
    </tr>
    <tr>
      <td>
        <code>@lg</code>
      </td>
      <td>
        <code>.o-col-4@lg</code>
      </td>
      <td>
        when the viewport is larger than 992px.
      </td>
    </tr>
  </tbody>
</table>



### Offset classes

<table class="c-table">
  <thead>
    <tr>
      <th>
        Breakpoint
      </th>
      <th>
        Example
      </th>
      <th>
        The column's width will be set…
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        None
      </td>
      <td>
        <code>.o-col-offset-4</code>
      </td>
      <td>
        Always.
      </td>
    </tr>
    <tr>
      <td>
        <code>@sm</code>
      </td>
      <td>
        <code>.o-col-offset-4@sm</code>
      </td>
      <td>
        when the viewport is larger than 544px.
      </td>
    </tr>
    <tr>
      <td>
        <code>@md</code>
      </td>
      <td>
        <code>.o-col-offset-4@md</code>
      </td>
      <td>
        when the viewport is larger than 768px.
      </td>
    </tr>
    <tr>
      <td>
        <code>@lg</code>
      </td>
      <td>
        <code>.o-col-offset-4@lg</code>
      </td>
      <td>
        when the viewport is larger than 992px.
      </td>
    </tr>
  </tbody>
</table>



## Example

{% example html %}
<div class="o-container">
  <div class="o-row">
    <div class="o-col-2@md">.o-col-2@md</div>
    <div class="o-col-2@md">.o-col-2@md</div>
    <div class="o-col-2@md">.o-col-2@md</div>
    <div class="o-col-2@md">.o-col-2@md</div>
    <div class="o-col-2@md">.o-col-2@md</div>
    <div class="o-col-2@md">.o-col-2@md</div>
  </div>
  <div class="o-row">
    <div class="o-col-8@md">.o-col-8@md</div>
    <div class="o-col-4@md">.o-col-4@md</div>
  </div>
  <div class="o-row">
    <div class="o-col-4@md">.o-col-4@md</div>
    <div class="o-col-4@md">.o-col-4@md</div>
    <div class="o-col-4@md">.o-col-4@md</div>
  </div>
  <div class="o-row">
    <div class="o-col-6@md">.o-col-6@md</div>
    <div class="o-col-6@md">.o-col-6@md</div>
  </div>
</div>
{% endexample %}


---


## Offsetting columns

{% example html %}
<div class="o-row">
  <div class="o-col-4@md">.o-col-4@md</div>
  <div class="o-col-4@md o-col-offset-4@md">.o-col-4@md .o-col-offset-4@md</div>
</div>
<div class="o-row">
  <div class="o-col-3@md o-col-offset-3@md">.o-col-3@md .o-col-offset-3@md</div>
  <div class="o-col-3@md o-col-offset-3@md">.o-col-3@md .o-col-offset-3@md</div>
</div>
<div class="o-row">
  <div class="o-col-6@md o-col-offset-3@md">.o-col-6@md .o-col-offset-3@md</div>
</div>
{% endexample %}


---


## Nesting Columns

{% example html %}
<div class="o-row">
  <div class="o-col-9@sm">
    Level 1: .o-col-9@sm
    <div class="o-row">
      <div class="o-col-8 o-col-6@sm">
        Level 2: .o-col-8 .o-col-6@sm
      </div>
      <div class="o-col-4 o-col-6@sm">
        Level 2: .o-col-4 .o-col-6@sm
      </div>
    </div>
  </div>
</div>
{% endexample %}


---


## Mobile and desktop

{% example html %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="o-row">
  <div class="o-col-12 o-col-8@md">.o-col-12 .o-col-8@md</div>
  <div class="o-col-6 o-col-4@md">.o-col-6 .o-col-4@md</div>
</div>
<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="o-row">
  <div class="o-col-6 o-col-4@md">.o-col-6 .o-col-4@md</div>
  <div class="o-col-6 o-col-4@md">.o-col-6 .o-col-4@md</div>
  <div class="o-col-6 o-col-4@md">.o-col-6 .o-col-4@md</div>
</div>
<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="o-row">
  <div class="o-col-6">.o-col-6</div>
  <div class="o-col-6">.o-col-6</div>
</div>
{% endexample %}


---


## Related

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-width](/seed/packs/seed-width)
