import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import Interface from './components/Interface';
import ScrollManager from './components/ScrollManager';
import { useState } from 'react';
import { Leva } from 'leva';

export default function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach='background' args={['#ececec']} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience section={section} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Leva hidden />
    </>
  );
}


