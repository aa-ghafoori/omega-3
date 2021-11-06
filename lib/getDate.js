export const getDate = date => {
    const months = [
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
      'December',
    ];

    const month = months[new Date(date).getMonth()];
    const day = new Date(date).getDay().toString();
    const year = new Date(date).getFullYear().toString();
    const newDate = month + ' ' + day + ',' + ' ' + year;
    return newDate;
  };
