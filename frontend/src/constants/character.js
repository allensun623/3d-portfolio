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
  SITTING_HOLD: 'Sitting Hold',
  WAVING_BYE: 'Waving Bye',
  FIREBALL: 'Fireball',
  PICK_FRUIT: 'Pick Fruit',
});

// animations used in the scene
const selectedAnimations = Object.freeze([
  animationOptions.SITTING,
  // animationOptions.FALLING,
  // animationOptions.RUNNING_AND_JUMPING,
  animationOptions.SITTING_CROSS_LEGGED,
  animationOptions.WAVING,
  animationOptions.STANDING,
  // animationOptions.WALKING,
  animationOptions.LOOKING,
  animationOptions.SITTING_HOLD,
  animationOptions.WAVING_BYE,
  animationOptions.FIREBALL,
  animationOptions.PICK_FRUIT,
]);

// transition animation in the order of section
const sectionTransitAnimations = [
  animationOptions.SITTING,
  animationOptions.LOOKING,
  animationOptions.PICK_FRUIT,
  animationOptions.WAVING,
  animationOptions.SITTING_HOLD,
];

export { animationOptions, selectedAnimations, sectionTransitAnimations };
