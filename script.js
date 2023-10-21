function createRiveAnimation(canvas, machine)  
  const r = new rive.Rive({
    src: "/rive_animations/quoter_icons.riv",
    canvas: document.getElementById(canvas),
    autoplay: true,
    stateMachines: machine,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });