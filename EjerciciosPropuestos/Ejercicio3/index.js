function getNextArequipaDay() {
  const currentDate = new Date();
  if(new Date(currentDate.getFullYear(), 7, currentDate.getDate()) - currentDate < 0) {
    return new Date(currentDate.getFullYear() + 1, 7, 10);
  }
  return new Date(currentDate.getFullYear(), 7, 15);
}

function getDaysAwayFromArequipaDay() {
  const currentDate = new Date();
  const ms = getNextArequipaDay() - currentDate;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  return days;
}

const daysAway = getDaysAwayFromArequipaDay();
console.log(daysAway);