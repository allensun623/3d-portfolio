import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Character from './Character';
import { animationOptions } from '../constants/character';

const CharacterAnimation = ({ points }) => {
  const characterRef = useRef();
  const [progress, setProgress] = useState(0);

  useFrame((state, delta) => {
    if (progress < 1) {
      setProgress((prev) => Math.min(prev + delta * 0.1, 1));
    }
    if (progress === 1) {
      setProgress(0);
    }

    // eslint-disable-next-line @react-three/no-new-in-loop
    const point = new THREE.Vector3();
    // eslint-disable-next-line @react-three/no-new-in-loop
    const curve = new THREE.CatmullRomCurve3(points);
    curve.getPointAt(progress, point);
    characterRef.current.position.copy(point);
  });

  return (
    <mesh ref={characterRef}>
      <CharacterAnimation animation={animationOptions.WALKING} />
    </mesh>
  );
};

const Path = ({ points }) => {
  const lineRef = useRef();
  const curve = new THREE.CatmullRomCurve3(points);

  useFrame(() => {
    lineRef.current.geometry.setFromPoints(curve.getPoints(50));
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial color='blue' />
    </line>
  );
};

const Scene = () => {
  const points = [
    // new THREE.Vector3(4, 2, 10),
    // new THREE.Vector3(-6, 5, -8),
    new THREE.Vector3(5, 3, -6),
    new THREE.Vector3(3, 2, -3),
    new THREE.Vector3(2, 2, -3),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-2, -2, -2),
    new THREE.Vector3(-3, -3, 0),
  ];

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Character points={points} />
      <Path points={points} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
