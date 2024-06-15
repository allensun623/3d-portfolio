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
    duration: 10,
    type: 'ease',
    delay: 3,
  };
  return { x, y, z, scale, rotateY, transition };
};

const experienceChaseDreamJob = (viewport) => {
  const x = [1.4, 1.4, 0];
  const y = [-2, -2, -1].map((v) => v - viewport.height);
  const z = [-0.7, 0.3, 1].map((v) => v - viewport.height);
  const scale = [0.25, 0.25, 0.75];
  const rotateY = [0, -0.5, -0.5, -0.5].map((v) => (v / 8) * Math.PI);
  const transition = {
    times: [0, 0.75, 1],
    duration: 3,
    type: 'ease',
  };
  return { x, y, z, scale, rotateY, transition };
};

const PortalAnimation = (viewport) => {
  const x = [-0.3, 0.05];
  const y = [-viewport.height * 4 + 0.7, -viewport.height * 4 + 0.55];
  const z = [-viewport.height + 5.5, -viewport.height + 5];
  const rotateY = [(Math.PI * 3) / 4, (Math.PI * 3) / 4];
  const scale = [0.2, 0.16];
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
    x: 2.05,
    y: (-viewport.height - 1) * 2 - 8.1,
    z: -viewport.height - 13.7,
    rotateY: -Math.PI / 16,
    scale: 2.5,
  },
  3: {
    x: 1.5,
    y: -viewport.height * 3 - 1.25,
    z: -viewport.height,
    scale: 0.5,
  },
  4: PortalAnimation(viewport),
  chaseDreamJob: experienceChaseDreamJob(viewport),
});

export { variants };
