---
layout: default
permalink: /community/gallery/christmas/
title: Gallery
published: true
---

<button class="backButton" onclick="location.href='{{ site.baseurl }}/community/gallery/'" type="button">
    Go Back </button>


<div class='content-wrap'>

<div class="gEvents">
      <h1> CCSS CHRISTMAS PARTY 2016</h1>

      <div class="gallery cf">

            {% for image in site.static_files %}
         {% if image.path contains 'images/yearbook/christmas' %} <div><img src="{{ site.baseurl }}{{ image.path }}" alt="image" />  </div>
         {% endif %}
      {% endfor %}
        </div>


      </div>


</div>
