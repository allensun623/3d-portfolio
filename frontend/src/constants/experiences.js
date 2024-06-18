const SPEED = 1;

const experiences = [
  { text: [-0, 0, 0], cloud: [0, 0, 0], delay: 0, color: '' }, // empty to present distortion of the first experience
  {
    company: 'University of Houston',
    role: 'Research Assistant',
    started: '10.2017',
    ended: '03.2018',
    contributions: [
      'Researched AI/ML and Blockchain in logistics',
      'Developed a marketplace with React and Ethereum smart contracts.',
    ],
    initial: { x: -22, y: 0, z: 10 },
    text: { x: -21, y: 9, z: 20 },
    cloud: [-0.5, -0.5, -5],
    delay: 4 * SPEED,
    color: '#9c8c1a',
  },
  {
    company: 'MID Industrial Tools',
    role: 'Software Engineer',
    started: '06.2020',
    ended: '01.2022',
    contributions: [
      'Configured Django on GCP, cutting computing resources by 25%.',
      'Revamped frontend with React and TypeScript, boosting reusability.',
      'Developed and maintained robust REST APIs.',
    ],
    initial: { x: -10, y: 0, z: -15 },
    text: { x: -8, y: 18, z: -5 },
    cloud: [0, -0.5, -5],
    delay: 8 * SPEED,
    color: '#c73d34',
  },
  {
    company: 'Beamery',
    role: 'Software Engineer',
    started: '02.2022',
    ended: '11.2023',
    contributions: [
      'Optimized procedures, doubling data ingestion to 30K QPS.',
      'Improved performance by reducing runtime by 40%.',
      'Led the design, hosting, and delivery of external API documentation.',
    ],
    initial: { x: 23.5, y: 2.2, z: -10 },
    text: { x: 21, y: 13, z: 0 },
    cloud: [1, -0.5, -5],
    delay: 12 * SPEED,
    color: '#139d3c',
  },
];

export { experiences };
