const r = new rive.Rive({
  src: "/rive_animations/quoter_icons.riv",
  canvas: document.getElementById("riveCanvas"),
  autoplay: true,
  stateMachines: "DogMachine",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});