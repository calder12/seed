---
title: "Option card"
description: "Component that enhances the UI of an input checkbox or radio."
section: "Component"
source: "https://github.com/helpscout/seed-option-card"
seed-pack: "seed-option-card"
keywords:
  - card
  - check
  - checkbox
  - option
  - options
  - radio
  - select
  - tile
---

Option card component pack for Seed


## Install

```
npm install seed-option-card --save
```


### Dependencies

* [seed-card](/seed/packs/seed-card)
* [seed-control-group](/seed/packs/seed-control-group)
* [seed-publish](/seed/packs/seed-publish)
* [seed-this](/seed/packs/seed-this)


---


## Example

`.c-option-card` provides a wrapper for a traditional input radio or checkbox.

{% example %}
<div class="tx-h6 tx-700 u-op-2 u-mrg-b-1">Pick One:</div>
<div class="c-option-card u-mrg-b-2">
  <label class="c-option-card__label">
    <input type="radio" class="c-option-card__selector" name="example">
    <div class="c-card">
      <div class="c-card__block">
        <div class="tx-h4">Pick Me</div>
        Cause I'm the best.
      </div>
    </div>
  </label>
</div>
<div class="c-option-card">
  <label class="c-option-card__label">
    <input type="radio" class="c-option-card__selector" name="example" />
    <div class="c-card">
      <div class="c-card__block">
        <div class="tx-h4">No, Pick Me</div>
        Cause I'm the better!
      </div>
    </div>
  </label>
</div>
{% endexample %}

```html
<div class="c-option-card">
  <label class="c-option-card__label">
    <input type="radio" class="c-option-card__selector" name="example" />
    <div class="c-card">
      <div class="c-card__block">
        ...
      </div>
    </div>
  </label>
</div>
```



---



## Control Group

{% example %}
<div class="tx-h6 tx-700 u-op-2 u-mrg-b-1">Pick One:</div>
<div class="o-control-group">
  <div class="c-option-card u-mrg-b-2">
    <label class="c-option-card__label">
      <input type="radio" class="c-option-card__selector" name="example">
      <div class="c-card">
        <div class="c-card__block">
          Option 1
        </div>
      </div>
    </label>
  </div>
  <div class="c-option-card">
    <label class="c-option-card__label">
      <input type="radio" class="c-option-card__selector" name="example" />
      <div class="c-card">
        <div class="c-card__block">
          Option 2
        </div>
      </div>
    </label>
  </div>
  <div class="c-option-card">
    <label class="c-option-card__label">
      <input type="radio" class="c-option-card__selector" name="example" />
      <div class="c-card">
        <div class="c-card__block">
          Option 3
        </div>
      </div>
    </label>
  </div>
</div>
{% endexample %}

```html
<div class="o-control-group">
  <div class="c-option-card">
  ...
  </div>
  <div class="c-option-card">
  ...
  </div>
  <div class="c-option-card">
  ...
  </div>
</div>
```


---



## Configurations


{% include docs/config.html config="seed-option-card" %}



---



## Related

* [seed-card](/seed/packs/seed-card)
* [seed-control-group](/seed/packs/seed-control-group)
* [seed-input](/seed/packs/seed-input)
