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
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'https://api.weather.gov/points/{defaultLatitude},{defaultLongitude},
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
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
      icon: 'maps-pin',
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
      link: 'https://to-do.live.com/tasks/',
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
        name: 'DVD Netflix',
        link: 'https://dvd.netflix.com/',
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
