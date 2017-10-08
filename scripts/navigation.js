function writeHeader(pwd) {
    
    var navContents = 
        "<div class=row>" +
            "<ul>" +
                "<li>" +
                    "<div class='nav col-md-2'></div>" +
                    "<div class='nav-small col-md-2'></div>" +
                "</li>" + 
                "<li>" +
                    "<div id=hivie class=col-md-8>" +
                        "<div id=silo-nav>" +
                            "<img src=" + pwd + "/images/home/silo.png />" +
                        "</div>" +
                        "<a href=" + pwd + "/index.html>" + "<h1>The HiViE</h1>" + "</a>" +
                    "</div>" +
                "</li>" +
                "<li>" +
                    "<div class=col-md-2>" +
                        "<div id=nav-account></div>" +
                    "</div>" +
                "</li>" +
            "</ul>" +
        "</div>";
    
    $('.nav-container').append(navContents);

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
    $(navid).append("<a class=nav-items href=./pages/tea-all.html>Hi-Tea</a>");
    $(navid).append("<a class=nav-items href=#>Trending</a>");
    $(navid).append("<a class=nav-items href=./pages/merch.html>Shop</a>");
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

function writeFooter() {
    
    $("#footer-items").append("<div class=social-media-container></div>");
    $("#footer-items").append("<ul>"
                              + "<li id=loc class='col-md-3 text-muted'></li>"
                              + "<li class=col-md-1></li>"
                              + "<li class=col-md-1></li>"
                              + "<li id=hours class='col-md-2 text-muted'></li>"
                              + "<li class=col-md-1></li>"
                              + "<li class=col-md-1></li>"
                              + "<li id=help class='col-md-2 text-muted'></li>"
                              + "</ul>");
    
    $(".social-media-container").append("<a href=# class='fa fa-facebook'></a>" +
                                        "<a href=# class='fa fa-twitter'></a>" +
                                        "<a href=# class='fa fa-instagram'></a>");
    
    
    $("#loc").append("<ul><li><h3>Our Store</h3></li>" 
                                     + "<li>9999 Crenshaw Blvd</li>" 
                                     + "<li>Los Angeles, CA 90008</li>"
                                     + "<li>123-456-7890</li>"
                                     + "<li>info@my-domain.com</li></ul>");
    
    $("#hours").append("<ul><li><h3>Hours</h3></li>" 
                                     + "<li>Mon - Fri: 7am - 10pm</li>" 
                                     + "<li>Saturday: 8am - 10pm</li>"
                                     + "<li>Sunday: 8am - 11pm</li></ul>");
    
    $("#help").append("<ul><li><h3>Help</h3></li>"
                      + "<li><a class=text-muted href=#>Shipping &amp; Returns</a></li>"
                      + "<li><a class=text-muted href=#>Privacy Policy</a></li>"
                      + "<li><a class=text-muted href=#>FAQ</a></li></ul>");
}

$(document).ready(function () {
    writeFooter();
});
