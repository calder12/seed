---
title: "Tooltip"
description: "Component that provides styling for tooltips. This component uses Bootstrap's Javascript to handle the interactions."
section: "Component"
source: "https://github.com/helpscout/seed-tooltip"
seed-pack: "seed-tooltip"
keywords:
  - bootstrap
  - tooltip
---

Tooltip component pack for Seed


## Install

```
npm install seed-tooltip --save
```


### Dependencies

* [seed-bootstrap-fade](/seed/packs/seed-bootstrap-fade)
* [seed-publish](/seed/packs/seed-publish)
* [seed-this](/seed/packs/seed-this)



---



## Bootstrap

### Javascript

This component's interactions are powered by [Bootstrap](http://getbootstrap.com/javascript/). Refer to their [tooltip documentation](http://getbootstrap.com/javascript/#tooltips-usage) for Javascript usage.


### CSS

This component **does not** require any of Bootstrap's CSS for style. In fact, it is recommended that Bootstrap's CSS are omitted for `seed-tooltip` to be styled properly.


#### Class names

In the markup examples (below), you will that class names don't follow the ITCSS naming scheme. This is because Boostrap **requires** specific class names for their tooltip components.



---



## Example

Four options are available: top, right, bottom, and left aligned.

{% example html %}
<button type="button" class="c-button" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

<button type="button" class="c-button" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>

<button type="button" class="c-button" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

<button type="button" class="c-button" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-tooltip" %}



---



## Related

* [seed-popover](/seed/packs/seed-popover)
