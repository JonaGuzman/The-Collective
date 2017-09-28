function writeMenuHeaders() {
    $('.nav').append("<div id=mySidenav class=sidenav></div>");
    $('.nav').append("<span onclick=openNav()>&#9776;</span>");
    
    $('.nav-small').append("<div id=mySidenav-small class=sidenav></div>");
    $('.nav-small').append("<span onclick=openNav()>&#9776;</span>");

    $('#nav-account').append("<span class='glyphicon glyphicon-user'></span>");
    $('#nav-account').append(" / ") 
    $('#nav-account').append("<span class='glyphicon glyphicon-shopping-cart'></span>");
}

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
    writeMenuHeaders();
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

function writeFooter() {
    $(".social-media-container").append("<a href=# class='fa fa-facebook'></a>");
    $(".social-media-container").append("<a href=# class='fa fa-twitter'></a>");
    $(".social-media-container").append("<a href=# class='fa fa-instagram'></a>");  
}

$(document).ready(function () {
    writeFooter();
});
