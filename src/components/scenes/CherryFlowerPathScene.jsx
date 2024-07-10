import { Model as CherryFlowerModel } from '../models/CherryFlowerModel';
import { motion } from 'framer-motion-3d';
import { useMemo } from 'react';

// Generate positions of each flower on the path
const generateFlowerPositions = () => {
  const rows = 10;
  const cols = 4;
  const gapX = 1.5 / rows;
  const gapY = 0.01 / rows;
  const gapZ = 1.7 / rows;
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

// Generate a row of flowers
const generateFlowerRow = (row, rowIndex) => {
  return row.map((position, colIndex) => (
    <motion.group
      key={rowIndex * row.length + colIndex}
      position={position}
      rotation-y={Math.random() * Math.PI} // random rotation
      rotation-z={Math.round(Math.random()) * Math.PI} // random flip
    >
      <CherryFlowerModel />
    </motion.group>
  ));
};

// Generate a path of flowers by rows
const generateFlowerPath = (positions) => {
  return positions.map((row, rowIndex) => (
    <motion.group
      key={rowIndex}
      initial={{ y: -1 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        delay: 0.5 + (positions.length - rowIndex) * 0.2,
      }}
    >
      {generateFlowerRow(row, rowIndex)}
    </motion.group>
  ));
};

export default function CherryFlowerPathScene() {
  const positions = useMemo(() => generateFlowerPositions(), []);

  return <motion.group scale={2}>{generateFlowerPath(positions)}</motion.group>;
}
