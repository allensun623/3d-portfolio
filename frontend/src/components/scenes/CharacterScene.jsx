import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { sectionTransitAnimations } from '../../constants/avatar';
import Avatar from '../characters/Avatar';

export default function CharacterScene({ section }) {
  const [animation, setAnimation] = useState(sectionTransitAnimations[0]);
  const characterGroup = useRef();

  useEffect(() => {
    setAnimation(sectionTransitAnimations[section]);
  }, [section]);

  return (
    <motion.group ref={characterGroup} position-z={2.5} position-y={0.25}>
      <Avatar animation={animation} position-y={0.5} />
      <mesh scale={[0.8, 0.4, 0.8]}>
        <icosahedronGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
    </motion.group>
  );
}
