$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel({
        interval: 4000
    });
});

function writeMenuItems(navid) {
    $(navid).append("<a href=javascript:void(0) class=closebtn onclick=closeNav()>&times;</a>");
    $(navid).append("<a class=nav-items href=index.html>Home</a>");
    $(navid).append("<a class=nav-items href=#>Culture</a>");
    $(navid).append("<a class=nav-items href=./pages/flower-all.html>Flower</a>");
    $(navid).append("<a class=nav-items href=#>Hi-Tea</a>");
    $(navid).append("<a class=nav-items href=#>Trending</a>");
    $(navid).append("<a class=nav-items href=#>Gallery</a>");
}

$(document).ready(function () {
    writeMenuItems('#mySidenav');
    writeMenuItems('#mySidenav-small');
});

var mqSmallScreen = 'only screen and (device-width: 375px) and (device-height: 667px) and (orientation : portrait)';

function openNav() {
    var sidenav;
    var wdth;
    
    if(Modernizr.mq(mqSmallScreen)) {
        sidenav = 'mySidenav-small';
        wdth = '100%';
    } 
    else {
        sidenav = 'mySidenav';
        wdth = '375px';
    }
    
    $(".nav-items").animate({ opacity: 1}).fadeIn("fast");
    document.getElementById(sidenav).style.width = wdth;
}

function closeNav() {
    var sidenav;
    
    if(Modernizr.mq(mqSmallScreen)) {
        sidenav = 'mySidenav-small';
    } 
    else {
        sidenav = 'mySidenav';
    }
    
    $(".nav-items").css("opacity", "0");
    document.getElementById(sidenav).style.width = "0";
}

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
