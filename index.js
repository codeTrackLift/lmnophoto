// Camera sound effect, thanks Pixabey! 
const camera = new Audio('./sounds/camera.mp3');
function cameraSound() {
    camera.play();
}

// Scroll Magic
var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.scene1',
    offset: 100,
    duration: 400
})
.setClassToggle('.scene1', 'show')
.addTo(controller1);

var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.scene2',
    offset: 100,
    duration: 400
})
.setClassToggle('.scene2', 'show')
.addTo(controller2);

var controller3 = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
    triggerElement: '.scene3',
    offset: 100,
    duration: 400
})
.setClassToggle('.scene3', 'show')
.addTo(controller3);