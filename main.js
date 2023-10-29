img="";

function preload(){
img=loadImage('bedroom.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("bed",275,75);
    noFill();
    stroke("#FF0000");
    rect(250,50,375,350);

    fill("#FF0000");
    text("side table",160,170);
    noFill();
    stroke("#FF0000");
    rect(150,150,100,200);
}