---
layout: default
permalink: /opportunities/jobs/
title: Jobs
published: true
pimage: ../../images/jobs.jpg
subjecttext: JOBS
subjectstyle: 'border-bottom: 5px solid white; border-top: 5px solid white;'
---

<div class='centered'>
	<h3 style="margin-top:60px;" target="_blank">Check out the job opportunities posted on the School of Computer Science website <a href="http://carleton.ca/scs/current-students/undergraduate-students/job-opportunities/">here</a>.</h3>
</div>

<!--TODO: Paginate-->
<!--div class="content-wrap">
	<ul class='job-list'>
	{% for job in site.categories.jobpostings %}
    	<li class='job-list-item'>
        	<a href='#'><h3>{{ job.title }}</h3></a>
            <table class='job-detail-table'>
           		<tr>
                	<td>Company:</td>
                    <td>{{ job.company }}</td>
                </tr>
            	<tr>
                	<td>Deadline:</td>
                    <td>{{ job.deadline }}</td>
                </tr>
            </table>
            <h4>Description</h4>
            <p>{{ job.description }}</p>
    	</li>
	{% endfor %}
	</ul>
</div-->
