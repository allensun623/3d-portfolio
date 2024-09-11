import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/sky.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        scale={35}
        position={[0, -10, -60]}
        geometry={nodes.Sphere__0.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/sky.glb');
