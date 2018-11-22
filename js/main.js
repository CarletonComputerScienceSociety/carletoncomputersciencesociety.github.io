---
---
/*! skinny-bones-jekyll - v1.0.0 - 2015-11-17 */
! function($) {
    "use strict";
    $.fn.fitVids = function(options) {
        var settings = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var head = document.head || document.getElementsByTagName("head")[0],
                css = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + "</style>", head.appendChild(div.childNodes[1])
        }
        return options && $.extend(settings, options), this.each(function() {
            var selectors = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            settings.customSelector && selectors.push(settings.customSelector);
            var ignoreList = ".fitvidsignore";
            settings.ignore && (ignoreList = ignoreList + ", " + settings.ignore);
            var $allVideos = $(this).find(selectors.join(","));
            $allVideos = $allVideos.not("object object"), $allVideos = $allVideos.not(ignoreList), $allVideos.each(function() {
                var $this = $(this);
                if (!($this.parents(ignoreList).length > 0 || "embed" === this.tagName.toLowerCase() && $this.parent("object").length || $this.parent(".fluid-width-video-wrapper").length)) {
                    $this.css("height") || $this.css("width") || !isNaN($this.attr("height")) && !isNaN($this.attr("width")) || ($this.attr("height", 9), $this.attr("width", 16));
                    var height = "object" === this.tagName.toLowerCase() || $this.attr("height") && !isNaN(parseInt($this.attr("height"), 10)) ? parseInt($this.attr("height"), 10) : $this.height(),
                        width = isNaN(parseInt($this.attr("width"), 10)) ? $this.width() : parseInt($this.attr("width"), 10),
                        aspectRatio = height / width;
                    if (!$this.attr("id")) {
                        var videoID = "fitvid" + Math.floor(999999 * Math.random());
                        $this.attr("id", videoID)
                    }
                    $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * aspectRatio + "%"), $this.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function($) {
    var $w = $(window);
    $.fn.visible = function(partial, hidden, direction) {
        if (!(this.length < 1)) {
            var $t = this.length > 1 ? this.eq(0) : this,
                t = $t.get(0),
                vpWidth = $w.width(),
                vpHeight = $w.height(),
                direction = direction ? direction : "both",
                clientSize = hidden === !0 ? t.offsetWidth * t.offsetHeight : !0;
            if ("function" == typeof t.getBoundingClientRect) {
                var rec = t.getBoundingClientRect(),
                    tViz = rec.top >= 0 && rec.top < vpHeight,
                    bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
                    lViz = rec.left >= 0 && rec.left < vpWidth,
                    rViz = rec.right > 0 && rec.right <= vpWidth,
                    vVisible = partial ? tViz || bViz : tViz && bViz,
                    hVisible = partial ? lViz || lViz : lViz && rViz;
                if ("both" === direction) return clientSize && vVisible && hVisible;
                if ("vertical" === direction) return clientSize && vVisible;
                if ("horizontal" === direction) return clientSize && hVisible
            } else {
                var viewTop = $w.scrollTop(),
                    viewBottom = viewTop + vpHeight,
                    viewLeft = $w.scrollLeft(),
                    viewRight = viewLeft + vpWidth,
                    offset = $t.offset(),
                    _top = offset.top,
                    _bottom = _top + $t.height(),
                    _left = offset.left,
                    _right = _left + $t.width(),
                    compareTop = partial === !0 ? _bottom : _top,
                    compareBottom = partial === !0 ? _top : _bottom,
                    compareLeft = partial === !0 ? _right : _left,
                    compareRight = partial === !0 ? _left : _right;
                if ("both" === direction) return !!clientSize && viewBottom >= compareBottom && compareTop >= viewTop && viewRight >= compareRight && compareLeft >= viewLeft;
                if ("vertical" === direction) return !!clientSize && viewBottom >= compareBottom && compareTop >= viewTop;
                if ("horizontal" === direction) return !!clientSize && viewRight >= compareRight && compareLeft >= viewLeft
            }
        }
    }
}(jQuery), $(document).ready(function() {
    $("#js-menu-trigger,#js-menu-screen").on("click touchstart", function(e) {
        $("#js-menu, #js-menu-screen").toggleClass("is-visible"), $("#js-menu-trigger").toggleClass("slide close"), e.preventDefault()
    })
}), $(document).ready(function() {
    $("#main").fitVids()

    window.navReady = true;
    var parent = document.getElementsByClassName('nav-menu-toggle');
    console.log(parent);
    var len = parent.length;
    for(var i = 0; i < parent.length; i++){
        parent[i].addEventListener('click', function(){
            // document.getElementById('js-menu').classList.toggle()
            console.log("READY: " + window.navReady);

            if(window.navReady){
                var parent = document.getElementById('nav-headers');
                var parentLen;

                var titles = parent.querySelectorAll('h1');
                var currTitle = titles[this.dataset.menuindex];
                // If the clicked nav option is not already toggled
                if(currTitle.classList.contains('inactive') || !currTitle.classList.contains('active')){
                    window.navReady = false;

                    // Toggle off the current nav option
                    parentLen = titles.length;
                    for(var a = 0; a < parentLen; a++){
                        if(!titles[a].classList.contains('inactive') && titles[a].classList.contains('active')){
                            titles[a].classList.toggle('inactive', true);
                            setTimeout(function(targetEle){
                                targetEle.classList.toggle('active', false);
                                targetEle.classList.toggle('inactive', false);
                                document.getElementById('js-menu').classList.toggle('ANIM_DONE', true);
                                window.navReady = true;
                            }.bind(null, titles[a]), 600);
                        } else {
                            titles[a].classList.toggle('active', false);
                            titles[a].classList.toggle('inactive', false);
                        }
                    }
                    titles[this.dataset.menuindex].classList.toggle('inactive', false);
                    titles[this.dataset.menuindex].classList.toggle('active', true);

                    
                    toggleMenuContainer(this.dataset.menuindex);

                    // Tell the menu that it's in an option
                    document.getElementById('js-menu').classList.toggle('IN_OPTION', true);
                }
            }
        });
    }
    // Set the nav back to default
    var parent = document.getElementsByClassName('nav-back');
    var len = parent.length;
    for(var i = 0; i < parent.length; i++){
        parent[i].addEventListener('click', function(){
            if(window.navReady){
                var parent, len;

                var container = document.getElementById('nav-headers');
                var parentLen;
                var titles = container.querySelectorAll('h1');

                parentLen = titles.length;
                for(var a = 0; a < parentLen; a++){
                    titles[a].classList.toggle('inactive', false);
                    titles[a].classList.toggle('active', false);
                }
                titles[0].classList.toggle('active', true);
                document.getElementById('js-menu').classList.toggle('IN_OPTION', false);

                toggleMenuContainer(0);

                setTimeout(function(){
                    document.getElementById('js-menu').classList.toggle('ANIM_DONE', false);
                }, 50);
            }
        });
    }

    //  
    function toggleMenuContainer(targetIndex){
        console.log(targetIndex);
        // Toggle menu container
        parent = document.getElementById('nav-menu-container').getElementsByClassName('nav-menu-group');
        len = parent.length;
        for(var i = 0; i < len; i++){
            if(parent[i].classList.contains('active')){
                parent[i].classList.toggle('inactive', true);

                setTimeout(function(ele){
                    ele.classList.toggle('active', false);
                    ele.classList.toggle('inactive', false);
                    ele.classList.toggle('hold', false);
                }.bind(null, parent[i]), 1200);
            }
        }
        parent[targetIndex].classList.toggle('active', true);
        setTimeout(function(ele){
            ele.classList.toggle('hold', true);
        }.bind(null, parent[targetIndex]), 2000);
    }
}), $("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>");