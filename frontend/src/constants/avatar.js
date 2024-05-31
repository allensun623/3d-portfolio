const animationOptions = Object.freeze({
  TYPING: 'Typing',
  STANDING: 'Standing',
  FALLING: 'Falling',
  SITING: 'Sitting',
  RUNNING_AND_JUMPING: 'RunningAndJumping',
  WAVING: 'Waving',
});

const animationModelNames = Object.freeze({
  [animationOptions.TYPING]: 'Typing animation',
  [animationOptions.STANDING]: 'Standing Idle',
  [animationOptions.FALLING]: 'Falling Idle',
  [animationOptions.SITING]: 'Sitting Idle',
  [animationOptions.RUNNING_AND_JUMPING]: 'Running Jump',
  [animationOptions.WAVING]: 'Waving',
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

// animation in order of sections
const selectedAnimations = Object.freeze([
  // animationOptions.SITING,
  // animationOptions.FALLING,
  // animationOptions.STANDING,
  // animationOptions.TYPING,
  animationOptions.SITING,
  animationOptions.RUNNING_AND_JUMPING,
  animationOptions.STANDING,
  animationOptions.WAVING,
]);

export { animationOptions, animationModelPaths, selectedAnimations };
