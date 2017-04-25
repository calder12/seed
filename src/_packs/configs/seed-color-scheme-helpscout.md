---
title: "Color scheme (Help Scout)"
description: "A color scheme configuration based on Help Scout's color palette."
section: "Config"
source: "https://github.com/helpscout/seed-color-scheme-helpscout"
seed-pack: "seed-color-scheme-helpscout"
keywords:
  - brand
  - color scheme
  - config
  - help scout
---

Help Scout color scheme pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-color-scheme-helpscout --save
```


### Dependencies

* [seed-color-scheme](/seed/packs/seed-color-scheme)


---


## Usage

The Help Scout color scheme pack consists of all the colors and shades in our [color palette](/brand/color).

Use the **_color()** mixin (provided by [seed-color-scheme](/seed/packs/seed-color-scheme)) to reference a color from this pack.

```example.scss
.element {
  background: _color(blue, 500);
}
```

```example.css
.element {
  background: #3197D6;
}
```



---



## Configurations


{% include docs/config.html config="seed-color-scheme-helpscout" %}



---



## Related

* [seed-color-scheme](/seed/packs/seed-color-scheme)
* [seed-helpcout-theme](/seed/packs/seed-helpscout-theme)
