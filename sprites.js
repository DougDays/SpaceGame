//-------------------------------------------------------------
//                       CLASS: Sprites
//-------------------------------------------------------------
//classe que controla os sprites do game.
class Sprites {
    constructor (ctx, image, camera, rows, collums, positionX, positionY, speed) {
        this.ctx = ctx;
        this.image = image;
        this.camera = camera;
        this.rows = rows;
        this.collums = collums;
        this.positionX = positionX;
        this.positionY = positionY;
        this.fps = 4;
        this.row = 0;
        this.collumn = 0;
        this.frameWidth = this.image.width/this.collums;
        this.frameHeight = this.image.height/this.rows;
        this.lastFrameTime = 0;
        this.speed = speed;
        this.active = true;
    }
    //movement(){}
    //nextFrame(){}
    //drawSprite(){}
    //hitBox(){}
    //deleteObject(){}
}

//-------------------------------------------------------------
//                       METHODS
//-------------------------------------------------------------
//Atualiza a posição do sprite
Sprites.prototype.movement = function () {
    this.positionX = this.positionX + 2;
    this.positionY = this.positionY;
    this.nextFrame();
    if (this.positionY > this.ctx.canvas.height) {
        this.deleteObject();
    }
}

//Atualiza o frame da animação.
Sprites.prototype.nextFrame = function () {
    const NOW = Date.now();
    if (NOW - this.lastFrameTime < this.fps) {
        return;
    }
    this.collumn = (this.collumn+1) % this.collums;
    this.lastFrameTime = NOW;
}

//Desenha o sprite
Sprites.prototype.drawSprite = function () {
    var frameX = this.collumn * this.frameWidth;
    var frameY = this.row * this.frameHeight;
    this.ctx.drawImage(
        this.image,
        frameX,
        frameY,
        this.frameWidth,
        this.frameHeight,
        this.positionX,
        this.positionY,
        this.frameWidth,
        this.frameHeight
    )
}

//Metodo que retorna a hitBox
Sprites.prototype.hitBox = function () {
    var rects = [{
        x: this.positionX,
        y: this.positionY,
        width: this.image.width/this.collums,
        height: this.image.height/this.rows,
        type: "ship"
    }];

    /*this.ctx.save();
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(rects[0].x, rects[0].y, rects[0].width, rects[0].height)
    this.ctx.restore();*/

    return rects;
}

//Metodo q controla o resultado das colisoes
Sprites.prototype.collisionTrue = function (sprite) {
    if (sprite instanceof Enemies) {
        this.ctx.fillRect(this.positionX, this.positionY, 48, 48)
    }
}

Sprites.prototype.deleteObject = function () {
    this.active = false;
}