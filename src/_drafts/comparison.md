---
title: Comparing Seed with Other Frameworks
layout: docs
---

Seed has drawn a lot of inspiration from a handful of different frameworks.


## Bootstrap

[Bootstrap](http://getbootstrap.com/) shares many similarites with Seed. They both provide a library of components and classes to allow for users to quickly (and confidently) create and combine a variety of UI elements. The main differences are how each framework bundle their classes as well as how they name their classes.

### Installing

### Importing

### Class naming conventions

Bootstrap follows the [OOCSS](http://oocss.org/) (object-orientated CSS) naming convention. Each classname is responsible for a set of styles and is named according. Seed follows the [ITCSS](http://itcss.io/) (inverted-triangle CSS) naming convention. ITCSS is a more evolved form of OOCSS that groups classes based on responsibilities and labels them with the appropriate prefix.

Example of a button component:

```bootstrap.html
<button class="btn btn-primary btn-success">Button</button>
```

```seed.html
<button class="c-button c-button--primary is-success">Button</button>
```



---



## Tachyons

[Tachyons](http://tachyons.io/) and Seed offer classes as packages and leverage npm for managing and utilizes CSS styles.


### Installing

Both Tachyons and Seed classes can be installed using npm.

Tachyons:
```
npm install --save tachyons-display
```

Seed:
```
npm install --save seed-display
```

Tachyons styles are written with pure CSS (specifically CSS4). Seed is written with SCSS, but offers a compiled `.css` version, which can be found in the `/dist/` directory of the Seed pack repository.


### Compositional vs. pre-made classes

Tachyons relies on a combination of low-level CSS classes to construct UI elements. Whereas with Seed, certain components or UI elements come pre-constructed.

Example of a button component:

```tachyons.html
<a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Button Text</a>
```

```seed.html
<a class="c-button" href="#0">Button Text</a>
```


### Class naming conventions

The low-level styles of Tachyons follow the function/Atomic CSS approach, where each class is responsible a couple of styles.
