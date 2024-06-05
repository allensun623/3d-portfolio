import { motion } from 'framer-motion-3d';
import { Model as IslandSummerIsolateModel } from '../models/IslandSummerIsolateModel';

export default function ExperienceScene({ isInView }) {
  return (
    <motion.group
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {
          transition: { duration: 0 },
        },
        show: {
          transition: { duration: 6, type: 'linear' },
        },
      }}
      // onUpdate={(latest) => {
      //   // set islands visible after reaching the view
      //   if (isInView && latest.x < 5.5) setIsVisible(true);
      // }}
    >
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
  );
}
