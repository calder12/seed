---
title: Alert
section: Components
source: https://github.com/helpscout/seed-alert
seed-pack: seed-alert
---

Alert component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-alert --save
```


### Dependencies

* [seed-button](/packs/seed-button)
* [seed-dash](/packs/seed-dash)
* [seed-publish](/packs/seed-publish)
* [seed-states](/packs/seed-states)


---


## Example

{% example html %}
<div class="c-alert">
  <h3>Here's what's going on</h3>
  <p>Here's some more detail about what's going on</p>
</div>
{% endexample %}


---


### Inner text color

To ensure the inner text color matches the alert color scheme, you can add the class `.c-alert__text`. This is useful to help override base text colors for headings (`h1-h6`) or lists (`ul`).

{% example html %}
<div class="c-alert">
  <h3>Here's what's going on</h3>
  <p class="c-alert__text">
    Here's some more detail about what's going on
  </p>
</div>
{% endexample %}


---


## States


### Error

{% example html %}
<div class="c-alert is-error">
  <h3>Here's what's going on</h3>
  <p>Here's some more detail about what's going on</p>
</div>
{% endexample %}


### Info

{% example html %}
<div class="c-alert is-info">
  <h3>Here's what's going on</h3>
  <p>Here's some more detail about what's going on</p>
</div>
{% endexample %}


### Success

{% example html %}
<div class="c-alert is-success">
  <h3>Here's what's going on</h3>
  <p>Here's some more detail about what's going on</p>
</div>
{% endexample %}


### Warning

{% example html %}
<div class="c-alert is-warning">
  <h3>Here's what's going on</h3>
  <p>Here's some more detail about what's going on</p>
</div>
{% endexample %}
