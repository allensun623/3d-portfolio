import { useState, useTransition } from 'react';
import { useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
} from '@react-three/drei';
import * as THREE from 'three';
import { LayerMaterial, Depth, Noise } from 'lamina';

export default function App() {
  return (
    <Environment background resolution={64} preset={'sunset'}>
      <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
      <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          {/* <Base color='blue' alpha={1} mode='normal' /> */}
          <Depth
            colorA='#123456'
            colorB='#000000'
            alpha={1}
            mode='normal'
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
          <Noise mapping='local' type='cell' scale={0.5} mode='softlight' />
        </LayerMaterial>
      </mesh>
    </Environment>
  );
}

function Striplight(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color='white' />
    </mesh>
  );
}
