/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useEffect, useRef } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';
import { animationOptions } from '../constants/avatar';

export function Model(props) {
  const { animation } = props;
  const group = useRef();

  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });

  const { nodes, materials } = useGLTF('models/Avatar.glb');

  const { animations: typingAnimation } = useFBX(
    'animations/Typing animation.fbx'
  );
  const { animations: fallingAnimation } = useFBX(
    'animations/Falling Idle.fbx'
  );
  const { animations: standingAnimation } = useFBX(
    'animations/Standing Idle.fbx'
  );
  typingAnimation[0].name = animationOptions.TYPING;
  fallingAnimation[0].name = animationOptions.FALLING;
  standingAnimation[0].name = animationOptions.STANDING;
  const { actions } = useAnimations(
    [typingAnimation[0], fallingAnimation[0], standingAnimation[0]],
    group
  );

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
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
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
      <group>
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
    </group>
  );
}

useGLTF.preload('models/Avatar.glb');
useFBX.preload('animations/Typing animation.fbx');
useFBX.preload('animations/Standing Idle.fbx');
useFBX.preload('animations/Falling Idle.fbx');
