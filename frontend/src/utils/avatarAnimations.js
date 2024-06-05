import { useFBX } from '@react-three/drei';
import { selectedAnimations } from '../constants/avatar';

/**
 * all animations must be in the folder 'public/animations'
 * @param {*} name
 * @returns animation path animations/${name}.fbx
 */
const animationModelPath = (name) => `animations/${name}.fbx`;

/**
 * load a list of selected animations, and rename them
 * @returns animations
 */
function loadAnimations() {
  return selectedAnimations.map((name) => {
    const {
      animations: [animation],
    } = useFBX(animationModelPath(name));
    animation.name = name;
    return animation;
  });
}

/**
 * preload a list of selected animations
 */
function preloadAnimations() {
  for (const a of selectedAnimations) {
    useFBX.preload(animationModelPath(a));
  }
}

export { loadAnimations, preloadAnimations };
