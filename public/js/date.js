var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();

const Month = document.querySelector('#todayMonth')
Month.innerHTML = month
const Day = document.querySelector('#todayDate')
Day.innerHTML = day
