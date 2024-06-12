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
    text: [-22, 8, 15],
    cloud: [-31, -5.5, -8],
    delay: 6,
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
    text: [-5, 15, -5],
    cloud: [-29, -5.5, -10],
    delay: 12,
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
    text: [22, 11, 5],
    cloud: [-27, -6, -10],
    delay: 18,
    color: '#214707',
  },
];

export { experiences };
