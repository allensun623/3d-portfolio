import { useRef, useEffect } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export default function ScrollManager({ section, onSectionChange }) {
  const scrollData = useScroll();
  const lastScroll = useRef(0);
  const isScrollAnimating = useRef(false);

  scrollData.fill.classList.add('top-0');
  scrollData.fill.classList.add('absolute');

  useEffect(() => {}, [lastScroll.current]);

  useEffect(() => {
    gsap.to(scrollData.el, {
      duration: 1,
      scrollTop: section * scrollData.el.clientHeight,
      onStart: () => {
        isScrollAnimating.current = true;
      },
      onComplete: () => {
        isScrollAnimating.current = false;
        // update lastScroll on complete
        lastScroll.current = scrollData.scroll.current;
      },
    });
  }, [section]);

  useFrame(() => {
    // ignore while is scrolling animation is on
    if (isScrollAnimating.current) return;

    const curScroll = scrollData.scroll.current;
    // ignore diff between lastScroll: 0.3333333333333333 and curScroll: 0.3338206627680312
    if (Math.abs(lastScroll.current - curScroll) < 0.001) return;
    const lastSection = Math.floor(lastScroll.current * scrollData.pages);
    if (lastSection !== section) return;

    if (lastScroll.current > curScroll) onSectionChange(section - 1);
    else onSectionChange(section + 1);
  });
  return null;
}
