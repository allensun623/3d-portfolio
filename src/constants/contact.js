export const fieldsEnum = Object.freeze({
  NAME: 'name',
  EMAIL: 'email',
  MESSAGE: 'message',
});

export const socials = Object.freeze([
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
]);

export const inputFields = Object.freeze([
  {
    Component: 'input',
    label: '🄽🄰🄼🄴',
    errorMessage: 'Please enter your name.',
    id: fieldsEnum.NAME,
    type: 'text',
    name: fieldsEnum.NAME,
  },
  {
    Component: 'input',
    label: '🄴🄼🄰🄸🄻',
    errorMessage: 'Please enter a valid email address.',
    type: 'text',
    id: fieldsEnum.EMAIL,
    name: fieldsEnum.EMAIL,
  },
  {
    Component: 'textarea',
    label: '🄼🄴🅂🅂🄰🄶🄴',
    errorMessage: 'Please enter your message.',
    id: fieldsEnum.MESSAGE,
    name: fieldsEnum.MESSAGE,
    rows: 5,
  },
]);
