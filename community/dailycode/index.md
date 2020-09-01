---
layout: default
permalink: /community/dailycode/
title: News
published: true
---
<!--div class='search-box'>Search</div-->
<script>
    async function send(){
        const s = {
            "submission": {
                "email":"website@email",
                "correct": true,
                "answer":"ok"
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
            let fetchResponse = await fetch(`https://code-challenge.gigalixirapp.com/api/submissions`, settings);
            let data = await fetchResponse.json();
            console.log(data);
        } catch (e) {
            return e;
        }    

    }
</script>
<div class='content-wrap'>
	<input type="button" value="send" onclick="send()">
</div>
