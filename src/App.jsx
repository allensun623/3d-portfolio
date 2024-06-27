import { Environment, Sky, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import Interface from './components/Interface';
import { useEffect, Suspense, useState, useRef } from 'react';
import ScrollManager from './components/ScrollManager';
import Menu from './components/Menu';
import Welcome from './components/Welcome';
import { motion } from 'framer-motion-3d';
import { useBallState } from './components/context/FourStarBallContext';

export default function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [entered, setEntered] = useState(false);
  const ballState = useBallState(); // pass state to interface with is rendering intermediate before the provider

  useEffect(() => {
    if (menuOpened) setMenuOpened(false);
  }, [section]);

  const canvasClassName = entered ? 'w-full h-screen h-dvh' : 'w-1, h-0';

  const skyProps = {
    scale: 100,
    turbidity: 0,
    rayleigh: 0.1,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.1,
    inclination: 0.1,
    azimuth: 0.1,
  };

  const cameraRef = useRef();

  return (
    <>
      {entered ? null : <Welcome setEntered={setEntered} />}
      <div className={canvasClassName}>
        <Suspense>
          <Canvas
            ref={cameraRef}
            camera={{
              position: [0, 2, 5],
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
              {entered && <Sky sunPosition={[0, 10, 0]} {...skyProps} />}
            </motion.group>
            {entered && <Environment preset={'sunset'} background />}
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
      </div>
    </>
  );
}
