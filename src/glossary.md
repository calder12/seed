---
title: "Glossary"
description: "Many of the terms we use are borrowed from existing CSS approaches, but there are some words that we made up just for Seed."
layout: "docs-toc"
---

Welcome to the Seed Glossary! Many of the terms we use are borrowed from existing CSS approaches, but there are some words that we made up just for Seed.

This glossary defines all terms we use when describing the various bits of CSS code and approaches for Seed.

---

{% for glossary in site.glossary %}
  <h2>
    <a href="/seed{{ glossary.url }}" class="t-tx-charcoal-800">
      {{ glossary.title }}
    </a>
  </h2>
  <p class="t-tx-charcoal-400 u-mrg-b-2">{{ glossary.description }}</p>
  <p class="u-mrg-v-2">
    <a href="/seed{{ glossary.url }}">
      Go on…
    </a>
  </p>
  <hr>
{% endfor %}
