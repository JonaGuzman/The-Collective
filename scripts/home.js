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
            opacity: .97
        }).fadeIn('fast');
    }, function () {
        $(ovrlName).animate({
            opacity: 0
        }).fadeOut('fast');
    });
}

$(document).ready(function () {

    let names = ["tea1", "tea2", "flower1", "flower2", "flower3"];

    names.forEach(function (item, index, array) {
        overlayDisplay(item);
    })
});
