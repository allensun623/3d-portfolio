/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useEffect, useRef, useMemo } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';
import { loadAnimations, preloadAnimations } from '../utils/avatarAnimations';

export default function Avatar(props) {
  const { animation } = props;
  const group = useRef();
  const selectedAnimations = useMemo(loadAnimations, []);

  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });

  const { nodes, materials } = useGLTF('models/Avatar.glb');

  const { actions } = useAnimations(selectedAnimations, group);

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName('Head').lookAt(state.camera.position);
    }
    if (cursorFollow) {
      // eslint-disable-next-line @react-three/no-new-in-loop
      const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1);
      group.current.getObjectByName('Spine2').lookAt(target);
    }
  });

  useEffect(() => {
    // if (animation === animationOptions.RUNNING_AND_JUMPING) {
    //   actions[animation].setLoop(THREE.LoopOnce);
    //   actions[animation].clampWhenFinished = true;
    // }
    actions[animation].reset().fadeIn(0.5).play();

    return () => {
      actions[animation].fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((materials) => {
      materials.wireframe = wireframe;
    });
  }, [wireframe]);

  return (
    <group {...props} ref={group} dispose={null}>
      {/* <group rotation-x={-Math.PI / 2}> */}
      <skinnedMesh
        name='EyeLeft'
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name='EyeRight'
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name='Wolf3D_Head'
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        name='Wolf3D_Teeth'
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <primitive object={nodes.Hips} />
      <primitive object={nodes.neutral_bone} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top_1.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top_2.geometry}
        material={materials['goku logo orange Background Removed']}
        skeleton={nodes.Wolf3D_Outfit_Top_2.skeleton}
      />
    </group>
  );
}

preloadAnimations();