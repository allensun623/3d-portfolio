import { motion } from 'framer-motion-3d';
import { Model as CloudModel } from '../models/CloudModel';
import { experiences } from '@/constants/experiences';

export default function ExperiencesText() {
  return (
    <motion.group
      scale={0.05}
      position={[0, 1, 0]}
      rotation-y={(Math.PI * 5) / 8}
    >
      {experiences.map((e, i) => (
        <motion.group
          key={i}
          initial={{ ...e.initial, scale: 0.2 }}
          animate={{ ...e?.text, scale: 1 }}
          transition={{ duration: 2, delay: e?.delay }}
        >
          <motion.group>
            <motion.group scale={5.5} position={e.cloud}>
              <CloudModel />
            </motion.group>
            <motion.group scale={e.textScale}>{e.textModel}</motion.group>
          </motion.group>
        </motion.group>
      ))}
    </motion.group>
  );
}
