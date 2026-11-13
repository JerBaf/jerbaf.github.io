---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 1
---

{% assign years = site.data.publications | group_by: "year" | sort: "name" | reverse %}
{% for year in years %}
<h2 class="pub-year">{{ year.name }}</h2>
<div class="publications">
  {% for pub in year.items %}{% include publication.html pub=pub %}{% endfor %}
</div>
{% endfor %}
