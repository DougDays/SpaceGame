//---------------------------------------------------------------
//                       CLASS: Sprite
//---------------------------------------------------------------
class Sprites {
    constructor(name, {position}, {dimension},speed,imageSrc,ctx){
        this.name = name;
        this.positionX = position.x;
        this.positionY = position.y;
        this.dimensionX = dimension.x;
        this.dimensionY = dimension.y;
        this.speed = speed;
        this.imageSrc = imageSrc; 
        this.context = ctx;
    }
    att(){}
    drawSprites(ctx){}
}

//---------------------------------------------------------------
//                       METHODS
//---------------------------------------------------------------


Sprites.prototype.att = function (){
    var ctx = this.context;    
}


//Metrodo que adiciona um sprite na fila e desenha ele
Sprites.prototype.drawSprites = function  (context) {
var ctx = this.context;
    ctx.save();
    ctx.beginPath()
    ctx.drawImage(this.name,this.positionX,this.positionY,this.dimensionX,this.dimensionY)
    ctx.restore();
}
