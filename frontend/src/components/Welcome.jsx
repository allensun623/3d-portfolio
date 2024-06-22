import GlassBall from './elements/GlassBall';
import SparkleBall from './elements/SparkleBall';
import { motion } from 'framer-motion-3d';
import { Canvas } from '@react-three/fiber';
import { useProgress, Sky } from '@react-three/drei';
import { clickableHeartBeatMotion } from '../utils/motions/ballMotion';
import { useEffect, useState } from 'react';

export default function Welcome({ setEntered }) {
  const SCALE = 0.2;
  const { progress, loaded } = useProgress();
  const [playEnterAnimate, setPlayEnterAnimate] = useState(false);

  useEffect(() => {
    console.log({ progress });
  }, [progress]);

  const handleClickEnter = () => {
    setPlayEnterAnimate(true);
    setTimeout(() => setEntered(true), 1200);
  };

  return (
    <>
      <div className='z-10 fixed top-0 left-0 overflow-hidden flex flex-col justify-center items-center w-full h-1/2'>
        <p className='text-white text-7xl text-center'>Welcome to my world</p>
        <p className='text-white text-7xl text-center'>
          {"I'm Allen Sun, a software engineer learning 3D."}
        </p>
      </div>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <hemisphereLight intensity={0.5} color='white' groundColor='black' />
        <Sky rayleigh={9} sunPosition={[0.1, 0, 0]} />
        <motion.group
          position={[0, -0.2, 0]}
          animate={
            playEnterAnimate ? { scale: 20, transition: { duration: 1.5 } } : {}
          }
        >
          <SparkleBall size={SCALE}>
            <motion.group
              animate={
                loaded && !playEnterAnimate ? clickableHeartBeatMotion() : {}
              }
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
      <div className='z-10 fixed bottom-0 left-0 overflow-hidden flex flex-col justify-center items-center w-full h-1/3 space-y-5'>
        <p className='text-white text-6xl text-center pt-20'>
          In the Memory of
        </p>
        <p className='text-white text-6xl text-center'>
          鳥山明 / とりやまあきら / Toriyama Akira
        </p>
        <p className='text-white text-6xl text-center'>1982 - 2024</p>
      </div>
    </>
  );
}
