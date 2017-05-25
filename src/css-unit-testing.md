---
title: "Barista"
description: "Barista: A Javascript utility for CSS unit testing."
layout: "generic"
---

<div class="tx-center u-mrg-b-10 s-docs">
  <p class="tx-center t-tx-charcoal-300 tx-h4">
    <strong class="tx-700">Barista</strong>
  </p>
  <div class="o-col-10@md o-col-offset-1@md">
    <p class="tx-h2 tx-h1@md tx-300 tx-lh-heading u-mrg-t-0">
      CSS Unit Testing.<br>
      <strong class="tx-700">Oh yes.</strong>
    </p>
  </div>
  <p class="tx-center u-mrg-b-5">
    <img src="/seed/images/barista.png" title="Seed Barista" alt="Seed Barista" width="200">
  </p>
  <p class="tx-lead t-tx-charcoal-300">
    Compatible with most major test runners and assertion libraries.
  </p>
  <p>
    <a href="#get-started" class="c-button c-button--lg">Get Started</a>
  </p>
  <p>
    <a href="https://github.com/helpscout/seed-barista">View Source on Github</a>
  </p>
</div>



---

[![Build Status](https://travis-ci.org/helpscout/seed-barista.svg?branch=master)](https://travis-ci.org/helpscout/seed-barista) [![npm version](https://badge.fury.io/js/seed-barista.svg)](https://badge.fury.io/js/seed-barista) [![dependencies Status](https://david-dm.org/helpscout/seed-barista/status.svg)](https://david-dm.org/helpscout/seed-barista)

<br>

# Get Started

## Install Barista

Run the following command to add Barista to your project:

```
npm install seed-barista --save-dev
```

Although Barista is compatible with most major test runners, the Barista's documentation uses **[Mocha](https://mochajs.org/)** and **[Chai](http://chaijs.com/)**

These can be added with the following command:

```
npm install mocha chai --save-dev
```



---



## Basic Usage

### [Standard](https://github.com/helpscout/seed-barista/blob/master/docs/api/standard.md)

Below is an example of how you can setup a [Mocha](https://mochajs.org/) test with Barista. A fast and simple way to test `.scss` output is to verify the rendered output matches against expected strings.

```javascript
var expect = require('chai').expect;
var barista = require('seed-barista');

describe('harry component styles', function() {
  it('should render a class of wizard + harry', function() {
    var output = barista({ file: '_wizard.scss' });
    var rule = output.rule('.your-a-wizard.harry');

    expect(rule.exists()).to.be.true;
    expect(rule.prop('background')).to.equal('red');
    expect(rule.prop('color')).to.equal('yellow');
  });
});
```

Check out the full [API documentation](https://github.com/helpscout/seed-barista/blob/master/docs/api/standard.md).



### [Mounted](https://github.com/helpscout/seed-barista/blob/master/docs/api/mounted.md)

Mounted based testing creates a [virtual DOM](https://github.com/tmpvar/jsdom), allowing you to write assertions against DOM elements. Barista's Mounted API uses jQuery to retrieve computed CSS styles.

```javascript
var expect = require('chai').expect;
var barista = require('seed-barista');

describe('harry component styles', function() {
  it('should render a class of wizard + harry', function() {
    var output = barista({ file: '_wizard.scss' }).mount();
    var rule = output.find('.your-a-wizard.harry');

    expect(rule.length).to.be.above(1);
    expect(rule.css('background')).to.equal('red');
    expect(rule.css('color')).to.equal('yellow');
  });
});
```

Check out the full [API documentation](https://github.com/helpscout/seed-barista/blob/master/docs/api/mounted.md).



---



## Example

Below is a sample test for a Button component with the styles written inline.

```js
// Test :: Examples :: Button
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('example: test: button', function() {
  var styles = `
    .btn {
      background: blue;
      border: 1px solid;
      border-color: blue;
      &:hover {
        background: red;
      }
      &:active {
        background: purple;
      }
      &:focus {
        border-color: red;
        &:active {
          border-color: purple;
        }
      }
    };
  `;
  var output = barista({
    content: styles,
  });

  it('should have an active state + style', function() {
    var rule = output.rule('.btn:active');

    expect(rule.prop('background')).to.equal('purple');
  });

  it('should have a focus state + style', function() {
    var rule = output.rule('.btn:focus');

    expect(rule.prop('border-color')).to.equal('red');
  });

  it('should have a focus:active state + style', function() {
    var rule = output.rule('.btn:focus:active');

    expect(rule.exists()).to.be.true;
    expect(rule.prop('border-color')).to.equal('purple');
  });
});
```



---



## In the wild

Barista has been used extensively in Seed Packs. (We're working towards 100% coverage!).

Below are a couple of packs already using Barista for testing:

* [seed-button](https://github.com/helpscout/seed-button/tree/master/test)
* [seed-color-scheme](https://github.com/helpscout/seed-color-scheme/tree/master/test)
* [seed-dot-nav](https://github.com/helpscout/seed-dot-nav/tree/master/test)
* [seed-input](https://github.com/helpscout/seed-input/tree/master/test)
* [seed-navbar](https://github.com/helpscout/seed-navbar/tree/master/test)
* [seed-publish](https://github.com/helpscout/seed-publish/tree/master/test)



{% include footer/back-to-top.html %}
