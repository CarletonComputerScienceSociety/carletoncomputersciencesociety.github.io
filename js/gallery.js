$(document).ready(function(){
  //$( 'html' ).height($(document).height());
  //console.log('Height: ' + $( 'html' ).height());
  
  // Gallery stuff
  let images = document.getElementsByClassName("gallery-image")[0].children;
  for(var a = 0; a < images.length; a++){
    images[a].setAttribute("data-enlarged", '0');
  }

  var parent = document.getElementsByClassName('gallery-image');
  var len = parent.length;
  for(var i = 0; i < len; i++){
    parent[i].addEventListener('click', function(){
      toggleImageClick(this, false);
    });
  }
});

function toggleImageClick(imageWrapper, disableClick){
  var imageChild = imageWrapper.children[0];
  if(disableClick === false && imageChild.getAttribute("data-enlarged") !== '1') {
    var boundBox = imageWrapper.getBoundingClientRect();
    console.log(boundBox.width);
    imageWrapper.style = `width: ${boundBox.width}px; height: ${boundBox.height}px;`;
    imageChild.classList.toggle('click', true);
    imageChild.setAttribute("data-enlarged", '1');
  } else {
    imageWrapper.style = "";
    imageChild.style = "";
    imageChild.children[0].style = "";
    imageChild.classList.toggle('click', false);
    imageChild.setAttribute("data-enlarged", '0');
  }
}

(function() {
  var throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
          if (running) { return; }
          running = true;
           requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
          });
      };
      obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
  var parent = document.getElementsByClassName('gallery-image');
  var len = parent.length;
  for(var i = 0; i < len; i++){
    toggleImageClick(parent[i], true);
  }
});