import { Model as IslandSpringModel } from '../models/IslandSpringModel';
import { motion } from 'framer-motion-3d';
import CherryFlowerPathScene from './CherryFlowerPathScene';

export default function RIPScene({ viewport, isInView }) {
  return (
    <motion.group>
      <IslandSpringModel scale={2} />
      {isInView ? <CherryFlowerPathScene viewport={viewport} /> : null}
    </motion.group>
  );
}
