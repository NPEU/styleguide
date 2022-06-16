/*
    Carousel enhancements
*/

(function() {

    var debug = true;
    //var debug = false;

    var carousel = function() {
        // Get all elements we want to apply this to:
        var elements = document.querySelectorAll('.js-c-carousel');

        Array.prototype.forEach.call(elements, function(el, i) {

            el.classList.add('c-carousel--has-js');

            var nav_links = el.querySelectorAll('.c-hero-carousel__nav a');

            Array.prototype.forEach.call(nav_links, function(nl, i) {
                nl.addEventListener('click', function(e) {
                    if (debug) {
                        console.log('nav link clicked');
                    }

                    var x = window.pageXOffset,
                    y = window.pageYOffset,
                    done = false;

                    window.onscroll = function (e) {
                        if (!done) {
                            document.documentElement.scrollTop = document.body.scrollTop = y;
                            document.documentElement.scrollLeft = document.body.scrollLeft = x;
                            done = true;
                        }
                    }

                    return false;
                });
            });


            // There are multiple ways the Carousel can be scrolled - mouse, keyboard etc.
            // In these scenarios the hash or current link isn't updated, so fix that here:
            // (from https://stackoverflow.com/questions/65952068/determine-if-a-snap-scroll-elements-snap-scrolling-event-is-complete)
            el.querySelector('.c-hero-carousel__scroll-area').addEventListener('scroll', function(e) {
                var atSnappingPoint = Math.ceil(e.target.scrollLeft) % e.target.offsetWidth === 0;
                var timeOut         = atSnappingPoint ? 0 : 150;

                clearTimeout(e.target.scrollTimeout);

                e.target.scrollTimeout = setTimeout(function() {
                    if (!timeOut) {
                        var x = window.pageXOffset,
                        y = window.pageYOffset;
                        window.location.hash = slide_name + '-' + (1 + Math.ceil(e.target.scrollLeft) / e.target.offsetWidth);
                        document.documentElement.scrollTop = document.body.scrollTop = y;
                        document.documentElement.scrollLeft = document.body.scrollLeft = x;

                    }
                }, timeOut);
            });

        });
        
        window.addEventListener('hashchange', function() {
            // Check the hash change actually pertains to a carousel:
            var hash = window.location.hash;
            var slide_name = hash.replace('#', '').replace(/-[0-9]+$/, '');

            if (slide_names.indexOf(slide_name) === -1) {
                return;
            }

            // Add the 'current' class to the link, as this isn't possible in CSS alone:
            var links = document.querySelectorAll('.c-hero-carousel__nav a');
            Array.prototype.forEach.call(links, function(a, i){
                a.classList.remove('current');
            });

            var a = document.querySelector('a[href="' + hash + '"]');
            if (a) {
                a.classList.add('current');
            }
        }, false);
    };

    var ready = function(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(carousel);
})();
