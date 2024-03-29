---
layout: default
permalink: /community/dailycode/hard
title: News
published: true
---
<!--div class='search-box'>Search</div-->

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<script>
    MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']]
        }
    };
    async function getQuestions(){
        let response = await fetch(`https://cors.discretemath.ca/https://puzzle.discretemath.ca/api/questions`);
        let data = await response.json()
        let questions = document.querySelector(".questions")
        
        for(let i = 0; i<data.data.length; i++){
            if (data.data[i].difficulty === "Hard"){
            let question = `
            <div class="question">
                <h3>`+data.data[i].title+`</h3>
                <p>`+data.data[i].body+`</h3>
                <div style="margin:auto; margin-top:2em">
                    <input id="`+data.data[i].id+`" class="email-input" style="margin:auto;" placeholder="email (carleton cmail)">
                    <input class="answer-input" style="margin:auto;" placeholder="answer">
                    <br>
                    <input style="margin:auto;" type="button" value="submit" onclick="send()">
                </div>
            </div>
            `
            questions.innerHTML += question
            break
            }
        }
        MathJax.typeset()
    }

    async function send(){
        const s = {
            "submission": {
                "email": document.querySelector(".email-input").value,
                "answer": document.querySelector(".answer-input").value,
                "question_id": document.querySelector(".email-input").id
            }
        }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(s)
        };
        
        try {
            let fetchResponse = await fetch(`https://cors.discretemath.ca/https://puzzle.discretemath.ca/api/submissions`, settings);
            let data = await fetchResponse.json();
            document.querySelector(".result").innerHTML =""
            
            if(data.data.correct){
                document.querySelector(".result").innerHTML ='<h5 style="color:green">That Answer is Correct!</h5>'
            }else{
                document.querySelector(".result").innerHTML ='<h5 style="color:red">That Answer is incorrect.</h5>'
            }

        } catch (e) {
            return e;
        }   
        
        

    }
    getQuestions()
</script>
<div class='content-wrap'>
    <div class="questions"></div>
     <div style="margin:auto; text-align:center">
        <p class="result" style="margin:auto;"></p>
    </div>
    <ul class="small-subpage-list">
        <li>
            <a href="/community/dailycode/">
            <h4>Back</h4>
            </a>
        </li>
    </ul>
</div>
