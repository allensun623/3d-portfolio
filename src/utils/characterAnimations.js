import { selectedAnimations } from '@/constants';
import { useFBX, useGLTF } from '@react-three/drei';

/**
 * all animations must be in the folder '/public/assets/animations/'
 * @param {*} name
 * @returns animation path /assets/animations/${name}.fbx
 */
const animationModelPath = (name) => `/assets/animations/${name}.fbx`;

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
  for (const animation of selectedAnimations) {
    useFBX.preload(animationModelPath(animation));
  }
}

/**
 * preload model and a list of selected animations
 */
function preloadModelAndAnimations() {
  useGLTF.preload('/assets/models/character.glb');
  preloadAnimations();
}

export { loadAnimations, preloadModelAndAnimations };
