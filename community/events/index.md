---
layout: default
permalink: /community/events/
title: Events
published: true
---
<!-- Calendar Styles -->
<link src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.1.0/fullcalendar.css"></link>
<link src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.1.0/fullcalendar.print.css"></link>

<!--Calendar View-->
<div class='content-wrap'>
    <h1>Our Google Calendar</h1>
    <p>Click on an event in the calendar to get more details!</p>
	<iframe class='google-calender centered' src="https://calendar.google.com/calendar/embed?src=ccss.carleton.ca_5nsrtg7l7gqrgc8bilpkfnghg4@group.calendar.google.com&ctz=America/Toronto" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    <h3>Want to add an event to your own Google Calendar?</h3>
    <p>It's as simple as clicking the event on the calendar and pressing "copy to my calendar" located at the bottom of the event description popup.</p>
    <h3>Planning on coming to all of our events?</h3>
    <p>Then add our calendar to your list of google calendars!</p>
    <h4>Steps:</h4>
    <ul style="list-style-type:decimal;">
        <li>Open Google Calendar</li>
        <li>On the left side, find "Other calendars" and click the down arrow.</li>
        <li>Select Add by URL.</li>
        <li>Enter this address in the field provided:
        <a style="word-break: break-all;" target="_blank" href="https://calendar.google.com/calendar/ical/ccss.carleton.ca_5nsrtg7l7gqrgc8bilpkfnghg4%40group.calendar.google.com/public/basic.ics"> https://calendar.google.com/calendar/ical/ccss.carleton.ca_5nsrtg7l7gqrgc8bilpkfnghg4%40group.calendar.google.com/public/basic.ics</a></li>
        <li>Click Add calendar.</li>
    </ul>
    <h4><a href='https://support.google.com/calendar/answer/37100?co=GENIE.Platform%3DDesktop&hl=en' target="_blank">More info and support...</a></h4>
</div>

<!--Calendar JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment-with-locales.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.1.0/fullcalendar.min.js"></script>
<script src="{{ site.baseurl }}/js/format-google-calendar.min.js"></script>
<script src="{{ site.baseurl }}/js/calendar.js"></script>
