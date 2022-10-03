function timeFormat(time) {
  let date = time.toLocaleString(); //?
  const month = date.split("/"); //?
  let hours = time.getHours().toLocaleString(); //?
  let minutes = time.getMinutes().toLocaleString(); //?
  if (hours.length == 1) {
    hours = "0" + hours;
  }
  if (minutes.length == 1) {
    minutes = "0" + minutes;
  }
  const hoursAndMinutes = hours + ":" + minutes; //?
  if (month[0].length === 1) {
    date = "0" + date; //?
  }
  const result = date.slice(0, 10) + " " + hoursAndMinutes;
  new Date(result); //?
  return date.slice(0, 10) + " " + hoursAndMinutes; //?
}

timeFormat(new Date());
timeFormat(new Date(Date.UTC(2020, 11, 20, 15, 23)));
