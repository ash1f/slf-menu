/*!
 * Author - Chandana Sameera (UI Developer)
 * Copyright 2020 Digibrush
 */

(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    if(window.innerWidth > 767){
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 50 || $('.dropmenu').hasClass('is-open')) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
            }
        });
    }

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        if(window.pageYOffset < 70){
            $('.header').addClass('dev');        
        }
    });

    $(".arrow:not(.disable)").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".h.boxes .box").each(function (index, el) {
        $(this).on("mouseenter click", function() {
            $('.h.boxes').addClass('hovered');
            $(".h.boxes .box").removeClass('active');
            $(this).addClass('active');
            $('.c-boxes .boxes').removeClass('active');
            $('#boxes_' + (index + 1)).addClass("active")
        });
    });


    $('.toggle-menu').on('mouseenter', function(e){
        e.preventDefault();
        if(!$('.dropmenu').hasClass('is-open')){
            $('.dropmenu').toggleClass('is-open');
        }
        $('.header').addClass('active');
    });
    $('.menu > ul li a:not(.toggle-menu)').on('mouseenter', function(e){
        e.preventDefault();
        $('.dropmenu').removeClass('is-open');
        if(window.pageYOffset < 70){
            $('.header').removeClass('active');
        }
    }); 
    $('.dropmenu .boxes-menu').on('mouseenter', function() {
        $('.toggle-menu .arrow').addClass('rotated');
    });
    $('.dropmenu .boxes-menu').on('mouseleave', function(e){
        e.preventDefault();
        $('.h.boxes').removeClass('hovered');
        $('.toggle-menu .arrow').removeClass('rotated');
        $('.dropmenu').removeClass('is-open');
        $(".h.boxes .box").removeClass('active');
        if(window.pageYOffset < 70){
            $('.header').removeClass('active');
        }
        $('.dropmenu .boxes').removeClass('active');
    });

    $('.hamburger').on('click', function(e){
        e.preventDefault();
        if(window.pageYOffset < 70){
            $('.header').removeClass('active');
        }
        $('.sidenav').slideToggle();
        $(this).toggleClass('open');
    });

    $('.toggle').click(function(e) {
        e.preventDefault();
    
      var $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
          $this.removeClass('active')
      } else {
          $this.parent().parent().find('li .in').removeClass('show');
          $this.parent().parent().find('li .in').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
          $('.mb-menu .toggle').removeClass('active')
          $this.toggleClass('active')
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '.header',
        offset: 75
    });

    // // Collapse Navbar
    // var navbarCollapse = function () {
    //     if ($("#mainNav").offset().top > 100) {
    //         $("#mainNav").addClass("navbar-scrolled");
    //     } else {
    //         $("#mainNav").removeClass("navbar-scrolled");
    //     }
    // };

    // Collapse now if page is not at top
    //navbarCollapse();

    // Collapse the navbar when page is scrolled
    //$(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

//Parallax_one

var timeout;
$('#page-top').mousemove(function (e) {
    if (timeout)
        clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);

});

function callParallax(e) {
    parallaxIt(e, '.img-zero', -50);
    parallaxIt(e, '.img-one', -30);
    parallaxIt(e, '.img-two', -100);
    parallaxIt(e, '.img-three', -50);
    parallaxIt(e, '.img-four', -30);
    parallaxIt(e, '.img-five', -100);

}

function parallaxIt(e, target, movement) {
    var $this = $('#page-top');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    });
}

//Dropdown

jQuery(function ($) {
    function adjustNav() {
        var winWidth = $(window).width(),
                dropdown = $('.dropdown'),
                dropdownMenu = $('.dropdown-menu');

        if (winWidth >= 768) {
            dropdown.on('mouseenter', function () {
                $(this).addClass('show')
                        .children(dropdownMenu).addClass('show');
            });

            dropdown.on('mouseleave', function () {
                $(this).removeClass('show')
                        .children(dropdownMenu).removeClass('show');
            });
        } else {
            dropdown.off('mouseenter mouseleave');
        }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
});