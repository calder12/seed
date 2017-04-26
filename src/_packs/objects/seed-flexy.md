---
title: "Flexy"
description: "Object classes that uses flexbox to intelligently align items together."
section: "Object"
source: "https://github.com/helpscout/seed-flexy"
seed-pack: "seed-flexy"
keywords:
  - align
  - alignment
  - flex
  - flexbox
  - flexy
  - float
  - pull
  - vertical
---


A series of classes that use Flexbox to intelligently align elements together. These classes can be helpful to vertically align UI elements of varying heights.


## Install

```
npm install seed-flexy --save
```



### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## About

`seed-flexy` is a unique layout object class that uses flexbox to align items. `seed-flexy` classes are typically used in headers, footers, any other areas that require alignment of elements in a single line height.

Note: Items within will align to the outer edges of `seed-flexy`.


---



## Example

`.o-flexy` supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Woody
  </div>
  <div class="o-flexy__item">
    Buzz
  </div>
</div>
{% endexample %}



---



## Flexy item

You can add as many `.o-flexy__item` elements within a `.o-flexy` as needed, and they will be spaced apart evenly.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Woody
  </div>
  <div class="o-flexy__item">
    Buzz
  </div>
  <div class="o-flexy__item">
    Jessie
  </div>
  <div class="o-flexy__item">
    Bullseye
  </div>
</div>
{% endexample %}


### Alignment

Aligning items within a `.o-flexy` element feels counter-intuitive compared to traditional (and straight-forward) `float: left` or `float: right` layout adjustments. To align an item a certain direction (left), the item's opposite margin (`margin-right`) must be set to `auto`.

The utility class of `u-mrg-*-auto` (from [seed-spacing](/seed/packs/seed-spacing)) can be used control the alignment of your `.o-flexy__item`. Replace `*` with the direction **opposite** of the direction you wish to align your item.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item u-mrg-l-auto">
    Buzz (Aligned right)
  </div>
</div>
<div class="o-flexy">
  <div class="o-flexy__item">
    Woody (Default)
  </div>
  <div class="o-flexy__item u-mrg-r-auto">
    Rex (Aligned left)
  </div>
</div>
{% endexample %}



---



## Flex block

``.o-flexy__block`` is an element used to fill up space between or around `.o-flexy__item` elements.

Supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Woody
  </div>
  <div class="o-flexy__item">
    Buzz
  </div>
  <div class="o-flexy__block">
    Rex
  </div>
  <div class="o-flexy__item">
    Slinky
  </div>
</div>
{% endexample %}



---



## Vertical alignment

You can apply the vertical alignment modifier class to adjust the vertically align the child elements within a `.o-flexy`.

All of the vertical alignment modifiers support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.


| Class              | Vertical aligment | CSS Property              |
| ---                | ---               | ---                       |
| `.o-flexy--top`    | Top               | `align-items: flex-start` |
| `.o-flexy--middle` | Middle (Default)  | `align-items: center`     |
| `.o-flexy--bottom` | Bottom            | `align-items: flex-end`   |


{% example html %}
<div class="o-flexy o-flexy--top">
  <div class="o-flexy__item">
    <span class="text-muted">😱 There's a…</span>
  </div>
</div>
<div class="o-flexy o-flexy--middle">
  <div class="o-flexy__item">
    <span class="text-muted">🐍 snake…</span>
  </div>
</div>
<div class="o-flexy o-flexy--bottom">
  <div class="o-flexy__item">
    <span class="text-muted">👢 in my boot!</span>
  </div>
</div>
{% endexample %}


---


## Text truncation

At the moment, Flexbox doesn't play nicely with CSS truncation (specifically the `white-space: nowrap` attribute. If you plan on using CSS truncation, avoid applying your truncation class directly on a `.o-flexy__item` or `.o-flexy__block`.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Summary:
  </div>
  <div class="o-flexy__block">
    <div class="tx-truncate">
      Toy Story is a 1995 American computer-animated buddy-comedy adventure film produced
      by Pixar Animation Studios and released by Walt Disney Pictures. Directed by John Lasseter,
      Toy Story was the first feature-length computer-animated film and the first theatrical
      film produced by Pixar.
    </div>
  </div>
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-flexy" %}



---



## Related

* [seed-inline](/seed/packs/seed-inline)
