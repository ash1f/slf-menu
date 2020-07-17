//alert();
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".arrow:not(.disable)").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".h.boxes .box").each(function (index, el) {
        $(this).on("mouseenter click", function() {
            $('.dropmenu .h.boxes').removeClass('init');
            $(".h.boxes .box").removeClass('active');
            $(this).addClass('active');
            $('.c-boxes .boxes').removeClass('active');
            $('#boxes_' + (index + 1)).addClass("active")
        });
    });

    $('.toggle-menu').on('mouseenter', function(e){
        e.preventDefault();
        $('.dropmenu').toggleClass('is-open');
        $(this).toggleClass('open');
        $('.dropmenu .h-boxes').fadeToggle();

    });

    $('.dropmenu').on('mouseleave', function(e){
        e.preventDefault();
        $('.dropmenu').removeClass('is-open');
        $('.dropmenu .boxes').removeClass('active');
        $('.dropmenu .h.boxes').addClass('init');
        $('.dropmenu .c-boxes .boxes').removeClass('init');
    });

    $('.hamburger').on('click', function(e){
        e.preventDefault();
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
});