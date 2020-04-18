function activityNotifications(expenditure, d) {
  console.log(expenditure, d);

  let sum = 0;
  let notice = 0;
  for (let i = 0; i <= d - 1; i++) {
    sum += expenditure[i]; //?
  }

  const average = (sum / d) * 2; //?
  for (let i = d - 1; i < expenditure.length - 1; i++) {
    if (average < expenditure[i]) {
      notice++; //?
    }
  }
  return notice; //?
}

// activityNotifications([10, 20, 30, 40, 50], 3);
activityNotifications([1, 2, 3, 4, 4], 4);
