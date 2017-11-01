function setContentFlower(flowerName, type, inlineId, desc, catVal) {
    
    var catValues = catVal;
    var progressBar1 = "<li><ol><li style=width:460px;height:21px><div class=progress>" +
                        "<div class='progress-bar progress-bar-success' role=progressbar aria-valuenow=";
    var progressBar2 = "aria-valuemin=0 aria-valuemax=100 style=width:";
    
    var inlineContent = "<div id=flower-name><h3>" + flowerName + "</h3><h4>" + type + "</h4></div>" +
                            "<div id=flower-info><ul>" +
                                "<li style=height:230px><img src=images/flower.jpg /></li>" +
                                "<li><p>" + desc + "</p></li>" +
                                
                                "<li><div class=ratings><ul>" +
                                progressBar1 + catValues[0] +
                                progressBar2 + catValues[0] + "%>Category 1</div></div></li></ol></li>" +            
                                progressBar1 + catValues[1] +
                                progressBar2 + catValues[1] + "%>Category 2</div></div></li></ol></li>" +
                                progressBar1 + catValues[2] +
                                progressBar2 + catValues[2] + "%>Category 3</div></div></li></ol></li>" +
                                progressBar1 + catValues[3] +
                                progressBar2 + catValues[3] + "%>Category 4</div></div></li></ol></li>" +
                                "</ul></div>";
    
    $(inlineId).append(inlineContent);
}

function setContentTea(teaName, type, inlineId, desc, catVal) {
    
    var catValues = catVal;
    
    // TODO: use modernizr to mq the size of the screen return list of categories split into 3 boxes with 3-4 desc each with a checkmark attribute
    var progressBar1 = "<li><ol><li style=width:460px;height:21px><div class=progress>" +
                        "<div class='progress-bar progress-bar-success' role=progressbar aria-valuenow=";
    var progressBar2 = "aria-valuemin=0 aria-valuemax=100 style=width:";
    
    var inlineContent = "<div id=tea-name><h3>" + teaName + "</h3><h4>" + type + "</h4></div>" +
                            "<div id=tea-info><ul>" +
                                "<li style=height:230px><img src=images/tea.jpg /></li>" +
                                "<li><p>" + desc + "</p></li>" +
                                
                                "<li><div class=ratings><ul>" +
                                progressBar1 + catValues[0] +
                                progressBar2 + catValues[0] + "%>Category 1</div></div></li></ol></li>" +            
                                progressBar1 + catValues[1] +
                                progressBar2 + catValues[1] + "%>Category 2</div></div></li></ol></li>" +
                                progressBar1 + catValues[2] +
                                progressBar2 + catValues[2] + "%>Category 3</div></div></li></ol></li>" +
                                progressBar1 + catValues[3] +
                                progressBar2 + catValues[3] + "%>Category 4</div></div></li></ol></li>" +
                                "</ul></div>";
    
    $(inlineId).append(inlineContent);
}

