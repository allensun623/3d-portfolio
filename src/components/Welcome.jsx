import GlassBall from './elements/GlassBall';
import SparkleBall from './elements/SparkleBall';
import { motion } from 'framer-motion-3d';
import { Canvas } from '@react-three/fiber';
import { useProgress, Sky } from '@react-three/drei';
import { clickableHeartBeatMotion } from '../utils/motions/ballMotion';
import { useState } from 'react';

export default function Welcome({ setEntered }) {
  const SCALE = 0.2;
  const { progress, loaded } = useProgress();
  const [playEnterAnimate, setPlayEnterAnimate] = useState(false);

  const handleClickEnter = () => {
    setPlayEnterAnimate(true);
    setTimeout(() => setEntered(true), 1200);
  };

  return (
    <>
      <div className='z-10 fixed top-0 left-0 overflow-hidden flex flex-col justify-center items-center h-1/2 w-full'>
        <div className='max-w-screen-2xl flex flex-col justify-center items-center space-y-2 md:space-y-8 px-3'>
          <p className='text-white text-4xl md:text-7xl xl:text-9xl text-center whitespace-pre-line'>
            WELCOME TO MY WORLD!
          </p>
          <p className='text-white text-3xl md:text-5xl xl:text-7xl text-center font-light whitespace-pre-line'>
            {
              "I'm Allen Sun, a software engineer on a mission to transform ideas into stunning 3D realities. Find every shining four-star ball, click and explore the endless possibilities of the world."
            }
          </p>
        </div>
      </div>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <hemisphereLight intensity={0.5} color='white' groundColor='black' />
        <Sky rayleigh={6} sunPosition={[0.1, 0, 0]} />
        <motion.group
          position={[0, -0.4, 0]}
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
      <div className='z-10 fixed bottom-0 left-0 overflow-hidden flex flex-col justify-center items-center w-full h-1/5 md:h-1/3 space-y-5'>
        <p className='text-white text-xl md:text-2xl xl:text-4xl text-center font-extralight whitespace-pre-line leading:none md:leading-normal'>
          {
            'In Memory of\n鳥山明 / とりやまあきら / Toriyama Akira\n1982 - 2024'
          }
        </p>
      </div>
    </>
  );
}
