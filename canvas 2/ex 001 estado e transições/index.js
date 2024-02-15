let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

ctx.fillStyle="orange";
ctx.fillRect(0,0,120,60);
ctx.translate(50,50);
ctx.save();
ctx.fillStyle="orange";
ctx.fillRect(0,0,120,60);
ctx.translate(50,50);
ctx.fillStyle="blue";
ctx.fillRect(0,0,120,60);
ctx.translate(-50,-50);
ctx.fillStyle="green";
ctx.fillRect(0,0,120,60);

ctx.fillStyle="purple";
ctx.beginPath();
ctx.arc(180,10,30,0,Math.PI*2,true);
ctx.fill();

ctx.scale(0.5,0.5);
ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(190,40,30,0,Math.PI*2,true);
ctx.fill();

ctx.restore();
ctx.rotate(1270);
ctx.fillStyle="black";
ctx.fillRect(50,-80,120,60);

