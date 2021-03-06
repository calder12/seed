---
title: "Video"
description: "Component that provides responsive behavior to video embeds."
section: "Component"
source: "https://github.com/helpscout/seed-video"
seed-pack: "seed-video"
keywords:
  - embed
  - iframe
  - object
  - video
  - wistia
  - youtube
---

A component that provides responsive behavior to video-based media, with support for HTML video, canvas, iFrames and object embeds.


## Install

```
npm install seed-video --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-dash](/seed/packs/seed-dash)
* [seed-publish](/seed/packs/seed-publish)
* [seed-thumbnail](/seed/packs/seed-thumbnail)


---



## Example

seed-video will automatically make videos responsive and resize to their parent container. Videos can be made responsive by wrapping them with a `.c-video` class.

{% example html %}
<div class="c-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/sn3fnvi9tew" frameborder="0" allowfullscreen></iframe>
</div>
{% endexample %}

By default, `.c-video` automatically adjusts `<video>` and `<iframe>` selectors. However you can apply the same responsive properties on any selector by using the `.c-video__embed` class.

```html
<div class="c-video">
  <canvas class="c-video__embed">
    ...
  </canvas>
</div>
```



---



## Sizes

The default ratio for `.c-video` is 16:9. However, this can be modified by applying any of the following modifier classes:

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.


| Class             | Ratio |
| ---               | ---   |
| `.c-video--u-wide` | 21:9  |
| `.c-video--gr`     | 16:10 |
| `.c-video--wide`   | 16:9  |
| `.c-video--sd`     | 4:3   |



---



## Configurations

{% include docs/config.html config="seed-video" %}



---



## Related

* [seed-thumbnail](/seed/packs/seed-thumbnail)
