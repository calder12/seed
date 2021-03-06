---
title: "Width (Min)"
description: "Utility classes that provide a range of min width (%) sizes."
section: "Utility"
source: "https://github.com/helpscout/seed-width-min"
seed-pack: "seed-width-min"
keywords:
  - min
  - minwidth
  - width
---

A series of utility classes that adjust the min-width (%) property of a selector, with support for responsive modifiers.


## Install

```
npm install seed-width-min --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)
* [seed-width](/seed/packs/seed-width)



---



## Usage

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.


These classes can also be combined with the utility classes from [seed-width](/seed/packs/seed-width)/[seed-width-fx](/seed/packs/seed-width-fx) and [seed-width-max](/seed/packs/seed-width-max).


| Class             | Min Width (%) |
| ---               | ---           |
| `.u-width-min-0`  | 0%            |
| `.u-width-min-1`  | 8.33333%      |
| `.u-width-min-2`  | 16.66667%     |
| `.u-width-min-3`  | 25%           |
| `.u-width-min-4`  | 33.33333%     |
| `.u-width-min-5`  | 41.66667%     |
| `.u-width-min-6`  | 50%           |
| `.u-width-min-7`  | 58.33333%     |
| `.u-width-min-8`  | 66.66667%     |
| `.u-width-min-9`  | 75%           |
| `.u-width-min-10` | 83.33333%     |
| `.u-width-min-11` | 91.66667%     |
| `.u-width-min-12` | 100%          |


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



## Configurations

{% include docs/config.html config="seed-width-min" %}



---



## Related

* [seed-grid](/seed/packs/seed-grid)
* [seed-width](/seed/packs/seed-width)
* [seed-width-fx](/seed/packs/seed-width-fx)
* [seed-width-max](/seed/packs/seed-width-max)
