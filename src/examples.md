---
title: "Seed examples"
layout: "generic"
---

# Seed Examples

<p class="tx-lead">A list of UI examples you can create with Seed</p>

<h2>Examples</h2>
<p class="tx-lg u-op-6">
  A list of UI examples you can create with Seed
</p>

<ul>
  {% for post in site.examples %}
  <li>
    <a href="/seed/{{ post.url }}">
      {{ post.title }}
    </a>
  </li>
  {% endfor %}
</ul>
