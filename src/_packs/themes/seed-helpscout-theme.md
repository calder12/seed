---
title: "Colors (Help Scout)"
description: "Thematic classes to adjust background and text colors – based on the Help Scout color scheme."
section: "Theme"
source: "https://github.com/helpscout/seed-helpscout-theme"
seed-pack: "seed-helpscout-theme"
keywords: 
  - helpscout
  - color
  - theme
  - bg
  - text
  - tx
  - font
  - color
---

A series of thematic classes that adjust the background and font color properties of a selector based on Help&nbsp;Scout's [color palette](http://style.helpscout.com/brand/color/).


## Install

```
npm install seed-helpscout-theme --save
```


### Dependencies

* [seed-dash](/seed/packs/seed-dash)
* [seed-color-scheme-helpscout](/seed/packs/seed-color-scheme-helpscout)
* [seed-publish](/seed/packs/seed-publish)



---


## Background colors

An example background color theme class looks like this:

```
.t-bg-blue-500
```


| Characters | Description        |
| ---        | ---                |
| `t`        | prefix for "theme" |
| `bg`       | background         |
| `blue`     | color              |
| `500`      | shade              |


All of the colors and shades from the [Help Scout color palette](/brand/color/) are available to be used as background colors.

Background color theme classes for `seed-helpscout-theme` can be used together with the font color theme classes.

**Example**
{% example html %}
<div class="c-card u-pad-4 t-bg-blue-500">
  I'm a blue card.
</div>
<div class="c-card u-pad-4 t-bg-purple-600">
  I'm a purple card.
</div>
<div class="c-card u-pad-4 t-bg-yellow-400">
  I'm a yellow card.
</div>
{% endexample %}


---


## Font colors

An example font color theme class looks like this:

```
.t-tx-blue-500
```


| Characters | Description        |
| ---        | ---                |
| `t`        | prefix for "theme" |
| `bg`       | text               |
| `blue`     | color              |
| `500`      | shade              |


All of the colors and shades from the [Help Scout color palette](/brand/color/) are available to be used as font colors.

Font color theme classes for `seed-helpscout-theme` can be used together with the background color theme classes.

**Example**
{% example html %}
<div class="c-card u-pad-4 t-tx-blue-500">
  I'm blue text.
</div>
<div class="c-card u-pad-4 t-tx-purple-600">
  I'm purple text.
</div>
<div class="c-card u-pad-4 t-tx-yellow-400">
  I'm yellow text.
</div>
{% endexample %}



---



## Configurations


{% include docs/config.html config="seed-helpscout-theme" %}



---



## Related

* [seed-color-scheme](/seed/packs/seed-color-scheme)
* [seed-color-scheme-helpscout](/seed/packs/seed-color-scheme-helpscout)
