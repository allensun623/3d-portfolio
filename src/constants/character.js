const animationOptions = Object.freeze({
  ARM_STRETCHING: 'Arm Stretching',
  CROUCH_POSE: 'Crouch Pose',
  FIREBALL: 'Fireball',
  LOOKING: 'Looking',
  PICK_FRUIT: 'Pick Fruit',
  POINTING: 'Pointing',
  SITTING: 'Sitting Idle',
  SITTING_CROSS_LEGGED: 'Sitting Cross-legged',
  SITTING_HOLD: 'Sitting Hold',
  STANDING: 'Standing Idle',
  WALKING: 'Walking',
  WAVING: 'Waving',
  WAVING_BYE: 'Waving Bye',
});

// animations used in the scene
const selectedAnimations = Object.freeze([
  animationOptions.ARM_STRETCHING,
  animationOptions.FIREBALL,
  animationOptions.LOOKING,
  animationOptions.PICK_FRUIT,
  animationOptions.POINTING,
  animationOptions.SITTING,
  animationOptions.SITTING_CROSS_LEGGED,
  animationOptions.SITTING_HOLD,
  animationOptions.WAVING,
  animationOptions.WAVING_BYE,
]);

// transition animation in the order of section
const sectionTransitAnimations = Object.freeze([
  animationOptions.SITTING,
  animationOptions.LOOKING,
  animationOptions.ARM_STRETCHING,
  animationOptions.WAVING,
  animationOptions.SITTING_HOLD,
]);

// character armature defined in the Blender model
const ARMATURE = Object.freeze({
  SPINE: 'Spine',
  HEAD: 'Head',
});

// animations follow cursor
const CURSOR_FOLLOW_ARMATURES = Object.freeze({
  [animationOptions.WAVING]: ARMATURE.SPINE,
  [animationOptions.PICK_FRUIT]: ARMATURE.SPINE,
  [animationOptions.SITTING_CROSS_LEGGED]: ARMATURE.HEAD,
});

export {
  animationOptions,
  selectedAnimations,
  sectionTransitAnimations,
  CURSOR_FOLLOW_ARMATURES,
};
