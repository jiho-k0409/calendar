var now = new Date();
var month = now.getMonth()+1;
const prevMonth = document.querySelector('.prev');
const nextMonth = document.querySelector('.next');
const titleMonth= document.querySelector('.month');

titleMonth.innerHTML = month;

prevMonth.addEventListener('click', function(event){
    month -= 1;
    titleMonth.innerHTML = month;
    if (month<1){
        month=12;
        titleMonth.innerHTML = month;
    };
});

nextMonth.addEventListener('click', function(event){
    month +=1;
    titleMonth.innerHTML = month;
    console.log(month);
    if (month>12) {
        month=1
        titleMonth.innerHTML = month;
        //함수 밖에서는 왜 실행안됨?
    };
});



