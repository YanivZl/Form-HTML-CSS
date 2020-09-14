
$(document).ready(function () {
    var to_animate = $('.animate');
    to_animate.click(function() {
        $(to_animate).animate({
            left: '0',
            top: '0',
            height: '70vh',
            width: '100vw',
            position: 'fixed'
        });

        $(to_animate).animate({
            fontSize: '48px'
        });
        $(".form-group").show();
        $(".form-check").show();
        $("#submit > label > svg").css({"top" : "100px" , "height" : "3em" , "width" : "3em"});

    });
});
/*
$("#submit > label > svg").click(function() {
    console.log("Hi");
    console.log($("form").Coding.checked());
if(!$("#Codind").checked && !$("#Surfing").checked && !$("Swimming").check)
    window.alert("You must choose at least one interest.");
});
*/

