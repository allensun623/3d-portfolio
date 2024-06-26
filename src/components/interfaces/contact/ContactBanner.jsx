import BottomBanner from '@/components/elements/BottomBanner';

export default function ContactBanner() {
  return (
    <BottomBanner
      icon={{
        src: '/assets/images/others/Goku Thank you.png',
        alt: 'Goku Thank you',
      }}
      text={'Thanks for your message! I will get back to you soon.'}
    />
  );
}
