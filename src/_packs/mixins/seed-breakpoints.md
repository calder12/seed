---
title: Breakpoints
description: "A collection of mixins that work with CSS media queries."
section: Mixin
layout: docs
source: https://github.com/helpscout/seed-breakpoints
seed-pack: seed-breakpoints
---

Breakpoints (media query) mixin pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-breakpoints --save
```



### Dependencies

* [seed-props](/seed/packs/seed-props)


---

{% capture mixin_sizes %}
Type: `size` / `number`

See a list of the default [breakpoint sizes](#breakpoint-sizes).

Alternatively, you can pass a number value such as `580px`, `48em`, or `32rem`.
{% endcapture %}
{% assign mixin_sizes = mixin_sizes | markdownify %}


## Basic mixins

The basic mixins of `seed-breakpoints` are typically used to customize the responsive behavior for CSS classes.

### breakpoint

**breakpoint($size)**

``` example.scss
.element {
  @include breakpoint(md) {
    background: red;
  }
}
```

``` example.css
@media (min-width: 544px) {
  .element {
    background: red;
  }
}
```

**$size**
<br>
{{ mixin_sizes }}


---


### breakpoint-between

**breakpoint-between($min, $max)**


``` example.scss
.element {
  @include breakpoint-between(md, lg) {
    background: red;
  }
}
```

``` example.css
@media (min-width: 544px) and (max-width: 768px) {
  .element {
    background: red;
  }
}
```

**$min, $max**
<br>
{{ mixin_sizes }}


---


### breakpoint-max

**breakpoint-max($size)**

``` example.scss
.element {
  @include breakpoint-max(md) {
    background: red;
  }
}
```

``` example.css
@media (max-width: 768px) {
  .element {
    background: red;
  }
}
```

**$size**
<br>
{{ mixin_sizes }}


---


### breakpoint-min

**breakpoint-min($size)**

``` example.scss
.element {
  @include breakpoint-min(md) {
    background: red;
  }
}
```

``` example.css
@media (min-width: 768px) {
  .element {
    background: red;
  }
}
```

**$size**
<br>
{{ mixin_sizes }}


---


## Advanced mixins

The advanced mixins of `seed-breakpoints` are typically used to automatically generate a series of classes that respond to the various [breakpoint sizes](#breakpoint-sizes).

### breakpoint-all

**breakpoint-all()**

``` example.scss
.element {
  @include breakpoint-all() {
    background: red;
  }
}
```

``` example.css
.element {
  background: red;
}
@media (min-width: 544px) {
  .element\@sm {
    background: red;
  }
}
@media (min-width: 768px) {
  .element\@md {
    background: red;
  }
}
@media (min-width: 992px) {
  .element\@lg {
    background: red;
  }
}
```

This mixin loops through all the [breakpoint sizes](#breakpoint-sizes) to generate the given `@content` of a selector. It also automatically includes the appropriate breakpoint modifiers.

Note: There is a `\` added before the `@` symbol to validate the CSS class name. When the generated classes are used in markup, you can simply write `.element@md` without the `\`.


---


### breakpoint-prop-map

**breakpoint-prop-map($map, $properties)**

``` example.scss
$states: (
  error: red,
  success: green
);

.alert {
  @include breakpoint-prop-map($states, (color)) {
    background: prop(color);
  }
}
```

``` example.css
.element-error {
  background: red;
}
.element-success {
  background: green;
}
@media (min-width: 544px) {
  .element-error\@sm {
    background: red;
  }
  .element-success\@sm {
    background: red;
  }
}
@media (min-width: 768px) {
  .element-error\@md {
    background: red;
  }
  .element-success\@md {
    background: green;
  }
}
@media (min-width: 992px) {
  .element-error\@lg {
    background: red;
  }
  .element-success\@lg {
    background: green;
  }
}
```

**$map**
<br>
Type: [`map`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) (Required)

**$properties**
<br>
Type: [`list`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) (Required)

This mixin combines the functionality of [breakpoint-all()](#breakpoint-all) and [prop-map()](/seed/mixins/seed-prop) to generate the `@content` of all the various [breakpoint sizes](#breakpoint-sizes) while looping through the provided `$map`.

Here is a real world example of this mixin being used in the [seed-display](/seed/utilities/display) pack:

* [the map (scss)](https://github.com/helpscout/seed-display/blob/master/scss/pack/seed-display/_config.scss#L7)
* [breakpoint-prop-map (scss)](https://github.com/helpscout/seed-display/blob/master/scss/pack/seed-display/utilities/_display.scss#L7)
* [output (css)](https://github.com/helpscout/seed-display/blob/master/dist/seed-display.css#L6)


---


## Breakpoint sizes

By default, `seed-breakpoints` comes with 5 breakpoints with values borrowed from [Bootstrap V4's grid system](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L126). These values can be modified by adjusting the [$seed-breakpoints map](https://github.com/helpscout/seed-breakpoints/blob/master/scss/pack/seed-breakpoints/_config.scss#L7) in your project.

{% include docs/variables-table.html data=site.data.seed.seed-breakpoints.sizes %}



---



## Responsive modifiers

CSS classes generated with mixins such as [breakpoint-all()](#breakpoint-all) or [breakpoint-prop-map()](#breakpoint-prop-map), `seed-breakpoints` automatically receive an `@<breakpoint>` suffix. This follows the naming convention established by [ITCSS](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/#responsive-suffixes) as well as the design principles of [mobile first](http://www.lukew.com/resources/mobile_first.asp).

It starts with no suffix as for mobile viewports. It then works it's way up from `@sm` - `@lg` to handle smaller viewports (Phablets)  to larger viewports (Desktops).

{% include docs/variables-table.html data=site.data.seed.seed-breakpoints.breakpoints %}


**Example**
The `<h1>` starts off with a default (mobile) size of `tx-h5` (specified by a heading class from [seed-typography](/seed/type/seed-typography/#headings)). As the viewport increases, the font size also increases as specified by the additional heading sizes with `@` breakpoint classes.

{% example html %}
<h1 class="tx-h5 tx-h4@sm tx-h3@md tx-h1@lg">
  Resize your browser, and watch me shrink/grow!
</h1>
{% endexample %}


---


## Related

* [seed-grid](/seed/packs/seed-grid)