let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

let img = new Image();
let img2 = new Image();
img.onload=function(){
    ctx.drawImage(img,30,30,200,100);
};

img.src="imagens/istockphoto-1214396728-612x612.jpg";