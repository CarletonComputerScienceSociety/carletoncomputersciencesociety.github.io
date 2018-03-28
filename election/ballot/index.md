---
layout: default
permalink: /election/ballot/
title: Election Ballot
published: true
---

<script src="http://ccss.carleton.ca/js/jquery.min.js"></script>

<script>

var BASE_URL = "https://ccss-election.herokuapp.com";

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(function () {
  var params = getUrlVars();

  if (!params['x']) {
    $("#ballot_display").css("display", "none");
    $("#pre_ballot_error").css("background-color", "red");
    $("#pre_ballot_error").css("display", "");
    $("#pre_ballot_content").text("We couldn't process your ballot. Please make sure you came here through the SCS authentication system!");
  }
  else {
    $.post(BASE_URL + '/validate?x=' + params['x'],
      function (data) {
        if (!data["ok"]) {
          $("#ballot_display").css("display", "none");
          $("#pre_ballot_content").text(data["error"]);
          $("#pre_ballot_error").css("display", "");
          $("#pre_ballot_error").css("background-color", "red");
        }
      }
    );
  }

  $("#ballot").submit(function (e) {
      e.preventDefault();

      checked = $(".votebox:checked");

      // Verify there are two things in the list of candidates they
      // want to vote for.
      //if (checked.length != 2) {
      //  alert("Please select the correct amount of candidates (2)");
      //  return;
      //}

      ids = checked.map(function (index, checkbox) {
          return checkbox.id;
      });

      // We checked for x above
      var x = params['x'];

      for (var i = 0; i < ids.length; i++) {
        // Send to the server
        $.post(BASE_URL + '/vote?x=' + x,
          // We verified above that exactly two things are in the list.
          {"vote": ids[i]},
          function (data) {
            if (data["ok"]) {
              $("#ballot_display").css("display", "none");
              $("#message_container").css("background-color", "greenyellow");
              $("#message_container").text(data["ok"]);
              $("#message_container").css("display", "");
            }
            else {
              $("#message_container").css("background-color", "red");
              $("#message_container").text(data["error"]);
              $("#message_container").css("display", "");
            }
          });
      }
    });
});

</script>
<head><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></head>
<div id="ballot_display">
<div style="padding:20px; font-size:20px">
Welcome to the 2018 CCSS General Election!<br>Below you will find the ballot. You may place one vote for each position.
</div>

<div id="message_container" style="display:none;font-weight: bold">
You shouldn't see this message.
</div>

<style>
.candidate-description {
  width:500px;
}

h1 {
    color: maroon;
    margin-left: 40px;
}

body {
	font-family: 'Roboto', sans-serif;
}
</style>

<form id="ballot" style="padding-left:50px">
<h2>President</h2>
  <input id="elisa" class="votebox" type="radio" value="elisa" name="president"/><label for="elisa" style="display: inline-block;font-size:20px">Elisa Kazan</label>
  <div class="candidate-description">A few goals for the coming year are: to ensure computer science students are aware of all
the opportunities and events that are happening on and off campus (aka knowing when to
apply for those awesome hackathons and conferences!), provide a wide range of resources
for students (study spaces, printing, technical interview prep) that are easily accessible (a
bigger lounge area would be nice too!), build a stronger community and CS pride through the
creation and distribution of CCSS merchandise, connect with other groups and societies on
campus to create bigger and better events, and continue improving the End of Year BBQ,
reaching out to alumni making it even bigger next year.</div>
<br><input id="nc1" class="votebox" type="radio" value="nc1" name="president"/><label for="nc1" style="display: inline-block;font-size:20px">No confidence</label>
  <div class="candidate-description"></div>

  <h2>Vice President</h2>
  <input id="aidan" class="votebox" type="radio" value="aidan" name="vicepresident"/><label for="aidan" style="display: inline-block;font-size:20px">Aidan Crowther</label>
  <div class="candidate-description">If elected, I intend to expand upon the services and opportunities provided to members and
volunteers of the CCSS, while also striving to improve our outreach and accessibility to
students. I intend to do so by working in key areas such as: Improving upon, and maintaining
our rewards system for volunteers and board members, including our offering of CCR credit
for these positions. I also intend to expand our offered learning opportunities by working
closely with our VP Academics in order to ensure that we can offer as much high quality and
valuable material as possible. Improving our outreach and availability to students is also one
of my goals, with the hopes that we can attract more of our members to events, as well as
making our doings and information more easily accessible and understood. I intend to do
this by working closely with the President and other VPs in order to ensure that all tasks and
responsibilities are met, and dealt with accordingly, while also assisting in any way possible,
while also keeping the views and opinions of our members in mind.</div>
<br><input id="nc2" class="votebox" type="radio" value="nc2" name="vicepresident"/><label for="nc2" style="display: inline-block;font-size:20px">No confidence</label>
  <div class="candidate-description"></div>

  <h2>Vice President of Social</h2>
  <input id="william" class="votebox" type="radio" value="william" name="vpsocial"/><label for="william" style="display: inline-block;font-size:20px">William So</label>
  <div class="candidate-description">As VP Social, I will take on the responsibility of communicating CCSS news, events, and other important information to our members, through social media such as Facebook and
Slack, and through email newsletter. With these open lines of communication, I will encourage the CCSS members to attend our events. I also plan to organize many social get-togethers, such as regular coffee socials and movie nights, as well as social outings such as
The Loft.</div>
<br><input id="nc3" class="votebox" type="radio" value="nc3" name="vpsocial"/><label for="nc3" style="display: inline-block;font-size:20px">No confidence</label>
  <div class="candidate-description"></div>

  <h2>Vice President of Academics</h2>
  <input id="forest" class="votebox" type="radio" value="forest" name="vpacademics"/><label for="forest" style="display: inline-block;font-size:20px">Forest Anderson</label>
  <div class="candidate-description">I will start off the year with a tech talk during the Week of Awesome. I will run workshops
about useful technologies and technical skills. I plan on working closely with the Ottawa Game Development Collective, as well as hack.carleton.</div>
<br><input id="jeremy" class="votebox" type="radio" value="jeremy" name="vpacademics"/><label for="jeremy" style="display: inline-block;font-size:20px">Jeremy Tian</label>
  <div class="candidate-description">I will ensure the voices of students are heard at university meetings, host spectacular
extracurricular academic events for CS students, and guarantee effective academic support workshops.</div>
<br><input id="nc4" class="votebox" type="radio" value="nc4" name="vpacademics"/><label for="nc4" style="display: inline-block;font-size:20px">No confidence</label>
  <div class="candidate-description"></div>

  <h2>Treasurer</h2>
  <input id="benjamin" class="votebox" type="radio" value="benjamin" name="treasurer"/><label for="benjamin" style="display: inline-block;font-size:20px">Benjamin Karstad</label>
  <div class="candidate-description">As Treasurer, I will strive for improved communication with members and what they want to see funded in the future, transparency of the budget and where funds are allocated, coordination with third parties to sponsor events, and ensuring economical spending of allocated funds and minimizing wastefulness.</div>
<br><input id="nc5" class="votebox" type="radio" value="nc5" name="treasurer"/><label for="nc5" style="display: inline-block;font-size:20px">No confidence</label>
  <div class="candidate-description"></div>

  <br>
  <input type="submit" value="Submit votes"/>
</form>
</div>

<div style="padding-left:20px; padding-top: 10px; font-size:20px">
You cannot change your votes after they have been submitted.
</div>

<div id="pre_ballot_error" style="display: none">
<p id="pre_ballot_content" style="font-weight: bold">Fake content you shouldn't see</p>
</div>
