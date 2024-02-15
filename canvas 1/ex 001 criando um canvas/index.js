let c1 = document.querySelector('#c1');

if(c1.getContext){
    alert("navegador com suporte ativo");
}else{
    alert("navegador sem suporte a canvas");
}