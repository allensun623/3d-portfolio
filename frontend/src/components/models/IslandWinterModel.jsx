/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/island-winter.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['brown.trunk']}
        position={[-0.933, 0.215, -1.093]}
        scale={[0.638, 0.581, 0.638]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone001.geometry}
          material={materials['green.tree']}
          position={[0, 1.718, 0]}
          scale={[0.589, 0.505, 0.589]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone002.geometry}
          material={materials['white.ice']}
          position={[0, 1.718, 0]}
          scale={[0.589, 0.505, 0.589]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone003.geometry}
          material={materials['green.tree']}
          position={[0, 1.34, 0]}
          scale={[0.668, 0.572, 0.668]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone004.geometry}
          material={materials['white.ice']}
          position={[0, 1.34, 0]}
          scale={[0.668, 0.572, 0.668]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone005.geometry}
          material={materials['green.tree']}
          position={[0.014, 0.907, -0.045]}
          scale={[0.766, 0.656, 0.766]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone006.geometry}
          material={materials['white.ice']}
          position={[0.014, 0.907, -0.045]}
          scale={[0.766, 0.656, 0.766]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock.geometry}
        material={materials['grey.rock']}
        position={[0.767, 0.284, 1.112]}
        scale={0.595}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rockicing.geometry}
          material={materials['white.ice']}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock001.geometry}
        material={materials['grey.rock']}
        position={[1.4, 0.251, 0.374]}
        scale={0.595}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rockicing001.geometry}
          material={materials['white.ice']}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock002.geometry}
        material={materials['grey.rock']}
        position={[0.692, 0.114, -0.857]}
        scale={0.595}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rockicing002.geometry}
          material={materials['white.ice']}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock003.geometry}
        material={materials['grey.rock']}
        position={[-0.247, 0.222, -1.508]}
        scale={0.595}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rockicing003.geometry}
          material={materials['white.ice']}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock004.geometry}
        material={materials['grey.rock']}
        position={[-0.943, 0.089, 1.02]}
        scale={0.595}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rockicing004.geometry}
          material={nodes.rockicing004.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['white.ice']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials['grey.rock']}
      />
    </group>
  );
}

useGLTF.preload('/models/island-winter.glb');
