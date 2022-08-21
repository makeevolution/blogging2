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
    $(function(){
        $('.vote').click(function (event) {
            if (event.target.classList.contains("vote-up")) {
                var vote_down = event.currentTarget.querySelector(".vote-down");
                if ($(vote_down).hasClass("on")){
                    $(vote_down).removeClass("on")
                }
                event.target.classList.toggle("on");
            }
            if (event.target.classList.contains("vote-down")) {
                var vote_up = event.currentTarget.querySelector(".vote-up");
                if ($(vote_up).hasClass("on")){
                    $(vote_up).removeClass("on")
                }
                // add logic to upvote downvote
                event.target.classList.toggle("on");
            }
        });
    })
})(jQuery);
