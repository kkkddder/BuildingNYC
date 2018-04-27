// **** Global Variables ***** //
var BBLList = [];
var lineHeight = 3;
var imgList = [];
var yearSelected = 2009;
var OwnershipList = [];
var AssessTotList = [];
var AddressList = [];
var jackoList = [];
var legendImg;
var summaryImg;
var yearList = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
var stateList = [];
var DEPList = [];
var buildList = [];
var vacantList = [];
var lot_bbl = []
var image_list = []

var topMar = 20
var outbox_space = 10
var inbox_space = 20
var inbox_lr = 20

var box_execSum = 200
var box_legend = 290
var box_map = 300

var OwnershipTable;
var verBar = "";

// var yearPanelFirst = 0;
// var drawOwnershipFirst = 0;
var view;
// var yearHighlighted;
var sortHighlighted = 1;
var x = 435;


// **** Setup Function ****** //
function preload() {
    LocationTable = loadTable('data/NewTotal2.csv', 'csv', 'header');
    LotValueTable = loadTable('data/NewTotalLotValue2.csv', 'csv', 'header');
    LotAreaTable = loadTable('data/NewTotalLotArea2.csv', 'csv', 'header');
    SummaryTable = loadTable('data/SummaryStats.csv', 'csv', 'header');
    // SummaryTable = loadTable('data/SummaryStats.csv', 'csv', 'header');
    // legendImg = loadImage("img/Ass3/legend.png");
    // summaryImg = loadImage("img/Ass3/ExecutiveSummary.jpg");
    wavesImg = loadImage("img/Ass3/Waves.png");
    SI_map = loadImage("img/Ass3/SI.png")
    damage = loadImage("img/Ass3/Damage.jpg")
    demo = loadImage("img/Ass3/Demo.png")
    jacko = loadImage("img/Ass3/jacko.png")

    SI_map1 = loadImage("img/Ass3/SIMap1.png")
    SI_map2 = loadImage("img/Ass3/SIMap2.png")

    jacko = loadImage("img/Ass3/jacko.png")

    final_img = loadImage("img/Ass3/finalimg.jpg")

    LotTable = loadTable('data/Lot_img.csv', 'csv', 'header');

    view = loadImage("img/Ass3/Combined5.png");
    lineChart = loadImage("img/Ass3/LineChart.png");
    // view2 = loadImage("img/Ass3/AREA.png");
    // view3 = loadImage("img/Ass3/VALUE.png");

    endimg = loadImage("img/Ass3/ENDFinal2.png")

    OwnershipTable = LocationTable;
    // view = view1;
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

    var cvs = createCanvas(1200, 4865);
    cvs.parent('mainpage');


    frameRate(30);

    // var button = createButton('Learn More');
    // button.style('background-color', color(25, 23, 200, 50));
    // button.position(230, 595);
    // button.mousePressed(displayInfo);

    textSize(12);
    textFont('Roboto');
    console.log('Setup complete...');
    // noLoop();
}

// draw year statistical panel
// function yearPanel(year) {
//   // noLoop();
//   stateList =[];
//   DEPList =[];
//   buildList =[];
//   vacantList =[];
//   for(var m = 0; m < SummaryTable.getRowCount(); m++) {
//     stateList.push(SummaryTable.getString(m, "State Owned").split('-')[0]);
//     DEPList.push(SummaryTable.getString(m, "DEP Owned").split('-')[0]);
//     buildList.push(SummaryTable.getString(m, "Build It Back").split('-')[0]);
//     vacantList.push(SummaryTable.getString(m, "Total Vacant Lots").split('-')[0]);

//   }
//     var index = year-2009;
//     fill(197, 42, 95);
//     // strokeWeight(2);
//     textAlign(RIGHT, CENTER);
//     text("Year", 250, 3363);
//     text("Staten Island Blue Belt", 250, 3393);
//     text("Governor's Office of Storm Recovery", 250, 3423);
//     text("Project Build It Back", 250, 3453);
//     text("Total Vacant Lots", 250, 3483);
//     textAlign(LEFT, CENTER);
//     textSize(14)
//     fill(104,100,100);
//     text(year, 280, 3363);
//     fill(25,39,76);
//     text(DEPList[index], 280, 3393);
//     fill(138,30,44);
//     text(stateList[index], 280, 3423);
//     fill(11,37,61);
//     text(buildList[index], 280, 3453);
//     fill(textColor);
//     text(vacantList[index], 280, 3483);
//     textSize(12)
//     drawOwnershipFirst = 0;
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

function mousePressed() {
  console.log("pressed");
  // if (mouseY >= 80 && mouseY <= 3646 && mouseX>=420 && mouseX<=780) {
  //   noLoop();
  //     var number = parseInt((mouseY-80)/lineHeight);
  //     var lot = BBLList[number];
  //     textAlign(LEFT, CENTER);
  //     fill(textColor);
  //     text(OwnershipList[number],820,mouseY-180);
  //     text("Assessed Total Value: "+AssessTotList[number],820,mouseY+195);
  //     text("Address: "+AddressList[number],820,mouseY+175);
  // }

  // clickable buttons for years
  // if (mouseY >= 3350 && mouseY <= 3370 && mouseX>=435 && mouseX<=840) {
  //   // yearPanelFirst = 1;
  //   redraw();
  //   fill(textColor);
  //   if (mouseX>=435 && mouseX<=480) {
  //     yearSelected = 2009;
  //   } else if(mouseX>=480 && mouseX<525) {
  //     yearSelected = 2010;
  //   } else if(mouseX>=525 && mouseX<570) {
  //     yearSelected = 2011;
  //   } else if(mouseX>=570 && mouseX<615) {
  //     yearSelected = 2012;
  //   } else if(mouseX>=615 && mouseX<660) {
  //     yearSelected = 2013;
  //   } else if(mouseX>=660 && mouseX<705) {
  //     yearSelected = 2014;
  //   } else if(mouseX>=705 && mouseX<745) {
  //     yearSelected = 2015;
  //   } else if(mouseX>=745 && mouseX<795) {
  //     yearSelected = 2016;
  //   } else if(mouseX>=795 && mouseX<840) {
  //     yearSelected = 2017;
  //   }
  //   yearHighlighted = yearSelected - 2009;
  //   yearPanel(yearSelected);

  // }

  // rect(60,1555, 150, 25)
  // rect(60,1815, 225, 25)
  // rect(60,2290, 150, 25)
  // rect(60,2505, 160, 25)
  // noStroke()

  // clickable buttoms for programs
  if(mouseX>(40+inbox_lr)&&mouseX<(210) && mouseY>1555 && mouseY<1580){
    console.log('boom')
    key = 1;
  }else if (mouseX>(40+inbox_lr)&&mouseX<(285) && mouseY>1815 && mouseY<1840){
    console.log('boom')
    key = 2;
  }else if(mouseX>(40+inbox_lr)&&mouseX<(210) && mouseY>2290 && mouseY<2305){
    console.log('boom')
    key = 3;
  }else if(mouseX>(40+inbox_lr)&&mouseX<(220) && mouseY>2945&& mouseY<2970){
    console.log('boom')
    key = 4;
  } else {
    key = 0;
  }

  // clickable buttoms for sortby
  if (mouseX < 360 && mouseX >= 120 && mouseY >= 3370 && mouseY <= 3440) {
    // drawOwnershipFirst = 1;
    // redraw();

    if (mouseX <= 360 && mouseX >= 280 && mouseY >= 3370 && mouseY <= 3440) {
        OwnershipTable = LotValueTable;
        // view = view3;
        verBar = "Lot Value";
        sortHighlighted = 3;
        x = 718;
      } else if (mouseX < 280 && mouseX >= 200 && mouseY >= 3370 && mouseY <= 3440) {
        OwnershipTable = LotAreaTable;
        verBar = "Lot Area";
        // view = view2;
        sortHighlighted = 2;
        x = 576;
      } else if (mouseX < 200 && mouseX >= 120 && mouseY >= 3370 && mouseY <= 3440) {
        OwnershipTable = LocationTable;
        verBar = "";
        // view = view1;
        sortHighlighted = 1;
        x = 435;
      }
    // drawOwnership(OwnershipTable);

  }


}

// once the cursor moved, close the windows
function mouseMoved(){
  // if (mouseY >= 80 && mouseY <= 3646 && mouseX>=420 && mouseX<=780) {
  //   if ((mouseX - pmouseX) >2  || (mouseY - pmouseY) >2 ) {
  //     loop();
  //     // yearPanel(yearSelected);
  //   }
  // }


  // change cursor shape into pointer
  if (mouseX < 360 && mouseX >= 120 && mouseY >= 3370 && mouseY <= 3440) {
        cursor_change();
      }
      else if (mouseX>(40+inbox_lr)&&mouseX<(210) && mouseY>1555 && mouseY<1580) {
        cursor_change();
      } else if (mouseX>(40+inbox_lr)&&mouseX<(285) && mouseY>1815 && mouseY<1840) {
        cursor_change();
      } else if (mouseX>(40+inbox_lr)&&mouseX<(210) && mouseY>2290 && mouseY<2315) {
        cursor_change();
      } else if (mouseX>(40+inbox_lr)&&mouseX<(220) && mouseY>2945 && mouseY<2970) {
        cursor_change();
      } else {
        cursor_clear();
      }

}

// Changes the cursor to an hourglass
function cursor_change() {
  document.body.style.cursor = 'pointer';
}

// Returns the cursor to the default pointer
function cursor_clear() {
  document.body.style.cursor = 'default';
}


// draw the year numbers and call function to draw year statistics
// function drawYear() {
//   for (var i = 0; i < 9; i++){
//     if (i == yearHighlighted) {
//       fill(104,100,100);
//     } else {
//       fill(textColor);
//     }

//     textAlign(CENTER, CENTER);
//     text(yearList[i], 460 + i * 45, 3360);
//   }
//   if (yearPanelFirst == 0) {
//     yearPanel(yearSelected);
//   }
// }

// draw lines based on ownership and vacancy
function drawOwnership() {
  BBLList = [];
  OwnershipList = [];
  AssessTotList = [];
  AddressList = [];
  jackoList = [];
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

  // add the vertical bar title
  textAlign(RIGHT, TOP);
  fill(197, 42, 95,50);
  textSize(10)
  text(verBar, 408, topMar, 27, 100);
  textSize(12)

  for (var i = 0; i < OwnershipTable.getRowCount(); i++) {
    var BBL = OwnershipTable.getString(i, 0).split('-')[0];
    BBLList.push(BBL);
    var owner = OwnershipTable.getString(i,22).split('-')[0];
    OwnershipList.push(owner);
    var assessTot = OwnershipTable.getString(i,23).split('-')[0];
    AssessTotList.push(assessTot);
    var address = OwnershipTable.getString(i,21).split('-')[0];
    AddressList.push(address);
    var jackolot = OwnershipTable.getString(i,24).split('-')[0];
    jackoList.push(jackolot);

    // read the vertical numbers
    var bar = OwnershipTable.getString(i,26).split('-')[0];
    // verBar.push(bar);
    var mark = OwnershipTable.getString(i,25).split('-')[0];
    // verMark.push(mark);

    // draw vertical bars
    textAlign(RIGHT,CENTER);
    if (mark == 1) {
      fill(197, 42, 95,50);
      text(bar, 432, topMar + i * (lineHeight+1));
    }

    for (var j = 0; j < 9; j++) {
      var Vacancy = OwnershipTable.getString(i, (j*2+1).toString()).split('-')[0];
      var Ownership = OwnershipTable.getString(i, (j*2+2).toString()).split('-')[0];
      // var jackolantern = OwnershipTable.getString(i, (j*2+2).toString()).split('-')[0];
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
      if (mouseX>435 && mouseX<840 && i==int((mouseY-topMar)/(lineHeight+1))){
        strokeWeight(1);;
        stroke(0,0,17);
        rect(435 + j * 45, topMar + i * (lineHeight+1), 45, lineHeight);
        strokeWeight(1)
        // stroke(197, 42, 95,20);
        noFill();
        stroke(textColor);
        rect(435, i*(lineHeight+1) + topMar, 405, lineHeight);
        stroke(0,0,17);

        var right_margin1 = 840

        // displaying sat image when hovering
        var number = parseInt((mouseY-topMar)/(lineHeight+1));
        var lot = BBLList[number];
        // console.log(lot);
        // console.log(number);

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

          // print(chosen_img)
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
          // text(BBLList[number], right_margin1+120, ImageTop+360)
          fill(textColor);
          textSize(16);
          text(OwnershipList[number],right_margin1+80,ImageTop-8);
          textSize(12);
          // text(BBLList[number], right_margin1+80,ImageTop+370)
          // textAlign(LEFT, CENTER)
        }else{
          fill(0,0,17)
          noStroke();
          rect(right_margin1+38, mouseY-200, 290, 400)
          image(chosen_img, right_margin1+40, mouseY-140)

          // print(chosen_img)
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
          // text(BBLList[number], right_margin1+120, ImageTop+360)
          fill(textColor);
          textSize(16);
          text(OwnershipList[number],right_margin1+80,mouseY-148);
          textSize(12);

          // text(BBLList[number], right_margin1+80,mouseY+230)
          textAlign(LEFT, TOP)
        }

    } else{
        strokeWeight(1);
        stroke(0,0,17);
        rect(435 + j * 45, topMar + i * (lineHeight+1), 45, lineHeight);
        noStroke();
        textAlign(LEFT, TOP)
      }



    if (key==0){

        // these are here to fix text crispiness issue
        fill(0,0,17)
        rect(60,1555, 150, 25)
        rect(60,1815, 225, 25)
        rect(60,2290, 150, 25)
        rect(60,2945, 200, 25)

        fill(104,100,100)
        noStroke()
        textSize(14)
        fill(textColor)
        text("Staten Island Blue Belt", 40+inbox_lr, 1560)
        text("Governor's Office of Storm Recovery", 40+inbox_lr, 1820)
        text("Project Build it Back", 40+inbox_lr, 2295)
        text("Jack-o-lantern Neighborhood", 40+inbox_lr, 2950)
        textSize(12)
        noFill()


        stroke(0,0,17);
    }

    if (key==1){
      if (Ownership==3){

        // these are here to fix text crispiness issue
        fill(0,0,17)
        rect(60,1555, 150, 25)
        rect(60,1815, 225, 25)
        rect(60,2290, 150, 25)
        rect(60,2945, 200, 25)

        fill(25,39,76)
        noStroke()
        textSize(14)
        text("Staten Island Blue Belt", 40+inbox_lr, 1560)
        fill(textColor)
        text("Governor's Office of Storm Recovery", 40+inbox_lr, 1820)
        text("Project Build it Back", 40+inbox_lr, 2295)
        text("Jack-o-lantern Neighborhood", 40+inbox_lr, 2950)
        textSize(12)
        noFill()

        strokeWeight(1);
        stroke(22,69,96);
        line(845, i*(lineHeight+1) + topMar + (lineHeight/2), 850, i*(lineHeight+1) + topMar + (lineHeight/2));
        stroke(0,0,17);
      }
    }
    else if (key==2){
      if (Ownership==1){

        // these are here to fix text crispiness issue
        fill(0,0,17)
        rect(60,1555, 150, 25)
        rect(60,1815, 225, 25)
        rect(60,2290, 150, 25)
        rect(60,2945, 200, 25)

        fill(138,30,44)
        noStroke()
        textSize(14)
        text("Governor's Office of Storm Recovery", 40+inbox_lr, 1820)
        fill(textColor)
        text("Staten Island Blue Belt", 40+inbox_lr, 1560)
        text("Project Build it Back", 40+inbox_lr, 2295)
        text("Jack-o-lantern Neighborhood", 40+inbox_lr, 2950)
        textSize(12)
        noFill()

        strokeWeight(1);
        stroke(143,61,53);
        line(845, i*(lineHeight+1) + topMar + (lineHeight/2), 850, i*(lineHeight+1) + topMar + (lineHeight/2));
        stroke(0,0,17);
      }
    }
    else if (key==3){
      if (Ownership==2){

        // these are here to fix text crispiness issue
        fill(0,0,17)
        rect(60,1555, 150, 25)
        rect(60,1815, 225, 25)
        rect(60,2290, 150, 25)
        rect(60,2945, 200, 25)

        fill(11,37,61)
        noStroke()
        textSize(14)
        text("Project Build it Back", 40+inbox_lr, 2295)
        fill(textColor)
        text("Staten Island Blue Belt", 40+inbox_lr, 1560)
        text("Governor's Office of Storm Recovery", 40+inbox_lr, 1820)
        text("Jack-o-lantern Neighborhood", 40+inbox_lr, 2950)
        textSize(12)
        noFill()

        strokeWeight(1);
        stroke(8,68,76);
        line(845, i*(lineHeight+1) + topMar + (lineHeight/2), 850, i*(lineHeight+1) + topMar + (lineHeight/2));
        stroke(0,0,17);
      }
    }
    else if (key==4){
      var jacknumber = parseInt(jackoList[i])
      if (jacknumber>0){

        // these are here to fix text crispiness issue
        fill(0,0,17)
        rect(60,1555, 150, 25)
        rect(60,1815, 225, 25)
        rect(60,2290, 150, 25)
        rect(60,2945, 200, 25)

        fill(33,24,66)
        noStroke()
        textSize(14)
        text("Jack-o-lantern Neighborhood", 40+inbox_lr, 2950)
        fill(textColor)
        text("Staten Island Blue Belt", 40+inbox_lr, 1560)
        text("Governor's Office of Storm Recovery", 40+inbox_lr, 1820)
        text("Project Build it Back", 40+inbox_lr, 2295)
        textSize(12)
        noFill()

        strokeWeight(1);
        stroke(33,24,66);
        line(845, i*(lineHeight+1) + topMar + (lineHeight/2), 850, i*(lineHeight+1) + topMar + (lineHeight/2));
        stroke(0,0,17);
      }
    }

    }
  }

  // rect(60,1555, 150, 25)
  // rect(60,1815, 225, 25)
  // rect(60,2290, 150, 25)
  // rect(60,2505, 160, 25)

  // draw read sandy line



  // yearPanelFirst = 0;
  image(view, 435, 3350, 405, 640);


  stroke(360,100,100);
  // colorMode(HSB, 360);
  line(600, 0, 600, 3365);
  noStroke();


  noFill();
  stroke(textColor);
  rect(x, 3394, 120, 550);
  noStroke();


}

function ExecutiveSummary(){
    var exec = "Hurricane Sandy struck the East Coast in October 2012 with devastating impact. Sandy obliterated parts of the Jersey shore and triggered a record storm surge in New York harbor that covered nearly a fifth of the city\'s land and flooded road and tunnels. More than one hundred people died, most drowned in homes and cars. Millions were left in darkness. In New York City alone, 150,000 homes were damaged. Waterfront homes Staten Island were transformed from beachside oases to watery tombs."

    // Executive summary
   fill(0,0,30,10)
   rect(40,topMar,320,box_execSum)
   fill(197, 42, 95)
   textAlign(TOP,LEFT)
   textStyle(ITALIC)
   text(exec, 40+inbox_lr, topMar+inbox_space, 320-(inbox_lr*2), 800)
   fill(197, 42, 95, 90)
   textStyle(NORMAL)
   // text(intro2, 50, 275, 300, 200)
}

function narrative(){

  var intro1 = "Our site focuses on the particularly hard-hit Staten Island neighborhood of Oakwood Beach, where 43 people lost their lives. Low lying, Oakwood has been notoriously plagued with extensive street and home flooding during heavy rains, in addition to surge flooding. It was built on wetlands, swampy land that normally collects water and mitigates floods.  Many of the homes were small, crowded-together bungalows built as summer beach getaways. The developers did not create appropriate drainage infrastructure. And in the 1950s, the bungalows began to be used as year-round residences, which further increased vulnerability to flooding."

  var intro2 ="Most of the residents -- many of them police and fire fighters-- have multi-generational roots in the area. They complained and lobbied for levees to be built, but despite city promises and plans, those levees never came to fruition. There is a reason that Staten Island is sometimes called the forgotten borough. Climate change has only made matters worse, bringing stronger storms and rising sea levels -- a 1.5-foot (0.5 m) rise since 1821 in Staten Island. By 1990, the situation had reached crisis proportions. Staten Island was in an uproar over flooding in newly developed neighborhoods, but the city government considered the cost of implementing traditional storm sewers too high."

  var bluebelt = "In 1990, a new NY environmental protection commissioner spearheaded an innovative approach called the SI Blue Belt program. The city bought out homeowners and then demolished their homes in order to return the land to wetlands. The idea was to expand existing wetlands to create more catchment areas where water could go instead of flooding roads and homes. This approach was successful and cost efficient, as well as popular among residents, increasing the property values of homes that remained. The focus was ameliorating flooding from heavy rains, though not necessarily from surges. "

  var housingTrust = "This second buy-out program was the direct result of Sandy, and focused on the threat from future surges. Set up by NY governor Andrew Cuomo, this $200 million program offered homeowners in Oakwood Beach pre-Sandy market value of their homes. After a buy-out, the homes are demolished and the land seeded, thus returning the land to its natural wetlands state. Sandy was the last straw for many residents. As one resident who took the buyout put it - Everyone loves an ocean view, but it shouldnt cost you your life. Residents banded together to lead a community effort to get buyouts and thus Oakwood was the first neighborhood selected for buyouts, beginning in 2013."



  var builditback = "Run by the city, this $648 million federally funded effort uses contractors to restore damaged homes, elevate ones in flood prone areas, or else buy property throughout NYC. In Oakwood Beach the state buy-out program rather than Build it Back dominated. The latter program was plagued with bureaucratic and other problems. Some 24,000 New Yorkers have registered for it, but one in five eligible people still havent had their homes repaired."

  var conclusion = "Over 90% of Oakwood Beach residents took the state-sponsored buyouts. Where once stood homes, now tall reeds sprout from empty plots of land, deer roam and opossums scurry about freely. And turkeys have flourished so much since the program began that the government ordered a cull. But some hold outs remain among the Oakwood residents remain, and in the surrounding neighborhoods roughly 50% refused the buyouts. These owners placed their hopes instead on competing rebuilding programs."

  var conclusion2 = "The result is a so-called jack-o-lantern or pockmarked effect, where vacant lots and isolated homes randomly dotting the coastal landscape, creating planning challenges for the city. The city is still required to extend services- electiricty, garbage collection, etc., to these homes resulting in costly, inefficient provision. These homes call into question the efficacy of buy out programs and highlight the messiness of post disaster recovery, even years later."

  var conclusion3 = "The predominant theme in Oakwood, however, is transformation. No neighborhood has changed as dramatically as this long-suffering, waterlogged town. And the deer, turkey and opossum couldnt be happier."

  var squish = "The columns at right order the data in three different ways to make buyouts and ownership patterns after Sandy, represented by the red line, more visible. The first column orders the lots by distance from the ocean, with the closest ones at the top and further ones towards the bottom. The chart shows that generally there were more Governor’s Office buy outs after Sandy for lots closer to the ocean. The middle column orders the lots by size, from largest at the top to smaller towards the bottom. A key takeaway there is that smaller lots typically participated in more buyouts. And the third column, at the far right, orders lots by assessed value, from greatest value at the top, to least at the bottom. Here one trend is that demolition is more likely to have occurred for less expensive homes than more expensive ones that were bought out by the state after Sandy."

  var linec = "The line chart at right is a visual representation of descriptive ownership information for Oakwood Beach. The vertical axis represents number of lots, and the horizontal axis is the year. The number of vacant lots (light blue) rose in the immediate aftermath of Sandy, as homes were devastated by the record surge. The steeply rising green line reveals that a great number of residents embraced the $200 million Governor’s Office buyout program designed to help Sandy victims. The Staten Island Blue Belt program (orange) had already been initiated to mitigate flooding by the time Sandy struck, so the hurricane doesnt cause a big change there. And finally, the Buy it Back program is indicated by the very low red dot: this program was completely dwarfed by the Governors Office buyout program. "


  var topNarr = topMar+box_execSum+box_legend+box_map+(outbox_space*3)

  var paragraph = 220

  // big text box
  fill(0,0,30,10)
  rect(40,topNarr,320,1640)

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
  text(intro2, 40+inbox_lr, topNarr+50+200+paragraph+inbox_space, 320-(inbox_space*2), 800)
  fill(197, 42, 95, 90)

  var midNarr = (topNarr+50+200+paragraph*2+inbox_space*2) - 10

  // textSize(14)
  // text("Staten Island Blue Belt", 40+inbox_lr, midNarr)
  // text("Governor's Office of Storm Recovery", 40+inbox_lr, midNarr+40+paragraph)
  // text("Project Build it Back", 40+inbox_lr, midNarr+40+30+5+200+inbox_space+paragraph*2)
  // textSize(12)

  // Paragraph - SI Blue Belt
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(bluebelt, 40+inbox_lr, midNarr+30, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  // Paragraph - GOSR
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(housingTrust, 40+inbox_lr, midNarr+40+30+paragraph, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  // Demolition Image
  tint(100,30)
  image (demo, 60,midNarr+40+30+5+paragraph*2, 280, 200)
  tint(100,100)

  // Paragraph - Project Build it back
  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(builditback, 40+inbox_lr, midNarr+40+60+5+200+inbox_space+paragraph*2, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  var endNarr = topNarr+1640+outbox_space

  // Take-away box
  fill(0,0,30,10)
  rect(40,endNarr,320,855)

  // Jack-o-lantern houses
  // textSize(14)
  // fill(197, 42, 95)
  // text("Oakwood Beach Today", 40+inbox_lr, endNarr+inbox_space)
  // textSize(12)

  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(conclusion, 40+inbox_lr, endNarr+50, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  // jack-o-lantern image
  tint(100,55)
  image (jacko, 60, endNarr+50+paragraph+inbox_space-50, 280, 200)
  tint(100,100)


  fill(197, 42, 95)
  textSize(14)
  text("Oakwood Beach Today", 40+inbox_lr, 2510)
  textSize(12)
  textAlign(TOP,LEFT)
  text(conclusion2, 40+inbox_lr, endNarr+50+paragraph+inbox_space+210, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(conclusion3, 40+inbox_lr, endNarr+50+paragraph+inbox_space+380, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  fill(0,0,30,10)
  // rect(40, endNarr+50+paragraph+inbox_space+15+240, 320, 200);
  // rect(40, endNarr+50+paragraph+inbox_space+15+455, 320, 100);
  rect(40, endNarr+50+paragraph+inbox_space+15+575, 320, 100);

  rect(40, endNarr+50+paragraph+inbox_space+15+675+outbox_space, 320, 310);

  rect(40, endNarr+50+paragraph+(inbox_space*2)+15+675+outbox_space+530, 320, 290);

  fill(197, 42, 95)
  textSize(14)
  text("Reordering the lots", 40+inbox_lr, endNarr+50+paragraph+(inbox_space*2)+15+675+outbox_space)
  textSize(12)

  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(squish, 40+inbox_lr, endNarr+50+paragraph+(inbox_space*2)+15+675+outbox_space+30, 320-(inbox_space*2), 250)
  fill(197, 42, 95, 90)

  fill(197, 42, 95)
  textAlign(TOP,LEFT)
  text(linec, 40+inbox_lr, endNarr+50+paragraph+(inbox_space*2)+15+675+outbox_space+550, 320-(inbox_space*2), 250)
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

  var boxp = 310
  var bs = 18

  textSize(10);
  fill(197, 42, 95, 90);

  textAlign(LEFT, TOP)
  text("Vacant", boxp, topLegend+10)
  text("Occupied", boxp-50, topLegend+10)


  for (g=0; g<5; g++){
    if (g==0){
      fill(223,28,35)
    } else if (g==1){
      fill(138,30,44)
    } else if (g==2){
      fill(11,37,61)
    } else if (g==3){
      fill(25,39,76)
    } else if (g==4){
      fill(33,24,66)
    }

    rect(boxp-37,topLegend+38+(50*g),bs,bs)

    if (g==0){
      fill(223,28,35,10)
    } else if (g==1){
      fill(138,30,44,10)
    } else if (g==2){
      fill(11,37,61,10)
    } else if (g==3){
      fill(25,39,76,10)
    } else if (g==4){
      fill(33,24,66,10)
    }

    rect(boxp+5,topLegend+38+(50*g),bs,bs)

  }

  textSize(12);
  fill(197, 42, 95, 90);
  textAlign(RIGHT, TOP)
  text("Private Ownership", boxp-39-18, topLegend+38+(50*0)+3)
  text("State Ownership", boxp-39-18, topLegend+38+(50*1)+3-9)
  text("Municipal Ownership", boxp-39-18, topLegend+38+(50*2)+3-9)
  text("Municipal Ownership - SI Blue Belt", boxp-39-18, topLegend+38+(50*3)+3-9)
  text("Municipal Ownership", boxp-39-18, topLegend+38+(50*4)+3-9)


  textStyle(ITALIC)
  fill(197, 42, 95, 60);
  text("Housing Trust Fund Co.", boxp-39-18, topLegend+38+(50*1)+3+16-9)
  text("Project Built It Back", boxp-39-18, topLegend+38+(50*2)+3+16-9)
  text("Dep. Environmental Protection", boxp-39-18, topLegend+38+(50*3)+3+16-9)
  text("Other departments", boxp-39-18, topLegend+38+(50*4)+3+16-9)
  textStyle(NORMAL)
  textAlign(RIGHT, CENTER)


  fill(0,0,30,10)
  rect(40,topLegend,320,box_legend)


  // fill(223,28,35)
  // rect(boxp,topLegend+37,bs,bs)
  // fill(223,28,35,10)
  // rect(boxp,topLegend+57,bs,bs)
  //
  // fill(138,30,44)
  // rect(boxp,topLegend+107,bs,bs)
  // fill(138,30,44,10)
  // rect(boxp,topLegend+127,bs,bs)
  //
  // fill(11,37,61)
  // rect(boxp,topLegend+177,bs,bs)
  // fill(11,37,61,10)
  // rect(boxp,topLegend+197,bs,bs)
  //
  // fill(25,39,76)
  // rect(boxp,topLegend+247,bs,bs)
  // fill(25,39,76,10)
  // rect(boxp,topLegend+267,bs,bs)
  //
  // fill(33,24,66)
  // rect(boxp,topLegend+317,bs,bs)
  // fill(33,24,66,10)
  // rect(boxp,topLegend+337,bs,bs)
}

function locate_map(){

  var topMap = topMar+box_execSum+box_legend+(outbox_space*2)

  fill(0,0,30,10)
  rect(40,topMap,320,box_map)

  tint(100,10)
  image(SI_map1, 70, topMap+20,260,260)
  tint(100,100)

  tint(100,50)
  image(SI_map2, 70, topMap+20,260,260)
  tint(100,100)

  textSize(12);
  fill(197, 42, 95, 90);
  text("Oakwood Beach", 320, topMap+155)

}

function final(){
  // image (final_img, 410, 3400, 430, 307)
}

// sortby panel text
function sortby(){
  textAlign(CENTER, CENTER);
  text("Ordered by", 80, 3285+120, 20);
  if (sortHighlighted == 1) {
    fill(197, 42, 95);
    text("BBL Number", 160, 3285+120, 20);
    fill(197, 42, 95, 50);
    text("Lot Area", 240, 3285+120, 20);
    text("Lot Value", 310, 3285+120, 20)
  } else if (sortHighlighted ==2) {
    fill(197, 42, 95, 50);
    text("BBL Number", 160, 3285+120, 20);
    fill(197, 42, 95);
    text("Lot Area", 240, 3285+120, 20);
    fill(197, 42, 95, 50);
    text("Lot Value", 310, 3285+120, 20);
    fill(197, 42, 95, 50);
  } else if (sortHighlighted == 3) {
    fill(197, 42, 95, 50);
    text("BBL Number", 160, 3285+120, 20);
    text("Lot Area", 240, 3285+120, 20);
    fill(197, 42, 95);
    text("Lot Value", 310, 3285+120, 20);
    fill(197, 42, 95, 50);
  } else {
    fill(197, 42, 95, 50);
    text("BBL Number", 160, 3285+120, 20);
    text("Lot Area", 240, 3285+120, 20);
    text("Lot Value", 310, 3285+120, 20);
  }

}

function endimage(){
  tint(100,60)
  image(endimg,0,4370)
  tint(100,100)
}

function draw(){
  // background
  colorMode(HSB, 360, 100, 100, 100);
  var backgroundcolor = color(0,0,17);
  var backgroundcolorLight = color(0,0,30,10);
  background(backgroundcolor);
  textColor = color(197, 42, 95);


  fill(backgroundcolorLight);
  noStroke();

  // if (drawOwnershipFirst == 0) {
    drawOwnership(OwnershipTable);
  // }

  ExecutiveSummary();

  narrative();
  legend();
  locate_map();
  final();
  // draw year statistics
  // drawYear();

  // write sortby panel text
  sortby();

  endimage();

  // stroke(50,50,50)
  // line(150,0,150,5000)

  // for (u=0; u<7;u++){
  //   stroke(50,50,50)
  //   line(0,u*500,1200,u*500)
  // }
  //
  // noFill()
  // rect(60,1555, 150, 25)
  // rect(60,1815, 225, 25)
  // rect(60,2290, 150, 25)
  // rect(60,2505, 160, 25)
  // noStroke()
  image(lineChart, 435, 4000);
  text("2009", 450, 3385);
  text("2017", 540, 3385);
  text("2009", 595, 3385);
  text("2017", 680, 3385);
  text("2009", 735, 3385);
  text("2017", 825, 3385);

  fill(textColor)
  textSize(12)
  textAlign(LEFT,CENTER)
  text("Total Vacant Lots", 840 ,4030)
  fill(138,30,44)
  text("Governor's Office of Storm Recovery", 840 ,4105)
  fill(25,39,76)
  text("Staten Island Blue Belt", 840 ,4240)
  fill(11,37,61)
  text("Built It Back", 840 ,4280)
  textSize(12)
  fill(197, 42, 95,50)



  text("0", 435, 4275);
  text("100", 435, 4220);
  text("200", 435, 4165);
  text("300", 435, 4110);
  text("400", 435, 4055);

  stroke(360,100,100);
  fill(360,100,100)
  // colorMode(HSB, 360);
  line(599, 3975, 599, 4670);
  ellipse(600,4670, 10,10)
  noStroke();
  noFill();

}
