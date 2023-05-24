class Skills { 
constructor (ctx, nave){
    this.ctx = ctx;
    this.nave = nave;
    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.cor = 'black';
    this.opacity = 1;
    this.raio = 10;
    this.cd = null;
    this.active = true;
    }
    movement() { }
    drawSprite() { } 
}

Skills.prototype.movement = function (){
  this.y += this.velocidadeY;
  if(this.velocidadeY == 0 ){
      this.x = this.nave.positionX+24;
  }
  if(this.y < this.raio*2){
      this.active = false;
  }
  this.skillCoolDown()
}

Skills.prototype.drawSprite = function() { 
// Guardar configurações atuais do contexto 
this.ctx.save();
// Configurar o contexto de acordo com a bola 
this.ctx.globalAlpha= this.opacity;
this.ctx.fillStyle = this.cor;
// Desenhar 
this.ctx.beginPath();
this.ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
this.ctx.fill();
// Voltar às configurações anteriores 
this.ctx.restore();
}

Skills.prototype.skillCoolDown = function () {
    this.cd+=1;
    if(this.velocidadeY == 0 && this.cd == 200){
        this.active = false;
    }
}

//Metodo que retorna a hitBox
Skills.prototype.hitBox = function () {
    var rects = [{
        x: this.x,
        y: this.y,
        width: this.raio*2,
        height: this.raio*2,
        type: "skill"
    }];
    
    return rects;
}

//Metodo q controla o resultado das colisoes
Skills.prototype.collisionTrue = function (sprite) {
    if(sprite instanceof Enemies){
        this.active = false;
    }
}
