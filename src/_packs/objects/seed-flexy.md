---
title: Flexy
section: Objects
layout: docs
source: https://github.com/helpscout/seed-flexy
seed-pack: seed-flexy
---

Flex object pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-flexy --save
```



### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## About

Flex is a unique layout component that utilizes flexbox to align items. Flex are typically used in headers, footers, any other areas that require alignment of controls in a single line height.

Note: Items within will align to the outer edges of Flex.


---



## Example

`.o-flexy` supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Flex Item
  </div>
  <div class="o-flexy__item">
    Flex Item
  </div>
</div>
{% endexample %}



---



## Flex item

You can add as many ``.o-flexy__item`` elements within a ``.o-flexy`` as needed, and they will be spaced apart evenly.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Flex Item
  </div>
  <div class="o-flexy__item">
    Flex Item
  </div>
  <div class="o-flexy__item">
    Flex Item
  </div>
  <div class="o-flexy__item">
    Flex Item
  </div>
</div>
{% endexample %}


### Alignment

Use the margin utility class of `u-mrg-*-auto` to help control the alignment of your `.o-flexy__item`. Replace `*` with the direction **opposite** of the direction you wish to align your item.

(Note: The current implementation of this isn't very intuitive. This will be fixed in a future update!)

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item u-mrg-l-auto">
    Flex Item (Aligned right)
  </div>
</div>
<div class="o-flexy">
  <div class="o-flexy__item">
    Flex Item (Default)
  </div>
  <div class="o-flexy__item u-mrg-r-auto">
    Flex Item (Aligned left)
  </div>
</div>
{% endexample %}



---



## Flex block

``.o-flexy__block`` is a utility component used to fill up space between or around ``.o-flexy__item`` elements.

Supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Flex Item
  </div>
  <div class="o-flexy__item">
    Flex Item
  </div>
  <div class="o-flexy__block">
    Flex Block
  </div>
  <div class="o-flexy__item">
    Flex Item
  </div>
</div>
{% endexample %}



---



## Vertical alignment

You can apply the vertical alignment utility classes to vertically align the children elements within a ``.o-flexy``.

All of the vertical alignment modifiers support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example html %}
<div class="o-flexy o-flexy--top">
  <div class="o-flexy__item">
    <span class="text-muted">I'm at the top!</span>
  </div>
</div>
<div class="o-flexy o-flexy--middle">
  <div class="o-flexy__item">
    <span class="text-muted">I'm in the middle!</span>
  </div>
</div>
<div class="o-flexy o-flexy--bottom">
  <div class="o-flexy__item">
    <span class="text-muted">I'm at the bottom!</span>
  </div>
</div>
{% endexample %}


---


## Text truncation

**Deprecated**: The `.o-flexy--reset` modifier has been [deprecated](https://github.com/helpscout/seed-flexy/releases/tag/v0.2.0). `.o-flexy__item` and `.o-flexy__block` now properly handle truncation by default.

At the moment, Flexbox doesn't play nicely with CSS truncation (specifically the ``white-space: nowrap`` attribute. To resolve this, add either the ``.o-flexy--reset`` class to your flex item/block respectively.

{% example html %}
<div class="o-flexy">
  <div class="o-flexy__item">
    Flex Item
  </div>
  <div class="o-flexy__block o-flexy--reset">
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



## Related

* [seed-inline](/seed/packs/seed-inline)
