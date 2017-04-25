---
title: "Input"
description: "Component for user-input. Includes support for a variation of sizes and states."
section: "Component"
source: "https://github.com/helpscout/seed-input"
seed-pack: "seed-input"
keywords:
   - control
   - field
   - form
   - formcontrol
   - input
   - select
   - textarea
---

Input component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-input --save
```


### Dependencies

* [seed-border](/seed/packs/seed-border)
* [seed-control](/seed/packs/seed-control)
* [seed-publish](/seed/packs/seed-publish)
* [seed-states](/seed/packs/seed-states)



---


## Example

{% example html %}
<input class="c-input" placeholder="Hello" value="Hellooo">
{% endexample %}



---



## Selects

`.c-input` can be used to stylize `<select>` elements.

{% example html %}
<select class="c-input">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
{% endexample %}



----



## Sizes

### Small

{% example html %}
<input class="c-input c-input--sm" placeholder="Hello" value="Hellooo">
{% endexample %}


### Medium

{% example html %}
<input class="c-input c-input--md" placeholder="Hello" value="Hellooo">
{% endexample %}


### Large

{% example html %}
<input class="c-input c-input--lg" placeholder="Hello" value="Hellooo">
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-input" %}



---



## Related

* [seed-control-group](/seed/packs/seed-control-group)
* [seed-input-addons](/seed/packs/seed-input-addons)
* [seed-option-card](/seed/packs/seed-option-card)
