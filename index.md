---
layout: main
permalink: /
title: Home
published: true
pimage: ./images/cusec.jpg
subjectstyle: null
---
<div class="content-wrap">
	<div class='feed'>
		<h1 class='skinny-underline'>News</h1>
		<div class="tiles">
		<ul class="postList">
			{% for post in site.categories.news %}
				<img src="https://science.tcnj.edu/files/2016/03/wics-profile-4.jpg" height="530" width="350">
				{% include post-list.html %}
			{% endfor %}
		</ul>
		</div>
    </div>
    <!-- <div class='slack' style="text-align:center;">
        <a href="https://carletoncss.slack.com/signup" target="_blank">
    		<img src="./images/Slack-528.png" alt="Slack" height="150" width="150">
        </a>
        <h4>Join the 'carletoncss' team on slack!</h4>
    </div>
</div> -->
