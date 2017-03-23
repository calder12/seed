---
title: List
description: "Component that provides styling for a lists."
section: Component
source: https://github.com/helpscout/seed-list
seed-pack: seed-list
keywords: list, unstyled, unstyle, bullet, numbered
---

List component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-list --save
```


### Dependencies

* [seed-border](/seed/packs/seed-border)
* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)
* [seed-spacing](/seed/packs/seed-spacing)



---


## Example

{% example html %}
<ul class="c-list">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Using non-list selectors

{% example html %}
<div class="c-list">
  <div class="c-list__item">Chia seeds</div>
  <div class="c-list__item">Flax seeds</div>
  <div class="c-list__item">Sesame seeds</div>
  <div class="c-list__item">Pumpkin seeds</div>
  <div class="c-list__item">Sunflower seeds</div>
</div>
{% endexample %}


---


## Modifiers


### Block

Supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<ul class="c-list c-list--block">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Bordered

Supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<ul class="c-list c-list--bordered">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Bullet

{% example html %}
<div class="c-list c-list--bullet">
  <div class="c-list__item">Chia seeds</div>
  <div class="c-list__item">Flax seeds</div>
  <div class="c-list__item">Sesame seeds</div>
  <div class="c-list__item">Pumpkin seeds</div>
  <div class="c-list__item">Sunflower seeds</div>
</div>
{% endexample %}


### Dotted

Supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<ul class="c-list c-list--dotted">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Inline

Supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<ul class="c-list c-list--inline">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Number

{% example html %}
<div class="c-list c-list--number">
  <div class="c-list__item">Chia seeds</div>
  <div class="c-list__item">Flax seeds</div>
  <div class="c-list__item">Sesame seeds</div>
  <div class="c-list__item">Pumpkin seeds</div>
  <div class="c-list__item">Sunflower seeds</div>
</div>
{% endexample %}



---



## Sizes


### Extra small

{% example html %}
<ul class="c-list c-list--xs">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Small

{% example html %}
<ul class="c-list c-list--sm">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Medium

{% example html %}
<ul class="c-list c-list--md">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Large

{% example html %}
<ul class="c-list c-list--lg">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}


### Extra large

{% example html %}
<ul class="c-list c-list--xl">
  <li>Chia seeds</li>
  <li>Flax seeds</li>
  <li>Sesame seeds</li>
  <li>Pumpkin seeds</li>
  <li>Sunflower seeds</li>
</ul>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-list" %}



---



## Related

* [seed-dropdown](/seed/packs/seed-dropdown)
* [seed-table](/seed/packs/seed-dropdown)
