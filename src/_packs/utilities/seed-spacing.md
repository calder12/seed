---
title: "Spacing"
description: "Utility classes that provide a range of margin and padding adjustment styles."
section: "Utility"
source: "https://github.com/helpscout/seed-spacing"
seed-pack: "seed-spacing"
keywords:
  - layout
  - margin
  - mrg
  - pad
  - padding
  - space
  - spacing
---

A series of utility classes that adjust the margin and padding property of a selector, with support for responsive modifiers.


## Install

```
npm install seed-spacing --save
```


### Dependencies

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-publish](/seed/packs/seed-publish)



---


## Usage

### Basic

`seed-spacing` provides a range of spacing utilities for both **margin** and **padding**.

**Use `mrg` for margins, and `pad` for padding.**

An example spacing utility class looks like this:

```
.u-mrg-5
```


| Characters | Description                 |
| ---        | ---                         |
| `u`        | prefix indicating "utility" |
| `mrg`      | margin                      |
| `5`        | size                        |


The above class will add a margin of `20px` in all directions when applied to a selector.

**Examples:**

{% example html %}
<div class="u-mrg-5">
  Wow! I magically have a margin of 20px all around me!
</div>
{% endexample %}

{% example html %}
<div class="u-pad-2">
  Oh snap! I magically have a padding of 8px all around me!
</div>
{% endexample %}


---


### Auto (margin only)

The following example is applicable only to margin utility classes.

```
.u-mrg-l-auto
```

| Characters | Description                 |
| ---        | ---                         |
| `u`        | prefix indicating "utility" |
| `mrg`      | margin                      |
| `l`        | left                        |
| `auto`     | auto margin                 |


---


### All directions

The following example is applicable to both padding and margin utility classes.

```
.u-mrg-5
```

| Characters | Description                 |
| ---        | ---                         |
| `u`        | prefix indicating "utility" |
| `mrg`      | margin                      |
| `5`        | size                        |


---


### Directional

The following example is applicable to both padding and margin utility classes.

See the list of [directional modifiers](/#directional-modifiers).

```
.u-mrg-t-5
```

| Characters | Description                 |
| ---        | ---                         |
| `u`        | prefix indicating "utility" |
| `mrg`      | margin                      |
| `t`        | top                         |
| `5`        | size                        |


---


### Responsive

The following example is applicable to both padding and margin utility classes.

See the list of [responsive modifiers](/seed/packs/seed-breakpoints/#responsive-modifiers).

```
.u-mrg-t-5@md
```


| Characters | Description                         |
| ---        | ---                                 |
| `u`        | prefix indicating "utility"         |
| `mrg`      | margin                              |
| `t`        | top                                 |
| `5`        | size                                |
| `@md`      | apply margin at the `md` breakpoint |


---


## Sizes

### px sizes

By default, `seed-spacing` provides a range of sizes `1-10` using a base of `4px`.


| Sizes | Value (px) |
| ---   | ---        |
| `0`   | 0          |
| `1`   | 4px        |
| `2`   | 8px        |
| `3`   | 12px       |
| `4`   | 16px       |
| `5`   | 20px       |
| `6`   | 24px       |
| `7`   | 28px       |
| `8`   | 32px       |
| `9`   | 36px       |
| `10`  | 40px       |


## Directional modifiers


| Modifier | Direction      |
| ---      | ---            |
|          | all            |
| `t`      | top            |
| `r`      | right          |
| `b`      | bottom         |
| `l`      | left           |
| `h`      | top and bottom |
| `v`      | left and right |



---



## Configurations

{% include docs/config.html config="seed-spacing" %}
