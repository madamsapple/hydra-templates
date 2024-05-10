let hydraCanvas1 = document.getElementById("hydra-bg1");
// set small size to avoid high resource demand:
hydraCanvas1.width  = Math.min(window.innerWidth  / 2, 1280);
hydraCanvas1.height = Math.min(window.innerHeight / 2, 720);

const hydra1 = new Hydra({
  canvas: hydraCanvas1,
  makeGlobal: false,
  detectAudio: true,
  enableStreamCapture: false,
});

const h2 = hydra1.synth;

h2.s0.initCam() //initialize webcam as external source 's0'
src(h2.s0).invert(1).out(h2.o1)
