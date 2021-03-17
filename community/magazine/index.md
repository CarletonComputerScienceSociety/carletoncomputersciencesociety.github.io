---
layout: default
permalink: /community/magazine/
title: Magazine
published: true
---

<!--<script src="http://www.turnjs.com/lib/turn.min.js"></script>-->
<script src="https://ccss.carleton.ca/js/turn.min.js"></script>
<!--<script src="https://cdn.tutorialjinni.com/turn.js/3/turn.min.js"></script>-->
<style>
.book-wrap{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

.wrapper {
  align-items: center;
  display: flex;
  height: 90%;
  justify-content: center;
  margin: 5%;
  width: 90%;
}
.aspect {
  padding-bottom: 70%;
  position: relative;
  width: 100%;
}
.aspect-inner {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.flipbook {
  height: 100%;
  transition: margin-left 0.25s ease-out;
  width: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.flipbook .page {
  height: 100%;
  width: 100%;
}
.flipbook .page img {
  max-width: 100%;
  height: 100%;
}

</style>

<div class='content-wrap' style="padding-bottom: 0px">
   <div class="book-wrap">
      <h3>To view the magazine as a pdf, click <a href="/slides/CCSS_Magazine_Issue_1.pdf">here!</a></h3>
      <div class="wrapper">
         <div class="aspect">
            <div class="aspect-inner">
               <div class="flipbook" id="flipbook">
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-01.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-02.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-03.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-04.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-05.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-06.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-07.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-08.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-09.jpg" alt="" /></div>
                  <div class="page"><img src="/images/magazine/1/CCSS_Magazine_Issue_1-10.jpg" alt="" /></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<script>

var flipbookEL = document.getElementById('flipbook');
window.addEventListener('resize', function (e) {
  flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});
$(flipbookEL).turn({
    autoCenter: true
});

</script>

<div class="content-wrap" style="padding-top: 0px">
    <div class="inner-wrap">
        <div id="content" class="page-content">
            <hr />
            <footer class="page-footer">
                {% if page.categories %}{% include page-author.html %}{% endif %}
                {% if page.share != false %}{% include share-this.html %}{% endif %}
                {% include page-meta.html %}
            </footer><!-- /.footer -->
        </div>
    </div>
</div>
