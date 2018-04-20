// **** Global Variables ***** //
var BBLList = [];
var lineHeight = 4;
var imgList = [];
var yearSelected = "2009";
var OwnershipList = [];
var AssessTotList = [];
var AddressList = [];
var legendImg;
var summaryImg;
var yearList = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
var stateList = [];
var DEPList = [];
var buildList = [];
var vacantList = [];


// **** Setup Function ****** //
function preload() {
    OwnershipTable = loadTable('data/NewTotal.csv', 'csv', 'header');
    SummaryTable = loadTable('data/SummaryStats.csv', 'csv', 'header');
    legendImg = loadImage("img/Ass3/legend.png");
    summaryImg = loadImage("img/Ass3/ExecutiveSummary.jpg");

}

function setup(){
    var cvs = createCanvas(1200, 4000);
    cvs.parent('mainpage');
    
    var button = createButton('Learn More');
    button.style('background-color', color(25, 23, 200, 50));
    button.position(280, 620);
    button.mousePressed(displayInfo);
    
    textSize(12);
    textFont('Roboto');
    console.log('Setup complete...');
    noLoop();
}

function yearPanel(year) {
  for(var m = 0; m < SummaryTable.getRowCount(); m++) {
    stateList.push(SummaryTable.getString(m, "State Owned").split('-')[0]);
    DEPList.push(SummaryTable.getString(m, "DEP Owned").split('-')[0]);
    buildList.push(SummaryTable.getString(m, "Build It Back").split('-')[0]);
    vacantList.push(SummaryTable.getString(m, "Total Vacant Lots").split('-')[0]);

  }
    var index = year-2009;
    fill(textColor);
    textAlign(RIGHT, CENTER);
    text
    text("Year", 250, 520);
    text("New York State owned", 250, 550);
    text("DEP owned", 250, 580);
    text("Build It Back Program owned", 250, 610);
    text("Total Vacant Lots", 250, 640);
    textAlign(LEFT, CENTER);
    text(year, 280, 520);
    text(stateList[index], 280, 550);
    text(DEPList[index], 280, 580);
    text(buildList[index], 280, 610);
    text(vacantList[index], 280, 640);

}

//Display Window for the information
function displayInfo(){
    rect(440, 100, 640, 480, 20, 20, 20, 20);
    image(imgList[0], 220, 10);
}

// if pressed, show the right windows
function mousePressed() {
  if (mouseY >= 80 && mouseY <= 3646 && mouseX>=420 && mouseX<=780) {
    var number = parseInt((mouseY-80)/lineHeight);
    var lot = BBLList[number];
    textAlign(LEFT, CENTER);
    fill(textColor);
    text(OwnershipList[number],820,mouseY-160);
    text("Assessed Total Value: "+AssessTotList[number],820,mouseY+195);
    text("Address: "+AddressList[number],820,mouseY+175);
    loadImage("img/Ass3/Lot_Images/"+lot.toString()+".png", function(img){
      image(img, 820, mouseY-140);
    });
    fill(0,0,40);
    noStroke();

  beginShape();
    vertex(780,number*lineHeight + 80)
    vertex(780,number*lineHeight + 80 + lineHeight)
    vertex(820,number*lineHeight + 80+ 158)
    vertex(820,number*lineHeight +80 - 138)
  endShape(CLOSE);

  // text(lot, 1000, mouseY + 180); 
    noFill();
    stroke(textColor);
    strokeWeight(1);
    rect(420, number*lineHeight + 80, 360, lineHeight);
    
  } 
  if (mouseY >= 50 && mouseY <= 70 && mouseX>=420 && mouseX<=780) {
    redraw();
    fill(textColor);
    if (mouseX>=420 && mouseX<=460) {
      yearSelected = 2009;
    } else if(mouseX>=460 && mouseX<500) {
      yearSelected = 2010;
    } else if(mouseX>=500 && mouseX<540) {
      yearSelected = 2011;
    } else if(mouseX>=540 && mouseX<580) {
      yearSelected = 2012;
    } else if(mouseX>=580 && mouseX<620) {
      yearSelected = 2013;
    } else if(mouseX>=620 && mouseX<660) {
      yearSelected = 2014;
    } else if(mouseX>=660 && mouseX<700) {
      yearSelected = 2015;
    } else if(mouseX>=700 && mouseX<740) {
      yearSelected = 2016;
    } else if(mouseX>=740 && mouseX<780) {
      yearSelected = 2017;
    }
    yearPanel(yearSelected);
  } 

}

// once the cursor moved, close the windows
function mouseMoved(){
  if (mouseY >= 80 && mouseY <= 3646 && mouseX>=420 && mouseX<=780) {
    if ((mouseX - pmouseX) != 0 || (mouseY - pmouseY) != 0) {
      redraw();
      yearPanel(yearSelected);
    }
  }

}


// draw lines based on ownership and vacancy
function drawOwnership() {
  // define colors for diff onwerships and vacancy
  var Color0 = color(223,28,35);
  var Color1 = color(134,83,96);
  var Color2 = color(11,37,61);
  var Color3 = color(25,39,76);
  var Color4 = color(33,24,66);
  var Color5 = color(11,37,61);
  // var Color6 = color(11,37,61);

  var VColor0 = color(223,28,18);
  var VColor1 = color(134,83,36);
  var VColor2 = color(11,37,31);
  var VColor3 = color(25,39,39);
  var VColor4 = color(33,24,34);
  var VColor5 = color(11,37,31);
  // var VColor6 = color(11,37,31);

  var Color6 = color(0,0,30)
  var ColorHighlightedOne = color(360,100,100);

  for (var i = 0; i < OwnershipTable.getRowCount(); i++) {
    var BBL = OwnershipTable.getString(i, 0).split('-')[0];
    BBLList.push(BBL);
    var owner = OwnershipTable.getString(i,22).split('-')[0];
    OwnershipList.push(owner);
    var assessTot = OwnershipTable.getString(i,23).split('-')[0];
    AssessTotList.push(assessTot);
    var address = OwnershipTable.getString(i,21).split('-')[0];
    AddressList.push(address);
    for (var j = 0; j < 9; j++) {
      var Vacancy = OwnershipTable.getString(i, (j*2+1).toString()).split('-')[0];
      var Ownership = OwnershipTable.getString(i, (j*2+2).toString()).split('-')[0];
      if (Ownership == "0") {
        if (Vacancy == 1) {
          fill(ColorHighlightedOne);
        } else if (Vacancy > 1) {
          fill(Color0);
        } else {
          fill(VColor0);
        }

      } else if (Ownership == "1") {
        if (Vacancy == 1) {
          fill(ColorHighlightedOne);
        } else if (Vacancy > 1) {
          fill(Color1);
        } else {
          fill(VColor1);
        }

      } else if (Ownership == "2") {
        if (Vacancy == 1) {
          fill(ColorHighlightedOne);
        } else if (Vacancy >1) {
          fill(Color2);
        } else {
          fill(VColor2);
        }

      } else if (Ownership == "3") {
        if (Vacancy == 1) {
          fill(ColorHighlightedOne);
        } else if (Vacancy >1) {
          fill(Color3);
        } else {
          fill(VColor3);
        }

      } else if (Ownership == "4") {
        if (Vacancy == 1) {
          fill(ColorHighlightedOne);
        } else if (Vacancy >1) {
          fill(Color4);
        } else {
          fill(VColor4);
        }

      } else if (Ownership == "5") {
        if (Vacancy == 1) {
          fill(ColorHighlightedOne);
        } else if (Vacancy >1) {
          fill(Color5);
        } else {
          fill(VColor5);
        }

      } else {
        fill(Color6);
      }
      noStroke();
      rect(420 + j * 40, 80 + i * lineHeight, 40, lineHeight);
    }
  }

}


// **** Draw Function **** //
function draw(){
  // background
  colorMode(HSB, 360,100, 100);
  var backgroundcolor = color(0,0,30);
  var backgroundcolorLight = color(0,0,40);
  background(backgroundcolor);
  textColor = color(197, 42, 95);

  // draw left panels
  fill(backgroundcolorLight);
  noStroke();
  // rect(20, 50, 360, 60);
  // rect(20, 130, 360, 300);
  rect(40, 400, 320, 60);
  image(summaryImg,40, 50);
  image(legendImg,40, 700);
  fill(textColor);
  textAlign(CENTER, CENTER);
  text("ORDER BY", 100, 420);
  text("LOCATION", 100, 440);
  text("ORDER BY", 200, 420);
  text("LOCATION", 200, 440);
  text("ORDER BY", 300, 420);
  text("LOCATION", 300, 440);
  fill(backgroundcolorLight);
  rect(40, 480, 320, 200);

  drawOwnership();

  // draw the lines and years in the middle panel
  for (var i = 0; i < 9; i++){
    year = (i+2009).toString();
    // colorMode(HSB, 360);
    
    noStroke();
    fill(textColor);
    textAlign(CENTER, CENTER);
    text(year, 440 + i * 40, 60);
    stroke(textColor);
    strokeWeight(0.5); 
    line(420 + i * 40, 60, 420 + i * 40, 3450);
  }
  line(780, 60, 780, 3450);
  // colorMode(HSB, 360);
  line(570, 40, 570, 3450);



}