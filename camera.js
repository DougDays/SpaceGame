//---------------------------------------------------------------
//                       CLASS: CAMERA
//---------------------------------------------------------------
class Camera {
    constructor(ctx){
        this.sprites = [];
        this.context = ctx;
        this.camOn = false;
    }
    turnOnCam(){}
    turnOffCam(){}
    newSprite(sprite){}
    drawSprite(){}
    clearCanvas(){}
    newScene(){}
}

//---------------------------------------------------------------
//                        METHODS
//---------------------------------------------------------------
Camera.prototype.turnOnCam = function  () {
    this.camOn = true;
    this.newScene();
}
Camera.prototype.turnOffCam = function () {
    this.camOn = false;
}
Camera.prototype.newSprite = function (sprite) {
    this.sprites.push(sprite)
}
Camera.prototype.drawSprite = function () {
    var ctx = this.context;
    ctx.drawImage()
}

Camera.prototype.clearCanvas = function (){
    var ctx = this.context;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
//Metodo que comando o canvas
Camera.prototype.newScene = function (){
    if (!this.camOn) return;   
    this.clearCanvas();
   
    for(i in this.sprites){
        this.sprites[i].att();
           
    if(padControl.pressedLeft()){
        this.sprites[0].positionX -= this.sprites[0].speed;
    }
    if(padControl.pressedRight()){
        this.sprites[0].positionX += this.sprites[0].speed;
    } 
    }
    for(i in this.sprites){
        this.sprites[i].drawSprites();
    }
    var animacao = this;
    requestAnimationFrame( function (){
        animacao.newScene();
    });
}
