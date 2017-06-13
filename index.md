---
layout: main
permalink: /
title: Home
published: true
pimage: ./images/cusec.jpg
subjectstyle: null
---

<div class="content-wrap">
  <a href="https://carletoncss.slack.com/signup" class="flex-center-align" target="_blank">
    <img src="./images/Slack-528.png" alt="Slack" height="48" width="48" style="margin-right:15px;">
    Join the us on slack to keep up to date with events and clubs, and to meet new people! :D
  </a>
	<div class='feed'>
		<h1 class='skinny-underline'>News</h1>
		<div class="tiles">
		<!--ul class="dash-list">
			{% for post in site.categories.news %}
				{% include post-list.html %}
			{% endfor %}
		</ul-->
    <ul class="dash-list">
			{% for post in site.categories.news %}
				{% include post-grid.html %}
			{% endfor %}
		</ul>
		</div>
    </div>
</div>
