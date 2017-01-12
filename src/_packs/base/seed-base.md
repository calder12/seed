---
title: Base
description: "Low-level styles that target base elements and selectors."
section: Base
source: https://github.com/helpscout/seed-base
seed-pack: seed-base
keywords: base
---

Base styles pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-base --save
```


### Dependencies

* [seed-publish](/seed/packs/seed-publish)



---



## Usage

It is recommended that `seed-base` be imported as near to the top of your SCSS as possible, but placed **after** [reset styles](/seed/packs/seed-reset).

```main.scss
// Reset
@import "pack/seed-reset/_index";
// Base
@import "pack/seed-base/_index";

// Everything else
@import "./components/alert";
@import "./components/button";
// etc…
```



---



## Related

* [seed-reset](/seed/packs/seed-reset)
