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



        });
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
