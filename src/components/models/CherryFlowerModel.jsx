/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/cherry-flower.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials['cherry.flower.pink01']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials['cherry.flower.pink02']}
      />
    </group>
  );
}


