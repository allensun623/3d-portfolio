import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';

export default function Experience({ ballState, onSectionChange }) {
  const { chaseDreamJob } = ballState;
  const GetInTouch = (
    <p
      className='text-white text-4xl py-1 px-4 border rounded-xl mt-4 ml-5 hover:text-black hover:bg-white hover:cursor-pointer'
      onClick={() => onSectionChange(3)}
    >
      Get in touch
    </p>
  );
  return (
    <SectionContainer>
      {chaseDreamJob && (
        <BottomBanner
          text={'Would you like to offer me a job?'}
          afterContent={GetInTouch}
        />
      )}
    </SectionContainer>
  );
}
