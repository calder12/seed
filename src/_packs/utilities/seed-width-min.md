---
title: Width (Min)
section: Utilities
layout: docs
source: https://github.com/helpscout/seed-width-min
seed-pack: seed-width-min
---

Width (min) utility pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-width-min --save
```


### Dependencies

* [seed-breakpoints](/packs/seed-breakpoints)
* [seed-publish](/packs/seed-publish)
* [seed-width](/packs/seed-width)



---



## Usage

All of the following classes support **[responsive modifiers](/packs/seed-breakpoints/#responsive-modifiers)**.


These classes can also be combined with the utility classes from [seed-width](/packs/seed-width)/[seed-width-fx](/packs/seed-width-fx) and [seed-width-max](/packs/seed-width-max).

{% include docs/variables-table.html data=site.data.seed.seed-width-min.width %}


### Example

{% example html %}
<div class="u-width-min-3 t-bg-blue-200">
  I'm blue and 25% wide (min).
</div>
<div class="u-width-min-6 t-bg-yellow-200">
  I'm yellow and 50% wide (min).
</div>
<div class="u-width-min-9 t-bg-green-200">
  I'm green and 75% wide (min).
</div>
{% endexample %}



---



## Related

* [seed-grid](/packs/seed-grid)
* [seed-width](/packs/seed-width)
* [seed-width-fx](/packs/seed-width-fx)
* [seed-width-max](/packs/seed-width-max)
