---
title: "Switch"
description: "Component that provides a switch-like appearance for checkbox or radio form elements."
section: "Component"
source: "https://github.com/helpscout/seed-switch"
seed-pack: "seed-switch"
keywords:
  - check
  - checkbox
  - input
  - switch
---

Switch component pack for Seed


## Install

```
npm install seed-switch --save
```


### Dependencies

* [seed-publish](/seed/packs/seed-publish)
* [seed-shadow](/seed/packs/seed-shadow)


---


## Example

{% example html %}
<label class="c-switch">
  <input type="checkbox">
  <span class="c-switch-toggle"></span>
</label>
{% endexample %}


---


## Sizes

### Extra small

{% example html %}
<label class="c-switch c-switch--xs">
  <input type="checkbox">
  <span class="c-switch-toggle"></span>
</label>
{% endexample %}


### Small

{% example html %}
<label class="c-switch c-switch--sm">
  <input type="checkbox">
  <span class="c-switch-toggle"></span>
</label>
{% endexample %}


---


## States

### Active

{% example html %}
<label class="c-switch is-active">
  <input type="checkbox">
  <span class="c-switch-toggle"></span>
</label>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-switch" %}
