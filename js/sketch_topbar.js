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

var myp51 = new p5(l,'topbar');


function setup(){

    // var button = createButton('Learn More');
    // button.style('background-color', color(25, 23, 200, 50));
    // button.position(230, 595);
    // button.mousePressed(displayInfo);

    textSize(12);
    textFont('Roboto');
    console.log('Setup complete...');
}


function draw(){

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

  myp51;

}
