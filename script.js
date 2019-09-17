let Button=function (statusBtn) {
    this.statusBtn=statusBtn;
    this.switchOn=function () {
            lamp.onLamp();
    };
    this.switchOff=function () {
        lamp.offLamp();
    }
};
let button=new  Button("on");
let Lamp=function (statusLamp) {
    this.statusLamp=statusLamp;
    this.onLamp=function () {
        this.statusLamp="On";
       document.getElementById("show").innerHTML=this.statusLamp;
    };
    this.offLamp=function () {
        this.statusLamp="Off";
        document.getElementById("show").innerHTML=this.statusLamp;
    }
};
let lamp=new Lamp("on");
function on() {
    button.switchOn();
}
function off() {
    button.switchOff();
}