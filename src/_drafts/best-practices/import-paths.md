---
title: Import paths
---

**Protip**<br>
Notice the `./` in front of `components` in the import path? Technically, you can write it like this (and many people do):

```main.scss
@import "components/badge";
```

```scss
@import "components/badge";
```

However, this is **not** recommended because this path **assumes** that the `components/` directory is in the same folder level as your `main.scss`, whereas `./component/` is explicit as it indicates the nesting relationship of the folder. This little detail is extremely important for code clarity and scaling.

**Why is this important?**<br>
More advanced CSS code bases will often have several [`includePaths`](https://github.com/sass/node-sass#includepaths). Because of this, it is tricky to know where imports come from. A good `@import` pattern would be:

```scss
// Use relative paths when refering to files within your main CSS code base
@import "./components/card";
// Use non-relative paths when refering to files outside your CSS code base,
// such as vendor files or .scss files from node_modules/bower_components.
@import "components/card";
```

