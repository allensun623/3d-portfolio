const experienceAnimation = (viewport) => {
  const x = [-1.2, -0.95, -0.95, -0.95, 0, 0, 0, 1.3, 1.3, 1.3, 1.5];
  const y = Array(x.length).fill(-viewport.height - 2);
  const z = [1.5, 1, 1, 1, -0.7, -0.7, -0.7, -0.85, -0.85, -0.85, -0.7].map(
    (v) => v - viewport.height
  );
  const scale = Array(x.length).fill(0.25);
  const rotateY = [8, 8, 9, 8, 9, 9, 6, 6, 9, 9, 0].map(
    (v) => (v / 8) * Math.PI
  );
  const transition = {
    // [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    times: Array.from({ length: x.length }, (_, i) => i * 0.1),
    duration: 20,
    type: 'ease',
    delay: 3,
  };
  return { x, y, z, scale, rotateY, transition };
};

const RIPAnimation = (viewport) => {
  const x = [-0.3, 0.15];
  const y = [-viewport.height * 4 + 0.7, -viewport.height * 4 + 0.55];
  const z = [-viewport.height + 5.5, -viewport.height + 5];
  const rotateY = [(Math.PI * 3) / 4, (Math.PI * 3) / 4];
  const scale = [0.2, 0.18];
  const transition = {
    times: [0.5, 1],
    duration: 3,
    type: 'ease',
    delay: 2,
  };

  return { x, y, z, scale, rotateY, transition };
};

const variants = (viewport) => ({
  0: {
    scale: 0.5,
    x: 0,
    y: -0.75,
    z: 0,
    rotateY: Math.PI / 2,
  },
  1: experienceAnimation(viewport),
  2: {
    x: 2,
    y: (-viewport.height - 1) * 2 - 8,
    z: -viewport.height - 13.25,
    scale: 2,
  },
  3: {
    x: 1.5,
    y: -viewport.height * 3 - 1.25,
    z: -viewport.height,
    scale: 0.5,
  },
  4: RIPAnimation(viewport),
});

export { variants, RIPAnimation, experienceAnimation };
