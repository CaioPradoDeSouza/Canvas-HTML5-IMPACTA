let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

//circulo vermelho
ctx.beginPath();
ctx.fillStyle="red";
ctx.arc(50,50,50,0,Math.PI*2,true);
ctx.fill();
ctx.globalCompositeOperation="lighter";

//circulo azul
ctx.beginPath();
ctx.fillStyle="blue";
ctx.arc(70,75,50,0,Math.PI*2,true);
ctx.fill();

// alguns modelos // source-over / source-in / source-out / source-top / destination-over / destination-in / destination-out / destination-atop / lighter / copy / xor
