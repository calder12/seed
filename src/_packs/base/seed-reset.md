---
title: Reset
description: "Normalizes HTML element styles to ensure better consistency and adherence to modern standards."
section: Base
source: https://github.com/helpscout/seed-reset
seed-pack: seed-reset
keywords: base, reboot, reset, normalize
---

Reset pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-reset --save
```


### Dependencies

* [seed-publish](/seed/packs/seed-publish)



---



## About

By default, the seed-reset pack contains the following CSS reset styles:

* [normalize.css](https://necolas.github.io/normalize.css/)
* [Bootstrap V4's Reboot](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)
* [Bootstrap V4's Print](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_print.scss)

The Bootstrap reset styles have been adjusted slightly to remove Bootstrap specific styles.



---



## Usage

It is recommended that `seed-reset` be imported as near to the top of your SCSS as possible. Reset styles are designed to ensure that elements more consistent and easier to stylize. Think of it as making sure the ground is level __before__ building your house on top of it.

```main.scss
// Reset
@import "pack/seed-reset/_index";

// Everything else
@import "./components/alert";
@import "./components/button";
// etc…
```



---



## Customization


`seed-reset` uses the following variables in it's config:

``` _config.scss
$seed-reset-enable-normalize: true !default;
$seed-reset-enable-print: true !default;
$seed-reset-enable-reboot: true !default;
```

You can enable or disable any of the included reset styles by setting the variable as `false` before importing the `seed-reset` pack.

```main.scss
// Disable Bootstrap's reboot reset styles from seed-reset
$seed-reset-enable-reboot: false;

@import "pack/seed-reset/_index";
```



---



## Configurations

{% include docs/config.html config="seed-reset" %}



---



## Related

* [seed-base](/seed/packs/seed-base)
