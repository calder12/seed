---
title: "Alert"
description: "Component that provides contextual feedback for actions. Includes support for a variation of states."
section: Component
source: "https://github.com/helpscout/seed-alert"
seed-pack: "seed-alert"
keywords:
  - alert
  - status
---

A component that provides contextual feedback for actions. This component supports a wide range of context configurations that combine text, icons, buttons, and links.


## Install

```
npm install seed-alert --save
```


### Dependencies

* [seed-button](/seed/packs/seed-button)
* [seed-dash](/seed/packs/seed-dash)
* [seed-publish](/seed/packs/seed-publish)
* [seed-states](/seed/packs/seed-states)


---


## Example

Alerts support a wide variety of child selector types (`h1-h6`, `p`, `ul`, etc…) with any length of text.

{% example html %}
<div class="c-alert" role="alert">
  <h3>You, Are, A, Toyyy!</h3>
  <p>You're not the real thing. You're an action figure. You are a child's play thing!</p>
</div>
{% endexample %}



---



### Inner text color

To ensure the inner text color matches the alert color scheme, you can add the class `.c-alert__text`. This is useful to help override base text colors for headings (`h1-h6`) or lists (`ul`).

{% example %}
<div class="c-alert" role="alert">
  <h3>You, Are, A, Toyyy!</h3>
  <p class="c-alert__text">
    You're not the real thing. You're an action figure. You are a child's play thing!
  </p>
</div>
{% endexample %}

```html
<div class="c-alert" role="alert">
  <p class="c-alert__text">
    ...
  </p>
</div>
```



---



### Links

Links will automatically adapt the alert's base text color. Links will also be underlined by default to help better distinguish them from plain ol' text.

{% example %}
<div class="c-alert" role="alert">
  <h3>We stick together</h3>
  We stick together and can see it through. Cause <a href="https://www.youtube.com/watch?v=nMN4JZ8crVY" target="_blank">you've got a friend in me</a>.
</div>
{% endexample %}

```html
<div class="c-alert" role="alert">
  <a href="#">Link</a>
</div>
```



---



## States

Alerts comes with a handful of [color schemes](/seed/packs/seed-states) to represent states.

{% example %}
<div class="c-alert is-error" role="alert">
  <h3>You, Are, A, Toyyy!</h3>
  <p>You're not the real thing. You're an action figure. You are a child's play thing!</p>
</div>
<div class="c-alert is-info" role="alert">
  <h3>Buzz?</h3>
  <p>Buzz Lightyear, you're not worried are you?</p>
</div>
<div class="c-alert is-success" role="alert">
  <h3>Success!</h3>
  <p>That's not flying, that's just falling with style ;)</p>
</div>
<div class="c-alert is-warning" role="alert">
  <h3>Just a heads up</h3>
  <p>You my friend are responsible for delaying my rendezvous with star command!</p>
</div>
{% endexample %}

```html
<div class="c-alert is-error" role="alert">
  ...
</div>
<div class="c-alert is-info" role="alert">
  ...
</div>
<div class="c-alert is-success" role="alert">
  ...
</div>
<div class="c-alert is-warning" role="alert">
  ...
</div>
```



---



## Configurations


{% include docs/config.html config="seed-alert" %}
