---
title: Horizontal rule
section: Components
source: https://github.com/helpscout/seed-hr
seed-pack: seed-hr
---

Horizontal rule component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-hr --save
```


## Dependencies

* [seed-publish](/seed/packs/seed-publish)



---


## Usage

Once the pack has been `@import`, the `seed-hr` styles will automatically be added to the base `<hr>` HTML component.

{% example html %}
<hr>
{% endexample %}

You may also used the `.c-hr` component class to style your `<hr>` or another selector.
{% example html %}
<hr class="c-hr">
<div class="c-hr"></div>
{% endexample %}
