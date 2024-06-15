import { motion } from 'framer-motion-3d';
import { Model as IslandFall } from '../models/IslandFallModel';
import SkillBallsScene from './SkillBallsScene';

export default function SkillScene({ isInView }) {
  return (
    <motion.group>
      {isInView ? (
        <motion.group position={[-2.6, 0.5, 2.55]} rotation-y={-Math.PI / 2}>
          <SkillBallsScene />
        </motion.group>
      ) : null}
      <motion.group scale={2.5}>
        <IslandFall />
      </motion.group>
    </motion.group>
  );
}
