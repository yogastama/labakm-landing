const navbarScroll = (scroll) => {
    if (scroll <= 72) {
        $(".navbar").removeClass("scrolled");
    } else {
        $(".navbar").addClass("scrolled");
    }
}

$(function () {
    navbarScroll($(window).scrollTop());

    $(window).on("scroll", function () {
        return navbarScroll($(this).scrollTop());
    });

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

    if ($("#home-paricle")) {
        particlesJS.load('home-particle', 'assets/json/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }

    if ($("#ui-carousel")) {
        $("#ui-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        $("#ui-carousel").on('changed.owl.carousel', function (e) {
            $(".ui-decoration-elements-circle-item .ui-decoration-elements-circle-item-inner")
                .removeClass("bg-primary animation-water-flow-primary-xs")
                .addClass('bg-secondary animation-water-flow-secondary-xs');

            $(".ui-decoration-elements-circle-item .ui-decoration-elements-circle-item-inner")
                .eq(e.page.index)
                .removeClass('bg-secondary animation-water-flow-secondary-xs')
                .addClass('bg-primary animation-water-flow-primary-xs');
        });

        $(".ui-decoration-elements-circle-item-inner").on("click", function (e) {
            $("#ui-carousel").trigger("to.owl.carousel", [$('.ui-decoration-elements-circle-item-inner').index(this)]);
        });
    }
});