import classNames from 'classnames';
import SectionContainer from '../../layouts/SectionContainer';
import BottomBanner from '../elements/BottomBanner';
import { bottomText } from '@/constants/text';

export default function Experience({ ballState, onSectionChange }) {
  const { chaseDreamJob } = ballState;
  const GetInTouch = (
    <span
      className={classNames(
        'text-white text-xl md:text-4xl my-0 py-0 md:py-1 px-2 md:px-4 border rounded-xl md:mt-4 ml-1 md:ml-5',
        'hover:text-opacity-50 hover:text-black hover:bg-white hover:cursor-pointer'
      )}
      onClick={() => onSectionChange(3)}
    >
      {bottomText.contact.getInTouch}
    </span>
  );
  return (
    <SectionContainer>
      {chaseDreamJob && (
        <BottomBanner
          text={bottomText.contact.offer}
          afterContent={GetInTouch}
        />
      )}
    </SectionContainer>
  );
}
