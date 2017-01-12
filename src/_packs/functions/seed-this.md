---
title: This
description: "A function that reliably gets the current working selector."
section: Function
layout: docs
source: https://github.com/helpscout/seed-this
seed-pack: seed-this
---

Selected-based function pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-this --save
```

---



## About

The `this()` function was inspired by the `$this/self` coding patterns seen in jQuery/Javascript. It's a simple (and reliable) way to reference your current selector.

An example of the `$this` variable pattern can be seen in this bit of jQuery code:

```example.js
$('.menu-items').each(function() {
  var $this = $(this);
  if ($this.hasClass('old')) {
    $this.hide();
  }
  else {
    $this.addClass('active');
  }
});
```


### The problem

With native Sass, we have to rely on `&` to reference the current selector. Although `&` does reference the current selector, it also references all the selectors that come before it. It also doesn't allow you to re-use the same selector again in recursive nesting situations (e.g. a `.menu` within a `.menu`).

In the following bit of Sass, we're attemping to keep our code DRY by referencing `.menu` by using `&`:

```example.scss
.nav {
  .menu {
    background: blue;

    & {
      margin-left: 10px;
    }
  }
}
```

The ideal (and maybe expected) CSS should look like this:
```example.css
.nav .menu {
  background: blue;
}
.nav .menu .menu {
  margin-left: 10px;
}
```

But what we actually get is this:
```example.css
.nav .menu {
  background: blue;
}
.nav .menu {
  margin-left: 10px;
}
```

### The work-around

A common work-aroud to this issue is to variablize `&` and use the variable as your selector (similar to jQuery's `$this` or `$self`):

```example.scss
.nav {
  .menu {
    $this: &;
    background: blue;

    #{$this} {
      margin-left: 10px;
    }
  }
}
```

However, this **only works** if the selector that `&` is refering to is one level deep. Because `.menu` is nested under `.nav`, the compiled CSS results in a doubling of `.nav .menu`:

```example.css
.nav .menu {
  background: blue; }

.nav .menu .nav .menu {
  margin-left: 10px; }
```

### The solution

Using the `this()` function instead of `&` will give us the results we want:

```example.scss
.nav {
  .menu {
    $this: this(); // Replace & with this()
    background: blue;

    #{$this} {
      margin-left: 10px;
    }
  }
}
```

```example.css
.nav .menu {
  background: blue; }

.nav .menu .menu {
  margin-left: 10px; }
```



---



## Usage

### this

Reliably gets the most current selector.

**this()**
<br>
Returns: A selector (e.g. `.menu`)

**Example**

```example.scss
.nav {
  .menu {
    $this: this(); // Replace & with this()
    background: blue;

    #{$this} {
      margin-left: 10px;
    }
  }
}
```

```example.css
.nav .menu {
  background: blue; }

.nav .menu .menu {
  margin-left: 10px; }
```



---



## Related

* [seed-family](/seed/packs/seed-family)
