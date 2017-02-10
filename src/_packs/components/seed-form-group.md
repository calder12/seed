---
title: Form Group
description: "Component that groups form elements like labels and inputs within a web form."
section: Component
source: https://github.com/helpscout/seed-form-group
seed-pack: seed-form-group
keywords: form, input, form group, formgroup
---

Form group component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-form-group --save
```


### Dependencies

* [seed-input](/seed/packs/seed-input)
* [seed-publish](/seed/packs/seed-publish)
* [seed-states](/seed/packs/seed-states)



---


## Example

The form group component helps group form elements like labels and inputs.

{% example html %}
<form>
  <div class="c-form-group">
    <label for="input1">Label</label>
    <input id="input1" class="c-input" placeholder="Placeholder">
  </div>
  <div class="c-form-group">
    <label for="input2">Label</label>
    <input id="input2" class="c-input" placeholder="Placeholder">
  </div>
</form>
{% endexample %}




---



## Inline

Form groups can be inlined using a variety of methods.


### Using Grid classes

It is recommended that [seed-grid](/seed/packs/seed-grid) object classes are used as it provides flexible options for responsive styles and sizing.

{% example html %}
<div class="o-row">
  <div class="o-col-6">
    <div class="c-form-group">
      <label>Label</label>
      <input class="c-input" placeholder="Placeholder">
    </div>
  </div>
  <div class="o-col-6">
    <div class="c-form-group">
      <label>Label</label>
      <input class="c-input" placeholder="Placeholder">
    </div>
  </div>
</div>
{% endexample %}



### Using Inline classes

Alternatively, [seed-inline](/seed/packs/seed-inline) object classes can also be used.

{% example html %}
<div class="o-inline">
  <div class="o-inline__item">
    <div class="c-form-group">
      <label>Label</label>
      <input class="c-input" placeholder="Placeholder">
    </div>
  </div>
  <div class="o-inline__item">
    <div class="c-form-group">
      <label>Label</label>
      <input class="c-input" placeholder="Placeholder">
    </div>
  </div>
</div>
{% endexample %}




---



## States

Applying the desired state class on `.c-form-group` will automatically adjust the `<label>` and [seed-input](/seed/packs/seed-input) styles to match.


{% example html %}
<div class="c-form-group is-error">
  <label>Error</label>
  <input class="c-input" placeholder="Placeholder">
</div>
<div class="c-form-group is-success">
  <label>Success</label>
  <input class="c-input" placeholder="Placeholder">
</div>
<div class="c-form-group is-warning">
  <label>Warning</label>
  <input class="c-input" placeholder="Placeholder">
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-form-group" %}



---



## Related

* [seed-grid](/seed/packs/seed-grid)
* [seed-inline](/seed/packs/seed-inline)
* [seed-input](/seed/packs/seed-input)
