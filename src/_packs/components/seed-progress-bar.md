---
title: Progress Bar
description: "Component that provides a progress feedback. Includes support for a variation of sizes."
section: Component
source: https://github.com/helpscout/seed-progress-bar
seed-pack: seed-progress-bar
keywords: progress, progress-bar, bar, feedback, status, loading
---

Progres bar component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-progress-bar --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)


---


## Example

The width of the progress bar is set with inline styles (`style`). Be sure to include `role` and `aria-value` for accessibility.

{% example html %}
<div class="c-progress-bar">
  <div class="c-progress-bar__bar" role="progressbar" aria-value="30" style="width: 30%;"></div>
</div>
{% endexample %}



---



## Sizes

All of the following sizes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

### Extra small

{% example html %}
<div class="c-progress-bar c-progress-bar--xs">
  <div class="c-progress-bar__bar" role="progressbar" aria-value="30" style="width: 30%;"></div>
</div>
{% endexample %}



### Small

{% example html %}
<div class="c-progress-bar c-progress-bar--sm">
  <div class="c-progress-bar__bar" role="progressbar" aria-value="30" style="width: 30%;"></div>
</div>
{% endexample %}



### Medium

{% example html %}
<div class="c-progress-bar c-progress-bar--md">
  <div class="c-progress-bar__bar" role="progressbar" aria-value="30" style="width: 30%;"></div>
</div>
{% endexample %}



### Large

{% example html %}
<div class="c-progress-bar c-progress-bar--lg">
  <div class="c-progress-bar__bar" role="progressbar" aria-value="30" style="width: 30%;"></div>
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-progress-bar" %}
