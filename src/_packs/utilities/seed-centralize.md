---
title: Centralize
description: "Vertically and horizontally alignment elements."
section: Utility
layout: docs
source: https://github.com/helpscout/seed-centralize
seed-pack: seed-centralize
keywords: align, center, vertical
---

Centralize utility pack for Seed

This pack uses [flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/) to magically vertically/horizontally align things.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-centralize --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

Add the class `.u-centralize` to the selector you want its inner content to the vertically/horizontally aligned.

This utility pack supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

### Example

{% example html %}
<div class="u-centralize t-bg-blue-200" style="height: 200px;">
  <h1>I'm in the middle</h1>
</div>
{% endexample %}


### Multiple child elements

Having multiple elements like `h1`, `p`, or `a` being vertically aligned is a common design pattern, especially for big "hero" type components.

Keep in mind that the flexbox based alignment technique only works if there is **one child selector** within the parent of `.u-centralize`.

Below is an example of misalignment if there is more tha child element:

{% example html %}
<div class="u-centralize t-bg-blue-200" style="height: 200px;">
  <h1>I'm in the middle</h1>
  <p>Aww… I wanna be too!</p>
</div>
{% endexample %}

Instead, keep all of the child elements **within a container**:

{% example html %}
<div class="u-centralize t-bg-blue-200" style="height: 200px;">
  <div>
    <h1>I'm in the middle</h1>
    <p>
      Yay! I'm in the middle now.<br>
      Kinda.
    </p>
  </div>
</div>
{% endexample %}

Notice how the text elements aren't perfectly center aligned. That is because `.u-centralize` only takes care of aligning it's own child element (the container `div` in the above example). If various elements are contained in a containing `div`, the responsibility of alignment shifts to the container.

Depending on the types of elements, they can be horizontally aligned using `.tx-center` (from [seed-typography](/seed/packs/seed-typography)) for text/inline elements or `.u-mrg-auto` (from [seed-spacing](/seed/packs/seed-spacing)) for block elements.

{% example html %}
<div class="u-centralize t-bg-blue-200" style="height: 200px;">
  <div class="tx-center">
    <h1>I'm in the middle</h1>
    <p>I'm totes in the middle now.</p>
  </div>
</div>
{% endexample %}



## Configurations



{% include docs/config.html config="seed-button" %}



---



## Related

* [seed-spacing](/seed/packs/seed-spacing)
