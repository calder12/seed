---
title: Border
description: "Thematic classes to adjust border styles."
section: Theme
layout: docs
source: https://github.com/helpscout/seed-border
seed-pack: seed-border
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
<div class="u-pad-3 t-bdr-top u-mrg-b-2">
  I only have a border on the top.
</div>
<div class="u-pad-3 t-bdr-right u-mrg-b-2">
  I only have a border on the right.
</div>
<div class="u-pad-3 t-bdr-left u-mrg-b-2">
  I only have a border on the left.
</div>
<div class="u-pad-3 t-bdr">
  Hah! I gots borders all over the place.
</div>
{% endexample %}
