---
title: "Dash"
description: "Functions that get, set, and extend Sass maps."
section: "Function"
source: "https://github.com/helpscout/seed-dash"
seed-pack: "seed-dash"
keywords:
  - array
  - dash
  - extend
  - functional
  - get
  - helper
  - library
  - list
  - lodash
  - map
  - maps
  - set
  - underscore
---


A tiny utility library with functions designed to make it easier to work with Sass lists and maps.


## Install

```
npm install seed-dash --save
```

---


## Usage

The Dash mixin pack consists of [mutator methods](https://en.wikipedia.org/wiki/Mutator_method) that make it easier to work with [lists](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) and [maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps).


### get

Gets the value(s) at the key of an object.

**_get($object, arguments...)**


| Argument     | Type       | Description                        |
| ---          | ---        | ---                                |
| `$object`    | List / Map | The object to query.               |
| `arguments…` | String     | The key(s) of the property to get. |


**Example: List**

```example.scss
$list: (red, blue, green);

.element {
  background: _get($list, red);
}
```

```example.css
.element {
  background: red;
}
```


**Example: Map (Simple)**

```example.scss
$map: (
  primary: red,
  secondary: blue
);

.element {
  background: _get($map, primary);
}
```

```example.css
.element {
  background: red;
}
```


**Example: Map (Deep)**
```example.scss
$map: (
  primary: (
    color: (
      background: red,
      border: black
    )
  ),
  secondary: (
    color: (
      background: blue,
      border: white
    )
  )
);

.element {
  background: _get($map, primary, color, background);
}
```

```example.css
.element {
  background: red;
}
```



---



### set

Sets the value(s) at the key of an object.

**_set($object, arguments...)**


| Argument     | Type       | Description                        |
| ---          | ---        | ---                                |
| `$object`    | List / Map | The object to query.               |
| `arguments…` | String     | The key(s) of the property to set. |


**Example: List**
```_example.scss
// Original list
$list: (red, blue, green);
// Adding a value to the list
$list: _set($list, yellow);

// Updated $list is now:
$list: (red, blue, green, yellow);
```


**Example: Map - Adding a new key**
```_example.scss
// Original map
$map: (
  a: 1,
  b: 2
);
// Adding a new key:value pair to the map
$map: _set($map, c, 3);

// Updated $map is now:
$map: (
  a: 1,
  b: 2,
  c: 3
);
```


**Example: Map - Updating an existing key**
```_example.scss
// Original map
$map: (
  a: 1,
  b: 2
);
// Updating an existing key:value pair to the map
$map: _set($map, b, 3);

// Updated $map is now:
$map: (
  a: 1,
  b: 3,
);
```


**Example: Deep Map - Setting a simple key**

```_example.scss
// Original map
$map: (
  primary: (
    color: (
      background: red,
      border: black
    )
  ),
  secondary: (
    color: (
      background: blue,
      border: white
    )
  )
);

// Adding a new key:value pair to the map
$map: _set($map, primary, color, background, blue);

// Updated $map is now:
$map: (
  primary: (
    color: (
      background: red,
      border: black
    )
  ),
  secondary: (
    color: (
      background: blue,
      border: white
    )
  )
);
```



---



### extend

Adds or updates values of an object;

**_extend($object, arguments...)**


| Argument     | Type       | Description                           |
| ---          | ---        | ---                                   |
| `$object`    | List / Map | The object to query.                  |
| `arguments…` | String     | The key(s) of the property to extend. |


**Example: List**
```example.scss
$list: (a, b);
$updated-list: (b, c, d);

// Update the original $list
$list: _extend($list, $updated-list);

// Updated $list is now:
$list: (a, b, c, d);
```


**Example: Map (Simple)**
```example.scss
$map: (
  a: 1,
  b: 2,
  c: 3
);

$updated-map: (
  c: 4,
  d: 5
);

// Update the original $map
$map: _extend($map, $updated-map);

// Updated $map is now
$map: (
  a: 1,
  b: 2,
  c: 4,
  d: 5
);
```


**Example: Map (Deep)**
```example.scss
$map: (
  primary: (
    color: (
      background: red,
      border: black
    )
  ),
  secondary: (
    color: (
      background: blue,
      border: white
    )
  )
);

$updated-map: (
  primary: (
    color: (
      background: pink,
      border: pink,
      box-shadow: 0 0 1px rgba(black, 0.2)
    )
  ),
  secondary: (
    color: (
      box-shadow: 0 0 1px rgba(black, 0.2)
    )
  )
);

// Update the original $map
$map: _extend($map, $updated-map);

// Updated $map is now
$map: (
  primary: (
    color: (
      background: pink,
      border: pink,
      box-shadow: 0 0 1px rgba(black, 0.2)
    )
  ),
  secondary: (
    color: (
      background: blue,
      border: white
      box-shadow: 0 0 1px rgba(black, 0.2)
    )
  )
);
```
