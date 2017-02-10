---
title: Link
description: "Component that provides styling for links."
section: Component
source: https://github.com/helpscout/seed-link
seed-pack: seed-link
keywords: link, a
---

Link component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-link --save
```


## Dependencies

* [seed-publish](/seed/packs/seed-publish)



---


## Usage

Once the pack has been `@import`, the `seed-link` styles will automatically be added to the base `<a>` HTML component.

{% example html %}
<a href="#">Link</a>
{% endexample %}

You may also used the `.c-link` component class to style your `<a>` or another selector.
{% example html %}
<a class="c-link" href="#">Actual Link</a>
<button class="c-link">Button Link</button>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-link" %}
