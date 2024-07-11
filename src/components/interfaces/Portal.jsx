import { bottomBannerText } from '@/constants/text';
import SectionContainer from '@/layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';

export default function Portal({ ballState }) {
  const { fireballCompleted } = ballState;
  return (
    <SectionContainer>
      {fireballCompleted && <BottomBanner text={bottomBannerText.portal} />}
    </SectionContainer>
  );
}
