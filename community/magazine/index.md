---
layout: default
permalink: /community/magazine/
title: Magazine
published: true
---

<script src="http://www.turnjs.com/lib/turn.min.js"></script>
<style>
.book-wrap{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
</style>
<div class='content-wrap'>
    <div class="book-wrap">
    <h3>To view the magazine as a pdf, click <a href="/slides/CCSS_Magazine_Issue_1.pdf">here!</a></h3>
    <div class="book" id="flipbook">
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

<script>

$("#flipbook").turn({
    width: 1000,
    height: 650,
    autoCenter: true
});

</script>