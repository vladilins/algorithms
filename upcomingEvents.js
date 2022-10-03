function upcomingEvents(events) {
  events.sort(function (a, b) {
    return new Date(b.startDate).valueOf() - new Date(a.startDate).valueOf();
  }); //?

  return filterDates(events); //?
}

upcomingEvents([
  {
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    startDate: new Date(),
    endDate: addMonth(new Date(), 2),
  },
  {
    startDate: new Date(),
    endDate: addMonth(new Date(), 2),
  },
  {
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    startDate: new Date(),
    endDate: new Date(),
  },
]);

export function addMonth(date, months) {
  let d = date.getDate();
  date.setMonth(date.getMonth() + months);
  if (date.getDate() != d) {
    date.setDate(0);
  }
  return date;
}

function filterDates(events) {
  const result = [];
  const startMonth = new Date().getTime(); //?
  const endMonth = addMonth(new Date(), 1).getTime(); //?
  for (let event of events) {
    if (
      event.startDate.getTime() >= startMonth &&
      event.endDate.getTime() <= endMonth
    )
      result.push(event);
  }
  return result;
}
