/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useEffect, useRef, useMemo } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';
import {
  loadAnimations,
  preloadAnimations,
} from '../../utils/characterAnimations';
import { animationOptions } from '../../constants/character';

// TODO remove leva related: camera, wireframe, etc.

export default function CharacterModel(props) {
  const { animation } = props;
  const group = useRef();
  const selectedAnimations = useMemo(loadAnimations, []);
  const cursorFollowRef = useRef(false);
  const cursorFollowPartRef = useRef(null);

  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });

  const { nodes, materials } = useGLTF('models/character.glb');

  const { actions } = useAnimations(selectedAnimations, group);

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName('Head').lookAt(state.camera.position);
    }
    if (cursorFollow || cursorFollowRef.current) {
      // eslint-disable-next-line @react-three/no-new-in-loop
      const target = new THREE.Vector3(
        state.pointer.x * 4,
        state.pointer.y * 4,
        1 * 4
      );
      group.current.getObjectByName(cursorFollowPartRef.current).lookAt(target);
    }
  });

  useEffect(() => {
    if (
      new Set([
        animationOptions.WAVING,
        animationOptions.SITTING_CROSS_LEGGED,
      ]).has(animation)
    ) {
      cursorFollowRef.current = true;
      switch (animation) {
        case animationOptions.WAVING:
          cursorFollowPartRef.current = 'Spine';
          break;
        case animationOptions.SITTING_CROSS_LEGGED:
          cursorFollowPartRef.current = 'Head';
          break;
        default:
          cursorFollowPartRef.current = null;
      }
    } else {
      cursorFollowRef.current = false;
    }
    actions[animation]?.reset().fadeIn(0.5).play();

    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();

    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((materials) => {
      materials.wireframe = wireframe;
    });
  }, [wireframe]);

  return (
    <group {...props} ref={group} dispose={null}>
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
        material={materials['blue.goku']}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials['orange.goku']}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
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
    </group>
  );
}

useGLTF.preload('/models/character.glb');

preloadAnimations();
