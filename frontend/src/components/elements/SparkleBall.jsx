import * as THREE from 'three';
import { Sparkles, Shadow, Billboard } from '@react-three/drei';
import { LayerMaterial, Depth } from 'lamina';

export default function SparkleBall({
  children,
  size = 1,
  position = [0, 0, 0],
}) {
  return (
    <Sphere
      color={'#e45d43'}
      amount={50}
      emissive={'#e45d43'}
      glow={'#e45d43'}
      size={size}
      position={position}
    >
      {children}
    </Sphere>
  );
}

const Sphere = ({
  size,
  amount = 50,
  color = 'white',
  emissive,
  glow,
  children,
  ...props
}) => (
  <mesh {...props}>
    {children}
    <Glow scale={size * 1.2} near={-25} color={glow || emissive || color} />
    <Sparkles count={amount} scale={size * 2} size={size * 50} speed={0.4} />
    <Shadow
      rotation={[-Math.PI / 2, 0, 0]}
      scale={size * 1.5}
      position={[0, -size, 0]}
      color='black'
      opacity={1}
    />
  </mesh>
);

const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => (
  <Billboard>
    <mesh>
      <circleGeometry args={[2 * scale, 16]} />
      <LayerMaterial
        transparent
        depthWrite={false}
        blending={THREE.CustomBlending}
        blendEquation={THREE.AddEquation}
        blendSrc={THREE.SrcAlphaFactor}
        blendDst={THREE.DstAlphaFactor}
      >
        <Depth
          colorA={color}
          colorB='black'
          alpha={1}
          mode='normal'
          near={near * scale}
          far={far * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB='black'
          alpha={0.5}
          mode='add'
          near={-40 * scale}
          far={far * 1.2 * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB='black'
          alpha={1}
          mode='add'
          near={-15 * scale}
          far={far * 0.7 * scale}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA={color}
          colorB='black'
          alpha={1}
          mode='add'
          near={-10 * scale}
          far={far * 0.68 * scale}
          origin={[0, 0, 0]}
        />
      </LayerMaterial>
    </mesh>
  </Billboard>
);
