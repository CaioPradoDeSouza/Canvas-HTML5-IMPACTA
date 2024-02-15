let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");



let posX =10;
let posY =10;

function anima(){

    ctx.clearRect(0,0,400,400);
    ctx.fillStyle="#99ccff";
    ctx.fillRect(posX,posY,100,50);

    posX+=1;
    posY+=1;

    if(posX >=c1.Width-100 || posY >=c1.height-50){
        clearInterval(a);
    }
};

let a = setInterval(anima,100);
