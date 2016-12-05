---
title: Thumbnail
section: Components
source: https://github.com/helpscout/seed-thumbnail
seed-pack: seed-thumbnail
---

Thumbnail component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-thumbnail --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-dash](/seed/packs/seed-dash)
* [seed-props](/seed/packs/seed-props)
* [seed-publish](/seed/packs/seed-publish)



---



## Usage

{% example html %}
<div class="c-thumbnail">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



### Clickable thumbnails

Use the `<a>` selector for the `.c-thumbnail` class to create clickable thumbnail links.

{% example html %}
<a class="c-thumbnail" href="#">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</a>
{% endexample %}



---



## Modifiers

### Wide

This adjusts the thumbnail to have a 16:9 ratio (which is the default thumbnail ratio).
This class supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="c-thumbnail c-thumbnail--wide">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



### SD

This adjusts the thumbnail to have a 4:3 ratio.
This class supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="c-thumbnail c-thumbnail--sd">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



### Square

This adjusts the thumbnail to have a 1:1 ratio.
This class supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="c-thumbnail c-thumbnail--square">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



---



## Alignment

### Top

{% example html %}
<div class="c-thumbnail c-thumbnail--top">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}


### Middle

{% example html %}
<div class="c-thumbnail c-thumbnail--middle">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}


### Bottom

{% example html %}
<div class="c-thumbnail c-thumbnail--bottom">
  <img src="/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



---



## Related

* [seed-avatar](/seed/packs/seed-avatar)
