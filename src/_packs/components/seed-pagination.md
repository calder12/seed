---
title: "Pagination"
description: "Component used for paginated navigation represented with a list of numbered links. Includes support for a variation of sizes and styles."
section: "Component"
source: "https://github.com/helpscout/seed-pagination"
seed-pack: "seed-pagination"
keywords:
  - nav
  - pagination
  - pager
---

Pagination component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-pagination --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-button](/seed/packs/seed-button)
* [seed-dash](/seed/packs/seed-dash)
* [seed-publish](/seed/packs/seed-publish)


---


## Example

{% example html %}
<nav>
  <ul class="c-pagination">
    <li class="c-pagination__item is-disabled">
      <a href="#" class="c-pagination__link">
        Previous
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        1
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        2
      </a>
    </li>
    <li class="c-pagination__item is-active">
      <a href="#" class="c-pagination__link">
        3
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        Next
      </a>
    </li>
  </ul>
</nav>
{% endexample %}



---


## Modifiers

### Alignment

These size modifier classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% example %}
<nav>
  <ul class="c-pagination c-pagination--left">
    <li class="c-pagination__item is-disabled">
      <a href="#" class="c-pagination__link">
        Previous
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        1
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        2
      </a>
    </li>
    <li class="c-pagination__item is-active">
      <a href="#" class="c-pagination__link">
        3
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        Next
      </a>
    </li>
  </ul>
</nav>
<nav>
  <ul class="c-pagination c-pagination--center">
    <li class="c-pagination__item is-disabled">
      <a href="#" class="c-pagination__link">
        Previous
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        1
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        2
      </a>
    </li>
    <li class="c-pagination__item is-active">
      <a href="#" class="c-pagination__link">
        3
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        Next
      </a>
    </li>
  </ul>
</nav>
<nav>
  <ul class="c-pagination c-pagination--right">
    <li class="c-pagination__item is-disabled">
      <a href="#" class="c-pagination__link">
        Previous
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        1
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        2
      </a>
    </li>
    <li class="c-pagination__item is-active">
      <a href="#" class="c-pagination__link">
        3
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        Next
      </a>
    </li>
  </ul>
</nav>
{% endexample %}

```html
<div class="c-pagination c-pagination--left">
  ...
</div>
<div class="c-pagination c-pagination--center">
  ...
</div>
<div class="c-pagination c-pagination--right">
  ...
</div>
```



### Sizing

**Large**

{% example %}
<nav>
  <ul class="c-pagination c-pagination--lg">
    <li class="c-pagination__item is-disabled">
      <a href="#" class="c-pagination__link">
        Previous
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        1
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        2
      </a>
    </li>
    <li class="c-pagination__item is-active">
      <a href="#" class="c-pagination__link">
        3
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        Next
      </a>
    </li>
  </ul>
</nav>
{% endexample %}

```html
<div class="c-pagination c-pagination--lg">
  ...
</div>
```


**Medium**

{% example %}
<nav>
  <ul class="c-pagination c-pagination--md">
    <li class="c-pagination__item is-disabled">
      <a href="#" class="c-pagination__link">
        Previous
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        1
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        2
      </a>
    </li>
    <li class="c-pagination__item is-active">
      <a href="#" class="c-pagination__link">
        3
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        Next
      </a>
    </li>
  </ul>
</nav>
{% endexample %}

```html
<div class="c-pagination c-pagination--md">
  ...
</div>
```


**Small**

{% example %}
<nav>
  <ul class="c-pagination c-pagination--sm">
    <li class="c-pagination__item is-disabled">
      <a href="#" class="c-pagination__link">
        Previous
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        1
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        2
      </a>
    </li>
    <li class="c-pagination__item is-active">
      <a href="#" class="c-pagination__link">
        3
      </a>
    </li>
    <li class="c-pagination__item">
      <a href="#" class="c-pagination__link">
        Next
      </a>
    </li>
  </ul>
</nav>
{% endexample %}

```html
<div class="c-pagination c-pagination--sm">
  ...
</div>
```



---



## Configurations

{% include docs/config.html config="seed-pagination" %}



---



## Related

* [seed-button](/seed/packs/seed-button)
* [seed-control-group](/seed/packs/seed-control-group)
* [seed-dot-nav](/seed/packs/seed-dot-nav)
* [seed-nav](/seed/packs/seed-nav)
