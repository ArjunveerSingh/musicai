lwx=0;
lwy=0;
rwx=0;
rwy=0;
cl=0;
cr=0;
function preload(){
    music1= loadSound("JMDL.mp3");
    music2= loadSound("BZ.mp3");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,ml);
    poseNet.on('pose',gr);
}

function ml(){
    console.log("Model Loaded!!");
}

function gr(results){
    if(results.length>0){
cl=results[0].pose.leftWrist.confidence;
cr=results[0].pose.rightWrist.confidence;

        lwx=results[0].pose.leftWrist.x;
         lwy=results[0].pose.leftWrist.y;
          rwx=results[0].pose.rightWrist.x;
           rwy=results[0].pose.rightWrist.y;
           console.log(results);
    }
}

function draw(){
image(video,0,0,600,500);
fill("#FF0000");
stroke("#FF0000");

if(cl>0){
    circle(lwx,lwy,20);
   music2.stop();
}

if(music1.isPlaying()=="false"){
music1.play();
document.getElementById("s").innerHTML="Jine Mera Dil Luteya";
}
}
