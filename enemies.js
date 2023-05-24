class Enemies extends Sprites {
    constructor (ctx, image, camera, rows, collums, positionX, positionY, speed,) {
        super(ctx, image, camera, rows, collums, positionX, positionY, speed)
    }
    //movement() {}
}

Enemies.prototype.movement = function () {
    this.positionY += this.speed;
    if (this.positionY > this.ctx.canvas.height) {
        this.deleteObject();
    }
}

Enemies.prototype.hitBox = function () {
    var rects = [{
        x: this.positionX,
        y: this.positionY,
        width: 48,
        height: 48,
        type: "enemy"
    }];

    this.ctx.save();
    this.ctx.strokeStyle = "red";
    this.ctx.strokeRect(rects[0].x, rects[0].y, 20, 20)
    this.ctx.restore();

    return rects;
}

Enemies.prototype.collisionTrue = function (sprite) {
    this.ctx.fillRect(this.positionX,this.positionY,48,48)
    if(sprite instanceof Skills){
        this.deleteObject()
    }
}