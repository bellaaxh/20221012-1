function setup() {
  createCanvas(windowWidth, windowHeight);
}
var x = 25
var y = 25
var i =1
var j =1
function draw(){
    background(0);
    noFill()
    stroke(255)
    ellipse(x,y,50)
    rectMode(CENTER)
    rect(25,25,50)
    ellipse(50,50,25)
    
    for(var j =1;j<5++;) {
      for(var i=1;i<5;i++){
        ellipse(i*25,j*25,50)
        rect(i*25,j*25,50)
        ellipse(i*50,j*50,20)
      }
    }
}