import { useEffect, useState } from 'react';
import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';
import { bottomBannerText } from '@/constants/text';

export default function Skills({ ballState }) {
  const { showStateYourWish, showWishComeTrue } = ballState;
  const [text, setText] = useState('');

  useEffect(() => {
    const newText = showStateYourWish
      ? bottomBannerText.skill.stateYourWish
      : showWishComeTrue
      ? bottomBannerText.skill.wishComeTrue
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
