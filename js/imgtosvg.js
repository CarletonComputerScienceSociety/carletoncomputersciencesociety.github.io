var xhr;
if (window.XMLHttpRequest) {
    // code for modern browsers
    xhr = new XMLHttpRequest();
} else {
    // code for old IE browsers
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}


// Tag images with a class of svg
(function(global) {
    function svgConverter(globalCall) {
        this.fetchedURL = {};
        this.backgroundURL = {};
        this.interval;

        this.imgToSVG = function() {
            // Grab all the images with the svg tag
            var matches = document.querySelectorAll('.svg');
            // Create a key for all image sources
            fetchedURL = {};
            backgroundURL = {};

            var src;
            len = matches.length;
            for (var i = 0; i < len; i++) {
                src = matches[i].getAttribute('src');
                if (src && !fetchedURL[src])
                    fetchedURL[src] = true;
                else {
                    bSRC = matches[i].getAttribute('background-src');
                    if (bSRC && !backgroundURL[bSRC])
                        backgroundURL[bSRC] = true;
                }
            }

            // Fetch the sources
            var resKeys = Object.keys(fetchedURL);
            len = resKeys.length;
            for (var i = 0; i < len; i++)
                replaceImg(resKeys[i], 'src');

            var resKeys = Object.keys(backgroundURL);
            len = resKeys.length;
            for (var i = 0; i < len; i++)
                replaceImg(resKeys[i], 'background-src');


            this.interval = setInterval(waitTillEmpty.bind(null, fetchedURL), 1);

            function waitTillEmpty(object) {
                if (Object.keys(object).length === 0) {
                    clearInterval(global.svgConverter.interval);

                    if (globalCall)
                        globalCall();
                }
            }

            // Replace the images for the URL
            function replaceImg(svgURL, attr) {
                var xhr = new XMLHttpRequest();
                var s = new XMLSerializer();

                xhr.open('GET', svgURL, true);
                xhr.responseType = 'document';

                xhr.onload = function(e) {
                    var doc = this.response;

                    // If the request fails
                    if(e.target.status === 404)
                        return;

                    // Replace all the images for the src
                    var matches = document.querySelectorAll('[' + attr + ']');
                    var len = matches.length
                    for (var i = 0; i < len; i++) {
                        var src = matches[i].getAttribute(attr);
                        var htmlString = s.serializeToString(doc);

                        if (src.localeCompare(svgURL) === 0) {
                            if (attr.localeCompare('src') === 0) {
                                if(matches[i].tagName.localeCompare('svg') != 0){
                                    $img = document.createElement('svg');

                                    $img.innerHTML = htmlString;
                                    var svgHTML = $img.getElementsByTagName('svg')[0];
    
                                    // Pass values onto svg tag
                                    if (matches[i].className)
                                        svgHTML.className.baseVal = matches[i].className;

                                    if (matches[i].id)
                                        svgHTML.id = matches[i].id;
    
                                    // Replace img with svg
                                    matches[i].parentNode.replaceChild(svgHTML, matches[i]);
                                } else {
                                    $img = matches[i];

                                    $img.innerHTML = htmlString;
                                    var svgHTML = $img.getElementsByTagName('svg')[0];
                                }

                            } else if (attr.localeCompare('background-src') === 0)
                                matches[i].style.backgroundImage = "url(" + src + ")";
                        }
                    }

                    delete fetchedURL[svgURL]; //Remove the fetched url
                };

                xhr.send();
            }
        }
    }

    if (!global.svgConverter)
        global.svgConverter = new svgConverter(global.startMain);
    
    global.svgConverter.imgToSVG();
})(this);