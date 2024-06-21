import { useEffect, useState } from 'react';
import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';

export default function Skills({ ballState }) {
  const { showStateYourWish, showWishComeTrue } = ballState;
  const [text, setText] = useState('');

  useEffect(() => {
    if (showStateYourWish) setText('Shenron: State your wish');
    else if (showWishComeTrue)
      setText('Shenron: Your wish is coming true soon');
    else setText('');
    return () => setText('');
  }, [showStateYourWish, showWishComeTrue]);

  return (
    <SectionContainer>{text && <BottomBanner text={text} />}</SectionContainer>
  );
}
