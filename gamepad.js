//---------------------------------------------------------------
//                       CLASS: GamePad
//---------------------------------------------------------------
class GamePad {
    constructor() {
        this.pressed = {
            bLeft: false,
            bRight: false,
            bShot: false,
            bSkill1: false,
            bUltimate: false
        }

        const bLeft = document.getElementById("b-left");
        const bRight = document.getElementById("b-right");
        const bShot = document.getElementById("b-shot");
        const bUltimate = document.getElementById("b-ult");
        bLeft.addEventListener("touchstart", () => {
            this.pressed.bLeft = true;
            bLeft.style.opacity = 0.9;
            bLeft.style.filter = "hue-rotate(152deg)"
        })
        bLeft.addEventListener("touchend", () => {
            bLeft.style.opacity = 0.3;
            this.pressed.bLeft = false;
        })
        bRight.addEventListener("touchstart", () => {
            this.pressed.bRight = true;
            bRight.style.opacity = 0.9;
            bRight.style.filter = "hue-rotate(152deg)"
        })
        bRight.addEventListener("touchend", () => {
            bRight.style.opacity = 0.3;
            this.pressed.bRight = false;
        })
        bShot.addEventListener("touchstart", () => {
            this.pressed.bShot = true;
            bShot.style.opacity = 0.9;
            bShot.style.filter = "hue-rotate(152deg)"
        })
        bShot.addEventListener("touchend", () => {
            bShot.style.opacity = 0.3;
            bShot.style.filter = "hue-rotate(0deg)"
        })
        bUltimate.addEventListener("touchstart", () => {
            this.pressed.bUltimate = true;
            bUltimate.style.opacity = 0.9;
            bUltimate.style.filter = "hue-rotate(152deg)"
        })
        bUltimate.addEventListener("touchend", () => {
            bUltimate.style.opacity = 0.3;
            bUltimate.style.filter = "hue-rotate(0deg)"
        })
    }
    pressedLeft() {}
    pressesRight() {}
    pressedShot() {}
    pressedUltimate() {}
}

//---------------------------------------------------------------
//                       METHODS
//---------------------------------------------------------------
GamePad.prototype.pressedLeft = function () {
    return this.pressed.bLeft;
}
GamePad.prototype.pressedRight = function () {
    return this.pressed.bRight;
}
GamePad.prototype.pressedShot = function () {
    return this.pressed.bShot;
}
GamePad.prototype.pressedUltimate = function () {
    return this.pressed.bUltimate;
}
const GAMEPAD = new GamePad(); //objeto pra ser usado em scripts