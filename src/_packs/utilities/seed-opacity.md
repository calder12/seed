---
title: Opacity
description: "Utility classes that adjust the opacity value of elements."
section: Utility
layout: docs
source: https://github.com/helpscout/seed-opacity
seed-pack: seed-opacity
---

Opacity utility pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-opacity --save
```


### Dependencies

* [seed-props](/seed/packs/seed-props)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

`seed-opacity` provides a range of opacitys ranging from `0-100%`.

{% include docs/variables-table.html data=site.data.seed.seed-opacity.opacity %}

### Example

{% example html %}
<div class="u-op-8">I'm pretty visible</div>
<div class="u-op-5">I'm sorta visible</div>
<div class="u-op-1">I'm like… barely visible</div>
{% endexample %}
