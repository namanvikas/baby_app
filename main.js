img="";
status="";
object=[];

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide()
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status";

}
function draw(){
image(video,0,0,640,420);

if(status !=""){
    r=random(255);
    g=random(255);
    b=random(255);
    objectDetector.detect(video,gotresult);

    for(i=0;i<object.length; i++){

        document.getElementById("status").innerHTML="object detected";
       document.getElementById("Number").innerHTML="Number of object detected are: "+object.length;

        fill(r,g,b);
        percante=floor(object[i].confidence*100);
        text(object[i].label+" "+percante+"%",object[i].x+15,object[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        
    }
}

}

 function modelloaded(){
    console.log('model is initialition');
    status=true;
}

function gotresult(error,results){
 if(error){
    console.log(error)
 }
console.log(results);
object=results;
}