let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

ctx.beginPath();
let grdr=ctx.createRadialGradient(50,80,5,50,80,30);
grdr.addColorStop(0,"green");
grdr.addColorStop(0.5,"yellow");
grdr.addColorStop(1,"red");
ctx.fillStyle=grdr;
ctx.arc(50,80,30,0,Math.PI*2);
ctx.fill();



let grdl=ctx.createLinearGradient(70,70,80,20);
grdl.addColorStop(0,"green");
grdl.addColorStop(0.5,"yellow");
grdl.addColorStop(1,"red");
ctx.fillStyle=grdl;
ctx.fillRect(90,10,190,90);