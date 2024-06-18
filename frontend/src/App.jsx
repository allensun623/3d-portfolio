import { useEffect, Suspense } from 'react';
import { Environment, Sky, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import Interface from './components/Interface';
import ScrollManager from './components/ScrollManager';
import { useState } from 'react';
import Menu from './components/Menu';
import { Leva } from 'leva';
import Welcome from './components/Welcome';
import { motion } from 'framer-motion-3d';
import { FourStarBallContext } from './components/context/FourStarBallContext';

// import About from './components/About';

// TODO remove leva

export default function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  const canvasClassName = entered ? 'w-full h-full' : 'w-0, h-0';

  return (
    <FourStarBallContext>
      {entered ? null : <Welcome setEntered={setEntered} />}
      <motion.div className={canvasClassName}>
        {/* <About /> */}
        <Suspense>
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
            {entered && <Sky />}
            <Environment preset='sunset' />
            <ScrollControls pages={5} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Scene section={section} />
              </Scroll>
              <Scroll html>
                <Interface section={section} />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </Suspense>
        {/* TODO move menu to interface */}
        {entered && (
          <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        )}
        <Leva hidden />
      </motion.div>
    </FourStarBallContext>
  );
}
