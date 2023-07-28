song1= "";
song2="";
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
}
function preload()
{
    song= loadSound("Song1Gravity.mp3");
    song= loadSound("Song2Kesariya.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=captureVideo(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}

