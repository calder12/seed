---
title: Vertical Align
description: "Utility classes that adjust the vertical alignment of inline elements."
section: Utility
layout: docs
source: https://github.com/helpscout/seed-vertical-align
seed-pack: seed-vertical-align
keywords: vertical, align, middle, center, text, inline
---

Vertical alignment utility pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-vertical-align --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

`seed-vertical-align` provides a vertical aligments for inline elements.

See the list of [responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers).

{% include docs/variables-table.html data=site.data.seed.seed-vertical-align.alignments %}

### Example

{% example html %}
<span class="u-va-middle tx-h1">Big Text</span>
<span>I'm in the middle!</span>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-vertical-align" %}



---



## Related

* [seed-centralize](/seed/packs/seed-centralize)
* [seed-display](/seed/packs/seed-display)
