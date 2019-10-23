module.exports = {
  siteTitle: 'Stephanie Marchante | Software Engineer',
  siteDescription:
    'Stephanie Marchante is a Software Engineer and Bass Guitarist based in Seattle, WA.',
  siteKeywords:
    'Stephanie Marchante, Stephanie, Marchante, smarchante1, software engineer, front-end engineer, web developer, javascript,',
  siteUrl: 'https://stephanie-marchante-port.herokuapp.com',
  siteLanguage: 'en_US',

  name: 'Stephanie Marchante',
  location: 'Seattle, WA',
  email: 'smarcha04@gmail.com',
  github: 'https://github.com/smarchante1/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/smarchante1/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/stephanie-marchante-06a531180/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/phaninotreble/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#7F055F',
  darkNavyColor: '#7F055F',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
