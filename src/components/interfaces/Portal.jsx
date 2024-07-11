import SectionContainer from '@/layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';
import { bottomBannerText } from '@/constants/text';

export default function Portal({ ballState }) {
  const { fireballCompleted } = ballState;
  return (
    <SectionContainer>
      {fireballCompleted && <BottomBanner text={bottomBannerText.portal} />}
    </SectionContainer>
  );
}
