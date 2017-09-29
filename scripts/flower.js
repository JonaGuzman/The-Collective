function inlineTitle(name) {
    $("#inline-content").append("<div id=flower-name><h2>" + name + "</h2>" + "<h4>Type 1</h4>" +"</div>");
}

function inlineItems(imgpath) {
    if(imgpath === "") {
        imgpath = "images/flower.jpg";
    }
    
    var text =  "Consequat ea Investigationes in enim congue. " +
                "Option velit volutpat quod blandit ex. " + 
                "Congue parum praesent aliquam nam clari. " 
                + "Qui praesent quam sollemnes id vulputate.";
    
    var inItems = "<ul><li><img src=" + imgpath + " /></li><li><p>" + text 
                + "</p></li><li><div class=ratings><ul><li><h4>cat1: ***</h4></li>" 
                + "<li><h4>cat2: ****</h4></li><li><h4>cat3: **</h4></li>" 
                + "<li><h4>cat4: *****</h4></li></ul></div></li></ul>";
    
     $("#inline-content").append(inItems);
}
