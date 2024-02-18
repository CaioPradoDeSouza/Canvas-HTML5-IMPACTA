let c1 = document.querySelector("#c1");

let ctx = c1.getContext("2d");

let video = document.getElementsByTagName("video")[0];

let i;

video.addEventListener("play", function(){
     i = setInterval(function(){
        ctx.drawImage(video,0,0,300,300)
    },20)
})


