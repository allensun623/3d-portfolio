import { motion } from 'framer-motion-3d';
import SkillBall from './SkillBall';
import { skills } from '../constants/skills';

export default function About() {
  const positions = [
    [0, 1, 0],
    [-2, 2, -1],
    [-2, 1.5, -1],
    [-2, 1, -1],
    [-2, 0.5, -1],
    [-2, 0, -1],
    [-2, 1.5, -1.5],
    [-1, 1.5, -2],
    [-1, -2, -2],
    [-1, -2, -1],
    [-1, -1.5, -1],
    [-1, -1, -1],
    [-1, -0.5, -1],
    [-1, -1.5, -1.5],
    [-1, -1.5, -2],
    [2, 2, -2],
    [2, 2, -1],
    [2, 1.5, -1],
    [2, 1, -1],
    [0, 0.5, -1],
    [0, 0, -1],
    [0, 1.5, -1.5],
    [0, 1.5, -2],
    [0, -2, -2],
    [0, -2, -1],
    [0, -1.5, -1],
    [1, -1, -1],
    [1, -0.5, -1],
    [1, -1.5, -1.5],
    [1, -1.5, -2],
    [0, -2, -2],
    [0, -2, -1],
    [0, -1.5, -1],
    [0, -1, -1],
    [0, -0.5, -1],
    [0, -1.5, -1.5],
    [0, -1.5, -2],
  ];
  return (
    <motion.group>
      {skills.map((s, idx) => (
        <SkillBall key={s.name} skill={s} position={positions[idx]} />
      ))}
    </motion.group>
  );
}
