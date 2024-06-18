// import React from 'react'
import { Text } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { experiences } from '../../constants/experiences';
import { Model as CloudModel } from '../models/CloudModel';

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
          {i > 0 ? (
            <motion.group>
              <motion.group scale={5} position={e.cloud}>
                <CloudModel />
              </motion.group>
              <motion.group scale={1.25}>
                <Text color={e.color} position-y={0}>
                  {e?.company}
                </Text>
                <Text color={e.color} fontSize={0.8} position-y={-1}>
                  {e?.started} - {e?.ended}
                </Text>
                <Text color={e.color} position-y={-2}>
                  {e?.role}
                </Text>
              </motion.group>
            </motion.group>
          ) : null}
        </motion.group>
      ))}
    </motion.group>
  );
}
