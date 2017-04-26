---
title: "Floats"
description: "Utility classes that provide floating and clearfixing styles to elements."
section: "Utility"
source: "https://github.com/helpscout/seed-floats"
seed-pack: "seed-floats"
keywords:
  - clear
  - clearfix
  - float
  - layout
  - left
  - pull
  - right
---

A series of utility classes that adjust the float property of a selector, with support for responsive modifiers.


## Install

```
npm install seed-floats --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage


### Clearfix

Class: `.u-clearfix`

The technique of "clearing" must be utilitized when float utility classes are being used. This ensures that elements on your page align correctly.

For most use cases, applying a "clearfix" class to the parent selector containing floating elements takes care of this.


{% example html %}
<div class="u-clearfix">
  <div class="u-pull-left">
    Buzz
  </div>
  <div class="u-pull-left">
    Slinky
  </div>
  <div class="u-pull-right">
    Woody
  </div>
</div>
{% endexample %}


---


### Pull (Float)

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.


| Class           | Float |
| ---             | ---   |
| `.u-pull-left`  | left  |
| `.u-pull-right` | right |
| `.u-pull-none`  | none  |


**Example**

{% example html %}
<div class="u-clearfix">
  <div class="u-pull-right">
    Woody
  </div>
</div>
{% endexample %}


---


### Clear

For most use-cases, the [clearfix](#clearfix) utility class is able to handle float clearing. However, the following clear classes are available to provide finer grain control.

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.


| Class            | Clearfix |
| ---              | ---      |
| `.u-clear-none`  | none     |
| `.u-clear-left`  | left     |
| `.u-clear-right` | right    |
| `.u-clear-both`  | both     |


---



## Configurations

{% include docs/config.html config="seed-floats" %}



---



## Related

* [seed-flexy](/seed/packs/seed-flexy)
