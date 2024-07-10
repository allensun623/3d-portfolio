import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';
import { bottomText } from '@/constants/text';

export default function Portal({ ballState }) {
  const { fireballCompleted } = ballState;
  return (
    <SectionContainer>
      {fireballCompleted && <BottomBanner text={bottomText.portal} />}
    </SectionContainer>
  );
}
