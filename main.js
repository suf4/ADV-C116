lipstick_x=0;
lipstick_y=0;

function preload(){
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(lipstick,lipstick_x,lipstick_y,60,45);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        lipstick_x = results[0].pose.nose.x-30;
        console.log("nose y: "+results[0].pose.nose.y);
        lipstick_y = results[0].pose.nose.y;
    };
}