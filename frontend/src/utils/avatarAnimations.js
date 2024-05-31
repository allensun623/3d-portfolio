import { useFBX } from '@react-three/drei';
import { animationModelPaths, selectedAnimations } from '../constants/avatar';

function loadAnimations() {
  return selectedAnimations.map((name) => {
    const { animations } = useFBX(animationModelPaths[name]);
    animations[0].name = name;
    return animations[0];
  });
}

function preloadAnimations() {
  for (const a of selectedAnimations) {
    useFBX.preload(animationModelPaths[a]);
  }
}

export { loadAnimations, preloadAnimations };
