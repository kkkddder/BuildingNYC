// **** Global Variables ***** //
var BBLList = [];
var lineHeight = 4;
var imgList = [];
var yearSelected = "2009";


// **** Setup Function ****** //
function preload() {
    OwnershipTable = loadTable('data/ownership1.csv', 'csv', 'header');
    for (var k = 1; k < 3; k++) {
      imgList.push(loadImage('img/Ass3/'+k.toString()+'.png'));
        imgList[k].resize(50, 50);
    }
    
    
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
    text(year, 200, 280);
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
    print(number);
    var lot = BBLList[number];
    print(lot);
    print(mouseY);
    fill(textColor);
    rect(820, mouseY, 360, 360);
    fill(0,0,40);
    text(lot, 1000, mouseY + 180); 
    noFill();
    stroke(textColor);
    strokeWeight(1);
    rect(420, number*lineHeight + 80, 360, lineHeight);
    image(imgList[number], 850, mouseY + 20, 160, 160);
  } 
  if (mouseY >= 50 && mouseY <= 70 && mouseX>=420 && mouseX<=780) {
    redraw();
    fill(textColor);
    if (mouseX>=420 && mouseX<=460) {
      yearSelected = "2009";
    } else if(mouseX>=460 && mouseX<500) {
      yearSelected = "2010";
    } else if(mouseX>=500 && mouseX<540) {
      yearSelected = "2011";
    } else if(mouseX>=540 && mouseX<580) {
      yearSelected = "2012";
    } else if(mouseX>=580 && mouseX<620) {
      yearSelected = "2013";
    } else if(mouseX>=620 && mouseX<660) {
      yearSelected = "2014";
    } else if(mouseX>=660 && mouseX<700) {
      yearSelected = "2015";
    } else if(mouseX>=700 && mouseX<740) {
      yearSelected = "2016";
    } else if(mouseX>=740 && mouseX<780) {
      yearSelected = "2017";
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
  var Color0 = color(25,39,76);
  var Color1 = color(33,24,66);
  var Color2 = color(11,37,61);
  var Color3 = color(148,21,49);
  var Color4 = color(138,30,44);
  var Color5 = color(223,28,35);

  var VColor0 = color(25,39,39);
  var VColor1 = color(33,24,34);
  var VColor2 = color(11,37,31);
  var VColor3 = color(148,21,25);
  var VColor4 = color(138,30,22);
  var VColor5 = color(223,28,18);

  for (var i = 0; i < OwnershipTable.getRowCount(); i++) {
    var BBL = OwnershipTable.getString(i, 0).split('-')[0];
    BBLList.push(BBL);
    for (var j = 0; j < 9; j++) {
      var Ownership = OwnershipTable.getString(i, (j*2+1).toString()).split('-')[0];
      var Vacancy = OwnershipTable.getString(i, (j*2+2).toString()).split('-')[0];
      if (Ownership == "0") {
        if (Vacancy == "1") {
          fill(Color0);
        } else if (Vacancy == "0") {
          fill(VColor0);
        }

      } else if (Ownership == "1") {
        if (Vacancy == "1") {
          fill(Color1);
        } else if (Vacancy == "0") {
          fill(VColor1);
        }

      } else if (Ownership == "2") {
        if (Vacancy == "1") {
          fill(Color2);
        } else if (Vacancy == "0") {
          fill(VColor2);
        }

      } else if (Ownership == "3") {
        if (Vacancy == "1") {
          fill(Color3);
        } else if (Vacancy == "0") {
          fill(VColor3);
        }

      } else if (Ownership == "4") {
        if (Vacancy == "1") {
          fill(Color4);
        } else if (Vacancy == "0") {
          fill(VColor4);
        }

      } else if (Ownership == "5") {
        if (Vacancy == "1") {
          fill(Color5);
        } else if (Vacancy == "0") {
          fill(VColor5);
        }

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

  // draw left panels
  fill(backgroundcolorLight);
  noStroke();
  rect(20, 50, 360, 60);
  rect(20, 130, 360, 300);
  rect(20, 450, 360, 500);

  drawOwnership();

  // draw the lines and years in the middle panel
  for (var i = 0; i < 9; i++){
    year = (i+2009).toString();
    // colorMode(HSB, 360);
    textColor = color(197, 42, 95);
    noStroke();
    fill(textColor);
    textAlign(CENTER, CENTER);
    text(year, 440 + i * 40, 60);
    stroke(textColor);
    strokeWeight(0.5); 
    line(420 + i * 40, 60, 420 + i * 40, 3600);
  }
  line(780, 60, 780, 3600);
  // colorMode(HSB, 360);
  line(570, 40, 570, 3600);



}