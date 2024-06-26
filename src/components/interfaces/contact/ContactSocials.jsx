import { socials } from '@/constants/contact';

export default function ContactSocials({ tabIndex }) {
  const socialIcon = (social) => (
    <a
      key={social.name}
      href={social.link}
      target={'_blank'}
      className='max-h-10 md:max-h-14 max-w-10 md:max-w-14 opacity-50 hover:opacity-100'
      tabIndex={tabIndex}
    >
      <img src={social.src} alt={social.name} />
    </a>
  );
  return <div className='flex flex-row'>{socials.map(socialIcon)}</div>;
}
