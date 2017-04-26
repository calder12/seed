---
title: "Popover"
description: "Component that provides styling for popovers. This component uses Bootstrap's Javascript to handle the interactions."
section: "Component"
source: "https://github.com/helpscout/seed-popover"
seed-pack: "seed-popover"
keywords:
  - bootstrap
  - popover
  - tooltip
---

Popover component pack for Seed


## Install

```
npm install seed-popover --save
```


### Dependencies

* [seed-publish](/seed/packs/seed-publish)
* [seed-this](/seed/packs/seed-this)



---



## Bootstrap

### Javascript

This component's interactions are powered by [Bootstrap](http://getbootstrap.com/javascript/). Refer to their [popover documentation](http://getbootstrap.com/javascript/#popovers-usage) for Javascript usage.


### CSS

This component **does not** require any of Bootstrap's CSS for style. In fact, it is recommended that Bootstrap's CSS are omitted for `seed-popover` to be styled properly.


#### Class names

In the markup examples (below), you will that class names don't follow the ITCSS naming scheme. This is because Boostrap **requires** specific class names for their popover components.



---



## Example

Four options are available: top, right, bottom, and left aligned.

{% example html %}
<button type="button" class="c-button" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>

<button type="button" class="c-button" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="c-button" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="c-button" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-popover" %}



---



## Related

* [seed-dropdown](/seed/packs/seed-dropdown)
* [seed-tooltip](/seed/packs/seed-tooltip)
