/** @format */

export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}

export function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0);
}

export function getDaysInMonth(year, month) {
  return new Array(31)
    .fill("")
    .map((v, i) => new Date(year, month, i + 1))
    .filter((v) => v.getMonth() === month);
}

export function lastMonth(year, month) {
  if (month === 0) {
    return { month: 11, year: year - 1 };
  } else {
    return { month: month - 1, year: year };
  }
}

export function nextMonth(year, month) {
  if (month === 11) {
    return { month: 0, year: year + 1 };
  } else {
    return { month: month + 1, year: year };
  }
}

export function currentDay(current_month) {
  switch (current_month) {
    case 0:
      return "Jan";
      break;
    case 1:
      return "Feb";
      break;
    case 2:
      return "Mar";
      break;
    case 3:
      return "Apr";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "Jun";
      break;
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
}

export function GetDate(day, month, year) {
  return `${year}-${month}-${day}`;
}
