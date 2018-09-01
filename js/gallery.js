$(document).ready(function(){
  //$( 'html' ).height($(document).height());
  //console.log('Height: ' + $( 'html' ).height());
  
  // Gallery stuff
	let images = document.getElementsByClassName("gallery cf")[0].children;
  for(let i = 0; i < images.length; i++) {
    images[i].setAttribute("data-enlarged", '0');
    images[i].addEventListener("click", e=>{
      if(images[i].getAttribute("data-enlarged") !== '1') {
        images[i].style = "width: 100%";
        images[i].children[0].style = "width:100%; height: auto;";
        images[i].setAttribute("data-enlarged", '1');
      } else {
        images[i].style = "width:310px; padding:5px";
        images[i].children[0].style = "width:300px; height:200px;";
        images[i].setAttribute("data-enlarged", '0');
      }
    });
  }
});

