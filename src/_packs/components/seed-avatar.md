---
title: Avatar
description: "Component that stylizes images for use as avatars. Includes support for a variation of sizes and styles."
section: Component
source: https://github.com/helpscout/seed-avatar
seed-pack: seed-avatar
keywords: avatar, image
---

Avatar component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-avatar --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)


---


## Example

{% example html %}
<div class="c-avatar">
  <img src="/seed/images/seed.png" class="c-avatar__image">
</div>
{% endexample %}


---


## Modifiers

### Rounded

{% example html %}
<div class="c-avatar c-avatar--rounded">
  <img src="/seed/images/seed.png" class="c-avatar__image">
</div>
{% endexample %}


---


## Sizes

All of the following sizes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

### Extra small

{% example html %}
<div class="c-avatar c-avatar--xs">
  <img src="/seed/images/seed.png" class="c-avatar__image">
</div>
{% endexample %}


### Small

{% example html %}
<div class="c-avatar c-avatar--sm">
  <img src="/seed/images/seed.png" class="c-avatar__image">
</div>
{% endexample %}


### Medium

{% example html %}
<div class="c-avatar c-avatar--md">
  <img src="/seed/images/seed.png" class="c-avatar__image">
</div>
{% endexample %}


### Large

{% example html %}
<div class="c-avatar c-avatar--lg">
  <img src="/seed/images/seed.png" class="c-avatar__image">
</div>
{% endexample %}



---



## Configurations


{% include docs/config.html config="seed-avatar" %}



---



## Related

* [seed-thumbnail](/seed/packs/seed-thumbnail)
