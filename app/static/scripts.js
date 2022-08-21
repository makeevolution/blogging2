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
            var current_target_most_specific = event.target; // Targets the path tags directly.
            if (current_target_most_specific.classList.contains("vote-up")){
                var other_vote = "vote-down";
                var iter = 1;
            }
            else if (current_target_most_specific.classList.contains("vote-down")){
                var other_vote = "vote-up";
                var iter = -1;
            }
            else {
                return
            }
            var otherVote = event.currentTarget.querySelector("."+other_vote); //event.currentTarget returns the span class="vote"
            var post_id = $(otherVote).attr("post-id"); // Can take id from other vote since the clicked and the opposing vote refers to the same post!
            
            if ($(otherVote).hasClass("on")) {
                $(otherVote).removeClass("on")
            }
            $.ajax({
                    url: '/vote',
                    type: "PUT",
                    contentType: "application/json",
                    data: JSON.stringify({ "id": post_id, "iter": iter }),
                    event: event,
                    success: function (result) {
                        this.event.currentTarget.querySelector("div p").textContent = result["votes"] //event.currentTarget returns the span class="vote"
                    },
                    error: function (result) {
                        alert("Vote cast failed! Something went wrong")
                    }
                });
                current_target_most_specific.classList.add("on");
        });
        });
})(jQuery);
