---
title: Responsive Wrapper
description: "Object class that provides horizontal scrolling when overflow occurs."
section: Object
layout: docs
source: https://github.com/helpscout/seed-responsive-wrapper
seed-pack: seed-responsive-wrapper
keywords: responsive, overflow, scrollbar
---

Responsive wrapper object pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-responsive-wrapper --save
```



### Dependencies

* [seed-publish](/seed/packs/seed-publish)



---



## Example

A horizontal scrollbar will automatically appear if content within a `.o-responsive-wrapper` is wider than it's parent container.

{% example %}
<div class="o-responsive-wrapper">
  <table class="c-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>
{% endexample %}

```html
<div class="o-responsive-wrapper">
  ...
</div>
```



----



## Related

* [seed-table](/seed/packs/seed-table)
