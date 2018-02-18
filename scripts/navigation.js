function writeHeader(pwd) {
    
    // Menu for larger devices
    var inlineNav = "<div id=inline-nav>" +
                        "<nav class='navbar navbar-default'>" +
                            "<ul id=mySidenav class='nav navbar-nav'>" +
                                "<li><a href=" + pwd + "/index.html><h1>The HiViE</h1></a></li>" +
                                "<li><a href=" + pwd + "/pages/flower-all.html>Flower</a></li>" +
                                "<li><a href=" + pwd + "/pages/tea-all.html>Hi-Tea</a></li>" +
                                "<li><a href=" + pwd + "/pages/trending.html>Trending</a></li>" +
                                "<li><a href=" + pwd + "/pages/merch.html>Shop</a></li>" +
                            "</ul>" +
                        "</nav>" +
                    "</div>" +
                    "<div id=current-deals>" +
                        "<ol>" +
                            "<li><h2>Today's Deals:</h2></li>" +
                            "<li style=padding-left:20px><h2>Deal One</h2></li>" +
                        "</ol>" +
                    "</div>" +
                    "<div id=nav-account>" +
                        "<span class='glyphicon glyphicon-user' style=color:#EDEDEE>" + 
                            "</span> / <span class='glyphicon glyphicon-shopping-cart' style=color:#EDEDEE></span>" +
                    "</div>" +
                    "</div>";
    
    // Menu for smaller devices
    var smallNav = "<div id=smallnav>" +
                        "<ul>" +
                            "<li><a href=" + pwd + "/index.html><h1 style=color:#B97F6D>The HiViE</h1></a></li>" +
                            "<li>" +
                                "<div class=nav-small>" +
                                    "<div id=mySidenav-small class=sidenav>" +
                                        "<a href=javascript:void(0) class=closebtn onclick=closeNav()>×</a>" +
                                        "<a class=nav-items href=" + pwd + "/index.html>Home</a>" +
                                        "<a class=nav-items href=" + pwd + "/pages/flower-all.html>Flower</a>" +
                                        "<a class=nav-items href=" + pwd + "/pages/tea-all.html>Hi-Tea</a>" +
                                        "<a class=nav-items href=" + pwd + "/pages/trending.html>Trending</a>" +
                                        "<a class=nav-items href=" + pwd + "/pages/merch.html>Shop</a>" +
                                    "</div>" +
                                    "<span onclick=openNav()>☰</span>" +
                                "</div>" +
                            "</li>" +
                        "</ul>" +
                    "</div>";
    
    $('.item1').append(inlineNav);
    $('.item1').append(smallNav);
}

function openNav() {
    var sidenav;
    var wdth;
    
    sidenav = 'mySidenav-small';
    
    if (Modernizr.mq('screen and (min-width: 320px) and (max-width: 335px)')) {
        /* zoomed view */
        wdth = '340px';
    }
    
    else if (Modernizr.mq('screen and (max-width: 414px) and (min-width: 400px)')) {
         wdth = '414px';
    } 
    
    else {
        wdth = '380px';
    }
    
    $("#" + sidenav).css("width", wdth);
    $(".nav-items").animate({ opacity: 1}, "fast", "linear", function() {
        $(this).fadeIn()
    });
}

function closeNav() {
    var sidenav;
    
    sidenav = 'mySidenav-small';
    
    $(".nav-items").fadeOut("fast"); //animate({ opacity: 0}, "fast", "linear", $(".nav-items")).fadeOut("fast");
    document.getElementById(sidenav).style.width = "0";
}

function writeFooter() {
    var footer = "<div class=social-media style=font-size: 10px; margin-top: 5px;>" +
                    "<a href=# class='fa fa-facebook'></a>" +
                    "<a href=# class='fa fa-twitter'></a>" +
                    "<a href=# class='fa fa-instagram'></a>" +
                "</div>" +
                "<div id=company-info>" +
                    "<ul>" +
                        "<li id=loc class=text-muted>" +
                            "<ul>" +
                                "<li><h3>Our Store</h3></li>" +
                                "<li>9999 Crenshaw Blvd</li>" +
                                "<li>Los Angeles, CA 90008</li>" +
                                "<li>123-456-7890</li>" +
                                "<li>info@my-domain.com</li>" +
                            "</ul>" +
                        "</li>" +
                        "<li id=hours class=text-muted>" +
                            "<ul>" +
                                "<li><h3>Hours</h3></li>" +
                                "<li>Mon - Fri: 7am - 10pm</li>" +
                                "<li>Saturday: 8am - 10pm</li>" +
                                "<li>Sunday: 8am - 11pm</li>" +
                            "</ul>" +
                        "</li>" +
                        "<li id=help class=text-muted>" +
                            "<ul>" +
                                "<li><h3>Help</h3></li>" +
                                "<li><a class=text-muted href=#>Shipping &amp; Returns</a></li>" +
                                "<li><a class=text-muted href=#>Privacy Policy</a></li>" +
                                "<li><a class=text-muted href=#>FAQ</a></li>" +
                            "</ul>" +
                        "</li>" +
                    "</ul>" +
                "</div>" +
                "<div></div>";

    $(".item6").append(footer);
}

$(document).ready(function () {
    writeFooter();
});
