---
layout: default
permalink: /election/ballot/old/
title: Election Ballot
published: true
---
<head>
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
      // $("#ballot_display").css("display", "none");
      // $("#pre_ballot_error").css("background-color", "red");
      // $("#pre_ballot_error").css("display", "");
      // $("#pre_ballot_content").text("We couldn't process your ballot. Please make sure you came here through the SCS authentication system!");
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

  <style>
  h1 {
      color: maroon;
      margin-left: 40px;
  }

  h3 {
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #ballot {
    padding: 20px;
  }
  #ballot_header {
    padding: 40px;
    font-size: 125%;
  }

  .candidate {
    background: #fff;
    margin-bottom: 20px;
  }
  .candidate input {
    display: none;
  }
  .candidate .label-holder {
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .candidate-check {
    height: 80px;
    width: 81px;
    position: relative;
    margin-right: 40px;
    border-right: 1px solid #eee;
  }
  .candidate-check img {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
  }
  .candidate:hover .candidate-check img, .candidate input:checked ~ label .candidate-check img {
    display: block;
  }
  .candidate h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .candidate input:checked ~ label .candidate-check {
    background: #E5F7EC;
  }
  .candidate input:checked ~ label .candidate-check {
    background: #E5F7EC;
  }
  .candidate label {
    font-weight: 500;
    font-family: inherit;
  }

  .candidate-description {
    padding: 20px;
  }
  </style>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<div id="ballot_display">
<div id='ballot_header'>
  <h2>Hello and welcome to the Carleton Computer Science Society first year representative elections!</h2>
  <br>
  Below you will find the ballot. You may make two (2) choices.
  <br>
  The two individuals with the most votes will be your first year representatives for the year!
</div>

<form id="ballot">
  <div class='candidate'>
    <input id="matthew" class="votebox" type="checkbox" name="vote[]"/>
    <label for="matthew">
      <div class='label-holder'>
        <div class='candidate-check'>
          <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
        </div>
        <h3>Matthew MacRae-Bovell</h3>
      </div>
      <div class="candidate-description">Hello, my name is Matthew MacRae - Bovell, and I’m a first year computer science student currently running for the position of CCSS first year representative. If elected, my main goal as representative would be to facilitate the creation of new CCSS events that would cater to first year students of all levels of programming experience.
      <br>
      For first year students who are just starting out or have no prior experience programming, it can be daunting and/or confusing to try to participate in talks or workshops that require a certain level of base knowledge. If elected first year representative, I will make sure to cater to first years of all varying levels of experience by creating talks and workshops that directly branch off of the first year curriculum. These talks would likely revolve around Python, due to it being the language taught in COMP 1405. They would also provide information that will be directly applicable to first year classes and assignments. Some potential topics include demonstrations of practical Python modules, and/or demonstrations of some of the real world uses of Python such as web scraping and machine learning.
      <br>
      I think I’d make a great first year representative because I’m very genuine, approachable, and open to meeting new people. Thank you for your time and consideration!</div>
    </label>
  </div>

  <div class='candidate'>
      <input id="sybe" class="votebox" type="checkbox" name="vote[]"/>
      <label for="sybe">
        <div class='label-holder'>
          <div class='candidate-check'>
            <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
          </div>
          <h3>Sybe Jellema</h3>
        </div>
        <div class="candidate-description">
          I’m always ready to roll up my sleeves and do the work that is necessary to get events up and running. I’m a very experienced listener and will never dismay anyone from sharing any ideas or suggestions with me. I will always try to keep all the first years in mind with many of the decisions I’ll be making. One of the things I will do as a first-year representative will be to have more academically oriented demonstrations of the Computer Science program. I want to make sure that students will know all about the Computer Science program and what the program can teach them and where it could take them. I also want to have some social events made for the first year Computer Science students so that they can get to know each other and this should help them meet people with interests that are similar to theirs.
        </div>
      </label>
    </div>

  <div class='candidate'>
      <input id="darren" class="votebox" type="checkbox" name="vote[]"/>
      <label for="darren">
        <div class='label-holder'>
          <div class='candidate-check'>
            <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
          </div>
          <h3>Darren Bell</h3>
        </div>
        <div class="candidate-description">
            Hi, my name is Darren Bell and I am running to be one of the first year students reps for the CCSS! I am a really outgoing person who loves to talk to people and I have a lot of experience in these types of roles from being the Geeks United Rep at my High School all the way to being the head of the music department at my school. The SSSC does not really focus on the Computer Science department that much when it comes to alumni interviews and events as such but I want to change that! I want to have Interviews for coders, by coders and from your specific branch because there are so many branches that we have, from game design to internet security! I have a lot more planned but that is my number one goal! I am always going to be open to suggestions from all of you too! So if I am elected I will have an email set up for requests on events and that I will be constantly looking through throughout the year. Thank you so much for taking the time to read my platform and have a great day!
        </div>
      </label>
    </div>

  <div class='candidate'>
      <input id="lucas" class="votebox" type="checkbox" name="vote[]"/>
      <label for="lucas">
        <div class='label-holder'>
          <div class='candidate-check'>
            <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
          </div>
          <h3>Lucas Colwell</h3>
        </div>
        <div class="candidate-description">
            I’m Lucas, and I’m running for FYR! I think I would be a good rep because I have experience, I like being involved with the society, and I have good ideas to bring to the table. So, a little background about me. I was the head of Tech Crew (TC) in high-school, and really enjoyed it! I got to vote on school issues regarding tech, meaning I had to act with the interests of the TC in mind, and represent them on the council. I think this would be useful to experience for a FYR to have. I really enjoy the atmosphere of the society lounge, and have spent many of my first days at Carleton there. I went to (almost) all of the WoA activities, which made me appreciate the society even more. I want to see more of these activities during the school terms, because they are the perfect opportunity to bring everyone together! I really want to contribute to the society and I think being a rep is the perfect way to do this! A really good initiative for the Society to take-up is high school outreach! There are many high schools in the area with people who are unsure about following a path in computer science, and workshops hosted by the CCSS teaching basic CS skills would be helpful to HS students, and would give CU students an opportunity to get useful teaching skills! Thank you, and I hope you’ll vote me for FYR!
        </div>
      </label>
    </div>

  <div class='candidate'>
      <input id="karim" class="votebox" type="checkbox" name="vote[]"/>
      <label for="karim">
        <div class='label-holder'>
          <div class='candidate-check'>
            <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
          </div>
          <h3>Karim Hurani</h3>
        </div>
        <div class="candidate-description">Platform not received</div>
      </label>
    </div>

  <div class='candidate'>
      <input id="gina" class="votebox" type="checkbox" name="vote[]"/>
      <label for="gina">
        <div class='label-holder'>
          <div class='candidate-check'>
            <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
          </div>
          <h3>Gina Bak</h3>
        </div>
        <div class="candidate-description">Platform not received</div>
      </label>
    </div>
  
  <div class='candidate'>
    <input id="rheana" class="votebox" type="checkbox" name="vote[]"/>
    <label for="rheana">
      <div class='label-holder'>
        <div class='candidate-check'>
          <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
        </div>
        <h3>Rheana Thomas</h3>
      </div>
      <div class="candidate-description">Platform not received</div>
    </label>
  </div>

  <div class='candidate'>
    <input id="tarek" class="votebox" type="checkbox" name="vote[]"/>
    <label for="tarek">
      <div class='label-holder'>
        <div class='candidate-check'>
          <img src="{{ site.baseurl }}/images/svg/check.svg" alt="check">
        </div>
        <h3>Tarek Issa</h3>
      </div>
      <div class="candidate-description">Platform not received</div>
    </label>
  </div>

  <br>
  <input type="submit" value="VOTE!"/>
</form>
</div>

<div style="padding-left:20px; padding-top: 10px; font-size:20px">
You cannot change your votes after they have been submitted.
</div>

<div id="pre_ballot_error" style="display: none">
<p id="pre_ballot_content" style="font-weight: bold">Fake content you shouldn't see</p>
</div>
