---
title: Border
description: "Thematic classes to adjust border styles."
section: Theme
layout: docs
source: https://github.com/helpscout/seed-border
seed-pack: seed-border
keywords: border
---

Border theme pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-border --save
```

### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

`.t-bdr` supports **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-border.border %}

**Example**

{% example html %}
<div class="t-bdr-top u-pad-3 u-mrg-b-2">
  I only have a border on the top.
</div>
<div class="t-bdr-right u-pad-3 u-mrg-b-2">
  I only have a border on the right.
</div>
<div class="t-bdr-left u-pad-3 u-mrg-b-2">
  I only have a border on the left.
</div>
<div class="t-bdr">
  Hah! I gots borders all over the place.
</div>
{% endexample %}



---



## Border Radius

Border radiuses can be adjusted by adding a `.t-bdr-r` class.

{% include docs/variables-table.html data=site.data.seed.seed-border.border-radius %}

**Example**

{% example html %}
<div class="t-bdr-r-3 u-pad-3 t-bg-blue-200 u-mrg-b-2">
  I have a border radius of 3px!
</div>
<div class="t-bdr-r-pill u-pad-3 t-bg-green-200">
  I have a border radius of a lot of px!
</div>
{% endexample %}
