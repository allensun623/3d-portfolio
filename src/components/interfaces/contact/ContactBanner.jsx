import BottomBanner from '@/components/elements/BottomBanner';
import { bottomBannerText, imageIcons } from '@/constants';

export default function ContactBanner() {
  return (
    <BottomBanner icon={imageIcons.goku} text={bottomBannerText.contact} />
  );
}
