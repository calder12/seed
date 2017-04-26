---
title: "Family"
description: "Mixins that enable manipulation of parent or sibling selectors."
section: "Mixin"
source: "https://github.com/helpscout/seed-family"
seed-pack: "seed-family"
keywords:
  - family
  - parent
  - selector
  - sibling
---


A library of mixins that enable manipulation of a selector based on it's relationship with parent or sibling selectors.


## Install

```
npm install seed-family --save
```

---



## About

Because of how CSS works, it's (currently) not possible to create rules based on the target's parent selectors or previous sibling classes in any way. This pack aims to help resolve these issues.

This use-case doesn't occur very often, but it's not too uncommon either.

### Problem

Take the following CSS for a menu component (structured with the BEM convention).

``` _menu.scss
.menu {
  &__item {
    display: none;
  }
}
```

### Workarounds

The `.menu__item` is hidden with `display: none` by default. We want it to be `display: block` when the `.menu.is-active`.

We currently have to write it like this:

``` _menu.scss
.menu {
  &__item {
    display: none;
  }

  &.is-active {
    .menu__item {
      display: block;
    }
  }
}
```

The class of `.menu__item` is repeated. Not to mention that `.menu__item` no longer manages its own styles, but instead, they are abstracted and dicated by `.menu`. What's worse is that `&` no longer references `.menu` in the context of `&.is-active` (but that's a separate issue).

### Ideal

Wouldn't it be nice if we could write something like this?

``` _menu.scss
.menu {
  &__item {
    display: none;

    :parent.is-active {
      display: block;
    }
  }
}
```

When the parent, in this case `.menu`, has the `.is-active` class, change the display of `.menu__item`.



---



## Mixins

### parent

**parent($selector)**


| Argument    | Type   | Description                            |
| ---         | ---    | ---                                    |
| `$selector` | String | The desired parent selector to target. |


We can write our menu styles similarly to our ["ideal"](#ideal) example.

``` _menu.scss
.menu {
  &__item {
    display: none;

    @include parent("#{&}.is-active") {
      display: block;
    }
  }
}
```

``` menu.css
.menu__item {
  display: none;
}

.menu.is-active .menu__item {
  display: block;
}
```

The `parent` mixin intelligently injects the provided `$selector` directly before the current selector.

The magic happens with this line:

```scss
@include parent("{&}.is-active") {
```

Let's break it down:

* `@include parent` - Activating the `parent` mixin.
* `"{&}.is-active"` - The parent selector + the `.is-active` class.

In this example, `&` still references `.menu`. That is because it's direct parent selector is `.menu`, unlike our [workaround](/#workarounds) example.

```scss
.menu {
  // & = .menu
}
```

```scss
.menu {
  &.is-active {
    // & = .menu.is-active
  }
}
```



### sibling

**sibling($selector)**

| Argument    | Type   | Description                             |
| ---         | ---    | ---                                     |
| `$selector` | String | The desired sibling selector to target. |

In CSS, we can target the sibling selector that comes **after**, but **not before**. The `sibling` mixin allows you to reference the sibling selector the comes before your current selector.

``` _menu.scss
.menu {
  &__item {
    margin-top: 0;

    @include sibling("#{&}__sub-menu") {
      margin-top: 10px;
    }
  }
}
```

``` menu.css
.menu__item {
  margin-top: 0;
}

.menu__sub-menu + .menu__item {
  margin-top: 10px;
}
```



---



## Related

* [seed-this](/seed/packs/seed-this)
