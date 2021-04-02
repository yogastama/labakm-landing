$(function () {
    $(document).on("click", ".navbar-menu-toggle, .navbar-menu-backdrop", () => {
        $(".navbar-menu-toggle").toggleClass('active');
        $(".navbar-menu-backdrop").toggleClass('active');
        $(".navbar-menu").toggleClass('active');
    });

    if ($('.home-hero-typed').length > 0) {
        var typed = new Typed('.home-hero-typed', {
            strings: ["dimanapun", "kapanpun", "siapapun"],
            typeSpeed: 30,
            loop: true,
            backDelay: 3000,
            fadeOut: true,
        });
    }

    if ($('.pricing-carousel').length > 0) {
        $('.pricing-carousel').owlCarousel({
            loop: false,
            margin: 30,
            stagePadding: 14,
            nav: true,
            dots: false,
            navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3
                }
            }
        });
    }
});