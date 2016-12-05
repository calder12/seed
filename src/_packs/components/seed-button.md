---
title: Button
section: Components
source: https://github.com/helpscout/seed-button
seed-pack: seed-button
---

Button component pack for Seed

Use Seed's custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-button --save
```


### Dependencies

* [seed-border](/seed/packs/seed-border)
* [seed-control](/seed/packs/seed-control)
* [seed-dash](/seed/packs/seed-dash)
* [seed-publish](/seed/packs/seed-publish)
* [seed-states](/seed/packs/seed-states)


---


## Example

There are 3 button styles in Seed. Add ``.c-button`` to any selector to create a button!

{% example html %}
<button class="c-button">Regular</button>
<button class="c-button c-button--primary">Primary</button>
<button class="c-button c-button--link">Link</button>
{% endexample %}



### Primary buttons

Just a heads up regarding primary buttons - Try to have only 1 primary button per view.
Remember.. When every button is primary, **no button will be**.

{% example html %}
<button class="c-button c-button--primary">OMG</button>
<button class="c-button c-button--primary">Too many</button>
<button class="c-button c-button--primary">Primary buttons!</button>
{% endexample %}



### Styling non-button elements

As long as you attach the ``.c-button`` class, the button style can be applied to any selector. Just a heads up, for accessbility purposes, be sure to add ``role="button"`` to non-buttons if you choose to "buttonize" them.

{% example html %}
<a href="#" role="button" class="c-button">Link disguised as Button</a>
{% endexample %}



---



## Sizes

Alternate button sizes are available but should be used sparringly. Avoid using large/small buttons next to standard sized buttons or form elements.


### Large buttons

{% example html %}
<button class="c-button c-button--lg">Regular</button>
<button class="c-button c-button--primary c-button--lg">Primary</button>
<button class="c-button c-button--link c-button--lg">Link</button>
{% endexample %}


### Medium buttons

{% example html %}
<button class="c-button c-button--md">Regular</button>
<button class="c-button c-button--primary c-button--md">Primary</button>
<button class="c-button c-button--link c-button--md">Link</button>
{% endexample %}


### Small buttons

{% example html %}
<button class="c-button c-button--sm">Regular</button>
<button class="c-button c-button--primary c-button--sm">Primary</button>
<button class="c-button c-button--link c-button--sm">Link</button>
{% endexample %}


---



## States

Below are state styles that can be applied to ``.c-button`` elements.

{% example html %}
<button class="c-button is-success">Success</button>
<button class="c-button is-error">Error</button>
<button class="c-button is-warning">Warning</button>
{% endexample %}


### Disabled

{% example html %}
<button class="c-button" disabled>Regular</button>
<button class="c-button c-button--primary" disabled>Primary</button>
<button class="c-button c-button--link" disabled>Link</button>
{% endexample %}


---



## Button groups

{% example html %}
<div class="o-control-group" role="group">
  <button class="c-button c-button--sm">Button</button>
  <button class="c-button c-button--sm">Button</button>
  <button class="c-button c-button--sm">Button</button>
</div>
{% endexample %}



---



## Related

* [seed-control-group](/seed/packs/seed-control-group)
* [seed-dropdown](/seed/packs/seed-dropdown)
