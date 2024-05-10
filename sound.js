let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = Math.min(window.innerWidth  / 2, 1280);
hydraCanvas.height = Math.min(window.innerHeight / 2, 720);

const hydra = new Hydra({
  canvas: hydraCanvas,
  makeGlobal: false,
  detectAudio: true,
  enableStreamCapture: false,
});

const h = hydra.synth;
h.shape(8, (0.01, ()=> 0.2 + a.fft[0]),1)
.mult(h.osc(1, 1).modulate(h.osc(10).rotate(1.4,1.2),6))
.color(3,2,8)
.saturate(2.5)
.luma(1.2,0.05, (5, ()=> 2.5 + a.fft[30]))
.scale(0.6, ()=> 0.9 + a.fft[3])
.modulatePixelate(h.noise(5, 1), 100)
.out(h.o0)
