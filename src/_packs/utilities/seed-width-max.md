---
title: "Width (Max)"
description: "Utility classes that provide a range of max width (%) sizes."
section: "Utility"
source: "https://github.com/helpscout/seed-width-max"
seed-pack: "seed-width-max"
keywords:
  - max
  - maxwidth
  - width
---

A series of utility classes that adjust the max-width (%) property of a selector, with support for responsive modifiers.


## Install

```
npm install seed-width-max --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)
* [seed-width](/seed/packs/seed-width)



---



## Usage

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

These classes can also be combined with the utility classes from [seed-width](/seed/packs/seed-width)/[seed-width-fx](/seed/packs/seed-width-fx) and [seed-width-min](/seed/packs/seed-width-min).


| Class             | Max Width (%) |
| ---               | ---           |
| `.u-width-max-0`  | 0%            |
| `.u-width-max-1`  | 8.33333%      |
| `.u-width-max-2`  | 16.66667%     |
| `.u-width-max-3`  | 25%           |
| `.u-width-max-4`  | 33.33333%     |
| `.u-width-max-5`  | 41.66667%     |
| `.u-width-max-6`  | 50%           |
| `.u-width-max-7`  | 58.33333%     |
| `.u-width-max-8`  | 66.66667%     |
| `.u-width-max-9`  | 75%           |
| `.u-width-max-10` | 83.33333%     |
| `.u-width-max-11` | 91.66667%     |
| `.u-width-max-12` | 100%          |


### Example

{% example html %}
<div class="u-width-max-3 t-bg-blue-200">
  I'm blue and 25% wide (max).
</div>
<div class="u-width-max-6 t-bg-yellow-200">
  I'm yellow and 50% wide (max).
</div>
<div class="u-width-max-9 t-bg-green-200">
  I'm green and 75% wide (max).
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-width-max" %}



---



## Related

* [seed-grid](/seed/packs/seed-grid)
* [seed-width](/seed/packs/seed-width)
* [seed-width-fx](/seed/packs/seed-width-fx)
* [seed-width-min](/seed/packs/seed-width-min)
