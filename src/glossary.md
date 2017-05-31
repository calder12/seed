---
title: "Glossary"
description: "A modular CSS framework that scales."
layout: "docs-toc"
---

Welcome to the Glossary! We use a lot of jargon when describing the various bits of CSS code and approaches for Seed.

A lot of the terms are borrowed from existing approaches, but there are also some that we made up.

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
