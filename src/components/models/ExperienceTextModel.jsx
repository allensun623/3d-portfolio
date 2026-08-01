import { Center, Text3D } from '@react-three/drei';
import helvetikerRegular from 'three/examples/fonts/helvetiker_regular.typeface.json';

const LINE_HEIGHT = 0.7;
const CONTENT_SCALE = 1.5;

export default function ExperienceTextModel({ lines, color }) {
  const firstLineY = ((lines.length - 1) * LINE_HEIGHT) / 2;

  return (
    <group scale={CONTENT_SCALE}>
      {lines.map((line, index) => (
        <Center
          key={line}
          position={[0, firstLineY - index * LINE_HEIGHT, 0]}
        >
          <Text3D
            font={helvetikerRegular}
            size={0.48}
            height={0.1}
            curveSegments={8}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.012}
            bevelSegments={2}
            castShadow
            receiveShadow
          >
            {line}
            <meshStandardMaterial color={color} roughness={0.5} />
          </Text3D>
        </Center>
      ))}
    </group>
  );
}
