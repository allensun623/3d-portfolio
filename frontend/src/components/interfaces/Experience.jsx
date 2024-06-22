import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';

export default function Experience({ ballState }) {
  const { chaseDreamJob } = ballState;
  return (
    <SectionContainer>
      {chaseDreamJob && (
        <BottomBanner text={'Would you like to offer me a job?'} />
      )}
    </SectionContainer>
  );
}
