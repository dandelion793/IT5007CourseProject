
function alertDistance(){
  alert("Analysis in progress,Please wait for the result")
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
  ctx.beginPath();
  ctx.arc(295,250,240,0,2*Math.PI);
  ctx.stroke();

}
function alertPCA(){
  alert("Analysis in progress,Please wait for the result")
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
  ctx.font="30px Arial";
  ctx.strokeText("Here is the PCA analysis",40,200);

}
function alertBreakdown(){
  alert("Analysis in progress,Please wait for the result")
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
  ctx.moveTo(0,0);
  ctx.lineTo(800,400);
  ctx.stroke();

}

