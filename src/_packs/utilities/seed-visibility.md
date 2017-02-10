---
title: Visibility
description: "Utility classes that adjust the visibility styles of elements."
section: Utility
layout: docs
source: https://github.com/helpscout/seed-visibility
seed-pack: seed-visibility
keywords: visibility
---

Visibility utility pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-visibility --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---



## Usage

All of the following classes support **[responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers)**.

{% include docs/variables-table.html data=site.data.seed.seed-visibility.visibility %}



### Example

{% example html %}
<div class="u-invisible">
  I'm invisible!
</div>
<div class="u-invisible u-visible@lg">
  I'm visible! But only for larger displays.
</div>
{% endexample %}



---



## Screen readers

This technique is borrowed from [Bootstrap's screen reader](http://getbootstrap.com/css/#helper-classes-screen-readers) class. Textual content within the utility class of `.u-sr-only` is only available for screen readers.

{% example html %}
<div class="u-sr-only">Only screen readers can see this :)</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-visibility" %}



---



## Related

* [seed-display](/seed/packs/seed-display)
* [seed-opacity](/seed/packs/seed-opacity)
