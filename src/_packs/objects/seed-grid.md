---
title: "Grid system"
description: "Object classes that provide grid structure."
section: "Object"
source: "https://github.com/helpscout/seed-grid"
seed-pack: "seed-grid"
keywords:
  - col
  - column
  - container
  - grid
  - layout
  - responsive
  - row
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

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-grid.columns %}


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

Offset classes work similarly to columns classes. Instead of adjusting the size of the column, they're responsible for providing left margin spacing.

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-grid.offset %}

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


## Reordering columns

Push and pull classes allow you to reorder columns. They support all of the default [column sizes](/#columns) and **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

**Push**: Shifts grid columns to the right<br>
**Pull**: Shifts grid columns to the left

{% example html %}
<div class="o-row">
  <div class="o-col-9@md o-col-push-3@md">.o-col-9@md .o-col-push-3@md</div>
  <div class="o-col-3@md o-col-pull-9@md">.o-col-3@md o-col-pull-9@md</div>
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
