---
title: "Display"
description: "Utility classes that adjust the display styles of elements."
section: "Utility"
source: "https://github.com/helpscout/seed-display"
seed-pack: "seed-display"
keywords:
   - block
   - display
   - hidden
   - hide
   - inline
   - inline-block
   - inlineblock
   - responsive
---

A series of utility classes that adjust the display property of a selector, with support for responsive modifiers.


## Install

```
npm install seed-display --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

`seed-display` provides a handful of utility classes that change the `display` CSS property of a selector. Below are all the utility classes and their affects.

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.


| Class               | Display Value |
| ---                 | ---           |
| `.u-d-initial`      | initial       |
| `.u-d-none`         | none          |
| `.u-d-block`        | block         |
| `.u-d-inline`       | inline        |
| `.u-d-inline-block` | inline-block  |


### Example

{% example html %}
<div class="u-d-none">I'm hidden!</div>
<div class="u-d-inline">I'm inline!</div>
<div class="u-d-inline-block">I'm an inline!</div>
<div class="u-d-block">I'm a block!</div>
{% endexample %}


### Showing and hiding

Combining the display classes with targeted [responsive modifiers](/seed/mixins/seed-breakpoints/#responsive-modifiers) allows you to show/hide elements at desired viewport sizes.

If you're on a desktop, resize your browser to see the example below in action.

{% example html %}
<div class="u-d-none@md">I'm only visible until md viewports</div>
<div class="u-d-none u-d-block@md">I'm only visible at md viewports</div>
{% endexample %}

The first `<div>` becomes hidden at the `md` viewport. If the viewport is smaller than `md`, the display is unaffected by the utility class.

The second `<div>` is initially hidden, as specified by `u-d-none`. It only becomes visible at the `md` viewport size.



---



## Configurations

{% include docs/config.html config="seed-display" %}



---



## Related

* [seed-visibility](/seed/packs/seed-visibility)
