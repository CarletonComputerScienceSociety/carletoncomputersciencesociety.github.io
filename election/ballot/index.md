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
<p>
Hello and welcome to the Carleton Computer Science Society first year representative elections!
Below you will find the ballot. You may make two (2) choices. The two individuals with the most
votes will be your first year representatives for the year!
</p>

<div id="message_container" style="display:none;font-weight: bold">
A fake message you shouldn't see.
</div>

<form id="ballot">
  <input id="joel" class="votebox" type="checkbox" name="vote[]"/><label for="joel" style="display: inline-block">Joel    Clayworth</label><br>
  <input id="nick" class="votebox" type="checkbox" name="vote[]"/><label for="nick" style="display: inline-block">Nick Kazan</label><br>
  <input id="iqra" class="votebox" type="checkbox" name="vote[]"/><label for="iqra" style="display: inline-block">Iqra    McIlveen</label><br>
  <input id="abdulazeez" class="votebox" type="checkbox" name="vote[]"/><label style="display: inline-block" for="abdulazeez">Abdulazeez     Odumosu</label><br>
  <input id="richard" class="votebox" type="checkbox" name="vote[]"/><label for="richard" style="display: inline-block">Richard Ositashvili</label><br>
  <input id="michael" class="votebox" type="checkbox" name="vote[]"/><label for="michael" style="display: inline-block">Michael Sayegh</label><br>
  <input id="noah" class="votebox" type="checkbox" name="vote[]"/><label for="noah" style="display: inline-block">Noah    Walker</label><br>
  <input type="submit" value="VOTE!"/>
</form>
</div>

<div id="pre_ballot_error" style="display: none">
<p id="pre_ballot_content" style="font-weight: bold">Fake content you shouldn't see</p>
</div>
