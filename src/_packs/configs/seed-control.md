---
title: Control
description: "A configuration of sizes for controls, such as inputs and buttons."
section: Config
layout: docs
source: https://github.com/helpscout/seed-control
seed-pack: seed-control
---

Control config pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-control --save
```


### Dependencies

* [seed-dash](/seed/packs/seed-dash)


---



## About

`seed-control` is a config pack designed to provide consistent size variables to other control components, such as inputs and buttons.



---



## Configuration

Below are the default variables set for `seed-control`:

```seed-control/_config.scss
$seed-control-size-default: 36px !default;

$seed-control-sizes: (
  sm: 28px,
  md: $seed-control-size-default,
  lg: 52px
) !default;
```



---



## Customizing

You can modify the default variables of `seed-control` by defining them before you import the `seed-control` pack in your Sass setup.

```scss/configs/_seed-control.scss
// Customizing seed-control sizes
$seed-control-sizes: (
  xs: 20px,
  sm: 28px,
  md: 32px,
  lg: 40px,
  xl: 54px
);

// Import seed-control
@import "pack/seed-control/_index";
```

Just be aware that other Sass code that use any of the `seed-control` variables will be affected (e.g. the [`seed-input` pack](/seed/packs/seed-input)).



---


## Usage

It is recommended you use the `_get()` function from [seed-dash](/seed/packs/seed-dash) to retrieve variables from the `seed-control` config.

```_button.scss
// Dependencies
@import "pack/seed-control/_index";
@import "pack/seed-dash/_index";

.button {
  height: _get($seed-control-sizes, md);
}
```

```button.css
.button {
  height: 36px;
}
```



---



## Related

* [seed-button](/seed/packs/seed-button)
* [seed-dash](/seed/packs/seed-dash)
* [seed-input](/seed/packs/seed-input)
* [seed-input-addons](/seed/packs/seed-input-addons)
