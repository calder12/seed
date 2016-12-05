Help Scout Style Guide
==========

<a href="https://travis-ci.com/helpscout/styleguide" target="_blank"><img src="https://travis-ci.com/helpscout/styleguide.svg?token=mizbXyxLU95YeKzixKT2&branch=master"></a>

This is Help Scout's style guide, powered by [Jekyll](https://jekyllrb.com/).

http://style.helpscout.com

## Table of contents

- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Deploying](#deploying)
- [Contributing](#contributing)
- [Legacy](#legacy)


## Requirements
- Ruby
- Bundler
- Node
- Bower
- Gulp


##### Ruby
If you do not have Ruby on your system, check out [this guide](https://github.com/rbenv/rbenv) from rbenv.


##### Bundler
Once you have Ruby installed on your machine, run the following command to install [Bundler](http://bundler.io/)
```
gem install bundler
```

##### Node
If you do not have Node installed on your machine, we recommend installing it using [Homebrew](https://github.com/customerio/mvp#homebrew).

Run the following command in your command line:
```
brew install node
```

##### Bower
The site guide utilize's Help Scout's [Seed CSS framework](https://github.com/helpscout/seed), which is pull in via Bower. To install Bower, run the following command in your command line:

```
npm install bower -g
```


##### Gulp
Help Scout's styleguide site is compiled using Gulp. See the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) guide for more information.

```
npm install -g gulp-cli
```

## Getting started

##### Installing ruby things
Since we installed [bundler](http://bundler.io/), all you have to do is run the following command, which will automagically install all the Gem files you need (this includes Jekyll!)

```
bundle install
```

##### Installing node things
Similar to Bundler, all you have to do is run the following command, which will allow Gulp to do it's thing.

```
npm install
```

##### Installing bower things
Similar to node, all you have to do is run the following command:

```
bower install
```


##### Firing it up!
Now you are ready to rock! Browse to the root of your repo locally and run the following command:

```
gulp
```

Now you should have a local running instance of the site at [http://localhost:4200/](http://localhost:4200/). Any edits you make will automatically be updated in your instance!


## Deploying

Our styleguide currently lives on [Github pages](http://helpscout.github.io/styleguide).

We've setup a CI build process using [Travis CI](https://travis-ci.org/).

To deploy to production, simply merge (or push) your changes to the [master](https://github.com/helpscout/styleguide/tree/master) branch.

This should automatically push the Jekyll rendered `/_site/` directory to the [gh-pages](https://github.com/helpscout/styleguide/tree/gh-pages) branch


## Contributing

##### Creating a branch

To contribute to the marketing site, create a new branch based on `develop`.

Example workflow:

**Pull down the latest changes from `develop`**
```
git checkout `develop`
git pull
```

**Create your branch**
```
git checkout -b my-new-branch
```
(Replace `my-new-branch` with whatever you'd like!)


## Legacy
The [previous version](http://style.helpscout.com/old/) of the style guide was compiled using [KSS](http://warpspire.com/kss/).

**However, this version of the style guide is no longer being maintained.**

It can still be accessed by going to [http://style.helpscout.com/old/](http://style.helpscout.com/old/).

See old workflow and setup [documentation](https://github.com/helpscout/styleguide/blob/master/LEGACY.md).
