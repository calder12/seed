---
title: Card
section: Components
source: https://github.com/helpscout/seed-card
seed-pack: seed-card
---

Card component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-card --save
```


### Dependencies

* [seed-border](/packs/seed-border)
* [seed-publish](/packs/seed-publish)


---


## Example

{% example html %}
<div class="c-card">
  Hey! I'm a card :)
</div>
{% endexample %}



### Blocks

Contents of a card are placed within a `.c-card__block`

{% example html %}
<div class="c-card">
  <div class="c-card__block">
    Card block
  </div>
</div>
{% endexample %}


Sibling card blocks will automatically be separated with a border.

{% example html %}
<div class="c-card">
  <div class="c-card__block">
    Card block
  </div>
  <div class="c-card__block">
    Card block
  </div>
</div>
{% endexample %}


#### Sizes

Card blocks have size modifiers, ranging from `xs-md`. These adjust the vertical padding of the blocks.

These size modifier classes support **[responsive modifiers](/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-card.sizes %}

**Example:**

{% example html %}
<div class="c-card">
  <div class="c-card__block c-card__block--md">
    Medium (Default)
  </div>
  <div class="c-card__block c-card__block--sm">
    Small
  </div>
  <div class="c-card__block c-card__block--xs">
    Extra small
  </div>
</div>
{% endexample %}


---


## Modifiers

### Square

{% example html %}
<div class="c-card c-card--square">
  <div class="c-card__block">
    Whoa! I'm a square card :)
  </div>
</div>
{% endexample %}



---



## Related

* [seed-dropdown](/packs/seed-dropdown)
