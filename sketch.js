let img;
let myFont;
function preload() {
  img = loadImage('assets/Plan.png');
  myFont = loadFont('assets/Warung Kopi Regular.otf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  for (let i = 0; 9 > i; i++){
    noStroke();
    textSize(80);
    fill(196*i, 13*i, 222*i);
    //ellipse(120*1, 35*i, 20*i, 20);
    text('¿Cuál es tu plan de vida?', 520, random(350*i,322));
    frameRate(18);
  }
  
}