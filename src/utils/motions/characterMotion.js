// const experienceAnimation = (viewport) => {
//   const exp1 = {
//     x: [-0.95, -1.2, -1.0, -2, -1.6, -0.8],
//     y: [-2, -1.5, -1.4, -1.3, -0.75, -0.6],
//     z: [0.7, 0.1, -0.5, -0.6, 0.6, -0.7, -2.5],
//     rotateY: [9, 9, 10, 16, 20, 25],
//   };
//   const exp2 = {
//     x: [-2.5, -2.5, -0.5, -0.8, -2, -1.9, -0.7],
//     y: [-2, -1.6, -1.2, -0.8, -0.5, -0.5, -0.4],
//     z: [-5, -4.5, -4.5, -4.2, -6.2, -4, -4.2],
//     rotateY: [23, 21, 17, 12, 8, 5, 1],
//   };
//   const exp3 = {
//     x: [0.5, 2, 1.8, 1, 0, 1.4],
//     y: [-0.9, -0.7, -0.5, -0.2, -1.3, -2],
//     z: [-1, -1, -3, -1, -1],
//     rotateY: [4, 8, 12, 14, 17, 16],
//   };
//   const x = [-1.1, ...exp1.x, ...exp2.x, ...exp3.x, 1.5];
//   const y = [-2, ...exp1.y, ...exp2.y, ...exp3.y, -2].map(
//     (v) => v - viewport.height
//   );
//   const z = [1.3, ...exp1.z, ...exp2.z, ...exp3.z, -1].map(
//     (v) => v - viewport.height
//   );
//   const rotateY = [
//     8,
//     ...exp1.rotateY,
//     ...exp2.rotateY,
//     ...exp3.rotateY,
//     15.5,
//   ].map((v) => (v / 8) * Math.PI);
//   const scale = [0.25, ...Array(x.length - 1).fill(0.2)];
//   const transition = {
//     times: Array.from({ length: x.length }, (_, i) => i / x.length),
//     duration: 15,
//     ease: 'linear',
//     delay: 3,
//   };
//   return { x, y, z, scale, rotateY, transition };
// };

const experienceAnimation = (viewport) => {
  const x = [-1.5, -1.3, -1.3, -1.3, -0.2, -0.2, -0.2, 1.7, 1.7, 1.7, 1.7].map(
    (x) => x - 0.4
  );
  const y = [
    -1.7, -1.8, -1.8, -1.8, -2.2, -2.2, -2.2, -2.2, -2.2, -2.2, -2,
  ].map((v) => v - viewport.height);
  const z = [2.3, 1, 1, 1, -0.2, -0.2, -0.2, -0, -0, -0, 0.7].map(
    (v) => v - viewport.height
  );
  const scale = Array(x.length).fill(0.2);
  const rotateY = [7, 7, 8, 7, 7, 8, 4, 6, 9, 9, -2].map(
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
  const x = [1.2, 0.1, 0];
  const y = [-2, -1.4, -0.1].map((v) => v - viewport.height);
  const z = [0.7, 2, 2.5].map((v) => v - viewport.height);
  const rotateY = [-2, -2, -0.5].map((v) => (v / 8) * Math.PI);
  const scale = [0.2, 0.5, 0.75];
  const transition = {
    times: [0, 0.5, 1],
    duration: 3,
    type: 'ease',
  };
  return { x, y, z, scale, rotateY, transition };
};

const PortalAnimation = (viewport) => {
  const x = [-0.3, 0.05];
  const y = [-viewport.height * 4 + 0.76, -viewport.height * 4 + 0.61];
  const z = [-viewport.height + 5.5, -viewport.height + 5];
  const rotateY = [(Math.PI * 3) / 4, (Math.PI * 3) / 4];
  const scale = [0.15, 0.1];
  const transition = {
    times: [0.5, 1],
    duration: 3,
    type: 'ease',
    delay: 2,
  };

  return { x, y, z, scale, rotateY, transition };
};

const variants = (viewport, x, y, z, scale, rotateY) => ({
  0: {
    scale: 0.5,
    x: 0,
    y: -0.75,
    z: 0,
    rotateY: Math.PI / 2,
  },
  1: experienceAnimation(viewport),
  // 1: { x, y, z, scale, rotateY },
  2: {
    x: 1.81,
    y: (-viewport.height - 1) * 2 - 7.4,
    z: -viewport.height - 13,
    rotateY: -Math.PI / 16,
    scale: 1.5,
  },
  3: {
    x: 1.5,
    y: -viewport.height * 3 - 1.15,
    z: -viewport.height,
    scale: 0.5,
  },
  4: PortalAnimation(viewport),
  chaseDreamJob: experienceChaseDreamJob(viewport),
});

export { variants };
