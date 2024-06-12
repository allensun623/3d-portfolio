// import React from 'react'
import { Text } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { experiences } from '../../constants/experiences';
import { Model as CloudModel } from '../models/CloudModel';

export default function ExperiencesText() {
  return (
    <motion.group scale={0.05} position={[0, 1, 0]} rotation-y={Math.PI / 2}>
      {experiences.map((e, i) => (
        <motion.group
          key={i}
          position={e.text}
          initial={{ x: -100 }}
          animate={{ x: e.text[0] }}
          transition={{ duration: 2, delay: e.delay }}
        >
          {i > 0 ? (
            <motion.group scale={10} position={e.cloud}>
              <CloudModel />
            </motion.group>
          ) : null}
          <Text color={e.color} position-y={0}>
            {e?.company}
          </Text>
          <Text color={e.color} fontSize={0.8} position-y={-1}>
            {e?.started} - {e?.ended}
          </Text>
          <Text color={e.color} position-y={-2}>
            {e?.role}
          </Text>
          {/* contributions */}
          {e?.contributions?.map((c, j) => (
            <Text
              color={e.color}
              fontSize={0.8}
              key={j}
              position-y={-3 - 1 * j}
            >
              - {c}
            </Text>
          ))}
        </motion.group>
      ))}
    </motion.group>
  );
}
