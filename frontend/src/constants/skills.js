const skillNames = [
  'four star',
  'AWS',
  'Blender',
  'Datadog',
  'Django',
  'Docker',
  'Figma',
  'Firebase',
  'GCP',
  'Github',
  'Golang',
  'GraphQL',
  'Java',
  'JavaScript',
  'Jupyter Notebooks',
  'Linux',
  'MongoDB',
  'MySQL',
  'NextJS',
  'NodeJS',
  'PostgreSQL',
  'Python',
  'Pytorch',
  'React',
  'Redis',
  'Redux',
  'Scikit-Learn',
  'Tableau',
  'Tailwind',
  'TensorFlow',
  'ThreeJS',
  'TypeScript',
  'Vue',
];



const skills = skillNames.map((s) => ({
  name: s,
  iconURL: `src/assets/images/icons/${s}.svg`,
}));

export { skills };
