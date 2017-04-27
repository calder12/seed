---
title: "Avatar"
description: "Component that stylizes images for use as avatars. Includes support for a variation of sizes and styles."
section: "Component"
source: "https://github.com/helpscout/seed-avatar"
seed-pack: "seed-avatar"
keywords:
  - avatar
  - image
---

A component that stylizes images for use as avatars. This component provides a handful of different avatar styles and sizes.


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

| Modifier class  | Avatar size |
| ---             | ---         |
| `.c-avatar--xs` | 28px        |
| `.c-avatar--sm` | 32px        |
| `.c-avatar--md` | 40px        |
| `.c-avatar--lg` | 50px        |


{% example html %}
<div class="c-avatar c-avatar--xs">
  <img src="/seed/images/seed.png" class="c-avatar__image">
</div>
{% endexample %}



---



## Configurations


{% include docs/config.html config="seed-avatar" %}



---



## Related

* [seed-thumbnail](/seed/packs/seed-thumbnail)
