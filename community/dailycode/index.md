---
layout: default
permalink: /community/dailycode/
title: News
published: true
---
<!--div class='search-box'>Search</div-->
<script>
    
    async function getQuestions(){
        let response = await fetch(`https://puzzle.discretemath.ca/api/questions`);
        let data = await response.json()
        console.log(data)
        let questions = document.querySelector(".questions")
        for(let i = 0; i<data.data.length; i++){
            questions.innerHTML += data.data[i].body
        }
    }
    
    async function send(){
        const s = {
            "submission": {
                "email":"website@email",
                "answer":"ok"
            }
        }

        const settings = {
            method: 'POST',
            mode: 'cors', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                
                //'Access-Control-Allow-Origin': 'http://127.0.0.1:4000',
                //'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                //'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify(s)
        };
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        try {
            let fetchResponse = await fetch(`https://puzzle.discretemath.ca/api/submissions`, settings);
            let data = await fetchResponse.json();
            console.log(data);


        } catch (e) {
            return e;
        }    

    }

    getQuestions()
</script>
<div class='content-wrap'>
    <div class="questions"></div>
	<input type="button" value="send" onclick="send()">
</div>
