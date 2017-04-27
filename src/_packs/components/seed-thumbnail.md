---
title: "Thumbnail"
description: "Component that stylizes images for use as thumbnails. Includes support for a variation of sizes and styles."
section: "Component"
source: "https://github.com/helpscout/seed-thumbnail"
seed-pack: "seed-thumbnail"
keywords:
  - "16:9"
  - featured
  - featuredimage
  - image
  - img
  - portrait
  - square
  - thumb
  - thumbnail
---

A component that stylizes images for use as thumbnails. This component provides various thumbnail styles and sizes.


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



## Example

{% example html %}
<div class="c-thumbnail">
  <img src="/seed/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



### Clickable thumbnails

Use the `<a>` selector for the `.c-thumbnail` class to create clickable thumbnail links.

{% example html %}
<a class="c-thumbnail" href="#">
  <img src="/seed/images/examples/cupcake.jpg" class="c-thumbnail__image">
</a>
{% endexample %}



---



## Sizes

These modifier classes adjust the ratio of the thumbnail.
These classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

| Modifier class         | Ratio | Example   |
| ---                    | ---   | ---       |
| Default                | 16:9  | 1920x1080 |
| `.c-thumbnail--wide`   | 16:9  | 1920x1080 |
| `.c-thumbnail--sd`     | 4:3   | 800x600   |
| `.c-thumbnail--square` | 1:1   | 400x400   |


{% example html %}
<div class="c-thumbnail c-thumbnail--sd">
  <img src="/seed/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



---



## Alignment

These modifier classes adjust the image position within the thumbnail.
These classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

| Modifier class         | Alignment       |
| ---                    | ---             |
| `.c-thumbnail--top`    | Top             |
| `.c-thumbnail--center` | Middle (Defaut) |
| `.c-thumbnail--bottom` | Bottom          |


{% example html %}
<div class="c-thumbnail c-thumbnail--top">
  <img src="/seed/images/examples/cupcake.jpg" class="c-thumbnail__image">
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-thumbnail" %}



---



## Related

* [seed-avatar](/seed/packs/seed-avatar)
* [seed-video](/seed/packs/seed-video)
