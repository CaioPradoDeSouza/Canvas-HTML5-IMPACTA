let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

ctx.beginPath();
ctx.lineWidth="30";
ctx.moveTo(60,100);
ctx.lineTo(140,50);
ctx.lineTo(180,100);
ctx.lineJoin="round";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth="10";
ctx.moveTo(60,60);
ctx.lineTo(250,60);
ctx.lineCap="square";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth="10";
ctx.moveTo(60,130);
ctx.lineTo(250,130);
ctx.lineCap="round";
ctx.stroke();
