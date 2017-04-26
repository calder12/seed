---
title: "Shadow"
description: "Thematic classes to adjust box-shadow styles."
section: "Theme"
source: "https://github.com/helpscout/seed-shadow"
seed-pack: "seed-shadow"
keywords:
  - animate
  - box
  - box-shadow
  - boxshadow
  - drop
  - hover
  - shadow
---

Shadow theme pack for Seed


## Install

```
npm install seed-shadow --save
```


### Dependencies

* [seed-dash](/seed/packs/seed-dash)
* [seed-props](/seed/packs/seed-props)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

{% include docs/variables-table.html data=site.data.seed.seed-shadow.shadow %}

**Example**

{% example html %}
<div class="c-card u-pad-2 t-bdr t-shadow-0">
  Shadow: 0
</div>
<div class="c-card u-pad-2 t-bdr t-shadow-1">
  Shadow: 1
</div>
<div class="c-card u-pad-2 t-bdr t-shadow-2">
  Shadow: 2
</div>
<div class="c-card u-pad-2 t-bdr t-shadow-3">
  Shadow: 3
</div>
<div class="c-card u-pad-2 t-bdr t-shadow-4">
  Shadow: 4
</div>
<div class="c-card u-pad-2 t-bdr t-shadow-5">
  Shadow: 5
</div>
{% endexample %}


---


## Hover transition

`seed-shadow` provides the ability to add a subtle box-shadow adjustment upon hovering. The box-shadow amount is the same as the default, ranging from `0-5`. However, these box-shadows only get applied when a selector is in a `:hover` state.

{% include docs/variables-table.html data=site.data.seed.seed-shadow.shadow-hover %}

**Example**

In the example below, the card starts off with a default box shadow amount of `1`. However, it transitions to an amount of `5` when hovered. Give it a shot!

{% example html %}
<div class="c-card u-pad-2 t-bdr t-shadow-1 t-shadow-hover-5">
  Default shadow of 1. Hover shadow of 5.
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-shadow" %}
