---
title: Props
description: "A function/mixin combo that provides callback-like functionality with Sass maps."
section: Mixin
layout: docs
source: https://github.com/helpscout/seed-props
seed-pack: seed-props
---

Props mixin pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-props --save
```

---


## About

`seed-props` is a function/mixin combo that provides callback-like functionality in Sass for maps. It is especially handy for iterating over large or complex maps.
Its design pattern is similar to [callback functions](https://en.wikipedia.org/wiki/Callback_(computer_programming)) found in other programming languages like Javascript.

```example.js
var stuffs = [1, 2, 3, 4];

// Iterating over the array and referencing it using a callback variable
stuffs.forEach(function(number) {
  // Doing something with the callback variable
  console.log(number);
});
```

This design pattern is extremely useful. Unfortunately, the ability to natively iterate and reference variables is not available in Sass. `seed-props` was designed to be a work around.


---

## Usage

### prop-map (Mixin)

**prop-map($map, (arguments…))**

The prop-map mixin allows you to loop through a map and use arguments as variables in your styles (@content).
You have to use the [prop() function](#prop-function) for your @content to utilize the arguments defined in your prop-map.

**$map**<br>
A sass [map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps).

**arguments…**<br>
Argument names to reference the `value` of the `key:value` pair in your `$map`.


`prop-map` uses the `key` of your `$map` as the newly generated class name (separated by a **single** hypen).

**Example**

```example.scss
// Our map of greetings
$greetings: (
  hello: green
);

// Autogenerating classes based on our greetings map
.greeting {
  @include prop-map($map, (color)) {
    color: prop(color);
  }
}
```

```example.css
.greeting-hello {
  color: green;
}
```



### prop (Function)

**prop($property)**

**$property**<br>
A sass [list](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists).

The `prop()` function works together within the [`prop-map` mixin](#prop-map-mixin). It cannot work on it's own.

The `prop()` function retrieves the property that is provided by the `(arguments…)` list by the `prop-map` mixin.

```example.scss
// Our map of greetings
$greetings: (
  hello: green
);

// Autogenerating classes based on our greetings map
.greeting {
  @include prop-map($map, (color)) { // Define color as the "callback" variable
    color: prop(color); // Retrieiving color
  }
}
```

```example.css
.greeting-hello {
  color: green;
}
```



---



## Examples


### Basic

In this example, we'll be iterating over the `$grid-columns` map to generate various grid column sizes.

```example.scss
$grid-columns: (
  1: 10%,
  2: 20%
  3: 30%
);

.col {
  @include prop-map($grid-columns, (width)) {
    width: prop(width);
  }
}
```

The generated grid classes use the `key` as the suffix for the `.col` class. The `prop()` function referenced the percentages in the map's values to be used as the width for each generated class.

```example.css
.col-1 {
  width: 10%; }

.col-2 {
  width: 20%; }

.col-3 {
  width: 20%; }
```



### Advanced

In this example, we want to generate a couple of buttons by iterating over the `$button-states` map, which contains styles for `background` and `border-color`.

```example.scss
$button-states: (
  success: (
    background: green,
    border-color: green),
  danger: (
    background: red,
    border-color: red)
);
```

We can do this by using the `prop-map` mixin and passing the arguments we want to reference from `$button-states`.

Because the mixin accepts `@content`, you can write additional styles. In this case, we'll be adding `color: white` to our buttons.

```example.scss
$button-states: (
  success: (
    background: green,
    border-color: green),
  danger: (
    background: red,
    border-color: red)
);

.button {
  @include prop-map($button-states, (background, border-color)) {
    background: prop(background);
    border-color: prop(border-color);
    color: white;
  }
}
```

The final generated buttons will have the appropriate `background` and `border-color` specified for each state.

``` example.css
.button-success {
  background: green;
  border-color: green;
  color: white; }

.button-danger {
  background: red;
  border-color: red;
  color: white; }
```



---



## Related

* [seed-breakpoints](/seed/packs/seed-breakpoints)
* [seed-dash](/seed/packs/seed-dash)
