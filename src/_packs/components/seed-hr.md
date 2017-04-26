---
title: "Horizontal rule"
description: "Component that provides styling for a horizontal line."
section: "Component"
source: "https://github.com/helpscout/seed-hr"
seed-pack: "seed-hr"
keywords:
  - border
  - divide
  - divider
  - horizontal
  - hr
  - rule
---

Horizontal rule component pack for Seed


## Install

```
npm install seed-hr --save
```


## Dependencies

* [seed-publish](/seed/packs/seed-publish)



---


## Usage

Once the pack has been `@import`, the `seed-hr` styles will automatically be added to the base `<hr>` HTML component.

{% example html %}
<hr>
{% endexample %}

You may also used the `.c-hr` component class to style your `<hr>` or another selector.
{% example html %}
<hr class="c-hr">
<div class="c-hr"></div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-hr" %}
