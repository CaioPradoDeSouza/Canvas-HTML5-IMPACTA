let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

c1.addEventListener("mousemove",mouseMove);



function mouseMove(){

    let posX = Math.random()*c1.width;
    let posY = Math.random()*c1.height;

    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(posX,posY,5,0,Math.PI*2,true);
    ctx.fill();

    posX += 10;
    posY += 10;
}



