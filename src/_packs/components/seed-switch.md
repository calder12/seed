---
title: Switch
description: "Component that provides a switch-like appearance for checkbox or radio form elements."
section: Component
source: https://github.com/helpscout/seed-switch
seed-pack: seed-switch
keywords: switch, checkbox
---

Switch component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

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
