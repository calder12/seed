---
title: Publish
description: "Mixin that acts as an include guard, preventing undesired duplication of compiled CSS styles."
section: Mixin
layout: docs
source: https://github.com/helpscout/seed-publish
seed-pack: seed-publish
---

Mixins that manage rendered CSS from modular importing

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-publish --save
```

---


## About

`seed-publish` is a mixin combo that acts as an "[include guard](https://en.wikipedia.org/wiki/Include_guard)" that prevents undesired duplicate CSS rendering. This can potentially occur from multiple uses of `@import` – a common design pattern in Seed CSS.

These mixins will likely be used **exclusively in the creation of seed packs**.


### The problem

Leveraging existing styles is fundamental to the scalable CSS. Let's pretend we have this amazing `.box` component pack:

```pack/box/__index.scss
.box {
  padding: 20px;
}
```

Next, we want to create another component pack that uses our existing `.box` component pack:

```pack/menu/__index.scss
// Add in dependency styles
@import "pack/box/_index";
// Create our menu component
.menu {
  background: blue;

  .box {
    background: red;
  }
}
```

Finally, in our main project, we want to use both!

```project.scss
// Components
@import "pack/box/_index";
@import "pack/menu/_index";
```

However, because our `menu` component already imported our `box` component, the resulting CSS will be double box component:
```project.css
.box {
  padding: 20px;
}
.box {
  padding: 20px;
}
.menu {
  background: blue;
}
.menu .box {
  background: red;
}
```


### The workarounds

We **could** just omit importing of `box` in our `menu` component pack. But this means that the pack is incomplete, and it is up to the project importing it to provide the missing styles.

Alternatively, we **could** omit importing of the `box` component pack in our `project.scss`. But that also isn't very good because there's this slightly mysterious layer of abstraction that we have little to no control over.

These issues compound as we create or import more complicated components that, like our `menu` component, have multiple dependencies.

**We need something to control these imports**.

Which is what `seed-publish` aims to solve.


### Conditional imports

You **cannot** use `@import` inside of directives with Sass (which is what the condition `@if/@else` methods are). This has been a [reported issue](https://github.com/sass/sass/issues/739) (and heavily requested feature) with Sass since **2013**. The core team have stated that they are working in a new `@import` method in the next version of Sass, but there is no word on when that may be coming.

Conditional imports were accidentally working in [v3.4.2 of Node Sass](https://github.com/sass/node-sass/releases/tag/v3.4.2), but that has since been patched.



----



## Mixins

### export

**export($name)**

**$name**<br>
Type: `string`<br>
Description: The unique name of the module you want controlled.
Content: The styles you want controlled.

``` _menu.scss
// Dependencies
@import "pack/seed-publish/_index";

@include export(my-awesome-menu) {
  .menu {
    background: blue;
  }
}
```

There is **no limit** on the number of times the `export` mixin can be used on a unique name. This is useful for controlling styles across multiple files.


``` _menu.scss
// Dependencies
@import "pack/seed-publish/_index";

@include export(my-awesome-menu) {
  .menu {
    background: blue;
  }
}

@import "./menu-item";
```

``` _menu-item.scss
// Dependencies
@import "pack/seed-publish/_index";

@include export(my-awesome-menu) {
  .menu-item {
    display: block;
  }
}
```

**Note**: You **cannot** use an `@import` inside the `export` mixin. That is because `export` uses a series of `@if` statements behind the scenes, and Sass does not allow for `@import` to be used within conditional statements. ([See above](/seed/packs/seed-publish/conditional-imports))



### publish

**publish($name)**

**$name**<br>
Type: `string`<br>
Description: The unique name of the module you want controlled.

Use the `publish` mixin when you have completed building your module/pack. This effectively blocks all rendering of CSS for the exported `$name` passed the point of publishing.

```_awesome-menu.scss
// Dependencies
@import "pack/seed-publish/_index";

@import "./menu";

// Publish
@include publish(my-awesome-menu);
```

```awesome-menu.css
.menu {
  background: blue;
}
.menu-item {
  display: block;
}
```

Regardless of how many times the files are imported (regardless of where they come from), they will not compile after the `publish` mixin has been used.

```_awesome-menu.scss
// Dependencies
@import "pack/seed-publish/_index";

@import "./menu";

// Publish
@include publish(my-awesome-menu);
// The following @import will not render because the content
// has already been published.
@import "./menu";
@import "./menu";
@import "./menu";
@import "./menu";
@import "./menu";
@import "./menu";
```

```awesome-menu.css
.menu {
  background: blue;
}
.menu-item {
  display: block;
}
```



---



## Related

* [seed-exclude](/seed/packs/seed-exclude)
