let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");
ctx.fillStyle = "green";
ctx.lineWidth="2";
ctx.fillRect(20,50,150,60);
ctx.strokeStyle="red";
ctx.strokeRect(20,50,150,60);
