---
title: "Quick start guide: Seed packs (CSS Modules)"
---

This guide will help you get started with Seed CSS. It will walk you through how you can easily load modularized CSS from our collection of pre-made Seed packs.

Note: This guide will be focusing on a Node based CSS compiling workflow (specifically node-sass, gulp, and grunt). A little bit of knowledge and experience with these workflows will be extremely useful in following along.



---


Getting setup with Seed packs can be thought of in 3 steps (the **"three I's"** if you will):

**Install**: Download the CSS modules (Seed packs) from npm

**Include**: Setup the packs with your Sass workflow

**Import**: Adding the packs into your Sass code base


---


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}



## 1. Install

Seed's CSS modules live on and are managed by [npm](https://www.npmjs.com/) (Node's package manager). If you're workflow already has a `package.json` file, then you're ready to start adding some [Seed packs](/seed/packs)!

For this guide, we're going to be installing [`seed-button`](/seed/packs/seed-button), [`seed-input`](/seed/packs/seed-input), and [`seed-reset`](/seed/packs/seed-reset).

Run the following command in your command line:

```
npm install --save seed-button seed-input seed-reset
```

This will fetch and install all three Seed packs to your local development environment.

If you take a look at your `package.json` under `dependencies`, you will see the Seed packs and their latest versions:

```package.json
"dependencies": {
  "seed-button": "^0.1.10",
  "seed-input": "0.0.3",
  "seed-reset": "^0.1.1"
}
```

(Note: Your Seed pack versions may be different than the ones above)


## 2. Include

After downloading our Seed packs, we have to update our Sass build process be able to locate our packs. To make this process **super** easy (almost magically easy), we've created a node module called **[seed-harvester](https://github.com/helpscout/seed-harvester)**. It automatically finds and adds the paths to your Sass compiler.


To install `seed-harvester`, run the following command in your command line:

```
npm install seed-harvester --save-dev
```

Next, open add the `seed-harvester` module to your Sass compiler script(s). Below are some examples of how to do it for various node-based SCSS workflows:

* [Gulp](#gulp)
* [Grunt](#grunt)
* [Node Sass](#node-sass)


### Gulp

Below is a simple example config for [Gulp](http://gulpjs.com/):

```gulpfile.js
// Require gulp things
var gulp = require('gulp');
var sass = require('gulp-sass');
// Add seed-harvester
var harvester = require('seed-harvester');
// Automatically find Seed packs
var paths = harvester(
// You can add your own paths here, example:
// '/app/src/scss/'
);

// Build the CSS
gulp.task('styles', function() {
  return gulp.src('./scss/main.scss')
    .pipe(sass({
      includePaths: paths
    }))
    .pipe(gulp.dest('./dist'));
});
```


### Grunt

Below is a simple example config for [Grunt](http://gruntjs.com/):

```Gruntfile.js
// Add seed-harvester
var harvester = require('seed-harvester');
// Automatically find Seed packs
var paths = harvester(
  // You can add your own paths here, example:
  // '/app/src/scss/'
);

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        includePaths: paths
      }
    },
    dist: {
      files: {
        'main.css': 'main.scss'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default',['sass']);
}
```


### Node Sass

Below is a simple example script for [node-sass](https://github.com/sass/node-sass):

```build-sass.js
var sass = require('node-sass');
// Add seed-harvester
var harvester = require('seed-harvester');
// Automatically find Seed packs
var paths = harvester(
  // You can add your own paths here, example:
  // '/app/src/scss/'
);

sass.render({
  file: './scss/main.scss',
  includePaths: paths
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    fs.writeFile('./dist/main', result.css);
  }
});
```



## 3. Import

Finally! To render the CSS from the Seed packs, you need to `@import` them into your Sass code.

In the example below, you can see that we've imported `seed-reset`, `seed-button`, and `seed-input` at the top.

```main.scss
// Import seed packs
@import "pack/seed-reset/_index";
@import "pack/seed-button/_index";
@import "pack/seed-input/_index";

html {
  background-color: #f9f9f9;
}

body {
  padding: 20px;
}

form {
  margin: 40px auto;
  width: 320px;
}

label {
  display: block;
}
```


Seed packs don't necessarily have to be imported at the start/top of your Sass code base. For the most part, it doesn't matter where they are imported (assuming your own class names play nicely with the Seed pack class names). That's because each Seed pack is a self-contained module that's designed to work out of the box!




---



## Example

You can check our our [Seed sample project](https://github.com/helpscout/seed-sample-project) over on Github. Once you save it onto your computer, open up the example [`index.html`](https://github.com/helpscout/seed-sample-project/blob/master/example/index.html) to see the Seed CSS styles in action!
