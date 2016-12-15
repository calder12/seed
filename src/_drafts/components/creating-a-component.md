---
title: "Creating a component"
---

In this tutorial, we're going to be walking through the process of creating a simple CSS component from start to finish — **the Seed way**!


## Creating the components directory

Starting off with a typical `scss` setup:

```
scss/
└── main.scss
```

The first thing we need to do is create a directory for all of your components to live in. Having a designated directory makes it easier to add future components. It also makes it easy to find components when you need to make changes.

```
scss/
├── components/
└── main.scss
```

## Creating the component file

Now that we have our lovely `components` directory, we can add our first component file! For this tutorial, we're going to be creating a `badge` component!

```
scss/
├── components/
│   └── _badge.scss
└── main.scss
```

Seed follows the [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) naming convention all of it's classes. BEMIT specifies that component classes need to be prefixed with a `.c-` ("c" for component).

```_badge.scss
.c-badge {
}
```

Sweet! We have our badge class ready to go. The next step is to add some styles to make it look nice and pretty in the browser.

---

### A quick overview of component styles

A component's styles can be grouped into 3 different categories:

**Base**<br>
Responsible for styling the component.<br>
Example: `display: inline-block;`

**Modifiers**<br>
Extra classes used to adjust the default look/behaviour of the component.<br>
Example: `.c-badge--sm { … }`

**States**<br>
Similar to modifiers, but these help indicate that something has happened.<br>
Example: `.is-success { … }`

You will always need **base** styles. These are used to define how your component looks and functions. However, depending on how complex your component is, you may not need modifier or state styles. For this tutorial, we'll be writing all 3 types of styles for our badge.

---


```_badge.scss
.c-badge {
  background-color: #A5B2BD;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  padding: 4px 5px;
  text-transform: uppercase;
  vertical-align: middle;
}
```

Awesome! We've added some base styles to our badge component.


## Adding it to the main stylesheet

At this point, your final compiled `main.css` is empty. That's we haven't actually added our badge component to the `main` stylesheet yet! To do so, use Sass' `@import` to bring it in:

```main.scss
@import "./components/badge";
```


### Up next

Congrats! You've coded a Seedified CSS component. We can enhance this component by providing ways to **modify** our badge, such as making it bigger or small. That will be covered in our guide to <a href="#">adding modifiers to your component</a>.
