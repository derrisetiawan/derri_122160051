let k;
let u;
function setup() {
 createCanvas(400,400);
 background(200);
 k=0
 u=800
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(4);
  stroke(255,0,0);
  line(200,0,200,399);

  strokeWeight(2);
  stroke(20);
  fill('red')
  rect(70,250,50,100);
  fill(86,219,188)
  triangle(70,245,120,245,95,200);
  fill('green')
  triangle(65,315,65,370,30,390);
  triangle(125,315,125,370,155,390);

  //moving

  var b1 = 200 + 100*Math.sin(PI/u*k)
  k+=1
  var b2 = 195 + 100*Math.sin(PI/u*k)
  k+=1
  var b3 = 150 + 100*Math.sin(PI/u*k)
  k+=1
  var b4 = 265 + 100*Math.sin(PI/u*k)
  k+=1
  var b5 = 320 + 100*Math.sin(PI/u*k)
  k+=1
  var b6 = 340 + 100*Math.sin(PI/u*k)
  k+=1
  strokeWeight(2);
  stroke(20);
  fill(51,255,255)
  rect(270,b1,50,100);
  fill(255,253,51)
  triangle(270,b2,320,b2,295,b3);
  fill('orange')
  triangle(265,b4,265,b5,230,b6);
  triangle(325,b4,325,b5,355,b6);
}
