---
title: Exclude
description: "A mixin that prevents published Seed packs from compiling."
section: Mixin
layout: docs
source: https://github.com/helpscout/seed-exclude
seed-pack: seed-exclude
---

Mixin that excludes modules published with [seed-publish](/seed/packs/seed-publish)

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-exclude --save
```


### Dependencies

* [seed-publish](/seed/packs/seed-publish)



---


## About

`seed-exclude` is a mixin that enhances packs using [seed-publish](/seed/packs/seed-publish). As the name of the pack suggests, the `exclude()` mixin allows the user to exclude [published packs](/seed/packs/seed-publish/#publish).


## Use case

You want to use this brand new `meal-pack` in your Sass project (`meal-pack` doesn't really exist, but it would be cool if it did). `meal-pack` requires a handful of dependencies:

```
meal-pack
├── sandwich-pack
│   ├── bun-pack
│   ├── tomato-pack
│   ├── deli-pack
│   └── sauce-pack
├── snack-pack
├── sides-pack
└── drink-pack
```

For your setup, you want to use `meal-pack` **except** for `sides-pack`. At this point, you have two options:

1. Manually include all the individual packs that make up `meal-pack`.
2. Include `meal-pack`, and simply exclude `side-pack`.

The #2 solution is what the `exclude()` mixin was designed to accomplish!



----



## Mixins

### exclude

**exclude($names…)**

**$names**<br>
Type: `string`|`list`<br>
Description: The name(s) of the packs you wish to exclude.

Modules matching the name of the arguments passed into `exclude()` will **not** render when CSS is compiled.

``` _menu.scss
// Dependencies
@import "pack/seed-exclude/_index";

// Step 1: Exclude packs
@include exclude(sides);

// Step 2: @import the pack containing the excluded packs
@import "pack/seed-meal/_index";

// styles within sides-pack will not be generated
```

The `exclude` mixin accepts lists as well as nested lists:

``` _menu.scss
// Dependencies
@import "pack/seed-exclude/_index";

// Step 1: Exclude packs
@include exclude(
  sides,
  snack,
  (
    tomato,
    sauce
  )
);

// Step 2: @import the pack containing the excluded packs
@import "pack/seed-meal/_index";

// styles within sides, snack, tomato, and sauce packs will not be generated
```



---



## Related

* [seed-publish](/seed/packs/seed-publish)
