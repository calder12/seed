---
title: "Width (Fixed)"
description: "Utility classes that provide a range of fixed width (px) sizes."
section: "Utility"
source: "https://github.com/helpscout/seed-width-fx"
seed-pack: "seed-width-fx"
keywords:
  - fixed
  - fixedwidth
  - fx
  - pixel
  - px
  - width
---

A series of utility classes that adjust the width (px) property of a selector, with support for responsive modifiers.


## Install

```
npm install seed-width-fx --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---



## Usage

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

These classes can also be combined with the utility classes from [seed-width-min](/seed/packs/seed-width-min) and [seed-width-max](/seed/packs/seed-width-max).


| Class           | Width (px) |
| ---             | ---        |
| `.u-width-fx-0` | 0px        |
| `.u-width-fx-1` | 50px       |
| `.u-width-fx-2` | 100px      |
| `.u-width-fx-3` | 150px      |
| `.u-width-fx-4` | 200px      |
| `.u-width-fx-5` | 250px      |
| `.u-width-fx-6` | 300px      |
| `.u-width-fx-7` | 350px      |
| `.u-width-fx-8` | 400px      |


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



## Configurations

{% include docs/config.html config="seed-width-fx" %}



---



## Related

* [seed-grid](/seed/packs/seed-grid)
* [seed-width](/seed/packs/seed-width)
* [seed-width-max](/seed/packs/seed-width-max)
* [seed-width-min](/seed/packs/seed-width-min)
