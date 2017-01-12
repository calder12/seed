---
title: States
description: "A configuration of styles for states, such as error or success."
section: Config
layout: docs
source: https://github.com/helpscout/seed-states
seed-pack: seed-states
---

States config pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-states --save
```


### Dependencies

* [seed-color-scheme-helpscout](/seed/packs/seed-color-scheme-helpscout)
* [seed-dash](/seed/packs/seed-dash)



---



## About

`seed-states` is a config pack designed to provide consistent styling to components with states, such as alerts, inputs, and buttons.



---



## Configuration

Below are the default variables set for `seed-states`:

```seed-states/_config.scss
// Dependencies
@import "pack/seed-color-scheme/_index";
@import "pack/seed-color-scheme-helpscout/_index";

// Namespaces
$seed-states-error-namespace: "error" !default;
$seed-states-info-namespace: "info" !default;
$seed-states-success-namespace: "success" !default;
$seed-states-warning-namespace: "warning" !default;

// Configs
$seed-states-colors: (
  #{$seed-states-error-namespace}: (
    background-color: _color(red, 200),
    border-color: _color(red, 500),
    color: _color(red, 800)
  ),
  #{$seed-states-info-namespace}: (
    background-color: _color(blue, 200),
    border-color: _color(blue, 500),
    color: _color(blue, 800)
  ),
  #{$seed-states-success-namespace}: (
    background-color: _color(green, 200),
    border-color: _color(green, 500),
    color: _color(green, 800)
  ),
  #{$seed-states-warning-namespace}: (
    background-color: _color(yellow, 200),
    border-color: _color(yellow, 500),
    color: _color(yellow, 800)
  ),
) !default;
```



---



## Customizing

You can modify the default variables of `seed-states` by defining them before you import the `seed-states` pack in your Sass setup.

```scss/configs/_seed-states.scss
// Customizing seed-states sizes
$seed-states-error-namespace: "danger" !default;

// Import seed-states
@import "pack/seed-states/_index";
```

Just be aware that other Sass code that use any of the `seed-states` variables will be affected (e.g. the [`seed-alert` pack](/seed/packs/seed-alert)).



---


## Usage

It is recommended you use the `_get()` function from [seed-dash](/seed/packs/seed-dash) to retrieve variables from the `seed-states` config.

```_alert.scss
// Dependencies
@import "pack/seed-states/_index";
@import "pack/seed-dash/_index";

.alert {
  &.is-success {
    background-color: _get($seed-states-colors, background-color);
    color: _get($seed-states-colors, color);
  }
}
```

```alert.css
.alert {
  background-color: #FFE3E2;
  color: #E52F28;
}
```



---



## Related

* [seed-badge](/seed/packs/seed-badge)
* [seed-button](/seed/packs/seed-button)
* [seed-dash](/seed/packs/seed-dash)
* [seed-input](/seed/packs/seed-input)
