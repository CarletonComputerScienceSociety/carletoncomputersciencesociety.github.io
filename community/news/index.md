---
layout: default
permalink: /community/news/
title: News
published: true
---
<!--div class='search-box'>Search</div-->
<div class='content-wrap'>
	<h1 class='big-page-title'>CS @Carleton</h1>
    <h2 class='page-sub-title'>Your source for computer science news and tutorials</h2>
	<div class="tiles">
	{% for post in site.categories.news %}
  		{% include post-grid.html %}
	{% endfor %}
	</div>
    <h3 class='page-sub-title'>Want to write an article? <a href='https://goo.gl/forms/WcsXBHqFhAQEu8VG3' class='skinny-underline' target="_blank">Let us know!</a></h3>
</div>
