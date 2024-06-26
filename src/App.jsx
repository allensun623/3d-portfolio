import { Environment, Sky, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import Interface from './components/Interface';
import { useEffect, Suspense, useState, useRef } from 'react';
import ScrollManager from './components/ScrollManager';
import Menu from './components/Menu';
import { Leva, useControls } from 'leva';
import Welcome from './components/Welcome';
import { motion } from 'framer-motion-3d';
import { useBallState } from './components/context/FourStarBallContext';

// TODO remove leva

export default function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [entered, setEntered] = useState(false);
  const ballState = useBallState(); // pass state to interface with is rendering intermediate before the provider

  useEffect(() => {
    if (menuOpened) setMenuOpened(false);
  }, [section]);

  const canvasClassName = entered ? 'w-full h-full' : 'w-0, h-0';

  const {
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    inclination,
    azimuth,
    scale,
    preset,
  } = useControls({
    turbidity: { value: 0, min: 0, max: 20 },
    rayleigh: { value: 0.1, min: 0, max: 4 },
    mieCoefficient: { value: 0.005, min: 0, max: 0.1 },
    mieDirectionalG: { value: 0.1, min: 0, max: 1 },
    inclination: { value: 0.1, min: 0, max: 1 },
    azimuth: { value: 0.1, min: 0, max: 1 },
    height: { value: 1, min: 0, max: 100 },
    radius: { value: 10, min: 0, max: 100 },
    scale: { value: 100, min: 0, max: 200 },
    preset: {
      value: 'sunset',
      options: [
        'apartment',
        'city',
        'dawn',
        'forest',
        'lobby',
        'night',
        'park',
        'studio',
        'sunset',
        'warehouse',
      ],
    },
  });

  const skyProps = {
    scale,
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    inclination,
    azimuth,
  };

  const cameraRef = useRef();

  return (
    <>
      {entered ? null : <Welcome setEntered={setEntered} />}
      <motion.div className={canvasClassName}>
        <Suspense>
          <Canvas
            ref={cameraRef}
            camera={{
              position: [0, 2, 5],
              // rotation: [-Math.PI / 12, 0, 0],
              fov: 30,
              near: 1,
              far: 20000,
            }}
          >
            <motion.group
              position-z={12}
              position-y={-60}
              rotation-x={Math.PI / 4}
            >
              <Sky sunPosition={[0, 10, 0]} {...skyProps} />
            </motion.group>
            <Environment preset={preset} background />
            <ScrollControls pages={5} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Scene section={section} cameraRef={cameraRef} />
              </Scroll>
              <Scroll html>
                <Interface
                  section={section}
                  ballState={ballState}
                  onSectionChange={setSection}
                />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </Suspense>
        {entered && (
          <Menu
            section={section}
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        )}
        {/* <Leva collapsed /> */}
        <Leva hidden />
      </motion.div>
    </>
  );
}
