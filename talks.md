---
layout: page
title: Talks
permalink: /talks/
description: Selected talks and posters.
nav: true
nav_order: 2
---

{% for talk in site.data.talks %}
<div class="talk">
  <div class="talk-title"><span class="talk-meta">({{ talk.year }})</span> <span class="talk-kind">{{ talk.kind }}:</span> {{ talk.title }}</div>
  <div class="talk-meta">{{ talk.venue }}</div>
  {%- if talk.links %}
  <div class="pub-links">
    {%- for link in talk.links %}
    <a href="{{ link[1] }}">{{ link[0] }}</a>
    {%- endfor %}
  </div>
  {%- endif %}
</div>
{% endfor %}
