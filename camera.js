let hydraCanvas1 = document.getElementById("hydra-bg1");
// set small size to avoid high resource demand:
hydraCanvas1.width  = Math.min(window.innerWidth  / 2, 1280);
hydraCanvas1.height = Math.min(window.innerHeight / 2, 720);
console.log("div initialised");

const hydra1 = new Hydra({
  canvas: hydraCanvas1,
  makeGlobal: false,
  detectAudio: true,
  enableStreamCapture: false,
});
console.log("hydra initialised");

const h1 = hydra1.synth;
h1.s0.initCam() //initialize webcam as external source 's0'
//h1.src(h1.s0).invert(1).out(h1.o1);
console.log("new camera init");

h1.src(h1.s0)
.color(1, 1, 1)      // Ensure the color is set to maximum (white)
.invert()            // Apply the invert effect
.out(h1.o1);         // Output to the first buffer
console.log("h1 src");
