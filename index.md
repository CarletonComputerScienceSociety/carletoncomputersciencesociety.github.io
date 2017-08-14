---
layout: main
permalink: /
title: Home
published: true
pimage: ./images/cusec_bw.jpg
subjectstyle: null
---


<div class="content-wrap">
	<!--a href="https://carletoncss.slack.com/signup" class="flex-center-align" target="_blank" style="text-decoration:none;">
	<img src="./images/Slack-528.png" alt="Slack" height="32" width="32" style="margin-right:10px;">
	Join the us on slack to keep up to date with events and clubs, and to meet new people! :D
	</a
      <div style="padding-left:20px;display:inline-block;">
      {% include social-media.html %}
      </div>
	-->
	<div class="half-feed">
		{% include pretty-event-grid.html %}
	</div>
	<div class="half-feed">
		{% include latest-news-list.html %}
	</div>
</div>
