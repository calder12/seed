---
title: Control Group
section: Objects
layout: docs
source: https://github.com/helpscout/seed-control-group
seed-pack: seed-control-group
---

Control group object pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-control-group --save
```



### Dependencies

* [seed-border](/packs/seed-border)
* [seed-publish](/packs/seed-publish)



---



## Example

{% example html %}
<div class="o-control-group" role="group">
  <input class="c-input o-control-group__block" value="I'm an input!" />
  <button class="c-button">Button!</button>
</div>
{% endexample %}


## Configurations


### Button groups

Using the button component from [seed-button](/packs/seed-button).

{% example html %}
<div class="o-control-group" role="group">
  <button class="c-button">Button</button>
  <button class="c-button">Button</button>
  <button class="c-button">Button</button>
</div>
{% endexample %}


### Input addons

Combining components from [seed-input-addons](/packs/seed-input-addons) and [seed-input](/packs/seed-input).

{% example html %}
<div class="o-control-group" role="group">
  <div class="c-input-addon">$</div>
  <input class="c-input o-control-group__block" value="1,000,000,000">
  <div class="c-input-addon">.00</div>
</div>
{% endexample %}



----



## Related

* [seed-button](/packs/seed-button)
* [seed-input](/packs/seed-input)
* [seed-input-addons](/packs/seed-input-addons)
