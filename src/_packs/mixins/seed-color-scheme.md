---
title: "Color scheme"
description: "A mixin that defines and manages a Sass color scheme configuration."
section: "Mixin"
source: "https://github.com/helpscout/seed-color-scheme"
seed-pack: "seed-color-scheme"
keywords:
  - color
  - mixin
  - scheme
  - system
  - variable
---

A library allows you to define variable-based color palettes. This Sass mixin/functoin combo helps improve consistency and maintainability of color variables.


## Install

```
npm install seed-color-scheme --save
```

---



### Problem

The current convention is to store all color variables in a variables file, which looks like this:

```_variables.scss
$blue: #3197D6;
$light-blue: #DAF1FF;
$dark-blue: #1F5E89;
$darkest-blue: #143D57;

$hero-background: $blue;
$secondary-nav-background: $dark-blue;
```

Things start to get messy when your color palette grows and when you create variables to reference color variables (e.g. `$hero-background`).


### Solution

We believe the best way to organize your colors is to use a Sass [map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps):

```_colors.scss
// Create our color scheme map
$colors: (
  blue: (
    default: #3197D6,
    light: #DAF1FF,
    dark: #1F5E89,
    darkest: #143D57
  )
);
```

Now we just need a way to access the color value to use it in our styles. The `seed-color-scheme` function/mixin combo makes it easy!

```_colors.scss
// Import the seed-color-scheme pack
@import "pack/seed-color-scheme/_index";

// Create our color scheme map
$colors: (
  blue: (
    default: #3197D6,
    light: #DAF1FF,
    dark: #1F5E89,
    darkest: #143D57
  )
);

// Create the color scheme
@include _color($colors);

// Use the color
.hero {
  background: _color(blue, default);
}
```



---



## Usage

The color scheming system requires using both the `_color` mixin and function to work. The mixin registers the color maps (regular Sass maps) into the global color scheme configuration. The function retrieves the color value from the global color scheme configuration.


### _color (Function)

**_color(arguments…)**

| Argument | Type | Description |
| ---      | ---  | ---         |
| `arguments…` | String | Comma separated string values that correspond to the color scheme map. |

```_example.scss
.element {
  background: _color(blue, primary);
  color: _color(text, light);
}
```

Note: The `_color` function can only get colors adding to the color scheme via the `@include _color` mixin.



### _color (Mixin)

**_color($map)**

| Argument | Type | Description |
| ---      | ---  | ---         |
| `$map` | Map | A Sass map consisting of color values. Nested maps are allowed. |


```_example.scss
// Create the custom color map
$my-colors: (
  brand: (
    primary: (
      red: red,
      blue: blue
    ),
    secondary: (
      yellow: yellow
    )
  ),
  text: black,
  link: purple
);

// Adding it to the color scheme
@include _color($my-colors);
```

Note: Colors are only accessibile to the `_color` function after it's been added to the color scheme via the `@include _color` mixin.



---



### Defaults

If a key of `default` is defined for a map within your color scheme, the `_color()` function will default to it if no additional key argument is provided.

```_example.scss
// Create the custom color map
$my-colors: (
  primary: (
    default: pink,
    red: red,
    blue: blue
  ),
);

// Adding it to the color scheme
@include _color($my-colors);

.element {
  color: _color(primary); // Will output pink, as it is defined as "default"
}
```

```_example.css
.element {
  color: pink;
}
```



---



## Namespacing

It is **recommended** that you namespace your color scheme when defining it with `_color()`. This is to prevent potential overrides with color schemes being defined by external Seed Packs or modules.

```app.scss
// Import the color scheme mixin
@import "pack/seed-color-scheme/_index";

// Namespace your color scheme. In this example, we're using "app"
$color-scheme: (
  app: (
    background: #f3f3f3,
  ),
);

// Set the color scheme
@include _color($color-scheme);


// Use your color scheme
html {
  backgrond: _color(app, background);
}
```




---



## Configurations

Since update [v0.1.0](https://github.com/helpscout/seed-color-scheme/releases/tag/v0.1.0), `seed-color-scheme` adds a default color scheme from [`seed-color-scheme-helpscout`](/seed/packs/seed-color-scheme-helpscout) as well as some default namespaces.

{% include docs/config.html config="seed-color-scheme" %}



---



## Related

* [seed-color-scheme-helpscout](/seed/packs/seed-color-scheme-helpscout)
* [seed-dash](/seed/packs/seed-dash)
