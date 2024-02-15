let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

//sombra
ctx.shadowOffsetX=2;
ctx.shadowOffsety=2;
ctx.shadowBluer=2;
ctx.shadowColor="rgba(0,0,0,0.5)";

//cor
ctx.fillStyle="#333399";

//fonte
ctx.font="25px Verdana";

//alinhamento
ctx.textAlign="center";

//preenchimento
ctx.fillText("olá mundo!",c1.width/2,50);

//contorno
//ctx.strokeText("olá mundo!",50,50);
