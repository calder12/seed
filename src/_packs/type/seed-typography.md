---
title: "Typography"
description: "A collection of typography based styles."
section: "Text"
source: "https://github.com/helpscout/seed-typography"
seed-pack: "seed-typography"
keywords:
  - bold
  - font
  - header
  - size
  - size
  - sizing
  - text
  - tx
  - type
  - typography
  - weight
---

Typography pack for Seed


## Install

```
npm install seed-typography --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## About

Seed CSS introduces a new prefix to compliment those defined [ITCSS](http://itcss.io/). The new prefix namespace is `tx`, which is reserved for typography.


---


## Alignment

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-typography.alignment %}


**Example**

{% example html %}
<div class="tx-center">
  Hey! I'm in the center :)
  <div class="tx-left">
    Oh, that's cool. I'm on the left
  </div>
</div>
{% endexample %}


---


## Break

{% include docs/variables-table.html data=site.data.seed.seed-typography.break %}


---


## Decoration

{% include docs/variables-table.html data=site.data.seed.seed-typography.decoration %}

{% example html %}
<span class="tx-underline">I'm underlined! I must be super important.</span>
{% endexample %}


---


## Headings

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-typography.headings %}

{% example html %}
<h1 class="tx-h3">I may be an H1, but I look H3</h1>
{% endexample %}


---


## Headlines

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-typography.headlines %}

{% example html %}
<h3 class="tx-headline-3">I'm so big.</h3>
{% endexample %}


---


## Line heights

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-typography.line-height %}

{% example html %}
<h3 class="tx-lh-heading">
  Title: Heading line-height
</h3>
<p class="tx-lh-copy">
  This line-height is better for copy.
</p>
{% endexample %}


---


## Sizes

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-typography.sizes %}

{% example html %}
<span class="tx-xs">I'm super small.</span>
{% endexample %}


---


## Smoothing

{% include docs/variables-table.html data=site.data.seed.seed-typography.smoothing %}

{% example html %}
<span class="tx-smooth">I so smooth.</span>
<span class="tx-smooth-none">I totes not smooth.</span>
{% endexample %}


---


## Transform

{% include docs/variables-table.html data=site.data.seed.seed-typography.transform %}

{% example html %}
<span class="tx-uppercase">Ah! All caps!</span>
{% endexample %}


---


## Truncate

You can truncate text by adding the `.tx-truncate` text class to the selector containing the text.

{% example html %}
<div class="tx-truncate">
Toy Story is a 1995 American computer-animated buddy-comedy adventure film produced
by Pixar Animation Studios and released by Walt Disney Pictures. Directed by John Lasseter,
Toy Story was the first feature-length computer-animated film and the first theatrical
film produced by Pixar.
</div>
{% endexample %}

The CSS method of truncating requires the selector to be `display: block`. For selectors like `<a>` or `<span>`, we recommend you use the utility class of `.u-d-block` from [seed-display](/seed/packs/seed-display) to update the `display` property to `block`.

{% example html %}
<a class="tx-truncate u-d-block" href="#">
Toy Story is a 1995 American computer-animated buddy-comedy adventure film produced
by Pixar Animation Studios and released by Walt Disney Pictures.
</a>
{% endexample %}



---


## Weight

{% include docs/variables-table.html data=site.data.seed.seed-typography.weight %}

{% example html %}
<h4 class="tx-300">I so thin.</h4>
<h4 class="tx-800">I so bold.</h4>
{% endexample %}


---


## White-space

{% include docs/variables-table.html data=site.data.seed.seed-typography.white-space %}


---


## Wrap

{% include docs/variables-table.html data=site.data.seed.seed-typography.wrap %}



---



## Configurations

{% include docs/config.html config="seed-typography" %}
