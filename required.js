var mycanvas =document.getElementById("mycanvas");
var ctx=mycanvas.getContext("2d");
var w=500,h=500;
//canvas styles
mycanvas.height=h;
mycanvas.width=w;

//balls array
var ball=[];
//Class for creating ball
function Ball(x,y,r,c,vx,vy){
  this.x=x;
  this.y=y;
  this.r=r;
  this.c=c;
  this.vx=vx;
  this.vy=vy;
  this.update=function(){
        ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.fillStyle = this.c;
		ctx.fill();
		ctx.closePath();
        this.x += this.vx;
        this.y += this.vy;
        if(this.y>=(w-10)||this.y<=10){
        this.vy=-this.vy;
         }
        if(this.x>=(h-10)||this.x<=10){
        this.vx=-this.vx;
         }

}
}

//clearing canvas
function clearCanvas(){
ctx.clearRect(0, 0, w, h);
}

var color = ["red","blue","yellow","black","green","Cyan","Navy","violet","maroon","olive"];
var count=0;//counting balls

//adding balls
function addBall(){
  if(count<20){
  var rndColor=Math.floor((Math.random() * 9) + 1);
  var rndX=Math.floor((Math.random() * 8) + 1);
  var rndY=Math.floor((Math.random() * 8) + 1);
  ball[count]= new Ball(Math.floor((Math.random() * 490) + 1),Math.floor((Math.random() * 490)+1),Math.floor((Math.random() * 10) + 5),color[rndColor],rndX,rndY);
  count++;
  document.getElementById("noBalls").innerHTML="<b>"+count+"</b>";
}
}

//updating canvas
function update(){
  var i;
 // clearCanvas();
  for(i=0;i<count;i++){
  ball[i].update();
}
}

setInterval(update, 1000/60);