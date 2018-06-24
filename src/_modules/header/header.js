'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var links = $('.header__menu a');
    var url = window.location.pathname;
    var urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'') + '$');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    links.on('click', function(){
        header.removeClass('-open');
        body.removeClass('-hideOverflow');
    });

    $('a[href="#"]').on('click', function(e){
        e.preventDefault();
    });

    $('.header__menu li a').each(function(){
        // and test its normalized href against the url pathname regexp

        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).parents('.header__menu li').addClass('-active');
        }
    });

    if (url == '/' || url == '/home') {
        body.addClass("-home");
    }

    $(window).scroll(function() {
       var scroll = $(window).scrollTop();

       if (scroll >= 400) {
           header.removeClass('-ontop');
       } else {
           header.addClass('-ontop');
       }
    });

    // Select all links with hashes
    var links = $('a[href*="#"]');

    $(document).on('click', 'a[href*="#"]', function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + -100
        }, 1000, function() {
          return false;
        });
      }
    }
    });
};

module.exports = Header;
