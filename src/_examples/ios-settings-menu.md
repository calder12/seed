---
title: "iOS inspired settings menu"
---

## Demo

{% example html %}
<div class="u-width-max-6@lg u-mrg-auto">
  <ul class="c-list c-list--bordered">
    <li class="u-pad-v-3">
      <div class="o-flexy">
        <div class="o-flexy__item">
          Use Large Fonts
        </div>
        <div class="o-flexy__item">
          <label class="c-switch c-switch--sm is-active u-d-block">
            <input type="checkbox">
            <span class="c-switch-toggle u-d-block"></span>
          </label>
        </div>
      </div>
    </li>
    <li class="u-pad-v-3">
      <div class="o-flexy">
        <div class="o-flexy__item">
          Autoplay GIFs
        </div>
        <div class="o-flexy__item">
          <label class="c-switch c-switch--sm u-d-block">
            <input type="checkbox">
            <span class="c-switch-toggle c-switch--sm u-d-block"></span>
          </label>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endexample %}


{% contentfor sidebar %}
### Packs

* Components
  * [seed-list](/seed/packs/seed-list)
  * [seed-switch](/seed/packs/seed-switch)
* Objects
  * [seed-flexy](/seed/packs/seed-flexy)
* Utilities
  * [seed-display](/seed/packs/seed-display)
  * [seed-spacing](/seed/packs/seed-spacing)
  * [seed-width](/seed/packs/seed-width)
{% endcontentfor %}
