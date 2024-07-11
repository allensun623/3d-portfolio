import * as THREE from 'three';
import { skills } from '../constants/skills';
/**
  Get information and state of a 3d Object
*/

/**
 * Get world position of a geometry
 * @param {*} geometry
 * @returns
 */
const getPosition = (geometry) => {
  const position = new THREE.Vector3();
  geometry.current.getWorldPosition(position);
  return position;
};

/**
 * Getting a random number between two values
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
 * @param {*} min
 * @param {*} max
 * @returns
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * generate a list of random positions
 * @returns positions - a list of positions [[x, y, z]]
 */
const generateSkillBallPositions = (isMobile) => {
  const positions = [[0.2, 0.5, 0.5]];
  while (positions.length < skills.length) {
    const x = getRandomArbitrary(-3.2, 1);
    const y = getRandomArbitrary(0, isMobile ? 8 : 2.5);
    const z = getRandomArbitrary(0, 2);
    // avoid point overlaps character
    if ((x - positions[0][0]) ** 2 + (y - positions[0][1]) ** 2 > 0.5)
      positions.push([x, y, z]);
  }
  return positions;
};

export { generateSkillBallPositions, getPosition };
