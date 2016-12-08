---
title: Width
description: "Utility classes that provide a range of width (%) sizes."
section: Utility
layout: docs
source: https://github.com/helpscout/seed-width
seed-pack: seed-width
---

Width utility pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-width --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usages

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

These classes can also be combined with the utility classes from [seed-width-min](/seed/packs/seed-width-min) and [seed-width-max](/seed/packs/seed-width-max).


{% include docs/variables-table.html data=site.data.seed.seed-width.width %}


### Example

{% example html %}
<div class="u-width-3 t-bg-blue-200">
  I'm blue and 25% wide.
</div>
<div class="u-width-6 t-bg-yellow-200">
  I'm yellow and 50% wide.
</div>
<div class="u-width-9 t-bg-green-200">
  I'm green and 75% wide.
</div>
{% endexample %}



---


## Related

* [seed-grid](/seed/packs/seed-grid)
* [seed-width-fx](/seed/packs/seed-width-fx)
* [seed-width-max](/seed/packs/seed-width-max)
* [seed-width-min](/seed/packs/seed-width-min)
