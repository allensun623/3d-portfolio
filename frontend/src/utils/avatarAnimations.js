import { useFBX } from '@react-three/drei';
import { selectedAnimations } from '../constants/avatar';

/**
 *
 * @param {*} name
 * @returns animation path animations/${name}.fbx
 */
const animationModelPath = (name) => `animations/${name}.fbx`;

/**
 * load a list of animations
 * @returns animations
 */
function loadAnimations() {
  return selectedAnimations.map((name) => {
    const { animations } = useFBX(animationModelPath(name));
    animations[0].name = name;
    return animations[0];
  });
}

/**
 * preload a list of animations
 */
function preloadAnimations() {
  for (const a of selectedAnimations) {
    useFBX.preload(animationModelPath(a));
  }
}

export { loadAnimations, preloadAnimations };
