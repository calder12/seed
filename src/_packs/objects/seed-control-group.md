---
title: "Control group"
description: "Object classes that align and group form-based elements together."
section: "Object"
source: "https://github.com/helpscout/seed-control-group"
seed-pack: "seed-control-group"
keywords:
  - btn-group
  - control
  - group
  - btn
  - button group
  - segment
---

A series of classes that help align, combine, and group elements together for UI components like button groups or segment controls.


## Install

```
npm install seed-control-group --save
```



### Dependencies

* [seed-border](/seed/packs/seed-border)
* [seed-publish](/seed/packs/seed-publish)



---



## Example

Border, border-radius, and z-index properties are automatically adjusted for elements placed within an `.o-contorl-group` selector.

### Button groups

Using the button component from [seed-button](/seed/packs/seed-button).

{% example html %}
<div class="o-control-group" role="group">
  <button class="c-button">Button</button>
  <button class="c-button">Button</button>
  <button class="c-button">Button</button>
</div>
{% endexample %}



## Full-width items

In order for a particular element to have a (responsive) full-width, the class of `.o-control-group__block` must be applied.

### Input / button combo

{% example html %}
<div class="o-control-group" role="group">
  <input class="c-input o-control-group__block" value="I'm an input!" />
  <button class="c-button">Button!</button>
</div>
{% endexample %}


### Input addons

Combining components from [seed-input-addons](/seed/packs/seed-input-addons) and [seed-input](/seed/packs/seed-input).

{% example html %}
<div class="o-control-group" role="group">
  <div class="c-input-addon">$</div>
  <input class="c-input o-control-group__block" value="1,000,000,000">
  <div class="c-input-addon">.00</div>
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-control-group" %}



----



## Related

* [seed-button](/seed/packs/seed-button)
* [seed-input](/seed/packs/seed-input)
* [seed-input-addons](/seed/packs/seed-input-addons)
