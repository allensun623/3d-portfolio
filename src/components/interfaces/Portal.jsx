import BottomBanner from '@/components/elements/BottomBanner';
import { bottomBannerText, imageIcons } from '@/constants';
import SectionContainer from '@/layouts/SectionContainer';

export default function Portal({ ballState }) {
  const { fireballCompleted } = ballState;
  return (
    <SectionContainer>
      {fireballCompleted && (
        <BottomBanner text={bottomBannerText.portal} icon={imageIcons.goku} />
      )}
    </SectionContainer>
  );
}
