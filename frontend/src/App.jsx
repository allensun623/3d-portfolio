import { useEffect } from 'react';
import {
  Environment,
  Sky,
  Scroll,
  ScrollControls,
  OrbitControls,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import Interface from './components/Interface';
import ScrollManager from './components/ScrollManager';
import { useState } from 'react';
import Menu from './components/Menu';
import { Leva } from 'leva';
import Welcome from './components/Welcome';

// import About from './components/About';

// TODO remove leva

export default function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      {/* <About /> */}
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach='background' args={['#ececec']} />
        <Sky />
        <Environment preset='sunset' />
        <Welcome />
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
      {/* TODO move menu to interface */}
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Leva hidden />
    </>
  );
}
