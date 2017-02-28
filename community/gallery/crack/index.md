---
layout: default
permalink: /community/gallery/crack/
title: Gallery
published: true
---


<button class="backButton" onclick="location.href='{{ site.baseurl }}/community/gallery/'" type="button">
    Go Back </button>


  <div class='content-wrap'>

    <div class="gEvents">
          <h1> CRACKING THE CODE WORKSHOP 2017 </h1>

          <div class="gallery cf">

                {% for image in site.static_files %}
             {% if image.path contains 'images/yearbook/crack' %} <div><img src="{{ site.baseurl }}{{ image.path }}" alt="image" />  </div>
             {% endif %}
          {% endfor %}
            </div>


          </div>


    </div>
