---
layout: main
permalink: /
title: Home
published: true
pimage: ./images/cusec_bw.jpg
subjectstyle: null
---


<div class="content-wrap no-pad">
	<!--a href="https://carletoncss.slack.com/signup" class="flex-center-align" target="_blank" style="text-decoration:none;">
	<img src="./images/Slack-528.png" alt="Slack" height="32" width="32" style="margin-right:10px;">
	Join the us on slack to keep up to date with events and clubs, and to meet new people! :D
	</a
      <div style="padding-left:20px;display:inline-block;">
      {% include social-media.html %}
      </div>
	-->
	<div class='feed-wrap'>
		<div class='inner-wrap'>
			<div class="half-feed">
				{% include pretty-event-grid.html %}
			</div>
			<div class="half-feed">
				{% include latest-news-list.html %}
			</div>
		</div>
	</div>
</div>

<!--
<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"9cf7bd25f0dd28305d846fee0","lid":"1da36a669e","uniqueMethods":false}) })</script>-->
