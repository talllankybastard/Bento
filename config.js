// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Brett',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'c6f7437a9e748f0f6391eedd0ab7cd67',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  weatherLatitude: '40.21756940011627',
  weatherLongitude: '-75.03926693025122',
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '40.21756940011627',
  defaultLongitude: '-75.03926693025122',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

    // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://www.gmail.com/',
    },
    {
      id: '3',
      name: 'Maps',
      icon: 'map-pin',
      link: 'https://maps.google.com',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'To Do',
      icon: 'check',
      link: 'https://www.icloud.com/reminders/',
    },
    {
      id: '6',
      name: 'Drive',
      icon: 'triangle',
      link: 'https://drive.google.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'bookmark',
  secondListIcon: 'credit-card',

  // Links
  lists: {
    firstList: [
      {
        name: 'ChatGPT',
        link: 'https://chat.openai.com',
      },
      {
        name: 'Spotify',
        link: 'https://www.spotify.com',
      },
      {
        name: 'Photos',
        link: 'https://photos.google.com',
      },
      {
        name: 'News',
        link: 'https://news.google.com',
      },
    ],
    secondList: [
      {
        name: 'Amazon',
        link: 'https://www.amazon.com/',
      },
      {
        name: 'Bank of America',
        link: 'https://www.bankofamerica.com/',
      },
      {
        name: 'Lowes',
        link: 'https://www.lowes.com',
      },
      {
        name: 'Newegg',
        link: 'https://www.newegg.com',
      },
    ],
  },
};
