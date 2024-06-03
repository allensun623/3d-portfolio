const animationOptions = Object.freeze({
  TYPING: 'Typing animation',
  STANDING: 'Standing Idle',
  FALLING: 'Falling Idle',
  SITTING: 'Sitting Idle',
  RUNNING_AND_JUMPING: 'Running Jump',
  WAVING: 'Waving',
  SITTING_CROSS_LEGGED: 'Sitting Cross-legged',
  WALKING: 'Walking',
});

const animationModelNames = Object.freeze({
  [animationOptions.TYPING]: 'Typing animation',
  [animationOptions.STANDING]: 'Standing Idle',
  [animationOptions.FALLING]: 'Falling Idle',
  [animationOptions.SITTING]: 'Sitting Idle',
  [animationOptions.RUNNING_AND_JUMPING]: 'Running Jump',
  [animationOptions.WAVING]: 'Waving',
  [animationOptions.SITTING_CROSS_LEGGED]: 'Sitting Cross-legged',
  [animationOptions.WALKING]: 'Walking',
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
  animationOptions.STANDING,
  animationOptions.WALKING,
]);

// transition animation in the order of section
const sectionTransitAnimations = [
  animationOptions.SITTING,
  animationOptions.WALKING,
  animationOptions.SITTING_CROSS_LEGGED,
  animationOptions.WAVING,
  animationOptions.SITTING,
];

export {
  animationOptions,
  animationModelPaths,
  selectedAnimations,
  sectionTransitAnimations,
};
