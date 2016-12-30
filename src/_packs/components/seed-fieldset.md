---
title: Fieldset
description: "Component that groups form elements like labels and inputs within a web form."
section: Component
source: https://github.com/helpscout/seed-fieldset
seed-pack: seed-fieldset
keywords: form, input, form group, formgroup, field, fieldset
---

Fieldset component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-fieldset --save
```


### Dependencies

* [seed-input](/seed/packs/seed-input)
* [seed-publish](/seed/packs/seed-publish)
* [seed-states](/seed/packs/seed-states)



---


## Example

The fieldset component helps group form elements like labels and inputs. The `.c-fieldset` component is an enhancement on the native HTML [`<fieldset>`](https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset) selector.

{% example html %}
<form>
  <fieldset class="c-fieldset">
    <label for="input1">Label</label>
    <input id="input1" class="c-input" placeholder="Placeholder">
  </fieldset>
  <fieldset class="c-fieldset">
    <label for="input2">Label</label>
    <input id="input2" class="c-input" placeholder="Placeholder">
  </fieldset>
</form>
{% endexample %}


Although recommended, it isn't necessary to use `.c-fieldset` with a `<fieldset>` selector. The class can be applied on selectors like `<div>`.
{% example html %}
<div class="c-fieldset">
  <label for="input3">Label</label>
  <input id="input3" class="c-input" placeholder="Placeholder">
</div>
{% endexample %}



---



## Inline

Fieldsets can be inlined using a variety of methods.


### Using Grid classes

It is recommended that [seed-grid](/seed/packs/seed-grid) object classes are used as it provides flexible options for responsive styles and sizing.

{% example html %}
<div class="o-row">
  <div class="o-col-6">
    <div class="c-fieldset">
      <label>Label</label>
      <input class="c-input" placeholder="Placeholder">
    </div>
  </div>
  <div class="o-col-6">
    <div class="c-fieldset">
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
    <div class="c-fieldset">
      <label>Label</label>
      <input class="c-input" placeholder="Placeholder">
    </div>
  </div>
  <div class="o-inline__item">
    <div class="c-fieldset">
      <label>Label</label>
      <input class="c-input" placeholder="Placeholder">
    </div>
  </div>
</div>
{% endexample %}




---



## States

Applying the desired state class on `.c-fieldset` will automatically adjust the `<label>` and [seed-input](/seed/packs/seed-input) styles to match.


{% example html %}
<div class="c-fieldset is-error">
  <label>Error</label>
  <input class="c-input" placeholder="Placeholder">
</div>
<div class="c-fieldset is-success">
  <label>Success</label>
  <input class="c-input" placeholder="Placeholder">
</div>
<div class="c-fieldset is-warning">
  <label>Warning</label>
  <input class="c-input" placeholder="Placeholder">
</div>
{% endexample %}



### Disabled

If a native HTML `<fieldset>` selector is used, you can apply the supported `disabled` attribute on the selector.

{% example html %}
<fieldset class="c-fieldset" disabled>
  <label>Label</label>
  <input class="c-input" placeholder="Placeholder">
</fieldset>
{% endexample %}



---



## Related

* [seed-grid](/seed/packs/seed-grid)
* [seed-inline](/seed/packs/seed-inline)
* [seed-input](/seed/packs/seed-input)
