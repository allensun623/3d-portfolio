import classNames from 'classnames';
import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';

export default function Experience({ ballState, onSectionChange }) {
  const { chaseDreamJob } = ballState;
  const GetInTouch = (
    <span
      className={classNames(
        'text-white text-xl md:text-4xl my-0 py-0 md:py-1 px-2 md:px-4 border rounded-xl md:mt-4 ml-1 md:ml-5',
        'hover:text-black hover:bg-white hover:cursor-pointer'
      )}
      onClick={() => onSectionChange(3)}
    >
      Get in touch
    </span>
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
