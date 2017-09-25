---
layout: default
permalink: /election/ballot/
title: Election Ballot
published: true
---

<script src="{{site.url}}/js/jquery.min.js"></script>

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

  // if (!params['x']) {
  //   $("#ballot_display").css("display", "none");
  //   $("#pre_ballot_error").css("background-color", "red");
  //   $("#pre_ballot_error").css("display", "");
  //   $("#pre_ballot_content").text("We couldn't process your ballot. Please make sure you came here through the SCS authentication system!");
  // }
  // else {
  //   $.post(BASE_URL + '/validate?x=' + params['x'],
  //     function (data) {
  //       if (!data["ok"]) {
  //         $("#ballot_display").css("display", "none");
  //         $("#pre_ballot_content").text(data["error"]);
  //         $("#pre_ballot_error").css("display", "");
  //         $("#pre_ballot_error").css("background-color", "red");
  //       }
  //     }
  //   );
  // }

  $("#ballot").submit(function (e) {
      e.preventDefault();

      checked = $(".votebox:checked");

      // Verify there are two things in the list of candidates they
      // want to vote for.
      if (checked.length != 2) {
        alert("Please select the correct amount of candidates (2)");
        return;
      }

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


<div id="ballot_display">
<div style="padding:20px; font-size:20px">
Hello and welcome to the Carleton Computer Science Society first year representative elections!<br>Below you will find the ballot. You may make two (2) choices.<br>The two individuals with the most votes will be your first year representatives for the year!
</div>

<div id="message_container" style="display:none;font-weight: bold">
A fake message you shouldn't see.
</div>

<style>
.candidate-description {
  width:500px;
}

h1 {
    color: maroon;
    margin-left: 40px;
} 
</style>

<form id="ballot" style="padding-left:50px">
  <input id="adam" class="votebox" type="checkbox" name="vote[]"/><label for="adam" style="display: inline-block;font-size:20px">Adam Spriggs</label>
  <div class="candidate-description">Vote Adam Spriggs to be your First Year Rep and I'll be the voice of everyone. I'm here to make sure that you have opinions in decision making and be able to express your interests to me, and I'll do my absolute best to get them accomplished!</div>
  <input id="william" class="votebox" type="checkbox" name="vote[]"/><label for="william" style="display: inline-block;font-size:20px">William So</label>
  <div class="candidate-description">Hey, fellow first-years! Here's a little bit about myself: I like pizza, I think about existence a lot, and I want to be YOUR First Year Rep! Vote for me and I will bring you an amazing first-year experience, with a diverse range of fun events to suit everyone's tastes.</div>
  <input id="omar" class="votebox" type="checkbox" name="vote[]"/><label for="omar" style="display: inline-block;font-size:20px">Omar Garcia Flores</label>
  <div class="candidate-description">Hello! My name is Omar Garcia Flores and I am a first year CS student just like you. Alongside being your voice within the Carleton Computer Science Society, my goal is for you to have success during your first year and make you feel supported throughout the year.</div>
  <input id="jacob" class="votebox" type="checkbox" name="vote[]"/><label for="jacob" style="display: inline-block;font-size:20px">Jacob Danovitch</label>
  <div class="candidate-description">I’m Jacob, and the sole reason I’m running to be your first-year rep is because I like to help out. I don’t care about the title; I’d rather find free/useful stuff for you guys, keep you in the loop without spamming, and bring you any events you want to see.</div>
  <input id="emad" class="votebox" type="checkbox" name="vote[]"/><label for="emad" style="display: inline-block;font-size:20px">Emad Ryan</label>
  <div class="candidate-description">Using this community that we already have here, let's collaborate and have students bring their ideas forward to make events and workshops that cater to everyone’s interests. We’re all colleagues here, so let’s work together to make this year an entertaining and memorable one!</div>
  <br>
  <input type="submit" value="VOTE!"/>
</form>
</div>

<div id="pre_ballot_error" style="display: none">
<p id="pre_ballot_content" style="font-weight: bold">Fake content you shouldn't see</p>
</div>
