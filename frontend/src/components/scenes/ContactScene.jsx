import { motion } from 'framer-motion-3d';
import { Model as HouseModel } from '../models/IslandWinterHouseModel';
import { Model as IslandWinterModel } from '../models/IslandWinterModel';
import { Model as PillarModel } from '../models/IslandWinterHousePillarModel';
import { Model as GetInTouchModel } from '../models/GetInTouch';

export default function ContactScene({ isInView }) {
  const crystalBallMeshProps = {
    color: '#ffffff',
    roughness: 0,
    metalness: 0,
    transmission: 0.98,
    thickness: 0,
    clearcoat: 0.2,
    specularIntensity: 0.5,
    ior: 1.33,
    polygonOffset: true,
    polygonOffsetFactor: -5,
    flatShading: true,
  };

  return (
    <>
      <motion.group
        position-y={0}
        animate={isInView ? 'inView' : 'init'}
        variants={{
          init: {},
          inView: {
            y: 0.5,
          },
        }}
        transition={{ delay: 2.6 }}
      >
        <motion.mesh
          scale={2.2}
          position-x={-0.35}
          position-y={0}
          position-z={0.3}
          animate={isInView ? 'inView' : 'init'}
          variants={{
            init: {},
            inView: {
              scale: 0.5,
              y: 0.25,
              z: 0.3,
              x: 0,
            },
          }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.group>
            <HouseModel />
          </motion.group>
        </motion.mesh>
        {isInView ? (
          <motion.group scale={1} position-z={0.2} position-y={-0.255}>
            <PillarModel />
          </motion.group>
        ) : null}
      </motion.group>

      {/* Get in touch */}
      {isInView ? (
        <motion.group
          position={[-0.72, 2.06, 0.25]}
          rotation-z={-Math.PI / 8}
          scale={0.4}
        >
          <GetInTouchModel />
        </motion.group>
      ) : null}
      {/* Crystal Ball */}
      <motion.mesh scale={2.9} position-y={1.8}>
        <sphereGeometry />
        <motion.meshPhysicalMaterial {...crystalBallMeshProps} />
      </motion.mesh>
      <IslandWinterModel scale={2} />
      {/* TODO four star ball */}
      {/* {isInView ? (
        <motion.group position={[-0.48, 1.2, 0.6]} rotationY={Math.PI / 6}>
          <SkillBall
            skill={skills[0]}
            isFullStar={true}
            onTapBall={() => {}}
            fourStarScale={0.13}
            animation={false}
            clickable={false}
          />
        </motion.group>
      ) : null} */}
    </>
  );
}
