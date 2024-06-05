const animationOptions = Object.freeze({
  TYPING: 'Typing animation',
  STANDING: 'Standing Idle',
  FALLING: 'Falling Idle',
  SITTING: 'Sitting Idle',
  RUNNING_AND_JUMPING: 'Running Jump',
  WAVING: 'Waving',
  SITTING_CROSS_LEGGED: 'Sitting Cross-legged',
  WALKING: 'Walking',
  LOOKING: 'Looking',
});

// animations used in the scene
const selectedAnimations = Object.freeze([
  animationOptions.SITTING,
  animationOptions.FALLING,
  animationOptions.RUNNING_AND_JUMPING,
  animationOptions.SITTING_CROSS_LEGGED,
  animationOptions.WAVING,
  animationOptions.STANDING,
  animationOptions.WALKING,
  animationOptions.LOOKING,
]);

// transition animation in the order of section
const sectionTransitAnimations = [
  animationOptions.SITTING,
  animationOptions.LOOKING,
  animationOptions.SITTING_CROSS_LEGGED,
  animationOptions.WAVING,
  animationOptions.SITTING,
];

export { animationOptions, selectedAnimations, sectionTransitAnimations };
