//-------------------------------------------------------------
//                       CLASS: Ship
//-------------------------------------------------------------
class Ship extends Sprites {
    constructor (ctx, image, camera, rows, collums, positionX, positionY, speed, gamePad) {
        super(ctx, image, camera, rows, collums, positionX, positionY, speed)
        this.gamePad = gamePad;
        this.hp = 3;
        this.maxHp = 3;
        this.shild = 1;
        this.shildMaxPercent = 100;
    }
    //movement(){}
    //drawSprite(){}
    //skills(skill){}
}

//-------------------------------------------------------------
//                       METHODS
//-------------------------------------------------------------
//Controla os movimentos e skills da nave.
Ship.prototype.movement = function () {
    this.nextFrame();
    if (this.gamePad.pressedLeft() && this.positionX > 0) {
        this.positionX -= this.speed;
    }
    if (this.gamePad.pressedRight() && this.positionX < this.ctx.canvas.width-this.image.width/this.collums) {
        this.positionX += this.speed;
    }
    if (this.gamePad.pressedShot()) {
        this.skills(1)
        this.gamePad.pressed.bShot = false;
    }
    if (this.gamePad.pressedUltimate()) {
        this.skills(2)
        this.gamePad.pressed.bUltimate = false;
    }
}

//Metodo que chama e define os parâmetros das skills.
Ship.prototype.skills = function (skill) {
    if (skill === 1) {
        var tiro = new Skills(this.ctx,this);
        tiro.x = this.positionX+24;
        tiro.y = this.positionY;
        tiro.raio = 3;
        tiro.cor = "#95ffb7";
        tiro.velocidadeY = -10;
        this.camera.newSprite(tiro);
    }
    if (skill === 2) {
        var tiro = new Skills(this.ctx,this);
        tiro.x = this.positionX+24;
        tiro.y = this.positionY+24;
        tiro.raio = 26;
        tiro.cor = "green";
        tiro.opacity = 0.3;
        tiro.velocidadeY = 0;
        this.camera.newSprite(tiro);
    }
}