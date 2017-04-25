---
title: "Base"
description: "Low-level styles that target base elements and selectors."
section: "Base"
source: "https://github.com/helpscout/seed-base"
seed-pack: "seed-base"
dependencies:
  - seed-publish
related:
  -
keywords:
  - base
  - html
  - typography
  - heading
  - paragraph
---

A small selection of low-level styles that help provide a foundation for your CSS code base. This pack provide additional niceties beyond a traditonal CSS normalizer or [reset](/seed/packs/seed-reset).


## Install

```
npm install seed-base --save
```


### Dependencies

* [seed-publish](/seed/packs/seed-publish)



---



## Usage

It is recommended that `seed-base` be imported as near to the top of your SCSS as possible, but placed **after** your [reset styles](/seed/packs/seed-reset).

```main.scss
// Reset
@import "pack/seed-reset/_index";
// Base
@import "pack/seed-base/_index";

// Everything else
@import "./components/alert";
@import "./components/button";
// etc…
```



----



## Adjustments

This pack targets and adjusts the following selectors:

| Elements | Adjustments |
| -------- | ----------- |
| `h1-h6` | Normalizes color, font-family, font-size, and line-height. Adds bottom margin. |
| `img` | Makes images responsive by default, with a max-width of 100%. |
| `small` | Sets the font-size to 80% and normalizes font-weight. |
| `mark` | Adds background-color and slight padding. |
| `code` | Adjusts font-sizing and adds slight background-color. |
| `kbd` | Adjusts font-sizing and adds slight background-color. |
| `pre` | Adjusts font-sizing and font color. |



---



## Configurations


{% include docs/config.html config="seed-base" %}



---



## Related

* [seed-reset](/seed/packs/seed-reset)
