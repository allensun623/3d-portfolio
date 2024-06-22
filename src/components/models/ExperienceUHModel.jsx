/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/experience-UH.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.gold}
        position={[0, 0, 0]}
        scale={6.5}
      />
    </group>
  );
}

useGLTF.preload('/models/experience-UH.glb');