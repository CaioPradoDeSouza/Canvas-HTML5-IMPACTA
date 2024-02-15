let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

ctx.fillStyle="blue";

// delimitador de conteudo
ctx.rect(0,0,100,100);
ctx.stroke();
ctx.clip();

//preenchimento 
ctx.fillRect(0,0,100,100);

//circulo mascarado
ctx.fillStyle="orange";
ctx.beginPath();
ctx.arc(80,80,40,0,Math.PI*2,true);
ctx.fill();
