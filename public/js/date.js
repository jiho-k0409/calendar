var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();

const Month = document.querySelector('#todayMonth')
Month.innerHTML = month
const Day = document.querySelector('#todayDate')
Day.innerHTML = day

let schedule = document.getElementsByClassName('schedule')
let reOrder = []
for (var i=0;i<schedule.length;){
    reOrder.push(schedule[i])
    
}
reOrder.sort();
console.log(reOrder)