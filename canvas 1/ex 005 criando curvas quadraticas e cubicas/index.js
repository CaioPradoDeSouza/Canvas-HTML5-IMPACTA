let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

ctx.beginPath();
ctx.lineWidth="3";
ctx.moveTo(60,100);
ctx.lineTo(140,50);
//quadratic
ctx.quadraticCurveTo(180,90,100,140);
ctx.stroke();



