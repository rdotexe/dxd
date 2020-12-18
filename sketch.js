let sketch = function(p) {

  let rings = 20;
  let dim_init = 50;
  let dim_delta = 12;

  let chaos_init = .8;
  let chaos_delta = 0.9;
  let chaos_mag = 15;

  let ox = p.random(10000);
  let oy = p.random(10000);
  let oz = p.random(10000);
  

  p.setup = function(){
    p.createCanvas(800, 800);
    p.strokeWeight(2);
    p.stroke(151, 160, 161, 100);
    p.smooth();
    p.noFill();
    //p.noLoop();
  }

  p.draw = function() {
    p.clear();
    p.translate(p.width / 2, p.height / 2);
    display();
  }

  function display(){
    ox+=0.04;
    oy+= .04;
    oz+= .06;
    for(let i = 0; i < rings; i ++){
    p.beginShape();
      for(let angle = 0; angle < 360; angle++){
        let radian = p.radians(angle);
        let radius =  (chaos_mag * getNoiseWithTime(radian, chaos_delta * i + chaos_init, oz)) + (dim_delta * i + dim_init);
        p.vertex(radius * p.cos(radian), radius * p.sin(radian));
      }
    p.endShape(p.CLOSE);
    }
  }

  function getNoise (radian, dim){
    let r = radian % p.TWO_PI;
    if(r < 0.0){r += p.TWO_PI;}
    return p.noise(ox + p.cos(r) * dim, oy + p.sin(r) * dim);
  }

  function getNoiseWithTime (radian, dim, time){
    let r = radian % p.TWO_PI;
    if(r < 0.0){r += p.TWO_PI;}
    return p.noise(ox + p.cos(r) * dim , oy + p.sin(r) * dim, oz + time);
  }
}

var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;

function setup() {
  createCanvas(windowWidth -= 25, windowHeight -= 15);
  //u = int(width/15);
  u = 100;
  l = 40;
  var highCount = height/80;
  var wideCount = width/80;
  count = int(highCount * wideCount);
  
  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }
}

function draw() {
    clear();
    background(47, 46, 56,0);
    stroke(151, 160, 161, 100);
    strokeWeight(2); 
    translate(20, 20);
    
    for (var i = 0; i <= count; i++) {
      mods[i].update();
      mods[i].draw2();
    }
  
  }
  
  function Module(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.a = 0;
    
  
  }
  
  Module.prototype.update = function() {
    this.a = atan2(mouseY-this.y, mouseX-this.x);
    
  }
  
  Module.prototype.draw2 = function() {
    push();
    translate(this.x, this.y);
    rotate(this.a += random(0.1));
    line(-l,0,l,0);
    pop();
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


new p5(sketch, 'harlowe');

