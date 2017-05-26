---
title: "Publish"
description: "Mixin that acts as an include guard, preventing undesired duplication of compiled CSS styles."
section: "Mixin"
source: "https://github.com/helpscout/seed-publish"
seed-pack: "seed-publish"
keywords:
  - exclude
  - export
  - guard
  - header
  - import
  - once
  - publish
---

A library that provides the ability to setup include guards, preventing undesired duplication of compiled CSS styles.


## Install

```
npm install seed-publish --save
```

---


## About

`seed-publish` is a mixin combo that acts as an "[include guard](https://en.wikipedia.org/wiki/Include_guard)" that prevents undesired duplicate CSS rendering. This can potentially occur from multiple uses of `@import` – a common design pattern in Seed CSS.

These mixins will likely be used **in the creation of Seed Packs**.


### Problem

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


### Workarounds

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

Rex, the lovable dinosaur from Disney Pixar's Toy Story, will be used to illustrate how `seed-publish`'s mixins can be used to customize the styles of a Rex CSS component.

<div class="tx-center u-mrg-v-8">
  <img src="/seed/images/examples/rex.jpg" width="300" />
</div>

### export

**export($name)** (Mixin)


| Argument | Type | Description |
| ---      | ---  | ---         |
| `$name`    | String  | The **unique name** of the module you want guarded/controlled. |
| `@content` | Content | The styles you want guarded/controlled.                        |


``` _rex.scss
// Dependencies
@import "pack/seed-publish/_index";

@include export(rex) {
  .rex {
    color: green;
  }
}
```

There is **no limit** on the number of times the `export` mixin can be used on a unique name. This is useful for controlling styles across multiple files.


``` _rex.scss
// Dependencies
@import "pack/seed-publish/_index";

@include export(rex) {
  .rex {
    color: green;
  }
}

@import "./battery";
```

``` _battery.scss
// Dependencies
@import "pack/seed-publish/_index";

@include export(rex) {
  .rex-battery {
    display: none;
  }
}
```

**Note**: You **cannot** use an `@import` inside the `export` mixin. That is because `export` uses a series of `@if` statements behind the scenes, and Sass does not allow for `@import` to be used within conditional statements. ([See above](/seed/packs/seed-publish/conditional-imports))



---



### publish

**publish($name)** (Mixin)


| Argument | Type | Description |
| ---      | ---  | ---         |
| `$name` | String | The **unique name** of the module you want published. |


Use the `publish` mixin when you have completed building your module/pack. This effectively blocks all rendering of CSS for the exported `$name` passed the point of publishing.

```_rex.scss
// Dependencies
@import "pack/seed-publish/_index";

@import "./rex";

// Publish
@include publish(rex);
```

```rex.css
.rex {
  color: green;
}
.rex-battery {
  display: none;
}
```

Regardless of how many times the files are imported (regardless of where they come from), they will not compile after the `publish` mixin has been used.

```_rex.scss
// Dependencies
@import "pack/seed-publish/_index";

@import "./rex";

// Publish
@include publish(rex);
// The following @import will not render because the content
// has already been published.
@import "./rex";
@import "./rex";
@import "./rex";
@import "./rex";
@import "./rex";
@import "./rex";
```

```rex.css
.rex {
  color: green;
}
.rex-battery {
  display: none;
}
```



---



### unload

**unload($names…)** (Mixin)

| Argument | Type | Description |
| ---      | ---  | ---         |
| `$names…` | String / List | The **unique name** of the module(s) you want ignored by `publish()`. |


Modules matching the name of the arguments passed into `unload()` will **not** render when CSS is compiled.


**Use case**

You want to use this brand new `rex-pack` in your Sass project (`rex-pack` doesn't really exist, but it would be cool if it did). `rex-pack` requires a handful of dependencies:

```
rex-pack
├── rex-figure-pack
│   ├── rex-head-pack
│   ├── rex-arms-pack
│   ├── rex-body-pack
│   ├── rex-leg-pack
│   └── rex-tail-pack
├── accessories-pack
└── battery-pack
```

For your setup, you want to use `rex-pack` **except** for `battery-pack`. At this point, you have two options:

1. Manually include all the individual packs that make up `rex-pack`.
2. Include `rex-pack`, and simply exclude `battery-pack`.

The #2 solution is what the `unload()` mixin was designed to accomplish!



``` _toys.scss
// Dependencies
@import "pack/seed-publish/_index";

// Step 1: Exclude packs
@include unload(battery);

// Step 2: @import the pack containing the excluded packs
@import "pack/rex/_index";

// styles within battery-pack will not be generated
```

The `unload` mixin accepts lists as well as nested lists:

``` _toys.scss
// Dependencies
@import "pack/seed-publish/_index";

// Step 1: Exclude packs
@include unload(
  accessories,
  battery,
  (
    arms,
    tail,
  )
);

// Step 2: @import the pack containing the excluded packs
@import "pack/rex/_index";

// styles within accessories, battery, arm, and tail packs will not be generated
```



---



### reload

**reload($names…)** (Mixin)


| Argument | Type | Description |
| ---      | ---  | ---         |
| `$names…` | String / List | The **unique name** of the module(s), that have been `unload()`, you want to re-enable for `publish()`. |


`reload()` exists as a way to provide finer grain control to when/where packs can be loaded.

In the [`unload()`](/seed/packs/seed-publish/#unload) example with the `battery` pack:

```_toys.scss
// Dependencies
@import "pack/seed-publish/_index";

// Step 1: Exclude packs
@include unload(battery);

// Step 2: @import the pack containing the excluded packs
@import "pack/rex/_index";

// styles within battery-pack will not be generated
```


Let's say that we actually **do** want sides to load, but we want it to load somewhere else in our Sass code. By using the `reload()` mixin, we can re-enable `publish()` to generate CSS for the specified pack.


```_toys.scss
// Dependencies
@import "pack/seed-publish/_index";

// Previously excluded (unloaded) battery
@include unload(battery);

...

// Step 1: Re-include packs
@include reload(battery);

// Step 2: @import the pack containing the previously excluded packs
@import "pack/rex/_index";

// styles within battery-pack will be generated,
// even though they have been previously excluded.
```



---



## Related

* [seed-dash](/seed/packs/seed-dash)
* [seed-props](/seed/packs/seed-props)
