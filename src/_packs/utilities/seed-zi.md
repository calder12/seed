---
title: "Z-Index"
description: "Utility classes that provide a range of z-index values."
section: "Utility"
source: "https://github.com/helpscout/seed-zi"
seed-pack: "seed-zi"
keywords:
  - layer
  - z
  - z-index
  - zindex
---

A series of utility classes that adjust the z-index property of a selector.


## Install

```
npm install seed-zi --save
```


### Dependencies

 [seed-publish](/seed/packs/seed-publish)



---



## Usage


| Class           | Z-index |
| ---             | ---     |
| `.u-zi-inherit` | inherit |
| `.u-zi-initial` | initial |
| `.u-zi-unset`   | unset   |
| `.u-zi-hidden`  | -1      |
| `.u-zi-0`       | 0       |
| `.u-zi-1`       | 1       |
| `.u-zi-2`       | 2       |
| `.u-zi-3`       | 3       |
| `.u-zi-5`       | 5       |
| `.u-zi-10`      | 10      |
| `.u-zi-100`     | 100     |
| `.u-zi-200`     | 200     |
| `.u-zi-1000`    | 1000    |
| `.u-zi-max`     | 9999999 |


### Example

{% example html %}
<div class="u-pos-relative u-zi-1">
  I have a z-index of 1
</div>
<div class="u-pos-relative u-zi-10">
  I have a z-index of 10!
</div>
{% endexample %}



---



## Configurations

{% include docs/config.html config="seed-zi" %}



---



## Related

* [seed-position](/seed/packs/seed-position)
