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
})(jQuery);
