$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel({
        interval: 4000
    });
});


function overlayDisplay(name) {
    let cntrName = "#" + name + "-container";
    let ovrlName = "#" + name + "-overlay";

    $(cntrName).hover(function () {
        $(ovrlName).animate({
            opacity: .9
        }).fadeIn('fast');
    }, function () {
        $(ovrlName).animate({
            opacity: 0
        }).fadeOut('fast');
    });
}

$(document).ready(function () {

    let names = ["culture1", "culture2", "culture3", "culture4", "gallery1", "gallery2", "gallery3", "gallery4", "trending1", "trending2", "trending3", "trending4", "tea1", "tea2", "ind", "hyb", "sat"];

    names.forEach(function (item, index, array) {
        console.log("setting functionality on " + item);
        overlayDisplay(item);
    })
});

function openNav() {
    $(".nav-items").animate({ opacity: 1}).fadeIn("fast");
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    $(".nav-items").css("opacity", "0");
    document.getElementById("mySidenav").style.width = "0";
}
