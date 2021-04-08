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
});