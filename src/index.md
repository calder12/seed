---
title: Seed CSS
layout: generic
class: "s-hs-docs s-hs-index"
---

<div class="tx-center u-mrg-v-10 u-pad-t-5">
  <div class="tx-h4 tx-600">Seed</div>
  <div class="o-col-10@md o-col-offset-1@md">
    <p class="tx-h1 tx-300 tx-lh-heading">
      A modular CSS<br>framework that scales.
    </p>
  </div>
  <p class="tx-center u-mrg-b-5">
    <img src="/seed/images/seed.png" title="Seed" alt="Seed" width="200">
  </p>
  <p>
    <a href="#get-started" class="c-button c-button--lg">Get Started</a>
  </p>
  <p class="t-tx-charcoal-200">
    Docs is in progress. We're workin' on it!
  </p>
</div>



---



# Get Started

## Download the framework

Seed is available as a complete CSS framework and can be downloaded and used today!



### The super fast way

Download the compiled and minified CSS from [Github](https://github.com/helpscout/seed-framework):

<a href="https://github.com/helpscout/seed-framework/tree/master/dist" target="_blank" class="c-button">Download Seed Framework</a>

Once downloaded to your project, add it into your HTML:

```html
<link rel="stylesheet" href="/css/seed-framework.min.css">
```



### The slightly more complicated, but better way

Install via `npm`:

```shell
npm install seed-framework --save
```

Add it to your node-based workflow. The following example is using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seed = require('seed-framework');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seed
    }))
    .pipe(gulp.dest('./css'));
});
```

You can find more node workflow examples in our [Seed Pack quick start guide](/seed/guides/quick-start/seed-packs/#include).



---



## Download the Packs

One of Seed's key features is it's modularity. It's CSS code-based is available as individual self-contained ["Packs"](/seed/packs). In fact, the "framework" is just a [collection of Packs](https://github.com/helpscout/seed-framework/blob/master/package.json#L51).

<a href="/seed/packs" class="c-button">Check out Seed Packs</a>



---



# Why we created Seed

<p class="tx-lead">
Seed was CSS project created at <a href="https://helpscout.com" target="_blank">Help Scout</a> to improve how we wrote and managed our CSS code base.</P>

In addition to benefits you'd expect from a CSS solution or framework (such as components and general scalability), we needed something that was…

* Build-tool independent – not tied to something like Webpack or Gulp
* Intuitive and simple, allowing non-developers to build UI / page designs
* Re-usable across multiple applications/projects
* Small and self-contained – to be implemented piecemeal during the CSS refactor/migration process

The most important requirement would be for it to Allowed multiple folks to work on the **same CSS code** at the **same time**, across multiple Github branches across multiple on-going Pull requests (with minimal conflicts).


Thankfully, Seed was able to do all of those things for us and more! It's been implemented in our [Web app](https://secure.helpscout.net/), [Marketing website](https://helpscout.com), and our [Styleguide](https://style.helpscout.com). (And this site too!)



---



# About Seed


### It's got "Packs"

Seed's CSS code-base is written in [SCSS](http://sass-lang.com/) and is available as individual self-contained modules – we call them "[**Seed Packs**](/seed/packs/)".


### It's open source

Every single [Seed Pack](/seed/packs) as well as other Seed related node modules are completely open source!


### It's more than just code

Although Seed's modules are available for download and use, Seed is much more than just SCSS/CSS code. It is also a CSS architecture and design philosophy with a strong focus on flexibility, re-usability, and intuitiveness.




<div class="u-pad-v-5 u-mrg-b-3">
  <hr class="u-mrg-t-8">

  <div class="tx-right">
    <a href="#" class="t-tx-charcoal-200">Back to top</a>
  </div>
</div>
