import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useBallState } from './context/FourStarBallContext';
import Interface from './Interface';
import Scene from './Scene';
import ScrollManager from './ScrollManager';
import Sky from './Sky';

export default function MainCanvas({ entered, section, handleSectionChange }) {
  const ballState = useBallState(); // pass state to interface with is rendering intermediate before the provider
  const isMobile = window.innerWidth < 768; // MOBILE_WIDTH_THRESHOLD

  return (
    <Canvas
      camera={{
        position: [0, 2, 5],
        fov: 30,
        near: 1,
        far: 20000,
      }}
    >
      <motion.group position-z={12} position-y={-60} rotation-x={Math.PI / 4}>
        {entered && <Sky />}
      </motion.group>
      <Environment preset={'sunset'} />
      <ScrollControls pages={5} damping={0.1}>
        <ScrollManager
          section={section}
          handleSectionChange={handleSectionChange}
        />
        <Scroll>
          <Scene section={section} isMobile={isMobile} entered={entered} />
        </Scroll>
        <Scroll html>
          <Interface
            section={section}
            ballState={ballState}
            handleSectionChange={handleSectionChange}
            isMobile={isMobile}
          />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
