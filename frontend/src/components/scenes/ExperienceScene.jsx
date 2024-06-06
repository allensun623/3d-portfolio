import { motion } from 'framer-motion-3d';
import { Model as IslandSummerIsolateModel } from '../models/IslandSummerIsolateModel';
import { Model as IslandSummerModel } from '../models/IslandSummerModel';

export default function ExperienceScene() {
  return (
    <>
      <motion.group position-y={-1.35}>
        {[
          [-1.25, 1.39, 0.5],
          [0, 1.39, -1],
          [0.5, 1.5, 2],
          [1.75, 1.5, 0],
        ].map((p, idx) => (
          <motion.group key={idx} scale={0.25} position={p}>
            <IslandSummerIsolateModel />
          </motion.group>
        ))}
      </motion.group>
      <IslandSummerModel scale={2} />
    </>
  );
}
