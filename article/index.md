---
layout: default
permalink: article/
title: Create Article
published: true
---
<style>
#page-wrapper {
	padding: 80px 0;
}
.container {
}

.articleForm {
	max-width: 900px;
	margin: 0 auto;
	padding: 0 20px;
}

form .title, #articleDemoHeader {
	font-size: 180%;
	font-weight: 700;
}
form select {
	margin: 20px 0;
}
form input {
	width: 100%;
	max-width: 320px;
	display: block;
	margin: 20px 0;
}
form input, form textarea {
	padding: 10px;
}


#articleDemo {
	max-width: 1178px;
	margin: 200px auto;
}
#articleDemoHeader {
	margin-bottom: 40px;
}
#articleDemoHTML {
	white-space: pre-wrap;
}
</style>

<div class='container'>
	<form class='articleForm'>
		<!-- {{ site.data.authors }} -->
		<div class='title'>Create Article</div>
		<select id='article_layout'>
			<option>Article</option>
		</select>
		<select id='article_author' data-name='author' placeholder='Select Author'>
			{% for author in site.data.authors %}
				<option>{{ author[0] }}</option>
			{% endfor %}
		</select>
		<input id='article_date' type='date' data-name='filename'/>
		<input id='article_filename' data-name='filename' placeholder='Article Title...'/>
		<!-- <input class='watch' id='article_author' data-name='author' placeholder='Article Author...'/> -->
		<textarea id='article_value' placeholder='Article HTML...' data-name='value' rows='20'></textarea>
		<div id='createBtn'>Create Article</div>
	</form>

	<div id='articleDemo'>
		<div id='articleDemoHeader'>Article Preview:</div>
		<div id='articleDemoHTML'></div>
	</div>
</div>



<script>
	var base = 'https://github.com/CarletonComputerScienceSociety/carletoncomputersciencesociety.github.io/new';
	// var branch = 'add-post';
	var branch = 'add-post';
	var fileLocation = 'community/news/_posts';
	var fileName = 'filename=';
	var bodyValue = 'value=';


	function setCurrentDate(){
		var currDate = new Date();
		var day = currDate.getDate();
		if(day < 10)
			day = '0' + day;

		var month = currDate.getMonth() + 1;
		if(month < 10)
			month = '0' + month;

		var year = currDate.getFullYear();
		document.getElementById('article_date').value = year + '-' + month + '-' + day;
	}
	setCurrentDate();

	function getPostUrl(){
		var layout = document.getElementById('article_layout').value;
		var date = document.getElementById('article_date').value;
		var title = document.getElementById('article_filename').value;
		var author = document.getElementById('article_author').value;
		var value = document.getElementById('article_value').value;
		
		if(date && title && author && value){
			var filestring = date.replace(/\s/g, '-') + '-' + title.replace(/\s/g, '-');
			var filebody = '---%0Dlayout:%20' + layout + "%0Dtitle:%20" + customEncode(title) + '%0Dcategory:%20blog%0Dby:%20' + customEncode(author) + '%0D---%0D';
			filebody += customEncode(value);
			console.log(filebody);

			return base + '/' + branch + '/' + fileLocation + '?' + fileName + filestring + '&value=' + filebody;
		} else {
			displayError();
		}

		return null;
	}
	
	function displayError(){
		var date = document.getElementById('article_date').value;
		var title = document.getElementById('article_filename').value;
		var author = document.getElementById('article_author').value;
		var value = document.getElementById('article_value').value;
	}

	function customEncode(text){
		text = encodeURI(text);
		text = text.replace(/&/g, '%26');
		return text;
	}

	document.getElementById('article_value').addEventListener('input', function(){
		// document.getElementById('articleDemoHTML').write('test');
		console.log(customEncode(this.value));

		document.getElementById('articleDemoHTML').innerHTML = this.value;
	});

	// console.log(base + '/' + branch + '/' + fileLocation + '?' + fileName + '&' + bodyValue);	

	document.getElementById('createBtn').addEventListener('click', function(){
		var post = getPostUrl();
		if(post){
			window.location.href = post;
		}
	});
</script>