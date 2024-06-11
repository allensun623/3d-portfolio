import { Model as CherryFlowerModel } from '../models/CherryFlowerModel';
import { motion } from 'framer-motion-3d';
// import { useControls } from 'leva';

export default function CherryFlowerPathScene() {
  // generate positions of each flower on the path
  const flowerRowsPositions = () => {
    const rows = 11;
    const cols = 4;
    const gapX = 1.5 / rows;
    const gapY = 0.01 / rows;
    const gapZ = 1 / rows;
    const path = [];
    for (let i = 0; i < rows; i++) {
      const positions = [];
      for (let j = 0; j < cols; j++) {
        positions.push([
          0.5 + gapZ * i + j / 10 / cols + Math.random() / 10,
          0.03 + gapY * j,
          -0.4 + gapX * j + Math.random() / 10,
        ]);
      }
      path.push(positions);
    }
    return path;
  };

  // get a row of flowers
  const flowerRow = (row, i) => {
    return row.map((p, j) => (
      <motion.group
        key={i * row.length + j}
        position={p}
        rotation-y={Math.random() * Math.PI} // random rotation
        rotation-z={Math.round(Math.random()) * Math.PI} // random flip
      >
        <CherryFlowerModel />
      </motion.group>
    ));
  };

  // get a path of flowers by rows
  const flowersPath = () => {
    const positions = flowerRowsPositions();
    return positions.map((row, i) => (
      <motion.group
        key={i}
        initial={{ y: -1 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 + (positions.length - i) * 0.2 }}
      >
        {flowerRow(row, i)}
      </motion.group>
    ));
  };

  return <motion.group scale={2}>{flowersPath()}</motion.group>;
}
