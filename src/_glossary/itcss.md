---
title: "ITCSS"
description: "ITCSS is a CSS naming methodology created by Harry Roberts. It's an acronym that standrs for \"Inverted Triangle CSS\""
---

[ITCSS](http://itcss.io/) is a CSS naming methodology created by [Harry Roberts](https://twitter.com/csswizardry).

## Acronym

It's an acronym that stands for:

<div class="tx-h2 u-mrg-t-5 u-mrg-b-8 t-tx-charcoal-400">
  <strong class="t-tx-charcoal-600">I</strong>nverted
  <strong class="t-tx-charcoal-600">T</strong>riangle
  <strong class="t-tx-charcoal-600">CSS</strong>
</div>

It's a modern, and very awesome, CSS architecture approach designed for scability and maintainability. It is a philosophy centered around CSS specificity, which is achieved with (pretty strict) **file organization** rules.


## The Triangle

As the name implies, your CSS code-based is to be organized in an upside-down triangle based on **specificity**. In other words, your super basic general styles rules be added first, and your incredibly, perhaps abnoxiously, specific rules and overrides should be added last.

Behold, the **Ultimate Triangle of Specificity**! 🙌

![ITCSS: Diagram](/seed/images/glossary/itcss.svg)

Note: Harry doesn't _actually_ call it the "Ultimate Triangle of Specifity"… but we are. Why not? It's a cool name.

The organization of specificity is defined be a series of "layers".


### Layers

Note: Tools are specific to pre/post-processing languages like Sass or PostCSS, as mixins and functions aren't supported in native CSS.

* **Settings** – Variable configurations for things like colors, fonts, sizes, etc…
* **Tools** – Globally used mixins and functions.
* **Generic** – CSS resets and normalizing rules to create a foundation for your styles.
* **Elements** – Style rules for bare HTML elements (like `h1` or `button`).
* **Objects** – Style rules for elements responsible for layout or structuring.
* **Components** – Style rules for UI [components](/seed/glossary/component).
* **Trumps** – Helper or utility rules that tweak Objects or Components by adjusting and override existing rules.


### Reach

In addition to specificity, the Triangle also illustrates the amount of things your rules will impact, or "Reach".

![ITCSS: Key Metrics](/seed/images/glossary/itcss-key-metrics.svg)

In the example below, we have two CSS rules: a super generic one and an incredibly specific one.

```styles.scss
// Super super generic
a {
  color: hotpink;
}

// Incredibly specific
.s-purchase-page .c-modal a.linky {
  color: orangered;
}
```

The super generic one isn't very specific, can be _easy_ overridden with other rules. However, it has an incredible amount of "Reach", since it updates every single `<a>` tag.

On the other hand, the incredibly specific rule, only affects `<a>` tags in a very distint circumstance, so it's "Reach" and impact is minimal.



---


## Sources

* [CSS Wizardry](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf)
