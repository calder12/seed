---
title: "Vertical Align"
description: "Utility classes that adjust the vertical alignment of inline elements."
section: "Utility"
source: "https://github.com/helpscout/seed-vertical-align"
seed-pack: "seed-vertical-align"
keywords:
 - align
 - center
 - inline
 - middle
 - text
 - vertical
---

A series of utility classes that adjust the vertical-alignment property of a inline selector, with support for responsive modifiers.


## Install

```
npm install seed-vertical-align --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

`seed-vertical-align` provides a vertical aligments for inline elements.

See the list of [responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers).


| Class               | Vertical Aligment |
| ---                 | ---               |
| `.u-va-bottom`      | bottom            |
| `.u-va-inherit`     | inherit           |
| `.u-va-initial`     | initial           |
| `.u-va-middle`      | middle            |
| `.u-va-text-bottom` | text-bottom       |
| `.u-va-text-top`    | text-top          |
| `.u-va-top`         | top               |
| `.u-va-top`         | top               |


### Example

{% example html %}
<span class="u-va-middle tx-h1">Prospector?</span>
<span>You're outta your box!</span>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-vertical-align" %}



---



## Related

* [seed-centralize](/seed/packs/seed-centralize)
* [seed-display](/seed/packs/seed-display)
