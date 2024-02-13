let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

ctx.beginPath();
ctx.fillStyle="blue";
ctx.strokeStyle="black";
ctx.lineWidth="8";
ctx.arc(70,80,30,50,Math.PI*2,true);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.fillStyle="red";
ctx.strokeStyle="black";
ctx.lineWidth="5";
ctx.arc(150,80,30,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
