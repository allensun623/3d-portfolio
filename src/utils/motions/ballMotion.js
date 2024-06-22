export const clickableHeartBeatMotion = ({ scale = 1.2, delay = 0 } = {}) => ({
  scale,
  transition: {
    delay,
    duration: 1,
    repeat: Infinity,
    type: 'spring',
  },
});
