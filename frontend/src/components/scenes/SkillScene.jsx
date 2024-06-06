import { motion } from 'framer-motion-3d';
import { Model as IslandFall } from '../models/IslandFallModel';
import SkillBallsScene from './SkillBallsScene';
import { useControls } from 'leva';

export default function SkillScene({ isInView }) {
  const { x, y, z } = useControls({
    x: { value: -2.6, min: -20, max: 20 },
    y: { value: 0.5, min: -20, max: 20 },
    z: { value: 2.55, min: -20, max: 20 },
  });
  return (
    <motion.group>
      {
        // position: [y, z, x]
        isInView ? (
          <motion.group position={[x, y, z]} rotation-y={-Math.PI / 2}>
            <SkillBallsScene />
          </motion.group>
        ) : null
      }
      <motion.group scale={2.5}>
        <IslandFall />
      </motion.group>
    </motion.group>
  );
}
