import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';

export default function Portal({ ballState }) {
  const { fireballCompleted } = ballState;
  return (
    <SectionContainer>
      {fireballCompleted && (
        <BottomBanner
          text={
            'Thank you for watching! Sharing this moment with you has been truly special! Your presence here means the world to me!'
          }
        />
      )}
    </SectionContainer>
  );
}
