// **** Setup Function ****** //
function preload() {
    title_img = loadImage("img/Ass3/StartImgBW2.png")
    }


function setup(){
    createCanvas(1200,495)
    textSize(12);
    textFont('Roboto');
    console.log('Setup complete...');
    // noLoop()
}

function draw(){
  // background



  colorMode(HSB, 360, 100, 100, 100);
  var backgroundcolor = color(0,0,17);
  var backgroundcolorLight = color(0,0,30,10);
  background(backgroundcolor);
  textColor = color(197, 42, 95,80);


  tint(100,50)
  image(title_img,0,0)
  stroke(360,100,100)
  // colorMode(HSB, 360);

  noStroke();

  textSize(100)
  textStyle(BOLD)
  fill(0,0,100,60)
  // fill(textColor)
  text("RAZING NYC", 60, 300)
  textStyle(NORMAL)
  textSize(20)
  text("BUYOUTS AND DEMOLITIONIN THE WAKE OF", 60, 345)
  fill(360,100,100)
  textStyle(BOLD)
  text("HURRICANE SANDY", 490, 345)
  noFill()
  strokeWeight(2)
  stroke(360,100,100)
  rect(480,322,200,30)
strokeWeight(1)
  line(582, 352, 582, 800);
}
