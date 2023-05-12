window.addEventListener("load", function (){
let canvas = document.getElementById("canvas");
const CTX = canvas.getContext("2d")



/*  
requestAnimationFrame(animation)
function animation(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(spaceship,canvas.width/2-24,canvas.height-96-72,48,96);
    
    
requestAnimationFrame(animation)
}
*/
var bancoImagem= [];
bancoImagem[0] = new Image();

bancoImagem[0].src = "../img/spaceship.png"
var nave = new Sprites(
  bancoImagem[0],
  { position: { x: canvas.width/2-24, y: canvas.height-120} },
  { dimension: { x: 48, y: 48 } },
  8,
  bancoImagem[0].src,
  CTX
);




    
var animacao = new Camera(CTX);
animacao.newSprite(nave);

bancoImagem[0].onload = function (){
animacao.turnOnCam()
}
});
