---
title: "BEM"
description: "BEM is a CSS naming convention. It's an acronym that stands for Block, Element, Modifier."
---

[BEM](http://getbem.com/introduction/) is a CSS naming convention designed to emphasis relationships amongst CSS style rules.

It's an acronym that stands for:

<div class="tx-h2 u-mrg-t-5 u-mrg-b-8 t-tx-charcoal-200">
  <strong class="t-tx-charcoal-600">B</strong>lock
  <strong class="t-tx-charcoal-600">E</strong>lement
  <strong class="t-tx-charcoal-600">M</strong>odifier
</div>

Block, Element, and Modifier form the pattern the BEM convention uses for naming CSS rules.



## Naming

### Block

A Block is a top-level element, often a [component](/seed/glossary/component), that may contain sub-elements.

For example, let's try to visualize this using something from the real world. Imagine that we have a 🏠 House as our top-level element.

If we were to write that House as HTML, it may look like this:

```home.html
<div class="house">
  ...
</div>
```

The CSS for that house, may look like this:

```home.css
.house {
  ...
}
```

Houses have many rooms. But technically, it's up to you [how many rooms](https://www.youtube.com/watch?v=IueXtzdC6kA&feature=youtu.be&t=3m48s) your house my have. Rooms are like sub-elements of your House, which leds us to the "Element" part of B**E**M.


### Element

Elements (sub-elements) are things that belong to a Block (main-element). A Block can have many Elements, but Elements can only have one Block.

Just like how our imaginary House can have many rooms. For clarity, it's important to signify that these rooms **belong** that our House. With BEM, this is done using the double underscore naming convention.

```home.html
<div class="house">
  <div class="house__room">
  </div>
  <div class="house__room">
  </div>
  <div class="house__room">
  </div>
  <div class="house__room">
  </div>
</div>
```

```home.css
.house {
  ...
}
.house__room {
  ...
}
```

Awesome! We have a House with a bunch of rooms. But, not all rooms are the same! You may have a living room, a bathroom, a bedroom. Maybe multiple bedrooms. It's really [up to you how many bedrooms](https://www.youtube.com/watch?v=IueXtzdC6kA&feature=youtu.be&t=3m48s) your House has. It may even have an oven in it.

To distinguish between our rooms, we describe the with words like "bed" or "bath". With CSS and BEM, this is done with the "Modifier" part of BE**M**.


### Modifier

Modifiers adjust the styling of an element and can be applied to either Blocks or Elements. The Modifier are signified by using a double hyphen and are attached to the Block or Element they are modifying.

Let's add some Modifiers to the rooms in our imaginary House:

```home.html
<div class="house">
  <div class="house__room house__room--bath">
  </div>
  <div class="house__room house__room--bed">
  </div>
  <div class="house__room house__room--living">
  </div>
  <div class="house__room house__room--office">
  </div>
</div>
```

```home.css
.house {
  ...
}
.house__room {
  ...
}
.house__room--bath {
  ...
}
.house__room--bed {
  ...
}
.house__room--living {
  ...
}
.house__room--office {
  ...
}
```

Of course, Modifiers are limited to just Elements. They can be applied to Blocks as well! Like, what if we suddenly upgraded to a _super big_ house! (Take that neighbors).


```home.html
<div class="house house--super-big">
  <div class="house__room house__room--bath">
  </div>
  <div class="house__room house__room--bed">
  </div>
  <div class="house__room house__room--living">
  </div>
  <div class="house__room house__room--office">
  </div>
</div>
```

```home.css
.house {
  ...
}
.house--super-big {
  ...
}
.house__room {
  ...
}
.house__room--bath {
  ...
}
.house__room--bed {
  ...
}
.house__room--living {
  ...
}
.house__room--office {
  ...
}
```

Now you know the basics of BEM! There's quite a bit more that goes into this CSS naming convention. To learn more, check out their [official website](http://getbem.com/).



---



## See also

* [Components](/seed/glossary/components)
* [ITCSS](/seed/glossary/itcss)



---



## References

* [BEM](http://getbem.com/)
