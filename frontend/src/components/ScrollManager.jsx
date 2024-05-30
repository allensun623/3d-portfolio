import { useRef, useEffect } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export default function ScrollManager({ section, onSectionChange }) {
  const scrollData = useScroll();
  const lastScroll = useRef(0);
  const lastSection = useRef(0);
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
        // update lastScroll and lastSection on complete
        lastScroll.current = scrollData.scroll.current;
        lastSection.current = section;
      },
    });
  }, [section]);

  useFrame(() => {
    // ignore while is scrolling animation is on
    if (isScrollAnimating.current) return;

    const curScroll = scrollData.scroll.current;

    if (lastSection.current !== section) return;
    // ignore diff between lastScroll: 0.3333333333333333 and curScroll: 0.3338206627680312
    if (Math.abs(lastScroll.current - curScroll) < 0.001) return;

    // update section
    if (lastScroll.current > curScroll) onSectionChange(section - 1);
    else onSectionChange(section + 1);
  });
  return null;
}
