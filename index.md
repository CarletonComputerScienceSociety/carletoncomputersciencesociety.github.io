---
layout: main
permalink: /
title: Home
published: true
pimage: ./images/cusec_bw.jpg
subjectstyle: null
---


<div class="content-wrap no-pad">
	<div style="display:flex; justify-content:center; text-align:center; background-color:yellow">
	<a href="https://students.carleton.ca/coronavirus/" class="flex-center-align" target="_blank" style="text-decoration:none; text-align:center; padding:1.5em; color:black; font-size:16px;">
	In light of recent developments due to the spread of COVID-19, the CCSS lounge & services will be put on hold until further notice.
	</a>
	</div>
	
	<div class='feed-wrap'>
		<div class='inner-wrap'>
			<div class="half-feed">
				{% include pretty-event-grid.html %}
			</div>
			<div class="half-feed">
				{% include latest-news-list.html %}
			</div>
		</div>
		<div class='inner-wrap'>
			<div class="full-feed">
			{% include past-events.html %}
			</div>
		</div>
	</div>
		

<!--
<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"9cf7bd25f0dd28305d846fee0","lid":"1da36a669e","uniqueMethods":false}) })</script>-->
