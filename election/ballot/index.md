---
layout: default
permalink: /election/ballot/
title: Election Ballot
published: true
---

<head>
  <style>
    #ballot_display {
        width: 100%;
        max-width: 920px;
        margin: 0 auto;
        padding: 80px 20px;
    }
    @media(min-width: 800px) {
        #ballot_display {
            padding: 80px 40px;
        }
    }
    #ballot_header {
    }
    .election_module_title {
        font-size: 180%;
        margin: 4rem 0 0.5rem 0;
    }
    .election_module {
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 1px 1px #eee;
        width: 100%;
        margin-bottom: 2rem;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #e3e3e3;
        font-family: 'Source Sans Pro', sans-serif;
    }
    .checkbox_container {
        flex: 1;
        padding: 2rem;
    }
    .candidate_labels {
        display: flex;
    }

    .checkbox_container .candidate {
        display: flex;
    }

    /* The input rows */
    .checkbox_container .row {
        display: flex;
        width: 100%;
    }

    /* The top row */
    .checkbox_container .top_axis {
        margin-bottom: 0.5rem;
        color: #a80925;
    }

    /* The candidate labels */
    .row .candidate, .row .candidate_holder {
        flex: 1;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .row .candidate_holder {
        font-weight: 200;
        color: #333;
    }

    /* The input labels */
    .row .input_labels .label, .row .input_container .label {
        width: 4rem;
        height: 4rem;
        margin: 2px;
        text-align: center;
    }
    .radio_inputs .label {
        padding: 0.25rem;
    }
    .election_input_btn {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #e3e3e3;
        cursor: pointer;
    }
    .election_input_btn.click {
        border: 0.5rem solid #C40729;
    }
    .election_input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1000000;
        opacity: 0;
        visibility: hidden;
    }

    @media(min-width: 600px) {
        .row .input_labels .label, .row .input_container .label {
            width: 3rem;
            height: 3rem;
        } 
    }
    @media(min-width: 800px) {
        .row .input_labels .label, .row .input_container .label {
            width: 2rem;
            height: 2rem;
        } 
    }

    .checkbox_container .radio_inputs, .checkbox_container .input_labels {
        display: flex;
    }

    .election_module input {
        margin: 0;
    }


    .platform_header {
        font-size: 100%;
        font-weight: 700;
        text-align: center;
        padding: 1rem;
        border-top: 1px solid #eee;
        color: #313130;
        
        display: flex;
        justify-content: center;
        transition: color .2s ease;
        cursor: pointer;
    }
    .platform_header .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .platform_header .svg {
        width: 32px;
        height: 32px;
        padding: 8px;
        margin: 0 0.5rem;
        display: flex;
    }
    .platform_header.click {
        border-bottom: 1px solid #eee;
    }
    .platform_header:hover {
        color: #a80925;
    }

    .platform_header .svg_holder > .svg:nth-child(2), .platform_header.click .svg_holder > .svg:nth-child(1) {
        display: none;
    }
    .platform_header.click .svg_holder > .svg:nth-child(2) {
        display: flex;
    }
    .election_platform {
        display: none;
        padding: 1rem 1rem;
        border-bottom: 1px solid #eee;
    }
    .platform_header.click ~ .election_platform {
        display: block;
    }
    .platform_title {
        color: #a80925;
        font-weight: 700;
    }


    #client-error {
        display: none;
        color: red;
        font-size: 120%;
    }
    #client-error.active {
        display: block;
    }

    .serialize {
        background: #C40729;
        color: #fff;
        border-radius: 4px;
        padding: 20px 40px;
        display: inline-block;
        margin-top: 4rem;
        cursor: pointer;
    }



    #ballot_display #ballot_closing, #ballot_display #ballot_closing_error {
        display: none;
    }
    #ballot_display.voted #ballot_header, #ballot_display.voted .election_module_title, #ballot_display.voted .election_module {
        display: none;
    }
    #ballot_display.error #ballot_header, #ballot_display.error .election_module_title, #ballot_display.error .election_module {
        display: none;
    }
    #ballot_display.voted .serialize, #ballot_display.error .serialize {
        display: none;
    }
    #ballot_display.voted #ballot_closing, #ballot_display.error #ballot_closing_error {
        display: block;
    }
  </style>
</head>
<div id="ballot_display">
    <div id='ballot_header'>
        <div><h2>Hello and welcome to the Carleton Computer Science Society 2019 first year representative elections!</h2></div>
        <div><h4>The voting server will be open until Friday, October 4 2019 at 23:59</h4></div>
        <div>Rank each candidate in order of your preference. When the votes are tallied at the end of the election, only your first choice will be counted. In the event that no candidate has the majority (50%+1) of the votes, the candidate with the least number of votes will be removed, and any voters who selected this candidate will have their next choice counted instead. This process continues until there is a candidate with a majority of the votes. Take a look <a href="https://ccss.carleton.ca/community/news/blog/First-Year-Rep-2019-Elections/">here</a> to see the full platforms of the candidates.</div>
    </div>
    <div id='ballot_closing'>
        <div><h2 id='ballot_closing_statement'>Thank you for voting!</h2></div>
    </div>
    <div id='ballot_closing_error'>
        <div><h2>The voting server responded with an error.</h2></div>
    </div>
    {% for category in site.data.election.fall2019.categories %}
        <div class='election_module_title'>{{ category.title }}</div>
        <div class='election_module' data-election='{{ category.title }}'>
            <div class='checkbox_container'>
                <div class='row top_axis'>
                    <div class='candidate_holder'>Candidates</div>
                    <div class='input_labels'>
                        {% for candidate in category.candidates %}
                            {% assign d = forloop.index0 | plus: 1 %}
                            <div class='label'>{% case d %}
                                {% when 1 %}{{ d }}st
                                {% when 2 %}{{ d }}nd
                                {% when 3 %}{{ d }}rd
                                {% else %}{{ d }}th
                            {% endcase %}</div>
                        {% endfor %}
                    </div>
                </div>
                <div class='candidate_row_container'>
                    {% for candidate in category.candidates %}
                        {% assign row = forloop.index0 %}
                        <div class='row candidate_row'>
                            <div class='candidate'>{{ candidate }}</div>
                            <div class='input_container'>
                                <div class='radio_inputs election_input_row'>
                                    {% for candidate in category.candidates %}
                                    <div class='label'>
                                        <div class='election_input_btn election_candidate_input_btn'></div>
                                        <input type='radio' class='election_input election_candidate_input' data-col='{{forloop.index0}}' data-row='{{row}}'/>
                                    </div>
                                    {% endfor %}
                                </div>
                            </div>
                        </div>
                    {% endfor %}
                </div>
                <div class='row'>
                    <div class='candidate'>NO CONFIDENCE</div>
                    <div class='input_container'>
                        <div class='radio_inputs election_input_row'>
                            <div class='label'>
                                <div class='election_input_btn election_no_confidence_btn'></div>
                                <input type='radio' class='election_input election_no_confidence' data-value='no_confidence' data-col='-1'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='election_platforms'>
                <div class='platform_header'>
                    <div class='svg_holder'>
                        <img class='svg' src='{{ site.baseurl }}/images/svg/sort-down.svg'/>
                        <img class='svg' src='{{ site.baseurl }}/images/svg/sort-up.svg'/>
                    </div>
                    <div class='text'>Candidate Platforms</div>
                    <div class='svg_holder'>
                        <img class='svg' src='{{ site.baseurl }}/images/svg/sort-down.svg'/>
                        <img class='svg' src='{{ site.baseurl }}/images/svg/sort-up.svg'/>
                    </div>
                </div>
                {% for candidate in category.candidates %}
                    <div class='election_platform'>
                        <div class='platform_title'>{{candidate}}</div>
                        <div class='platform_description'>{{ site.data.election.fall2019.candidates[candidate].platform }}</div>
                    </div>
                {% endfor %}
            </div>
        </div>
    {% endfor %}
    <div id='client-error'>ERROR: The inputs are not valid</div>
    <div class='serialize'>
        Submit Votes
    </div>
</div>

<!-- Toggles the platform headers-->
<script>

    function initPlatformHeaders(){
        let parent = document.getElementsByClassName('platform_header');
        let len = parent.length;

        for(var a = 0; a < len; a++){
            parent[a].addEventListener('click', function(){
                this.classList.toggle('click');
            });
        }
    }
    initPlatformHeaders();

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
</script>

<!-- Restricts the inputs to one per column/row -->
<script>
    function initSerialBtns(){
        let parent = document.getElementsByClassName('serialize');
        let len = parent.length;
        for(var a = 0; a < len; a++){
            parent[a].addEventListener('click', function(){
                serializeModules();
            });
        }
    }

    function initInputManagers(){
        let parent = document.getElementsByClassName('election_candidate_input_btn');
        let len = parent.length;

        for(var a = 0; a < len; a++){
            parent[a].addEventListener('click', function(){
                //Find the parent checkbox_container
                container = findParentByClass('checkbox_container', this, 0);
                let radioBtn = this.parentNode.getElementsByClassName('election_candidate_input')[0];

                if(container == null)
                    return;

                // Unset the no confidence votes
                let inputs = container.getElementsByClassName('election_no_confidence');
                let inputLen = inputs.length;
                for(var a = 0; a < inputLen; a++){
                    inputs[a].checked = false;
                    inputs[a].parentNode.getElementsByClassName('election_input_btn')[0].classList.toggle('click', false);
                }

                // Validate the inputs
                inputs = container.getElementsByClassName('election_candidate_input');
                inputLen = inputs.length;
                let rowLen = Math.sqrt(inputLen);

                let currentCol = parseInt(radioBtn.dataset.col);
                let currentRow = parseInt(radioBtn.dataset.row);
                
                /*
                    CLEARS INPUTS VERTICALLY
                    Disable if you want to disable vertical clearing
                */
                for(var b = 0; b < rowLen; b++){
                    let targetInput = inputs[parseInt(radioBtn.dataset.col) + rowLen * b];
                    targetInput.checked = false;
                    targetInput.parentNode.getElementsByClassName('election_input_btn')[0].classList.toggle('click', false);
                }


                /*
                    CLEARS INPUTS HORIZONTALLY
                    Disable if you want to disable horizontal clearing
                */
                for(var b = currentRow * rowLen; b < currentRow * rowLen + rowLen; b++){
                    let targetInput = inputs[b];
                    inputs[b].checked = false;
                    targetInput.parentNode.getElementsByClassName('election_input_btn')[0].classList.toggle('click', false);
                }

                this.classList.toggle('click');
                radioBtn.checked = this.classList.contains('click');
            });
        }
        initSerialBtns();

        parent = document.getElementsByClassName('election_no_confidence_btn');
        len = parent.length;

        for(var a = 0; a < len; a++){
            parent[a].addEventListener('click', function(){
                let radioBtn = this.parentNode.getElementsByClassName('election_no_confidence')[0];
                this.classList.toggle('click');
                radioBtn.checked = this.classList.contains('click');

                if(radioBtn.checked === true){
                    container = findParentByClass('checkbox_container', this, 0);
                    let inputs = container.getElementsByClassName('election_candidate_input');
                    let inputLen = inputs.length;
                    for(var a = 0; a < inputLen; a++){
                        let targetInput = inputs[a];
                        targetInput.checked = false;
                        targetInput.parentNode.getElementsByClassName('election_input_btn')[0].classList.toggle('click', false);
                    }
                }
            });
        }
    }

    // Recursively finds the parent element with the target class
    function findParentByClass(targetClass, ele, limit, callback){
        if(ele.classList.contains(targetClass) === true){
            return ele;
        }else if(ele.parentNode !== undefined && limit < 10)
            return findParentByClass(targetClass, ele.parentNode, limit + 1, callback)
        else
            return null;
    }

    function initRandomization(callback){
        let parent = document.getElementsByClassName('candidate_row_container');
        let len = parent.length;

        for(var a = 0; a < len; a++){
            for (var i = parent[a].children.length; i >= 0; i--) {
                parent[a].appendChild(parent[a].children[Math.random() * i | 0]);
            }
        }

        for(var a = 0; a < len; a++){
            let inputs = parent[a].getElementsByClassName('election_candidate_input');
            let inputLen = inputs.length;
            let rowLen = Math.sqrt(inputLen);
            for(var b = 0; b < inputLen; b++){
                inputs[b].dataset.row = Math.floor(b / rowLen);
                inputs[b].dataset.col = Math.floor(b % rowLen);
            }
        }

        callback();
    }
    initRandomization(initInputManagers);
</script>

<!-- Serializes the input fields -->
<script>
    function toggleError(status){
        document.getElementById('client-error').classList.toggle('active', status);
    }

    // Serializes the inputs into the election object
    function serializeModules(){
        let parent = document.getElementsByClassName('election_module');
        let len = parent.length;

        let election = {};
        for(var a = 0; a < len; a++){
            let currElection = parent[a].dataset.election;
            election[currElection] = {};

            let inputs = parent[a].getElementsByClassName('election_input');
            let inputLen = inputs.length;
            let rowLen = Math.sqrt(inputLen);

            // Initialize the rows
            for(var b = 0; b < rowLen; b++){
                election[currElection][b] = null;
            }
            
            // Set the column values
            for(var b = 0; b < inputs.length; b++){
                if(inputs[b].checked){
                    let candidate = findParentByClass('row', inputs[b], 0);
                    candidate = candidate.getElementsByClassName('candidate')[0];

                    // election : category : ranking = name
                    election[currElection][parseInt(inputs[b].dataset.col) + 1] = candidate.innerHTML;
                }
            }
        }

        // Quick validation of the election object
        for(var a = 0; a < len; a++){
            let currElection = parent[a].dataset.election;
            let keys = Object.keys(election[currElection]);
            let keyLen = keys.length;
            for(var b = 0; b < keyLen; b++){
                // None of the options can be null
                if(b != 0 && election[currElection][keys[b]] == null){
                    return toggleError(true);
                } else if(b == 0 && election[currElection][keys[b]] !== null){
                    break;
                }
            }
        }

        toggleError(false);
        console.log("THIS ELECTION DATA IS VALID");

        sendData(election, '{{ site.data.election.fall2019.votesURL }}', function(err, response, responseText){
            console.log("THIS IS THE SEND DATA CALLBACK");
            console.log(err);
            console.log(response);

            if(err){ // Handle the error
                document.getElementById('ballot_display').classList.toggle('error');
            } else {
                document.getElementById('ballot_display').classList.toggle('voted');
                document.getElementById('ballot_closing_statement').innerHTML = responseText;
            }
        });
    }
</script>

<script>
    // Response Reading
    function readBody(xhr) {
        var data;
        if (!xhr.responseType || xhr.responseType === "text") {
            data = xhr.responseText;
        } else if (xhr.responseType === "document") {
            data = xhr.responseXML;
        } else {
            data = xhr.response;
        }
        return data;
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Form sending, set encode = true to stringify JSON
    function sendData(data, url, callback) {
        console.log("SENDING DATA");
        var XHR = new XMLHttpRequest();
        var urlEncodedData = JSON.stringify({
            scs_key: getParameterByName('x'),
            vote: data,
        });
        var urlEncodedDataPairs = [];
        var name;
    
        XHR.onreadystatechange = function() {
            if (XHR.readyState == 4) {
                try {
                    return callback(null, XHR, readBody(XHR));
                } catch(err){
                    return callback("ERROR IN POST REQUEST");
                }
            }
        }
    
        // Define what happens on successful data submission
        XHR.addEventListener('load', function(event) {

        });

        
    
        // Define what happens in case of error
        XHR.addEventListener('error', function(event) {

        });
    
        // Set up our request
        XHR.open('POST', url);
    
        // Add the required HTTP header for form data POST requests
        XHR.setRequestHeader('Content-Type', 'application/json');
    
        console.log(urlEncodedData);
        
        // Finally, send our data.
        XHR.send(urlEncodedData);
    }
</script>
