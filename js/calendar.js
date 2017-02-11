 
var cal_id = 'ccss.carleton.ca_5nsrtg7l7gqrgc8bilpkfnghg4@group.calendar.google.com';
var cal_api_key = 'AIzaSyAzBWqiMdJrntbDnSpUOlN2z_xOL07TErk';
var cal_url = 'https://www.googleapis.com/calendar/v3/calendars/' + cal_id + '/events?key=' + cal_api_key; 

$(document).ready(function(){
	/*formatGoogleCalendar.init({
        calendarUrl: cal_url,//'https://www.googleapis.com/calendar/v3/calendars/milan.kacurak@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY',
        past: true,
        upcoming: true,
        sameDayTimes: true,
        dayNames: true,
        pastTopN: -1,
        upcomingTopN: 3,
        recurringEvents: true, 
        itemsTagName: 'li',
        upcomingSelector: '#events-upcoming',
        pastSelector: '#events-past',
        upcomingHeading: '<h2>Upcoming events</h2>',
        pastHeading: '<h2>Past events</h2>',
        format: ['*date*', ': ', '*summary*', ' — ', '*description*', ' in ', '*location*']
	});*/
	
	$.ajax({
	  url: cal_url,
	  success: function(data){
	  	console.log(data);
	  }
	});
});