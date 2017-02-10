---
title: Badge
description: "Component that helps indicate status. Includes support for a variation of states."
section: Component
source: https://github.com/helpscout/seed-badge
seed-pack: seed-badge
keywords: badge, label, count
---

Badge component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-badge --save
```


### Dependencies

* [seed-dash](/seed/packs/seed-dash)
* [seed-publish](/seed/packs/seed-publish)
* [seed-states](/seed/packs/seed-states)


---


## Example

{% example html %}
<span class="c-badge">
  Badge
</span>
{% endexample %}


---


## States

{% example html %}
<span class="c-badge is-error">
  Error
</span>
<span class="c-badge is-info">
  Info
</span>
<span class="c-badge is-success">
  Success
</span>
<span class="c-badge is-warning">
  Warning
</span>
{% endexample %}


---


## Custom colors

You can create custom colored badges by using the `.t-bg-` based classes from theme packs like [seed-helpscout-theme](/seed/themes/seed-helpscout-theme/).

{% example html %}
<span class="c-badge t-bg-purple-500">
  Purple
</span>
<span class="c-badge t-bg-orange-400">
  Orange
</span>
<span class="c-badge t-bg-green-900">
  Dark green
</span>
{% endexample %}



---



## Configurations


{% include docs/config.html config="seed-badge" %}
