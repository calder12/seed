---
title: "Border"
description: "Thematic classes to adjust border styles."
section: "Theme"
source: "https://github.com/helpscout/seed-border"
seed-pack: "seed-border"
keywords:
  - border
  - radius
---

A series of thematic classes that adjust the border property of a selector, with support for responsive modifiers.


## Install

```
npm install seed-border --save
```

### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

`.t-bdr` supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.


| Class           | Borders applied on…      |
| ---             | ---                      |
| `.t-bdr`        | top, right, bottom, left |
| `.t-bdr-top`    | top                      |
| `.t-bdr-right`  | right                    |
| `.t-bdr-bottom` | bottom                   |
| `.t-bdr-left`   | left                     |


**Example**

{% example html %}
<div class="t-bdr-top u-pad-3 u-mrg-b-2">
  I only have a border on the top.
</div>
<div class="t-bdr-right u-pad-3 u-mrg-b-2">
  I only have a border on the right.
</div>
<div class="t-bdr-left u-pad-3 u-mrg-b-2">
  I only have a border on the left.
</div>
<div class="t-bdr">
  Hah! I gots borders all over the place.
</div>
{% endexample %}



---



## Border Radius

Border radiuses can be adjusted by adding a `.t-bdr-r` class.


| Class             | Borders radius |
| ---               | ---            |
| `.t-bdr-r-0`      | 0px            |
| `.t-bdr-r-1`      | 1px            |
| `.t-bdr-r-2`      | 2px            |
| `.t-bdr-r-3`      | 3px            |
| `.t-bdr-r-4`      | 4px            |
| `.t-bdr-r-circle` | 50%            |
| `.t-bdr-r-pill`   | 9999px         |


**Example**

{% example html %}
<div class="t-bdr-r-3 u-pad-3 t-bg-blue-200 u-mrg-b-2">
  I have a border radius of 3px!
</div>
<div class="t-bdr-r-pill u-pad-3 t-bg-green-200">
  I have a border radius of a lot of px!
</div>
{% endexample %}



---



## Configurations


{% include docs/config.html config="seed-border" %}
