$(document).ready(function(){
    $("#mobile-icon").click(function(){
        $("#mobile-menu-links").slideToggle();
    });
});

$(document).ready(function(){
    $("#mobile-icon1").click(function(){
        $("#mobile-menu-links").slideToggle();
    });
});

$(window).on("load", function () {
    $(".loader-container").fadeOut(3000);
});