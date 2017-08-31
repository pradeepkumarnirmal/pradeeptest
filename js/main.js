	(function($) {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
    new WOW().init();
    jQuery('nav#mobile-menu1').meanmenu();
    $('.dropdown-toggle').dropdown()
    $('#ensign-nivoslider').nivoSlider({
        autoplay: true,
        slices: 15,
        animSpeed: 500,
        pauseTime: 5000,
        directionNav: true,
        pauseOnHover: true,
        resoinsive: true,
    });
    $('#ensign-nivoslider3').nivoSlider({
        autoplay: true,
        slices: 15,
        animSpeed: 500,
        pauseTime: 5000,
        directionNav: true,
        pauseOnHover: true,
    });
    $(".active-hot-deals").owlCarousel({
        autoPlay: 3000,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 1,
        autoplayHoverPause: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1169, 1],
        itemsTablet: [991, 1],
        itemsTabletSmall: [767, 1],
        itemsMobile: [479, 1],
        stopOnHover: true
    });
    $(".active-bestseller").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1169, 1],
        itemsTablet: [991, 1],
        itemsTabletSmall: [767, 1],
        itemsMobile: [479, 1],
    });
    $(".active-sidebar-banner").owlCarousel({
        autoPlay: 3000,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 1,
        autoplayHoverPause: false,
        transitionStyle: "fade",
        itemsDesktop: [1169, 1],
        itemsTablet: [991, 1],
        itemsTabletSmall: [767, 1],
        itemsMobile: [479, 1],
    });
    $(".active-recent-posts").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 1,
        itemsDesktop: [1169, 1],
        itemsTablet: [991, 1],
        itemsTabletSmall: [767, 1],
        itemsMobile: [479, 1],
    });
    $(".active-product-carosel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 6,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1169, 3],
        itemsTablet: [991, 2],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
    });
    $(".active-small-product").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1169, 2],
        itemsTablet: [991, 2],
        itemsTabletSmall: [767, 1],
        itemsMobile: [479, 1],
    });
    $(".active-brand-logo").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 6,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1169, 5],
        itemsTablet: [991, 4],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
    });
    $(".active-hot-deals-style-2").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 6,
        itemsDesktop: [1169, 4],
        itemsTablet: [991, 3],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
    });
    $(".active-product-carosel-style-2").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 6,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1169, 4],
        itemsTablet: [991, 3],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
    });
    $(".active-recent-posts-style-2").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1169, 4],
        itemsTablet: [991, 3],
        itemsTabletSmall: [767, 2],
        itemsMobile: [479, 1],
    });
    $('.rx-parent').on('click', function() {
        $('.rx-child').slideToggle();
        $(this).toggleClass('rx-change');
    });
    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");
    $('.category-heading').on('click', function() {
        $('.category-menu-list').slideToggle(300);
    });
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });
    
    // jQuery(function() {
    //     jQuery("#slider-range").slider({
    //         range: true,
    //         min: 100,
    //         max: 6000,
    //         values: [150, 500],
    //         slide: function(event, ui) {
    //             $("#amount").val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
    //         }
    //     });
    //     $("#amount").val("₹" + $("#slider-range").slider("values", 0) + " - ₹" + $("#slider-range").slider("values", 1));
    // });
   
})(jQuery);
