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

A series of classes that properly align adjacent elements together with consideration for overflow. These classes help ensure that UI elements have adequete spacing, even in situations where the layout forces the items to wrap.

## Install

```
npm install seed-inline --save
```



### Dependencies

* [seed-publish](/seed/packs/seed-publish)
* [seed-spacing](/seed/packs/seed-spacing)



---



## Example

To inline items next to each other, wrap everything in a parent selector of `.o-inline`, and each child selector in `.o-inline__item`.

{% example %}
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
    <input type="text" value="Howdy partner!" placeholder="Example: Howdy">
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
    <input type="text" value="woody@toystory.com" placeholder="Example: woody@toystory.com">
  </div>
</div>
{% endexample %}

```html
<div class="o-inline">
  <div class="o-inline__item">
    ...
  </div>
  <div class="o-inline__item">
    ...
  </div>
</div>
```


### Working with dynamic content

`.o-inline` is great at inlining smaller pieces of UI elements next to each other — such as icons, buttons, and inputs. However, if you have textual content (especially longer content), it is better to use [seed-flexy](/seed/packs/seed-flexy) instead.


**Desired UI**

Let's pretend the UI you would like is similar to what we have below. An icon on the left, textual content in the middle, and a button on the right.

{% example %}
<div class="o-inline">
  <div class="o-inline__item">
    That's *Mr.* Evil Dr. Porkchop to you. 
  </div>
  <div class="o-inline__item u-mrg-l-4">
    <button class="c-button">Shoot Laser</button>
  </div>
</div>
{% endexample %}

**Using `.o-inline` (👎)**

If there is a lot of text, the UI will no longer look like what we had before. That is because `.o-inline__item` doesn't constrain it's inner content for layout purposes. It only tries to align items next to each other (when possible).

{% example %}
<div class="o-inline">
  <div class="o-inline__item">
    Hamm teleports the Potato Heads, the aliens, and Slinky onto his ship. He also pushes a button reading, "Death by Monkeys," trapping our heroes with a flood of plastic red monkeys. As Mr. Potato Head reaches toward a button activating a destructive ray, the scene suddenly cuts to Andy's bedroom. The whole scene actually took place in Andy's imagination, as he plays with the toys and a cardboard spaceship
  </div>
  <div class="o-inline__item u-mrg-l-4">
    <button class="c-button">Shoot Laser</button>
  </div>
</div>
{% endexample %}


**Using `.o-flexy` (👍)**

On the other hand, `.o-flexy` from the [seed-flexy](/seed/packs/seed-flexy) object pack **does** respect layout!

{% example %}
<div class="o-flexy o-flexy--top">
  <div class="o-flexy__block">
    Hamm teleports the Potato Heads, the aliens, and Slinky onto his ship. He also pushes a button reading, "Death by Monkeys," trapping our heroes with a flood of plastic red monkeys. As Mr. Potato Head reaches toward a button activating a destructive ray, the scene suddenly cuts to Andy's bedroom. The whole scene actually took place in Andy's imagination, as he plays with the toys and a cardboard spaceship
  </div>
  <div class="o-flexy__item u-mrg-l-4">
    <button class="c-button">Shoot Laser</button>
  </div>
</div>
{% endexample %}


---


## Sizes

The various sizes will adjust the spacing to the right and below each `.o-inline__item`.

| Modifier class  | Margin adjustment |
| ---             | ---               |
| `.o-inline--xs` | 4px               |
| `.o-inline--sm` | 8px               |
| `.o-inline--md` | 16px              |
| `.o-inline--lg` | 24px              |

{% example %}
<div class="o-inline o-inline--sm">
  {% for i in (1..12) %}
    <div class="o-inline__item">
      Inline item
    </div>
  {% endfor %}
</div>
{% endexample %}

```html
<div class="o-inline o-inline--sm">
  ...
</div>
```



---



## Configurations

{% include docs/config.html config="seed-inline" %}



---



## Related

* [seed-flexy](/seed/packs/seed-flexy)
