---
title: Family
section: Mixins
layout: docs
source: https://github.com/helpscout/seed-family
seed-pack: seed-family
---

Selector-based mixin pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-family --save
```

---



## About

`seed-family` is a pack that offers mixins that manipulate parent or sibling selectors. Because of how CSS works, it's (currently) not possible to target parent selectors or classes in any way.

This use-case doesn't occur very often, but it's not too uncommon either.

### The problem

Take the following CSS for a menu component (structured with the BEM convention).

``` _menu.scss
.menu {
  // styles

  &__item {
    display: none;
  }
}
```

### The workaround

The `.menu__item` is hidden with `display: none` by default. We want it to be `display: block` when the `.menu.is-active`.

We currently have to write it like this:

``` _menu.scss
.menu {
  // styles

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

### The ideal

Wouldn't it be nice if we could write something like this?

``` _menu.scss
.menu {
  // styles

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

**$selector**<br>
Type: `string`<br>
Description: The desired parent class/selector.

We can write our menu styles similarly to our ["ideal"](#the-ideal) example.

``` _menu.scss
.menu {
  // styles

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

In this example, `&` still references `.menu`. That is because it's direct parent selector is `.menu`, unlike our [workaround](/#the-workaround) example.

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

**$selector**<br>
Type: `string`<br>
Description: The desired parent class/selector.

In CSS, we can target the sibling selector that comes **after**, but **not before**. The `sibling` mixin allows you to reference the sibling selector the comes before your current selector.

``` _menu.scss
.menu {
  // styles

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
