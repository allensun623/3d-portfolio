import { bottomBannerText } from '@/constants/text';
import SectionContainer from '@/layouts/SectionContainer';
import classNames from 'classnames';
import BottomBanner from '../elements/BottomBanner';

export default function Experience({ ballState, handleSectionChange }) {
  const { chaseDreamJob } = ballState;
  const GetInTouch = (
    <span
      className={classNames(
        'text-white text-xl md:text-4xl my-0 py-0 md:py-1 px-2 md:px-4 border rounded-xl md:mt-4 ml-1 md:ml-5',
        'hover:text-opacity-50 hover:text-black hover:bg-white hover:cursor-pointer'
      )}
      onClick={() => handleSectionChange(3)}
    >
      {bottomBannerText.experience.getInTouch}
    </span>
  );
  return (
    <SectionContainer>
      {chaseDreamJob && (
        <BottomBanner
          text={bottomBannerText.experience.offer}
          afterContent={GetInTouch}
        />
      )}
    </SectionContainer>
  );
}
