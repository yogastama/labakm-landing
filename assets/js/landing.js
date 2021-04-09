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

    if ($("#faq-accordion")) {
        $('#faq-accordion').on('show.bs.collapse', function (e) {
            $("#faq-accordion .card").removeClass("faq-active");
            $(e.target).closest('.card').addClass('faq-active');
        }).on('hide.bs.collapse', function (e) {
            $(e.target).closest('.card').removeClass('faq-active');
        });
    }

    if ($("[data-content='discount-countdown']").length) {
        var end = new Date($("[data-content='discount-countdown']").data('due'));
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var discountTimer;

        const showRemaining = () => {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(discountTimer);
                $("[data-content='discount-countdown']").remove();
                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            $("[data-content='discount-days']").text(days < 10 ? `0${days}` : days);
            $("[data-content='discount-hours']").text(hours < 10 ? `0${hours}` : hours);
            $("[data-content='discount-minutes']").text(minutes < 10 ? `0${minutes}` : minutes);
            $("[data-content='discount-seconds']").text(seconds < 10 ? `0${seconds}` : seconds);
        }

        discountTimer = setInterval(showRemaining, 1000);
    }
});