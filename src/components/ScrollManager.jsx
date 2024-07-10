import { useRef, useEffect } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export default function ScrollManager({ section, onSectionChange }) {
  const scrollData = useScroll();
  const prevScroll = useRef(0);
  const prevSection = useRef(0);
  const isScrollAnimating = useRef(false);

  // Initialize scrollData.fill styles once on mount
  useEffect(() => {
    if (scrollData.fill) {
      // scroll to absolute top
      scrollData.fill.classList.add('top-0', 'absolute');
    }
  }, [scrollData.fill]);

  useEffect(() => {
    gsap.to(scrollData.el, {
      duration: 1,
      scrollTop: section * scrollData.el.clientHeight,
      onStart: () => {
        isScrollAnimating.current = true;
      },
      onComplete: () => {
        isScrollAnimating.current = false;
        // update prevScroll and prevSection on complete
        prevScroll.current = scrollData.scroll.current;
        prevSection.current = section;
      },
    });
  }, [section]);

  useFrame(() => {
    // ignore while is scrolling animation is on
    if (isScrollAnimating.current) return;
    if (prevSection.current !== section) return;

    const curScroll = scrollData.scroll.current;
    const scrollDiff = Math.abs(prevScroll.current - curScroll);
    // ignore diff between prevScroll and curScroll if the difference is minimal.
    // e.g.prevScroll: 0.3333333333333333 and curScroll: 0.3338206627680312
    if (scrollDiff < 0.001) return;

    // increase scroll threshold
    if (scrollDiff < 0.05) {
      scrollData.scroll.current = prevScroll.current;
      return;
    }

    // update section based on scroll direction
    if (prevScroll.current > curScroll) onSectionChange(section - 1);
    else onSectionChange(section + 1);
  });

  return null;
}
