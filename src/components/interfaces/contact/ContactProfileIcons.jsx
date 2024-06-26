const profiles = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/allensun623/',
    src: '/assets/images/icons/Linkedin.svg',
  },
  {
    name: 'github',
    link: 'https://github.com/allensun623/3d-portfolio',
    src: '/assets/images/icons/Github.svg',
  },
];

export default function ContactProfileIcons({ tabIndex }) {
  const profileIcon = (profile) => (
    <a
      key={profile.name}
      href={profile.link}
      target={'_blank'}
      className='max-h-10 md:max-h-14 max-w-10 md:max-w-14 opacity-50 hover:opacity-100'
      tabIndex={tabIndex}
    >
      <img src={profile.src} alt={profile.name} />
    </a>
  );
  return <div className='flex flex-row'>{profiles.map(profileIcon)}</div>;
}
