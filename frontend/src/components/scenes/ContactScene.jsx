export default function ContactScene() {
  return (
    <>
      <mesh scale={[0.8, 0.4, 0.8]} position={[-1.2, 2, 1]}>
        <icosahedronGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh scale={[1, 2, 1]} position-z={1.5} position-y={-0.75}>
        <boxGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
    </>
  );
}
