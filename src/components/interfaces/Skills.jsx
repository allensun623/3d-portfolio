import BottomBanner from '@/components/elements/BottomBanner';
import { bottomBannerText, imageIcons } from '@/constants';
import SectionContainer from '@/layouts/SectionContainer';
import { useEffect, useState } from 'react';

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
      {text && <BottomBanner text={text} icon={imageIcons.shenron} />}
    </SectionContainer>
  );
}
