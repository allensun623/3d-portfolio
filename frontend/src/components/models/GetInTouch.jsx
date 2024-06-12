/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes } = useGLTF('/models/text-get-in-touch.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.315}
      />
    </group>
  );
}

useGLTF.preload('/models/text-get-in-touch.glb');