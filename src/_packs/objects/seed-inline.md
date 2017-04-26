---
title: "Inline"
description: "Object classes that properly adjacent align elements together."
section: "Object"
source: "https://github.com/helpscout/seed-inline"
seed-pack: "seed-inline"
keywords:
  - inline
  - list
---

Inline object pack for Seed


## Install

```
npm install seed-inline --save
```



### Dependencies

* [seed-publish](/seed/packs/seed-publish)
* [seed-spacing](/seed/packs/seed-spacing)



---


## About

Inline is a small utility class used to properly adjacent align elements together. Inline is particularly useful in alignment various form elements next to each other.

When inline items are wrapped, they automatically have vertical spacing between each other to ensure that the elements inside do not touch.


---


## Example

To inline items next to each other, wrap everything in a parent selector of `.o-inline`, and each child selector in `.o-inline__item`.

{% example html %}
<div class="o-inline">
  <div class="o-inline__item">
    <small>Filter: </small>
  </div>
  <div class="o-inline__item">
    <select>
      <option>Subject</option>
    </select>
  </div>
  <div class="o-inline__item">
    <select>
      <option>is equal to</option>
    </select>
  </div>
  <div class="o-inline__item">
    <input type="text" value="Hi there!" placeholder="Example: Hello">
  </div>
  <div class="o-inline__item">
    and
  </div>
  <div class="o-inline__item">
    <select>
      <option>From</option>
    </select>
  </div>
  <div class="o-inline__item">
    <select>
      <option>is equal to</option>
    </select>
  </div>
  <div class="o-inline__item">
    <input type="text" value="awe@some.com" placeholder="Example: awe@some.com">
  </div>
</div>
{% endexample %}


### Working with dynamic content

`.o-inline` is great at inlining smaller pieces of UI elements next to each other — such as icons, buttons, and inputs. However, if you have textual content (especially longer content), it is better to use [seed-flexy](/seed/packs/seed-flexy) instead.


**Desired UI**

Let's pretend the UI you would like is similar to what we have below. An icon on the left, textual content in the middle, and a button on the right.

{% example html %}
<div class="o-inline">
  <div class="o-inline__item u-mrg-r-4">
    <i class="icon icon-workflow"></i>
  </div>
  <div class="o-inline__item">
    Text here
  </div>
  <div class="o-inline__item u-mrg-l-4">
    <button class="c-button">Totes</button>
  </div>
</div>
{% endexample %}

**Using `.o-inline` (👎)**

If there is a lot of text, the UI will no longer look like what we had before. That is because `.o-inline__item` doesn't constrain it's inner content for layout purposes. It only tries to align items next to each other (when possible).

{% example html %}
<div class="o-inline">
  <div class="o-inline__item u-mrg-r-4">
    <i class="icon icon-workflow"></i>
  </div>
  <div class="o-inline__item">
    Brunch meh fixie, PBR&B wolf sriracha yuccie locavore keffiyeh jean shorts. Plaid jianbing gastropub authentic. Succulents four loko gluten-free photo booth semiotics chambray. Offal literally 90's, shabby chic subway tile coloring book butcher fam ethical helvetica blue bottle asymmetrical four loko.
  </div>
  <div class="o-inline__item u-mrg-l-4">
    <button class="c-button">Totes</button>
  </div>
</div>
{% endexample %}


**Using `.o-flexy` (👍)**

On the other hand, `.o-flexy` from the [seed-flexy](/seed/packs/seed-flexy) object pack **does** respect layout!

{% example html %}
<div class="o-flexy o-flexy--top">
  <div class="o-flexy__item u-mrg-r-4">
    <i class="icon icon-workflow"></i>
  </div>
  <div class="o-flexy__block">
    Brunch meh fixie, PBR&B wolf sriracha yuccie locavore keffiyeh jean shorts. Plaid jianbing gastropub authentic. Succulents four loko gluten-free photo booth semiotics chambray. Offal literally 90's, shabby chic subway tile coloring book butcher fam ethical helvetica blue bottle asymmetrical four loko.
  </div>
  <div class="o-flexy__item u-mrg-l-4">
    <button class="c-button">Totes</button>
  </div>
</div>
{% endexample %}


---


## Sizes

The various sizes will adjust the spacing to the right and below each `.o-inline__item`.


### Extra small
{% example html %}
<div class="o-inline o-inline--xs">
  {% for i in (1..12) %}
    <div class="o-inline__item">
      Inline item
    </div>
  {% endfor %}
</div>
{% endexample %}


### Small
{% example html %}
<div class="o-inline o-inline--sm">
  {% for i in (1..12) %}
    <div class="o-inline__item">
      Inline item
    </div>
  {% endfor %}
</div>
{% endexample %}


### Medium
{% example html %}
<div class="o-inline o-inline--md">
  {% for i in (1..12) %}
    <div class="o-inline__item">
      Inline item
    </div>
  {% endfor %}
</div>
{% endexample %}


### Large
{% example html %}
<div class="o-inline o-inline--lg">
  {% for i in (1..12) %}
    <div class="o-inline__item">
      Inline item
    </div>
  {% endfor %}
</div>
{% endexample %}


### Extra large
{% example html %}
<div class="o-inline o-inline--xl">
  {% for i in (1..12) %}
    <div class="o-inline__item">
      Inline item
    </div>
  {% endfor %}
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-inline" %}



---



## Related

* [seed-flexy](/seed/packs/seed-flexy)
