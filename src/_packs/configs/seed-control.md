---
title: "Control"
description: "A configuration of sizes for controls, such as inputs and buttons."
section: "Config"
source: "https://github.com/helpscout/seed-control"
seed-pack: "seed-control"
keywords:
  - config
  - control
---

A series of variables used for interactive UI elements, such as inputs and buttons. Leveraging these configurations helps ensure visual consistency with various components.


## Install

```
npm install seed-control --save
```


### Dependencies

* [seed-dash](/seed/packs/seed-dash)



---



## Configurations


{% include docs/config.html config="seed-control" %}



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



## Configurations


{% include docs/config.html config="seed-control" %}



---



## Related

* [seed-button](/seed/packs/seed-button)
* [seed-dash](/seed/packs/seed-dash)
* [seed-input](/seed/packs/seed-input)
* [seed-input-addons](/seed/packs/seed-input-addons)
