import GlassBall from '../elements/GlassBall';
import SparkleBall from '../elements/SparkleBall';
import { motion } from 'framer-motion-3d';
import { Canvas } from '@react-three/fiber';
import { useProgress, Sky } from '@react-three/drei';
import { clickableHeartBeatMotion } from '../../utils/motions/ballMotion';
import { useRef, useState, useEffect } from 'react';

export default function WelcomeBallCanvas({ setEntered }) {
  const SCALE = 0.2;
  const rootRef = useRef(null);
  const { progress, loaded } = useProgress();
  const [playEnterAnimate, setPlayEnterAnimate] = useState(false);

  const handleClickEnter = () => {
    setPlayEnterAnimate(true);
    // wait until before the completion of scaling animation
    setTimeout(() => setEntered(true), 1200);
  };

  useEffect(() => {
    rootRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div ref={rootRef} className='w-full h-screen h-dvh'>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <hemisphereLight intensity={0.5} color='white' groundColor='black' />
        <Sky rayleigh={6} sunPosition={[0.1, 0, 0]} />
        <motion.group
          position={[0, -0.4, 0]}
          animate={
            playEnterAnimate ? { scale: 20, transition: { duration: 1.5 } } : {}
          }
        >
          <SparkleBall size={SCALE * 1.75}>
            <motion.group
              animate={
                loaded && !playEnterAnimate ? clickableHeartBeatMotion() : {}
              }
              rotation={[Math.PI / 12, 0, 0]}
            >
              <GlassBall
                isFourStar
                scale={SCALE}
                innerProps={{
                  onTapBall: () => {},
                  fourStarScale: SCALE,
                  animation: false,
                  clickable: loaded,
                }}
                innerThetaLength={(progress * Math.PI) / 100}
                emissive={'#ffd7a2'}
                emissiveIntensity={1}
                clickable={loaded}
                handleClick={handleClickEnter}
              />
            </motion.group>
          </SparkleBall>
        </motion.group>
      </Canvas>
    </div>
  );
}
