function writeHeader(pwd) {
    
    $('.nav-container').append("<div class=row></div>");
    
    // Menu for larger devices
    var inlineNav = 
        "<div id=inline-nav>" +
            "<ul class=col-md-12>" +
                "<li>" +
                    "<nav class='navbar navbar-default'>" +
                        "<div class=container-fluid>" +
                            "<div class=navbar-header>" +
                                "<a class=navbar-brand href=" + pwd + "/index.html><h1>The HiViE</h1></a>" +
                            "</div>" +
                        "<ul id=mySidenav class='nav navbar-nav'>" +
                            "<li><a href=" + pwd + "/index.html>Home</a></li>" +
                            "<li><a href=#>Culture</a></li>" +
                            "<li><a href=" + pwd + "/pages/flower-all.html>Flower</a></li>" +
                            "<li><a href=" + pwd + "/pages/tea-all.html>Hi-Tea</a></li>" +
                            "<li><a href=" + pwd + "/pages/trending.html>Trending</a></li>" +
                            "<li><a href=" + pwd + "/pages/merch.html>Shop</a></li>" +
                        "</ul>" +
                        "</div>" +
                    "</nav>" +
                "</li>" +
                "<li>" +
                    "<div id=current-deals>" +
                        "<ol>" +
                            "<li><h2>Today's Deals:</h2></li>" +
                            "<li style=padding-left:20px><h2>Deal One</h2></li>" +
                        "</ol>" +
                    "</div>" +
                "</li>" +
                "<li>" +
                    "<div>" +
                        "<div id=nav-account>" +
                            "<span class='glyphicon glyphicon-user' style=color:#EDEDEE>" + 
                                "</span> / <span class='glyphicon glyphicon-shopping-cart' style=color:#EDEDEE></span>" +
                        "</div>" +
                    "</div>" +
                "</li>" +
            "</ul>" +
        "</div>";
    
    // Menu for smaller devices
    var smallNav = 
        "<div id=smallnav-container>" +
            "<ul>" +
                "<li>" +
                    "<div id=hivie class=col-md-2>" +
                        "<a href=" + pwd + "/index.html><h1>The HiViE</h1></a>" +
                    "</div>" +
                "</li>" +
                "<li>" +
                    "<div class='nav-small col-md-2'>" +
                        "<div id=mySidenav-small class=sidenav>" +
                            "<a href=javascript:void(0) class=closebtn onclick=closeNav()>×</a>" +
                            "<a class=nav-items href=" + pwd + "/index.html>Home</a>" +
                            "<a class=nav-items href=" + pwd + "/#>Culture</a>" +
                            "<a class=nav-items href=" + pwd + "/pages/flower-all.html>Flower</a>" +
                            "<a class=nav-items href=" + pwd + "/pages/tea-all.html>Hi-Tea</a>" +
                            "<a class=nav-items href=" + pwd + "/#>Trending</a>" +
                            "<a class=nav-items href=" + pwd + "/pages/merch.html>Shop</a>" +
                        "</div>" +
                        "<span onclick=openNav()>☰</span>" +
                    "</div>" +
                "</li>" +
            "</ul>" +
        "</div>";
    
    $('.row').append(inlineNav);
    $('.row').append(smallNav);
}

function openNav() {
    var sidenav;
    var wdth;
    

    sidenav = 'mySidenav-small';
    wdth = '380px';

    
    $("#" + sidenav).css("width", wdth);
    $(".nav-items").animate({ opacity: 1}, "fast", "linear", function() {
        $(this).fadeIn()
    });
    
    //document.getElementById(sidenav).style.width = wdth;
}

function closeNav() {
    var sidenav;
    
    sidenav = 'mySidenav-small';
    
    $(".nav-items").fadeOut("fast"); //animate({ opacity: 0}, "fast", "linear", $(".nav-items")).fadeOut("fast");
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
