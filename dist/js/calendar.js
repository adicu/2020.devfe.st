/**
 * Hardcoded Schedule
 */

const schedulesList = [
  /**
   * Monday, Feb 3rd
   */
  {
    id: 1,
    calendarId: 1,
    title: 'Kickoff',
    category: 'time',
    start: '2020-02-03T19:00:00-05:00',
    end: '2020-02-03T20:00:00-05:00',
    location: 'Davis Auditorium'
  },
  {
    id: 2,
    calendarId: 2,
    title: 'Dinner',
    category: 'time',
    start: '2020-02-03T20:00:00-05:00',
    end: '2020-02-03T21:00:00-05:00',
    location: 'CS Lounge'
  },
  {
    id: 3,
    calendarId: 3,
    title: 'Beginner Micro Lecture',
    category: 'time',
    start: '2020-02-03T21:00:00-05:00',
    end: '2020-02-03T21:30:00-05:00',
    location: 'TBA'
  },
  {
    id: 4,
    calendarId: 4,
    title: 'Deep Learning Micro Lecture',
    category: 'time',
    start: '2020-02-03T21:00:00-05:00',
    end: '2020-02-03T21:30:00-05:00',
    location: 'TBA'
  },
  {
    id: 5,
    calendarId: 5,
    title: 'Web Dev Micro Lecture',
    category: 'time',
    start: '2020-02-03T21:30:00-05:00',
    end: '2020-02-03T22:00:00-05:00',
    location: 'TBA'
  },
  {
    id: 6,
    calendarId: 6,
    title: 'Data Science Micro Lecture',
    category: 'time',
    start: '2020-02-03T21:30:00-05:00',
    end: '2020-02-03T22:00:00-05:00',
    location: 'TBA'
  },
  {
    id: 7,
    calendarId: 1,
    title: 'Intro to D3',
    category: 'time',
    start: '2020-02-03T22:00:00-05:00',
    end: '2020-02-03T23:00:00-05:00',
    location: 'TBA'
  },
  /**
   * Tuesday, Feb 4th
   */
  {
    id: 8,
    calendarId: 3,
    title: 'Intro to HTML and CSS',
    category: 'time',
    start: '2020-02-04T19:00:00-05:00',
    end: '2020-02-04T20:00:00-05:00',
    location: 'TBA',
    description: 'This workshop will teach you how to style and structure websites with HTML & CSS. No experience necessary, but please bring a laptop!'
  },
  {
    id: 9,
    calendarId: 3,
    title: 'Beginner Micro Lecture',
    category: 'time',
    start: '2020-02-04T20:00:00-05:00',
    end: '2020-02-04T20:30:00-05:00',
    location: 'TBA',
  },
  {
    id: 10,
    calendarId: 4,
    title: 'Deep Learning Micro Lecture',
    category: 'time',
    start: '2020-02-04T20:00:00-05:00',
    end: '2020-02-04T20:30:00-05:00',
    location: 'TBA',
  },
  {
    id: 11,
    calendarId: 5,
    title: 'Web Dev Lecture',
    category: 'time',
    start: '2020-02-04T20:30:00-05:00',
    end: '2020-02-04T21:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 12,
    calendarId: 6,
    title: 'Data Science Micro Lecture',
    category: 'time',
    start: '2020-02-04T20:30:00-05:00',
    end: '2020-02-04T21:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 13,
    calendarId: 1,
    title: 'Making Your Own Personal Website',
    category: 'time',
    start: '2020-02-04T21:00:00-05:00',
    end: '2020-02-04T22:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 14,
    calendarId: 2,
    title: 'Boba Break',
    category: 'time',
    start: '2020-02-04T22:00:00-05:00',
    end: '2020-02-04T23:00:00-05:00',
    location: 'CS Lounge',
  },
  /**
   * Wednesday, Feb 5th
   */
  {
    id: 15,
    calendarId: 1,
    title: 'Intro to Python',
    category: 'time',
    start: '2020-02-05T19:00:00-05:00',
    end: '2020-02-05T20:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 16,
    calendarId: 1,
    title: 'GIS 101: Making Maps',
    category: 'time',
    start: '2020-02-05T20:00:00-05:00',
    end: '2020-02-05T21:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 17,
    calendarId: 1,
    title: 'Intro to Algo Trading',
    category: 'time',
    start: '2020-02-05T21:00:00-05:00',
    end: '2020-02-05T22:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 18,
    calendarId: 2,
    title: 'Cookies and Code',
    category: 'time',
    start: '2020-02-05T22:00:00-05:00',
    end: '2020-02-05T23:00:00-05:00',
    location: 'CS Lounge',
  },
  /**
   * Thursday, Feb 6th
   */
  {
    id: 19,
    calendarId: 1,
    title: 'Intro to Git',
    category: 'time',
    start: '2020-02-06T19:00:00-05:00',
    end: '2020-02-06T20:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 20,
    calendarId: 2,
    title: 'Dinner',
    category: 'time',
    start: '2020-02-06T20:00:00-05:00',
    end: '2020-02-06T21:00:00-05:00',
    location: 'CS Lounge',
  },
  {
    id: 21,
    calendarId: 1,
    title: 'Scientific Computing in Astronomy',
    category: 'time',
    start: '2020-02-06T21:00:00-05:00',
    end: '2020-02-06T22:00:00-05:00',
    location: 'TBA',
  },
  {
    id: 22,
    calendarId: 1,
    title: 'Build a Mobile App with React Native',
    category: 'time',
    start: '2020-02-06T22:00:00-05:00',
    end: '2020-02-06T23:00:00-05:00',
    location: 'TBA',
  },
  /**
   * Friday, Feb 7th
   */
  {
    id: 23,
    calendarId: 2,
    title: 'Winter Party',
    category: 'time',
    start: '2020-02-07T19:00:00-05:00',
    end: '2020-02-07T23:00:00-05:00',
    location: 'TBA',
  },
  /**
   * Saturday, Feb 8th
   */
  {
    id: 24,
    calendarId: 7,
    title: 'Hackathon Kickoff',
    category: 'time',
    start: '2020-02-08T13:00:00-05:00',
    end: '2020-02-08T14:00:00-05:00',
    location: 'Uris Library',
  },
  {
    id: 25,
    calendarId: 7,
    title: 'Hacking Sprint I',
    category: 'time',
    start: '2020-02-08T13:30:00-05:00',
    end: '2020-02-08T18:00:00-05:00',
    location: 'Uris Library',
  },
  {
    id: 26,
    calendarId: 2,
    title: 'Dinner',
    category: 'time',
    start: '2020-02-08T18:00:00-05:00',
    end: '2020-02-08T19:00:00-05:00',
    location: 'Uris Library',
  },
  {
    id: 27,
    calendarId: 7,
    title: 'Hacking Sprint II',
    category: 'time',
    start: '2020-02-08T19:00:00-05:00',
    end: '2020-02-08T24:00:00-05:00',
    location: 'Uris Library',
  },
  {
    id: 28,
    calendarId: 7,
    title: 'Midnight Surprise',
    category: 'time',
    start: '2020-02-08T24:00:00-05:00',
    end: '2020-02-09T00:30:00-05:00',
    location: 'Uris Library',
  },
  /**
   * Sunday, Feb 9th
   */
  {
    id: 29,
    calendarId: 7,
    title: 'Hacking Sprint III',
    category: 'time',
    start: '2020-02-09T00:30:00-05:00',
    end: '2020-02-09T08:00:00-05:00',
    location: 'Uris Library',
  },
  {
    id: 30,
    calendarId: 2,
    title: 'Breakfast',
    category: 'time',
    start: '2020-02-09T08:00:00-05:00',
    end: '2020-02-09T08:30:00-05:00',
    location: 'Uris Library',
  },
  {
    id: 31,
    calendarId: 7,
    title: 'Hacking Sprint IV',
    category: 'time',
    start: '2020-02-09T08:30:00-05:00',
    end: '2020-02-09T11:00:00-05:00',
    location: 'Uris Library',
  },
  {
    id: 32,
    calendarId: 7,
    title: 'Judging',
    category: 'time',
    start: '2020-02-09T11:00:00-05:00',
    end: '2020-02-09T14:00:00-05:00',
    location: 'Uris Library',
  },
]
// schedulesList.forEach(schedule => {
//   schedule.title += ` @ <i>${schedule.location}</i>`
// })

const calendarsList = [
  {
    id: 1,
    name: 'General',
    color: '#ffffff',
    bgColor: '#3db6e1ff',
    dragBgColor: '#3db6e1ff',
    borderColor: '#3db6e1ff'
  },
  {
    id: 2,
    name: 'Food',
    color: '#404040',
    bgColor: '#50e582ff',
    dragBgColor: '#50e582ff',
    borderColor: '#50e582ff'
  },
  {
    id: 3,
    name: 'Beginner Track',
    color: '#ffffff',
    bgColor: '#999999',
    dragBgColor: '#999999',
    borderColor: '#999999'
  },
  {
    id: 4,
    name: 'Deep Learning Track',
    color: '#ffffff',
    bgColor: '#404040',
    dragBgColor: '#404040',
    borderColor: '#404040'
  },
  {
    id: 5,
    name: 'Web Dev Track',
    color: '#ffffff',
    bgColor: '#dd7e6b',
    dragBgColor: '#dd7e6b',
    borderColor: '#dd7e6b'
  },
  {
    id: 6,
    name: 'Data Science Track',
    color: '#404040',
    bgColor: '#fff159ff',
    dragBgColor: '#fff159ff',
    borderColor: '#fff159ff'
  },
  {
    id: 7,
    name: 'Hackathon',
    color: '#ffffff',
    bgColor: '#ffc00f',
    dragBgColor: '#ffc00f',
    borderColor: '#ffc00f'
  },
]

/**
 * Calendar Configuration
 */

const monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

let next = () => {}
let prev = () => {}
let today = () => {}
try {
  tui.Calendar.setTimezoneOffset(new Date().getTimezoneOffset());
  const Calendar = tui.Calendar;
  const isSmallWindow = window.innerWidth < 500;
  const calendar = new Calendar('#calendar-inner', {
    usageAnalytics: false,
    defaultView: isSmallWindow ? 'day' : 'week',
    taskView: false,
    scheduleView: true,
    template: {
      monthDayname: function(dayname) {
        return '<span class="calendar-week-dayname-name font-upper">' + dayname.label + '</span>';
      }
    },
    calendars: calendarsList,
    week: {
      // hourStart: 8,
      startDayOfWeek: 1,
    },
    isReadOnly: true,
    useDetailPopup: true,
  });
  const setMonth = () => {
    document.getElementById('calendar-month').innerHTML = monthsList[calendar.getDate().getMonth()]
  }
  next = () => {
    calendar.next()
    setMonth()
  }
  prev = () => {
    calendar.prev()
    setMonth()
  }
  today = () => {
    calendar.setDate(new Date())
    setMonth()
  }

  // Get schedules from schedules.js and set the current date
  calendar.createSchedules(schedulesList, true)
  calendar.setDate(new Date(2020, 1, 3))
  setMonth()

} catch (e) {
  const errorText = e.toString()
  document.getElementById('calendar-error').style.display = 'block';
  document.getElementById('calendar').style.display = 'none';
  let errorTextToDisplay = ''
  if (errorText.includes('SecurityError')) {
    // localStorage cannot be accessed. Show error.
    errorTextToDisplay = 'Please allow cookies to view our nice schedule! 🍪<br>Or, check <span class="color-blue"><a target="_blank" href="https://www.facebook.com/adicu/">Facebook</a></span> for updates!';
  } else {
    errorTextToDisplay = 'An error occurred while displaying our schedule. 🤕<br>Try checking <span class="color-blue"><a target="_blank" href="https://www.facebook.com/adicu/">Facebook</a></span> for updates!';
  }
  document.getElementById('calendar-error').innerHTML = errorTextToDisplay;
}