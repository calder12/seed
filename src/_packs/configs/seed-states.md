---
title: "States"
description: "A configuration of styles for states, such as error or success."
section: "Config"
source: "https://github.com/helpscout/seed-states"
seed-pack: "seed-states"
keywords:
  - config
  - states
  - state
---

A series of variables used to visualize state for UI elements, such as alerts and inputs. Leveraging these configurations helps ensure visual consistency with various components.


## Install

```
npm install seed-states --save
```


### Dependencies

* [seed-color-scheme-helpscout](/seed/packs/seed-color-scheme-helpscout)
* [seed-dash](/seed/packs/seed-dash)



---



## Configurations

{% include docs/config.html config="seed-states" %}



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



## Related

* [seed-badge](/seed/packs/seed-badge)
* [seed-button](/seed/packs/seed-button)
* [seed-dash](/seed/packs/seed-dash)
* [seed-input](/seed/packs/seed-input)
