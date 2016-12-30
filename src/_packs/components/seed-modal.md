---
title: Modal
description: "Component that provides styling for modals. This component uses Bootstrap's Javascript to handle the interactions."
section: Component
source: https://github.com/helpscout/seed-modal
seed-pack: seed-modal
keywords: modal, bootstrap
---

Modal component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-modal --save
```


### Dependencies

* [seed-bootstrap-fade](https://github.com/helpscout/seed-bootstrap-fade)
* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-card](/seed/packs/seed-card)
* [seed-dash](/seed/packs/seed-dash)
* [seed-publish](/seed/packs/seed-publish)
* [seed-this](/seed/packs/seed-this)



---



## Bootstrap

### Javascript

This component's interactions are powered by [Bootstrap](http://getbootstrap.com/javascript/). Refer to their [modal documentation](http://getbootstrap.com/javascript/#modals) for Javascript usage.


### CSS

This component **does not** require any of Bootstrap's CSS for style. In fact, it is recommended that Bootstrap's CSS are omitted for `seed-modal` to be styled properly.


#### Class names

In the markup examples (below), you will notice that for certain components there is a mixture of seed class names and Bootstrap class names. In order for dropdown's to work properly, Bootstrap's Javascript **requires** certain elements to have certain class names. `seed-modal` does not use any of these classes for styling.



---



## Example

The modal's inner content (`.modal-content`) uses the [seed-card](/seed/packs/seed-card) component pack for styling.

{% example html %}
<!-- Button trigger modal -->
<button type="button" class="c-button" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content c-card">
      <div class="c-card__block c-card__block--sm">
        <div class="o-flexy">
          <div class="o-flexy__item">
            <h4 class="u-mrg-0">Heading</h4>
          </div>
          <div class="o-flexy__item">
            <a href="#" data-dismiss="modal" aria-label="Close">Close</a>
          </div>
        </div>
      </div>
      <div class="c-card__block">
        Modal content
      </div>
    </div>
  </div>
</div>
{% endexample %}



---



## Sizes

The modal size can be adjusted by applying a size modifier class to `.modal-dialog`.

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-modal.sizes %}

Below is an example of a large modal:

{% example %}
<!-- Button trigger modal -->
<button type="button" class="c-button" data-toggle="modal" data-target="#myModalSizes">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModalSizes" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-dialog--lg" role="document">
    <div class="modal-content c-card">
      <div class="c-card__block c-card__block--sm">
        <div class="o-flexy">
          <div class="o-flexy__item">
            <h4 class="u-mrg-0">Heading</h4>
          </div>
          <div class="o-flexy__item">
            <a href="#" data-dismiss="modal" aria-label="Close">Close</a>
          </div>
        </div>
      </div>
      <div class="c-card__block">
        Modal content
      </div>
    </div>
  </div>
</div>
{% endexample %}

```html
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-dialog--lg" role="document">
    <div class="modal-content c-card">
      <div class="c-card__block">
        ...
      </div>
    </div>
  </div>
</div>

```



---



## Related

* [seed-button](/seed/packs/seed-button)
* [seed-card](/seed/packs/seed-card)
* [seed-flexy](/seed/packs/seed-flexy)
