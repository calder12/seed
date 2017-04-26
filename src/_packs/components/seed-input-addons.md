---
title: "Input addons"
description: "Components to provide additional context for form inputs. Includes support for a variation of sizes."
section: "Component"
source: "https://github.com/helpscout/seed-input-addons"
seed-pack: "seed-input-addons"
keywords:
  - add-on
  - addon
  - addons
  - append
  - control
  - form
  - formcontrol
  - input
  - prepend
  - static
---

Input addons component pack for Seed


## Install

```
npm install seed-input-addons --save
```


### Dependencies

* [seed-control](/seed/packs/seed-control)
* [seed-input](/seed/packs/seed-input)
* [seed-publish](/seed/packs/seed-publish)


---


## Input Addon

Input addons can be used with [input components](/seed/packs/seed-input) within [control groups](/packs/control-group).


### Example

{% example html %}
<div class="o-control-group" role="group">
  <div class="c-input-addon">Prefix</div>
  <input class="c-input o-control-group__block" value="Input">
  <div class="c-input-addon">Suffix</div>
</div>
{% endexample %}


### Sizes

#### Small
{% example html %}
<div class="o-control-group" role="group">
  <div class="c-input-addon c-input-addon--sm">Prefix</div>
  <input class="c-input o-control-group__block c-input--sm" value="Input">
  <div class="c-input-addon c-input-addon--sm">Suffix</div>
</div>
{% endexample %}


#### Medium
{% example html %}
<div class="o-control-group" role="group">
  <div class="c-input-addon c-input-addon--md">Prefix</div>
  <input class="c-input o-control-group__block c-input--md" value="Input">
  <div class="c-input-addon c-input-addon--md">Suffix</div>
</div>
{% endexample %}


#### Large
{% example html %}
<div class="o-control-group" role="group">
  <div class="c-input-addon c-input-addon--lg">Prefix</div>
  <input class="c-input o-control-group__block c-input--lg" value="Input">
  <div class="c-input-addon c-input-addon--lg">Suffix</div>
</div>
{% endexample %}



---


## Input Static

Static inputs are plain-text elements that are paired with [input components](/seed/packs/seed-input). They share the same heights as inputs, which allows their text to be vertically aligned.


### Example

{% example html %}
<div class="o-inline">
  <div class="o-inline__item u-mrg-r-5">
    <div class="c-input-static">Name: </div>
  </div>
  <div class="o-inline__item">
    <input class="c-input" value="Captain">
  </div>
</div>
{% endexample %}


### Sizes

#### Small

{% example html %}
<div class="o-inline">
  <div class="o-inline__item u-mrg-r-5">
    <div class="c-input-static c-input-static--sm">Name: </div>
  </div>
  <div class="o-inline__item">
    <input class="c-input c-input--sm" value="Captain">
  </div>
</div>
{% endexample %}


#### Medium

{% example html %}
<div class="o-inline">
  <div class="o-inline__item u-mrg-r-5">
    <div class="c-input-static c-input-static--md">Name: </div>
  </div>
  <div class="o-inline__item">
    <input class="c-input c-input--md" value="Captain">
  </div>
</div>
{% endexample %}


#### Large

{% example html %}
<div class="o-inline">
  <div class="o-inline__item u-mrg-r-5">
    <div class="c-input-static c-input-static--lg">Name: </div>
  </div>
  <div class="o-inline__item">
    <input class="c-input c-input--lg" value="Captain">
  </div>
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-input-addons" %}



---



## Related

* [seed-control-group](/seed/packs/seed-control-group)
* [seed-inline](/seed/packs/seed-inline)
* [seed-input](/seed/packs/seed-input)
