(function ($) {
    $(function () {
        $('.show-post-form').click("on", function () {
            $('.show-post-form').toggle('hide');
            $('.make-post-form').toggle('show');
        });
    });
    $(function () {
        $('.hide-post-form').click("on", function () {
            $('.make-post-form').toggle('hide');
            $('.show-post-form').toggle('show');
        });
    });
    $(function() {
        var navbar = document.getElementsByClassName("navbar")[0];
        if (window.pageYOffset >= navbar.offsetTop) {
          navbar.classList.add("sticky-navbar");
        } else {
          navbar.classList.remove("sticky-navbar");
        }
    });
})(jQuery);
