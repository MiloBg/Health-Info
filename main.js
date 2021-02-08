// Hamburger Menu

$(document).ready(function() {
    // Hamburger Menu animation
    $(".open-button").click(function() {
        $(this).toggleClass("open");
    });
    // Menu fade on mobile
    $(".open-button").click(function(e) {
        e.preventDefault();
        $(".nav-menu").toggleClass("open");
    });
});

$(document).ready(function() {
    $(".nav-menu a").click(function() {
        $(".nav-menu").toggleClass("open");
        $(".open-button").removeClass("open");
    });
});

/* Smooth Scroll */

$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
