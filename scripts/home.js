$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel({
        interval: 4000
    });
});

// Fades in Overlay
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

    //"culture1", "culture2", "culture3",
    let names = ["tea1", "tea2", "flower1", "flower2", "flower3"];

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
