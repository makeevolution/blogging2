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
    $(function () {
        var navbar = document.getElementsByClassName("navbar")[0];
        if (window.pageYOffset >= navbar.offsetTop) {
            navbar.classList.add("sticky-navbar");
        } else {
            navbar.classList.remove("sticky-navbar");
        }
    });
    $(function () {
        $('.vote').click(function (event) {
            var current_target = event.target;
            if (current_target.classList.contains("vote-up")) {
                var vote_down = event.currentTarget.querySelector(".vote-down");
                var post_id = $(vote_down).attr("post-id")
                if ($(vote_down).hasClass("on")) {
                    $(vote_down).removeClass("on")
                }
                if (!$(vote_down).hasClass("on")) {
                    $.ajax({
                        url: '/vote',
                        type: "PUT",
                        contentType: "application/json",
                        data: JSON.stringify({ "id": post_id, "iter": 1 }),
                        event: event,
                        success: function (result) {
                            this.event.currentTarget.querySelector("div p").textContent = result["votes"]
                            console.log(result);
                        },
                        error: function (result) {
                            alert("Vote cast failed! Something went wrong")
                        }
                    }
                    )
                }
                current_target.classList.toggle("on");
            }
            if (event.target.classList.contains("vote-down")) {
                var vote_up = event.currentTarget.querySelector(".vote-up");
                if ($(vote_up).hasClass("on")) {
                    $(vote_up).removeClass("on")
                }
                // add logic to upvote downvote
                event.target.classList.toggle("on");
            }
        });
    })
})(jQuery);
