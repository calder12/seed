---
title: "Width"
description: "Utility classes that provide a range of width (%) sizes."
section: "Utility"
source: "https://github.com/helpscout/seed-width"
seed-pack: "seed-width"
keywords:
  - width
---

A series of utility classes that adjust the width (%) property of a selector, with support for responsive modifiers.


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


| Class         | Width (%) |
| ---           | ---       |
| `.u-width-0`  | 0%        |
| `.u-width-1`  | 8.33333%  |
| `.u-width-2`  | 16.66667% |
| `.u-width-3`  | 25%       |
| `.u-width-4`  | 33.33333% |
| `.u-width-5`  | 41.66667% |
| `.u-width-6`  | 50%       |
| `.u-width-7`  | 58.33333% |
| `.u-width-8`  | 66.66667% |
| `.u-width-9`  | 75%       |
| `.u-width-10` | 83.33333% |
| `.u-width-11` | 91.66667% |
| `.u-width-12` | 100%      |


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



## Configurations

{% include docs/config.html config="seed-width" %}



---



## Related

* [seed-grid](/seed/packs/seed-grid)
* [seed-width-fx](/seed/packs/seed-width-fx)
* [seed-width-max](/seed/packs/seed-width-max)
* [seed-width-min](/seed/packs/seed-width-min)
