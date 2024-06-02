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

// TODO generate skill balls based on viewpoint
/**
 * generate a list of random positions, z is based on skill score
 * @returns positions - a list of positions [[x, y, z]]
 */
const generateSkillBallPositions = () => {
  const positions = [[0, 0.65, 2]];
  for (let i = 0; i < 4; i += 0.3) {
    for (let j = 0; j < 5; j++) {
      const x = getRandomArbitrary(-4, 4);
      const z = (skills[positions.length].score / 20 - 5) * 5;
      positions.push([x, i - 2, z]);
      if (positions.length === skills.length) return positions;
    }
  }
  return positions;
};

export { getPosition, generateSkillBallPositions };
