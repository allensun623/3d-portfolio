import * as THREE from 'three';
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

export { getPosition };
