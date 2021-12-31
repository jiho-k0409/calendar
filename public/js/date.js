var dateObj = new Date();

var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();


const Month = document.querySelector('#todayMonth')
Month.innerHTML = month
const Day = document.querySelector('#todayDate')
Day.innerHTML = day

alert('오른쪽 아래 버튼을 누르시면 일정을 만들 수 있습니다. 다른 사람이 만든 일정을 볼 수 있습니다. 이상한 점 있으면 디엠 부탁드립니다. 이 페이지 제목 좋은거 있으시면 추천해주시면 감사하겠습니다.')