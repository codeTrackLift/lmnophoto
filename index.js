// Camera sound effect, thanks Pixabey! 
const camera = new Audio('./sounds/camera.mp3');
function cameraSound() {
    camera.play();
}

// Scroll Magic
var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.scene1',
    offset: -100,
    duration: 500
})
.setClassToggle('.scene1', 'show')
.addTo(controller1);

var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.scene2',
    offset: 100,
    duration: 600
})
.setClassToggle('.scene2', 'show')
.addTo(controller2);

var controller3 = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
    triggerElement: '.scene3',
    offset: -100,
    duration: 500
})
.setClassToggle('.scene3', 'show')
.addTo(controller3);

var controller4 = new ScrollMagic.Controller();
var scene4 = new ScrollMagic.Scene({
    triggerElement: '.scene4',
    offset: 100,
    duration: 600
})
.setClassToggle('.scene4', 'show')
.addTo(controller4);

var controller5 = new ScrollMagic.Controller();
var scene5 = new ScrollMagic.Scene({
    triggerElement: '.scene5',
    offset: -100,
    duration: 500
})
.setClassToggle('.scene5', 'show')
.addTo(controller5);

var controller6 = new ScrollMagic.Controller();
var scene6 = new ScrollMagic.Scene({
    triggerElement: '.scene6',
    offset: 100,
    duration: 600
})
.setClassToggle('.scene6', 'show')
.addTo(controller6);

var controller7 = new ScrollMagic.Controller();
var scene7 = new ScrollMagic.Scene({
    triggerElement: '.scene7',
    offset: -100,
    duration: 500
})
.setClassToggle('.scene7', 'show')
.addTo(controller7);

var controller8 = new ScrollMagic.Controller();
var scene8 = new ScrollMagic.Scene({
    triggerElement: '.scene8',
    offset: 50,
    duration: 600
})
.setClassToggle('.scene8', 'show')
.addTo(controller8);

var controller9 = new ScrollMagic.Controller();
var scene9 = new ScrollMagic.Scene({
    triggerElement: '.scene9',
    offset: 100,
    duration: 500
})
.setClassToggle('.scene9', 'show')
.addTo(controller9);

var controller10 = new ScrollMagic.Controller();
var scene10 = new ScrollMagic.Scene({
    triggerElement: '.scene10',
    offset: -100,
    duration: 600
})
.setClassToggle('.scene10', 'show')
.addTo(controller10);

// Contact Form
const emailButton = document.querySelector('#emailButton');
const inputs = document.querySelector('form');
emailButton.addEventListener('click', () => {
    Email.send({
        Host: 'smtp.mailtrap.io',
        Username: 'b999db8ced9841',
        Password: '1884af2be311ae',
        To: 'test@mermaid.photo',
        From: inputs.elements['email'].value,
        Subject: 'Contact Us Query By the Customer',
        Body: inputs.elements['message'].value + '<br>' + inputs.elements['name'].value + '<br>' + inputs.elements['phone'].value,
    })
    .then(msg => alert('The email has been successfully sent.'))
});