import { useEffect, useState } from 'react';
import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';
import { bottomText } from '@/constants/text';

export default function Skills({ ballState }) {
  const { showStateYourWish, showWishComeTrue } = ballState;
  const [text, setText] = useState('');

  useEffect(() => {
    const newText = showStateYourWish
      ? bottomText.skill.stateYourWish
      : showWishComeTrue
      ? bottomText.skill.showWishComeTrue
      : '';

    setText(newText);

    return () => setText('');
  }, [showStateYourWish, showWishComeTrue]);

  return (
    <SectionContainer>
      {text && (
        <BottomBanner
          text={text}
          icon={{
            src: '/assets/images/others/ShenronIcon.png',
            alt: 'shenron',
          }}
        />
      )}
    </SectionContainer>
  );
}
