//---------------------------------------------------------------
//                       CLASS: Scene
//---------------------------------------------------------------
// Controla a câmera e a física do jogo
class Scene {
    constructor(context) {
        this.sprites = [];
        this.ctx = context;
        this.camOn = false;
        this.colliding = null;
    }

    turnOnCam() {}
    turnOffCam() {}
    newSprite(sprite) {}
    clearCanvas() {}
    newScene() {}
    deleteObjects() {}
    // stringId(sprite){}
    // process(){}
    // testCollision(){}
    // rectanglesCollideCalc(){}
}

//---------------------------------------------------------------
//                        METHODS
//---------------------------------------------------------------
//metodo que liga a animacao
Scene.prototype.turnOnCam = function () {
    this.camOn = true;
    this.newScene();
};
//metodo que desliga a animação
Scene.prototype.turnOffCam = function () {
    this.camOn = false;
};
//metodo q adiciona um sprite a animação
Scene.prototype.newSprite = function (sprite) {
    this.sprites.push(sprite);
};
//metodo q limpa o canvas
Scene.prototype.clearCanvas = function () {

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};
//metodo que controla a cena
Scene.prototype.newScene = function () {
    if (!this.camOn) return;

    this.clearCanvas();

    for (let sprite of this.sprites) {
        sprite.movement();
        sprite.drawSprite();
    }

    this.process();
    this.deleteObjects();

    let animacao = this;
    requestAnimationFrame(function () {
        animacao.newScene();
    });
};
//metodo que deleta objetos desnecessários
Scene.prototype.deleteObjects = function () {
    this.sprites = this.sprites.filter(sprite => sprite.active);
};
//metodo que adciona um Id aos sprites
Scene.prototype.stringId = function (sprite) {
    return sprite.hitBox()
    .map(rectangle => `x:${rectangle.x},y:${rectangle.y},w:${rectangle.width},h:${rectangle.height},t:${rectangle.type}`)
    .join("\n");
};
//metodo que processa a colisão dos sprites
Scene.prototype.process = function () {
    let tested = {};
    let spritesCount = this.sprites.length;

    for (let i = 0; i < spritesCount; i++) {
        let sprite1 = this.sprites[i]; //seta o sprite[i]
        let id1 = this.stringId(sprite1); //coloca o nome na id1

        for (let j = i + 1; j < spritesCount; j++) {
            let sprite2 = this.sprites[j]; //seta o sprite [j]
            let id2 = this.stringId(sprite2); //coloca o nome na id2
            if (!tested[id1]) {
                tested[id1] = []; //cria id1:[] dentro do obj tested
            }

            if (!tested[id2]) {
                tested[id2] = []; //cria id2:[] dentro do obj tested
            }

            if (tested[id1].indexOf(id2) === -1 && tested[id2].indexOf(id1) === -1) {
                this.testCollision(sprite1, sprite2);
            }

        }
    }
};
//metodo que testa a colisão dos sprites
Scene.prototype.testCollision = function (sprite1, sprite2) {
    let rects1 = sprite1.hitBox();
    let rects2 = sprite2.hitBox();
    for (let rect1 of rects1) {
        for (let rect2 of rects2) {
            if (this.rectanglesCollideCalc(rect1, rect2)) {
                sprite1.collisionTrue(sprite2);
                sprite2.collisionTrue(sprite1);
            }
        }
    }
};
//metodo que calcula as areas de colisão
Scene.prototype.rectanglesCollideCalc = function (rect1, rect2) {
    return (
        rect1.x + rect1.width > rect2.x &&
        rect1.x < rect2.x + rect2.width &&
        rect1.y + rect1.height > rect2.y &&
        rect1.y < rect2.y + rect2.height)
}