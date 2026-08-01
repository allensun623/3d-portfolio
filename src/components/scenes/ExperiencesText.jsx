import { motion } from 'framer-motion-3d';
import { experienceLabels } from '@/constants/experience';
import { Model as CloudModel } from '../models/CloudModel';
import ExperienceTextModel from '../models/ExperienceTextModel';

const SPEED = 1;
const experiences = (isMobile) => [
  {
    ...experienceLabels[0],
    initial: { x: -22, y: 0, z: 10 },
    text: { x: isMobile ? -20 : -21, y: 9, z: 20 },
    cloudPosition: [-0.5, 0, -5],
    delay: 4 * SPEED,
    textScale: 1.45,
  },
  {
    ...experienceLabels[1],
    initial: { x: -10, y: 0, z: -15 },
    text: { x: -8, y: isMobile ? 25 : 18, z: -5 },
    cloudPosition: [0, isMobile ? 1 : 0.5, -5],
    delay: 8 * SPEED,
    textScale: 1.5,
  },
  {
    ...experienceLabels[2],
    initial: { x: 23.5, y: 1.7, z: -8 },
    text: { x: isMobile ? 18 : 21, y: 13, z: 0 },
    cloudPosition: [1, 0.5, -5],
    delay: 12 * SPEED,
    textScale: 1.1,
  },
];

export default function ExperiencesText({ isMobile }) {
  const experiencesDetails = experiences(isMobile);
  const renderExperience = (e, i) => (
    <motion.group
      key={i}
      initial={{ ...e.initial, scale: 0.2 }}
      animate={{ ...e.text, scale: 1 }}
      transition={{ duration: 2, delay: e.delay }}
    >
      <motion.group scale={isMobile ? 1.5 : 1}>
        <motion.group scale={5.5} position={e.cloudPosition}>
          <CloudModel />
        </motion.group>
        <motion.group scale={e.textScale}>
          <ExperienceTextModel lines={e.lines} color={e.color} />
        </motion.group>
      </motion.group>
    </motion.group>
  );

  return (
    <motion.group
      scale={0.05}
      position={[0, 1, 0]}
      rotation-y={(Math.PI * 5) / 8}
    >
      {experiencesDetails.map(renderExperience)}
    </motion.group>
  );
}
