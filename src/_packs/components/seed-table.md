---
title: Table
section: Component
source: https://github.com/helpscout/seed-table
seed-pack: seed-table
keywords: table
---

Table component pack for Seed

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Install

```
npm install seed-table --save
```


### Dependencies

* [seed-dash](/seed/packs/seed-dash)
* [seed-publish](/seed/packs/seed-publish)
* [seed-states](/seed/packs/seed-states)
* [seed-this](/seed/packs/seed-this)



---



## Example

{% example html %}
<table class="c-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Woody</td>
      <td>Cowboy</td>
      <td>@therealSheriffWoody</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Buzz Lightyear</td>
      <td>Space Ranger</td>
      <td>@Buzz14079395277</td>
    </tr>
  </tbody>
</table>
{% endexample %}



---



## Alignment

### Top

{% example %}
<table class="c-table c-table--top">
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td class="o-col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum ipsum diam, et consequat urna placerat nec. Duis nulla orci, semper eget dolor sit amet, mollis volutpat velit. Nunc ante velit, ultricies at cursus et, gravida vel tellus. Nam vel ligula dolor. Cras et erat vitae ex ornare laoreet sed vel mi.</td>
      <td class="o-col-5">I'm aligned to the top!</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--top">
  ...
</table>
```


### Middle

{% example %}
<table class="c-table c-table--middle">
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td class="o-col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum ipsum diam, et consequat urna placerat nec. Duis nulla orci, semper eget dolor sit amet, mollis volutpat velit. Nunc ante velit, ultricies at cursus et, gravida vel tellus. Nam vel ligula dolor. Cras et erat vitae ex ornare laoreet sed vel mi.</td>
      <td class="o-col-5">I'm aligned to the middle!</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--middle">
  ...
</table>
```


### Bottom

{% example %}
<table class="c-table c-table--bottom">
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td class="o-col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum ipsum diam, et consequat urna placerat nec. Duis nulla orci, semper eget dolor sit amet, mollis volutpat velit. Nunc ante velit, ultricies at cursus et, gravida vel tellus. Nam vel ligula dolor. Cras et erat vitae ex ornare laoreet sed vel mi.</td>
      <td class="o-col-5">I'm aligned to the bottom!</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--bottom">
  ...
</table>
```



---



## Sizes


### Small

{% example %}
<table class="c-table c-table--sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Woody</td>
      <td>Cowboy</td>
      <td>@therealSheriffWoody</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Buzz Lightyear</td>
      <td>Space Ranger</td>
      <td>@Buzz14079395277</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--sm">
  ...
</table>
```



### Extra Small

{% example %}
<table class="c-table c-table--xs">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Woody</td>
      <td>Cowboy</td>
      <td>@therealSheriffWoody</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Buzz Lightyear</td>
      <td>Space Ranger</td>
      <td>@Buzz14079395277</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--xs">
  ...
</table>
```



---



## Styles

Below are all the modifier styles that can be applied to `.c-table`. These modifiers can be combined or used on their own.


### Bordered
{% example %}
<table class="c-table c-table--bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Woody</td>
      <td>Cowboy</td>
      <td>@therealSheriffWoody</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Buzz Lightyear</td>
      <td>Space Ranger</td>
      <td>@Buzz14079395277</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--bordered">
  ...
</table>
```



### Hoverable
{% example %}
<table class="c-table c-table--hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Woody</td>
      <td>Cowboy</td>
      <td>@therealSheriffWoody</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Buzz Lightyear</td>
      <td>Space Ranger</td>
      <td>@Buzz14079395277</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--hover">
  ...
</table>
```



### Striped

{% example %}
<table class="c-table c-table--striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Woody</td>
      <td>Cowboy</td>
      <td>@therealSheriffWoody</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Buzz Lightyear</td>
      <td>Space Ranger</td>
      <td>@Buzz14079395277</td>
    </tr>
  </tbody>
</table>
{% endexample %}

```html
<table class="c-table c-table--striped">
  ...
</table>
```



---



## States

The following are [states](/seed/packs/seed-states/) that can be applied to table rows (`tr`) and/or individual table cells (`th`/`td`):

* `.is-error`
* `.is-info`
* `.is-success`
* `.is-warning`

{% example html %}
<table class="c-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr class="is-success">
      <th scope="row">1</th>
      <td>Woody</td>
      <td>Cowboy</td>
      <td>@therealSheriffWoody</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td class="is-error">Buzz Lightyear</td>
      <td class="is-info">Space Ranger</td>
      <td class="is-warning">@Buzz14079395277</td>
    </tr>
  </tbody>
</table>
{% endexample %}



---



## Responsive tables

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
  <table class="c-table">
    ...
  </table>
</div>
```


---



## Related

* [seed-list](/seed/packs/seed-list)
* [seed-responsive-wrapper](/seed/packs/seed-responsive-wrapper)
