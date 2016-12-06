---
layout: docs
title: Packs
---

<div id="js-seed-packs">
  <input class="search" id="js-seed-pack-search" />
  <span class="sort" data-sort="name">Sort by name</span>
  <span class="sort" data-sort="section">Sort by type</span>
  <ul class="c-list c-list--bordered list" style="display: none;" id="js-seed-pack-list">
    {% for pack in site.packs %}
      <li class="u-pad-v-6">
        <h3 class="tx-h4">
          <a href="/seed/packs/{{ pack.slug }}">
            <span class="name">
              {{ pack.title }}
            </span>
          </a>
        </h3>
        {% if pack.description %}
          <p class="u-mrg-b-0 t-tx-charcoal-300 description">
            {{ pack.description }}
          </p>
        {% endif %}
        <div class="u-pad-v-1">
          <div class="o-inline">
            <div class="o-inline__item tx-sm u-mrg-r-5">
              <span class="c-badge c-badge--circle c-badge--{{ pack.section | slugify }}"></span>
              <span class="t-tx-charcoal-200 section">{{ pack.section }}</span>
            </div>
            <div class="o-inline__item tx-sm">
              <span class="t-tx-charcoal-200 pack">{{ pack.seed-pack }}</span>
            </div>
          </div>
        </div>
      </li>
    {% endfor %}
  </div>
</div>
