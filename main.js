img="";
status="";
object=[];
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cococssd',modelLoaded);
document.getElementById("status").innerHTML="status:object detecting";
}
function preload(){
img=loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
   if(status!=""){
       for(i=0;i<object.length;i++){
           document.getElementById("status").innerHTML="status: object detected";
           fill("#fa93db");
           percent=floor(object[i].confidence*100);
           text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
           noFill();
           stroke("#fa93db");
           rect(object[i].x,object[i].y,object[i].width,object[i].height);
       }

   }
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
    
}
console.log(results);
object=results;
}