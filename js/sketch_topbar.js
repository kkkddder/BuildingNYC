// **** Global Variables ***** //
var BBLList = [];
var lineHeight = 3;
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
var lot_bbl = [];
var image_list = [];

var topMar = 20;
var outbox_space = 10;
var inbox_space = 20;
var inbox_lr = 20;

var box_execSum = 200;
var box_legend = 370;
var box_map = 300;

// **** Setup Function ****** //
function preload() {
    OwnershipTable = loadTable('data/NewTotal.csv', 'csv', 'header');
    // SummaryTable = loadTable('data/SummaryStats.csv', 'csv', 'header');
    // legendImg = loadImage("img/Ass3/legend.png");
    // summaryImg = loadImage("img/Ass3/ExecutiveSummary.jpg");

    LotTable = loadTable('data/Lot_img.csv', 'csv', 'header');
    }


function setup(){
  for (var k=0; k<LotTable.getRowCount(); k++){
    var lot_name = LotTable.getString(k,0);
    lot_bbl.push(lot_name);
  }
  for (var p=0; p<lot_bbl.length; p++){
    var img_object = loadImage("img/Ass3/Lot_Images/"+lot_bbl[p].toString()+".png")
    image_list.push(img_object)
  }
    console.log(typeof lot_bbl[3])

    var cvs = createCanvas(1200, 60);
    cvs.parent("mainpage");
    frameRate(300);

    // var button = createButton('Learn More');
    // button.style('background-color', color(25, 23, 200, 50));
    // button.position(230, 595);
    // button.mousePressed(displayInfo);

    textSize(12);
    textFont('Roboto');
    console.log('Setup complete...');
}

var l = function(p) {
    var x = 100;
    var y = 100;
    p.setup = function() {
        p.createCanvas(1200, 60); 
    }
    
    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
    }
}

var myp51 = new p5(l, 'intro');

// function yearPanel(year) {
//   for(var m = 0; m < SummaryTable.getRowCount(); m++) {
//     stateList.push(SummaryTable.getString(m, "State Owned").split('-')[0]);
//     DEPList.push(SummaryTable.getString(m, "DEP Owned").split('-')[0]);
//     buildList.push(SummaryTable.getString(m, "Build It Back").split('-')[0]);
//     vacantList.push(SummaryTable.getString(m, "Total Vacant Lots").split('-')[0]);
//
//   }
//     var index = year-2009;
//     fill(textColor);
//     textAlign(RIGHT, CENTER);
//     text
//     text("Year", 250, 520);
//     text("New York State owned", 250, 550);
//     text("DEP owned", 250, 580);
//     text("Build It Back Program owned", 250, 610);
//     text("Total Vacant Lots", 250, 640);
//     textAlign(LEFT, CENTER);
//     text(year, 280, 520);
//     text(stateList[index], 280, 550);
//     text(DEPList[index], 280, 580);
//     text(buildList[index], 280, 610);
//     text(vacantList[index], 280, 640);
//
// }

//Display Window for the information
// function displayInfo(){
//     fill(textColor);
//     rect(440, 100, 640, 480, 20, 20, 20, 20);
//     img1 = image(wavesImg, 610, 110, 320, 240);
//     fill(255);
//     text(titles[0], 470, 370);
//     text(titles[1], 470, 195, 450, 520);
//
// }

// if pressed, show the right windows

// function mousePressed() {
//   console.log("pressed")
//   if (mouseY >= 80 && mouseY <= 3646 && mouseX>=420 && mouseX<=780) {
//     noLoop();
//       var number = parseInt((mouseY-80)/lineHeight);
//       var lot = BBLList[number];
//       textAlign(LEFT, CENTER);
//       fill(textColor);
//       text(OwnershipList[number],820,mouseY-180);
//       text("Assessed Total Value: "+AssessTotList[number],820,mouseY+195);
//       text("Address: "+AddressList[number],820,mouseY+175);
//   }
// }
//   if (mouseY >= 50 && mouseY <= 70 && mouseX>=420 && mouseX<=780) {
//     redraw();
//     fill(textColor);
//     if (mouseX>=420 && mouseX<=460) {
//       yearSelected = 2009;
//     } else if(mouseX>=460 && mouseX<500) {
//       yearSelected = 2010;
//     } else if(mouseX>=500 && mouseX<540) {
//       yearSelected = 2011;
//     } else if(mouseX>=540 && mouseX<580) {
//       yearSelected = 2012;
//     } else if(mouseX>=580 && mouseX<620) {
//       yearSelected = 2013;
//     } else if(mouseX>=620 && mouseX<660) {
//       yearSelected = 2014;
//     } else if(mouseX>=660 && mouseX<700) {
//       yearSelected = 2015;
//     } else if(mouseX>=700 && mouseX<740) {
//       yearSelected = 2016;
//     } else if(mouseX>=740 && mouseX<780) {
//       yearSelected = 2017;
//     }
//     yearPanel(yearSelected);
//   }
//
// }

// // once the cursor moved, close the windows
// function mouseMoved(){
//   if (mouseY >= 80 && mouseY <= 3646 && mouseX>=420 && mouseX<=780) {
//     if ((mouseX - pmouseX) >2  || (mouseY - pmouseY) >2 ) {
//       loop()
//       // yearPanel(yearSelected);
//     }
//   }
//
// }


// draw lines based on ownership and vacancy
function drawOwnership() {
  // define colors for diff onwerships and vacancy
  var Color0 = color(223,28,35);
  // var Color0 = color(224,31,42);
  var Color1 = color(138,30,44);
  var Color2 = color(11,37,61);
  var Color3 = color(25,39,76);
  var Color4 = color(33,24,66);
  var Color5 = color(11,37,61);
  // var Color6 = color(11,37,61);

  var VColor0 = color(223,28,35,10);
  // var VColor0 = color(224,31,42,20);
  var VColor1 = color(138,30,44,10);
  // var VColor2 = color(11,37,61,10);
  var VColor2 = color(360,100,100);
  var VColor3 = color(25,39,76,10);
  var VColor4 = color(33,24,66,10);
  var VColor5 = color(11,37,61,10);

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
          fill(VColor0);
        } else if (Vacancy > 1) {
          fill(Color0);
        } else {
          fill(VColor0);
        }

      } else if (Ownership == "1") {
        if (Vacancy == 1) {
          fill(VColor1);
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
      if (mouseX>408 && mouseX<840 && i==int((mouseY-topMar)/(lineHeight+1))){
        strokeWeight(1);;
        stroke(0,0,17);
        rect(408 + j * 48, topMar + i * (lineHeight+1), 48, lineHeight);
        strokeWeight(1)
        // stroke(197, 42, 95,20);
        noFill();
        stroke(textColor);
        rect(408, i*(lineHeight+1) + topMar, 432, lineHeight);
        stroke(0,0,17);

        var right_margin1 = 840

        // displaying sat image when hovering
        var number = parseInt((mouseY-topMar)/(lineHeight+1));
        var lot = BBLList[number];

        function checklot(input) {
          return input == lot;}
        var chosen = lot_bbl.findIndex(checklot)
        var chosen_img = image_list[chosen]

        if (i<44){

          var ImageTop = topMar+30

          fill(0,0,17)
          noStroke();
          rect(right_margin1+38, ImageTop-30, 290, 400)
          image(chosen_img, right_margin1+40, ImageTop)
          fill(0,0,30,4)
          noStroke();

          textAlign(LEFT, BOTTOM);
          fill(textColor,30);
          textSize(10);

          fill(textColor,30);
          text("Owner",right_margin1+40,ImageTop-10)
          text("Address", right_margin1+40, ImageTop+320)
          text("Assessed Value", right_margin1+40, ImageTop+340)
          textSize(12);
          text(AddressList[number], right_margin1+90, ImageTop+321)
          text("$"+AssessTotList[number], right_margin1+120, ImageTop+341)
          fill(textColor);
          textSize(16);
          text(OwnershipList[number],right_margin1+80,ImageTop-8);
          textSize(12);
          // textAlign(LEFT, CENTER)
        }else{
          fill(0,0,17)
          noStroke();
          rect(right_margin1+38, mouseY-200, 290, 400)
          image(chosen_img, right_margin1+40, mouseY-140)
          fill(0,0,30,4)
          noStroke();

          textAlign(LEFT, BOTTOM);
          fill(textColor,30);
          textSize(10);

          fill(textColor,30);
          text("Owner",right_margin1+40,mouseY-150)
          text("Address", right_margin1+40, mouseY+180)
          text("Assessed Value", right_margin1+40, mouseY+200)
          textSize(12);
          text(AddressList[number], right_margin1+90, mouseY+181)
          text("$"+AssessTotList[number], right_margin1+120, mouseY+201)
          fill(textColor);
          textSize(16);
          text(OwnershipList[number],right_margin1+80,mouseY-148);
          textSize(12);
          textAlign(LEFT, TOP)
        }

    } else{
        strokeWeight(1);
        stroke(0,0,17);
        rect(408 + j * 48, topMar + i * (lineHeight+1), 48, lineHeight);
        noStroke();
        textAlign(LEFT, TOP)
      }

    }
  }

}

function ExecutiveSummary(){
    var intro1 = "Hurricane Sandy struck the eastern coast of America in October 2012 with devastating impact. Sandy obliterated parts of the Jersey shore and triggering a record storm surge in New York harbor that covered nearly a fifth of the city\'s land and flooded road and tunnels. As waves battered the shore, electricity went out for millions of people. More than one hundred people died, mostly drowned in homes and cars. In New York City alone, 150,000 homes were damaged, with total economic damage of around $75 billion."

    // Executive summary
   fill(0,0,30,10)
   rect(40,topMar,320,box_execSum)
   fill(197, 42, 95)
   textAlign(TOP,LEFT)
   textStyle(ITALIC)
   text(intro1, 40+inbox_lr, topMar+inbox_space, 320-(inbox_lr*2), 800)
   fill(197, 42, 95, 90)
   textStyle(NORMAL)
   // text(intro2, 50, 275, 300, 200)
}

function narrative(){

  var intro1 = "Our site focuses on the particularly hard-hit Staten Island eastern coast neighborhoods of Oakwood Beach, Graham Beach and Ocean Breeze. Because this area is low-lying and in the flood plain, it is particularly vulnerable; in the Sandy surge, 43 people there lost their lives. Some of the survivors had to climb furniture as their homes filled with water, waiting for rescue. People with damaged homes in Staten Island have sought help from two main recovery programs: People with damaged homes in Staten Island have sought help from two main recovery programs: People with damaged homes in Staten Island have sought help from two main recovery programs:"

  var bluebelt = ""

  var housingTrust = "New York governor Andrew Cuomo set up a buyout program in Staten Island that pursued a vision of managed retreat through homeowner buyouts, with the goal of returning low-lying flood prone land to wetlands, where it could serve its natural buffer function to protect the coast. The Governor’s Office of Storm Recovery (GOSR) started offering buyouts in early 2014, with a 90% participation rate in Oakwood."

  var builditback = "Build it Back, run by the city, is a $648m federally funded effort that uses contractors to restore damaged homes, elevate ones in flood prone areas, or else buy property throughout NYC. Some 24,000 New Yorkers have registered for the program, but one in five eligible people still haven’t had their homes repaired."

  var topNarr = topMar+box_execSum+box_legend+box_map+(outbox_space*3)

  var paragraph = 220

  // big text box
  fill(0,0,30,10)
  rect(40,topNarr,320,1720)

  textAlign(TOP,LEFT)
  fill(197, 42, 95)
  textSize(14)
  text("The story of Oakwood Beach", 40+inbox_lr, topNarr+inbox_space)
  textSize(12)

  tint(100,50)
  image (damage, 60,topNarr+50, 280, 200)
  tint(100,100)

  // Intro1
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(intro1, 40+inbox_lr, topNarr+50+200+inbox_space, 320-(inbox_space*2), 800)
  fill(197, 42, 95, 90)

  // Intro2
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(intro1, 40+inbox_lr, topNarr+50+200+paragraph+inbox_space, 320-(inbox_space*2), 800)
  fill(197, 42, 95, 90)

  var midNarr = (topNarr+50+200+paragraph*2+inbox_space*2) - 10

  textSize(14)
  text("Staten Island Blue Belt", 40+inbox_lr, midNarr)
  text("Governor's Office of Storm Recovery", 40+inbox_lr, midNarr+40+paragraph)
  text("Project Build it Back", 40+inbox_lr, midNarr+40+30+5+200+inbox_space+paragraph*2)
  textSize(12)

  // Paragraph - SI Blue Belt
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(intro1, 40+inbox_lr, midNarr+30, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  // Paragraph - GOSR
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(intro1, 40+inbox_lr, midNarr+40+30+paragraph, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  // Demolition Image
  tint(100,30)
  image (demo, 60,midNarr+40+30+5+paragraph*2, 280, 200)
  tint(100,100)

  // Paragraph - Project Build it back
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(intro1, 40+inbox_lr, midNarr+40+60+5+200+inbox_space+paragraph*2, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  var endNarr = topNarr+1720+outbox_space

  // Take-away box
  fill(0,0,30,10)
  rect(40,endNarr,320,740)

  // Jack-o-lantern houses
  textSize(14)
  fill(197, 42, 95)
  text("Oakwood Beach Today", 40+inbox_lr, endNarr+inbox_space)
  textSize(12)

  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(intro1, 40+inbox_lr, endNarr+50, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  // jack-o-lantern image
  tint(100,55)
  image (jacko, 60, endNarr+50+paragraph+inbox_space, 280, 200)
  tint(100,100)

  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(intro1, 40+inbox_lr, endNarr+50+200+paragraph+inbox_space*2, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

}

function legend_top(){
  textSize(12);
  fill(197, 42, 95, 90);

  textAlign(LEFT, CENTER)
  text("Private Ownership", 880, 17)
  text("Not Vacant", 900, 34)
  text("Vacant", 900, 49)

  text("State Ownership", 1020, 17)
  text("Not Vacant", 1040, 34)
  text("Vacant", 1040, 49)

  text("State Ownership", 1020, 74)
  text("Not Vacant", 1040, 91)
  text("Vacant", 1040, 106)

  fill(223,28,35)
  rect(880,29,10,10)
  fill(223,28,35,10)
  rect(880,44,10,10)

  fill(223,28,35)
  rect(1020,29,10,10)
  fill(223,28,35,10)
  rect(1020,44,10,10)

}

function legend(){

  var topLegend = topMar+box_execSum+outbox_space
  var textr = 300

  fill(0,0,30,10)
  rect(40,topLegend,320,box_legend)

  textSize(12);
  fill(197, 42, 95, 90);

  textAlign(RIGHT, TOP)
  text("Private Ownership", textr, topLegend+20)

  text("State Ownership - Housing Trust Fund Co.", textr, topLegend+90)

  text("Municipal Ownership - Project Built it Back", textr, topLegend+160)

  text("Dep. of Environmental Protection", textr, topLegend+230)

  text("Municipal Ownership - other deparments", textr, topLegend+300)

  textStyle(ITALIC)

  text("Occupied", textr, topLegend+40)
  text("Vacant", textr, topLegend+60)

  text("Occupied", textr, topLegend+110)
  text("Vacant", textr, topLegend+130)

  text("Occupied", textr, topLegend+180)
  text("Vacant", textr, topLegend+200)

  text("Occupied", textr, topLegend+250)
  text("Vacant", textr, topLegend+270)

  text("Occupied", textr, topLegend+320)
  text("Vacant", textr, topLegend+340)

  textStyle(NORMAL)
  textAlign(RIGHT, CENTER)


  var boxp = 310
  var bs = 18

  fill(223,28,35)
  rect(boxp,topLegend+37,bs,bs)
  fill(223,28,35,10)
  rect(boxp,topLegend+57,bs,bs)

  fill(138,30,44)
  rect(boxp,topLegend+107,bs,bs)
  fill(138,30,44,10)
  rect(boxp,topLegend+127,bs,bs)

  fill(11,37,61)
  rect(boxp,topLegend+177,bs,bs)
  fill(11,37,61,10)
  rect(boxp,topLegend+197,bs,bs)

  fill(25,39,76)
  rect(boxp,topLegend+247,bs,bs)
  fill(25,39,76,10)
  rect(boxp,topLegend+267,bs,bs)

  fill(33,24,66)
  rect(boxp,topLegend+317,bs,bs)
  fill(33,24,66,10)
  rect(boxp,topLegend+337,bs,bs)
}

function locate_map(){

  var topMap = topMar+box_execSum+box_legend+(outbox_space*2)

  fill(0,0,30,10)
  rect(40,topMap,320,box_map)

  tint(100,10)
  image(SI_map, 70, topMap+20,260,260)
  tint(100,100)

}

function final(){
  // image (final_img, 410, 3400, 430, 307)
}

function draw(){
    myp51;

  colorMode(HSB, 360, 100, 100, 100);
  var backgroundcolor = color(0,0,17);
  var backgroundcolorLight = color(0,0,30,10);
  background(backgroundcolor);
  textSize(12)
  textColor = color(197, 42, 95);

  noStroke();

  // draw the lines and years in the middle panel
  for (var i = 0; i < 9; i++){
    years = (i+2009).toString();
    // colorMode(HSB, 360);

    noStroke();
    fill(textColor);
    textAlign(CENTER, CENTER);
    text(years, 432 + i * 48, 40);
    textAlign(TOP,RIGHT)


  }

  stroke(360,100,100)
  // colorMode(HSB, 360);
  line(582, 0, 582, 3750);
  noStroke();

}

