---
title: "Opacity"
description: "Utility classes that adjust the opacity value of elements."
section: "Utility"
source: "https://github.com/helpscout/seed-opacity"
seed-pack: "seed-opacity"
keywords:
  - opacity
  - transparency
  - transparent
  - visibility
---

A series of utility classes that adjust the opacity property of a selector.


## Install

```
npm install seed-opacity --save
```


### Dependencies

* [seed-props](/seed/packs/seed-props)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

`seed-opacity` provides a range of opacitys ranging from `0-100%`.


| Class      | Opacity (value) |
| ---        | ---             |
| `.u-op-0`  | 0               |
| `.u-op-1`  | 0.1             |
| `.u-op-2`  | 0.2             |
| `.u-op-3`  | 0.3             |
| `.u-op-4`  | 0.4             |
| `.u-op-5`  | 0.5             |
| `.u-op-6`  | 0.6             |
| `.u-op-7`  | 0.7             |
| `.u-op-8`  | 0.8             |
| `.u-op-9`  | 0.9             |
| `.u-op-10` | 1               |


### Example

{% example html %}
<div class="u-op-8">I'm pretty visible</div>
<div class="u-op-5">I'm sorta visible</div>
<div class="u-op-1">I'm like… barely visible</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-opacity" %}



---



## Related

* [seed-display](/seed/packs/seed-display)
* [seed-visibility](/seed/packs/seed-visibility)
