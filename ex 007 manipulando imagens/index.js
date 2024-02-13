let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

let img = new Image();

img.onload=function(){
    //metodo para recortar e exibir parte de uma imagem
    ctx.drawImage(img,80,90,120,180,20,20,90,100);
};

img.src="imagens/istockphoto-1214396728-612x612.jpg";