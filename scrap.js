function setup(){
  createCanvas(windowWidth,windowHeight);
}

let t = 0;

function draw(){
    clear();
  translate(width/2,height/2);
  stroke('rgb(0,0,0,60)');
  strokeWeight((0.0004*mouseY%mouseX)+0.09);
  for(let i = 0;i<350;i++){
    line(x1(t+i),y1(t+i),x2(t+i)+20,y2(t+i)+20);
  }
  t+=0.004;
}
function x1(t){
  return sin(t/10)*1250+sin(t/20)*1250+sin(t/30)*1250;
}
function y1(t){
  return cos(t/10)*1250+cos(t/20)*1250+cos(t/30)*1250;
}
function x2(t){
  return sin(t/15)*125+sin(t/25)*125+sin(t/35)*125;
}
function y2(t){
  return cos(t/15)*125+cos(t/25)*125+cos(t/35)*125;
}