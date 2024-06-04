import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import Interface from './components/Interface';
import ScrollManager from './components/ScrollManager';
import { useState } from 'react';
import { Leva } from 'leva';
// import About from './components/About';

// TODO remove leva

export default function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      {/* <About /> */}
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach='background' args={['#ececec']} />
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
      <Leva hidden />
    </>
  );
}


