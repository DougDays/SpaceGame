//---------------------------------------------------------------
//                       CLASS: GamePad
//---------------------------------------------------------------
class GamePad {
    constructor(){
        this.pressed = {
            bLeft:false,
            bRight:false,
            bShot:false
        }
    
    const bLeft = document.getElementById("b-left");
    const bRight = document.getElementById("b-right");
    const bShot = 
    bLeft.addEventListener("touchstart", () =>{
        this.pressed.bLeft = true;
    })
    bLeft.addEventListener("touchend", () =>{
        this.pressed.bLeft = false;
    })
    bRight.addEventListener("touchstart", () =>{
        this.pressed.bRight = true;    
    })
    bRight.addEventListener("touchend", () =>{
        this.pressed.bRight = false;
    })
    }
    pressedLeft(){}
    pressesRight(){}
}

//---------------------------------------------------------------
//                       METHODS
//---------------------------------------------------------------
GamePad.prototype.pressedLeft = function (){
    return this.pressed.bLeft;
}
GamePad.prototype.pressedRight = function (){
    return this.pressed.bRight;
}
 let padControl = new GamePad();//objeto pra ser usado em scripts
