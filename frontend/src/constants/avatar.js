const animationOptions = Object.freeze({
  TYPING: 'Typing',
  STANDING: 'Standing',
  FALLING: 'Falling',
  SITTING: 'Sitting',
  RUNNING_AND_JUMPING: 'RunningAndJumping',
  WAVING: 'Waving',
  SITTING_CROSS_LEGGED: 'SittingCrossLegged',
});

const animationModelNames = Object.freeze({
  [animationOptions.TYPING]: 'Typing animation',
  [animationOptions.STANDING]: 'Standing Idle',
  [animationOptions.FALLING]: 'Falling Idle',
  [animationOptions.SITTING]: 'Sitting Idle',
  [animationOptions.RUNNING_AND_JUMPING]: 'Running Jump',
  [animationOptions.WAVING]: 'Waving',
  [animationOptions.SITTING_CROSS_LEGGED]: 'Sitting Cross-legged',
});

// { animation: full path }
const animationModelPaths = Object.freeze(
  Object.entries(animationModelNames).reduce(
    (pre, [id, name]) => ({
      ...pre,
      [id]: `animations/${name}.fbx`,
    }),
    {}
  )
);

// animations used in the scene
const selectedAnimations = Object.freeze([
  animationOptions.SITTING,
  animationOptions.FALLING,
  animationOptions.RUNNING_AND_JUMPING,
  animationOptions.SITTING_CROSS_LEGGED,
  animationOptions.WAVING,
]);

// transition animation in the order of section
const sectionTransitAnimations = [
  animationOptions.SITTING,
  animationOptions.FALLING,
  animationOptions.SITTING_CROSS_LEGGED,
  animationOptions.WAVING,
];

export {
  animationOptions,
  animationModelPaths,
  selectedAnimations,
  sectionTransitAnimations,
};
