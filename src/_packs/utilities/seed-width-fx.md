---
title: Width (Fixed)
section: Utilities
layout: docs
source: https://github.com/helpscout/seed-width-fx
seed-pack: seed-width-fx
---

Width (fixed) utility pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-width-fx --save
```


### Dependencies

* [seed-breakpoints](/packs/seed-breakpoints)
* [seed-publish](/packs/seed-publish)



---



## Usage

All of the following classes support **[responsive modifiers](/packs/seed-breakpoints/#responsive-modifiers)**.

These classes can also be combined with the utility classes from [seed-width-min](/packs/seed-width-min) and [seed-width-max](/packs/seed-width-max).

{% include docs/variables-table.html data=site.data.seed.seed-width-fx.width %}


### Example

{% example html %}
<div class="u-width-fx-3 t-bg-blue-200">
  I'm blue and 150px wide.
</div>
<div class="u-width-fx-6 t-bg-yellow-200">
  I'm yellow and 300px wide.
</div>
{% endexample %}



---


## Related

* [seed-grid](/packs/seed-grid)
* [seed-width](/packs/seed-width)
* [seed-width-max](/packs/seed-width-max)
* [seed-width-min](/packs/seed-width-min)
