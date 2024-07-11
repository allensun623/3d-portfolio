import BottomBanner from '@/components/elements/BottomBanner';
import { bottomBannerText } from '@/constants/text';

export default function ContactBanner() {
  return (
    <BottomBanner
      icon={{
        src: '/assets/images/others/Goku Thank you.png',
        alt: 'Goku Thank you',
      }}
      text={bottomBannerText.contact}
    />
  );
}
