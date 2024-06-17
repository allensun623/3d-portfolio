export const clickableHeartBeatMotion = (scale = 1.2) => ({
  scale,
  transition: {
    duration: 1,
    repeat: Infinity,
    type: 'spring',
  },
});
