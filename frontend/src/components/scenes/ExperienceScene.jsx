import { motion } from 'framer-motion-3d';
import { useState, useEffect } from 'react';

export default function ExperienceScene({ isInView }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(false);
  }, [isInView]);

  return (
    <motion.group
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {
          x: 8,
          transition: { duration: 0 },
        },
        show: {
          x: 0,
          transition: { duration: 10, type: 'linear' },
        },
      }}
      onUpdate={(latest) => {
        // set islands visible after reaching the view
        if (isInView && latest.x < 5.5) setIsVisible(true);
      }}
    >
      {[
        [-2, 1.5, 2],
        [-0.25, 1.5, -0.5],
        [0.5, 1.5, 2.5],
        [2, 1.5, 0],
      ].map((p, idx) => (
        <motion.mesh
          key={idx}
          scale={0.5}
          rotation-x={-Math.PI * 0.5}
          position={p}
        >
          <torusGeometry />
          <meshStandardMaterial color='white' visible={isInView && isVisible} />
        </motion.mesh>
      ))}
    </motion.group>
  );
}
