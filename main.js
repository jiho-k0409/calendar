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
    makeDate()
});

nextMonth.addEventListener('click', function(event){
    month +=1;
    titleMonth.innerHTML = month;
    if (month>12) {
        month=1
        titleMonth.innerHTML = month;
    };
    makeDate()
});

function thirtyOne(){
    revealDate30();
    revealDate31();
}
function thirty(){
    revealDate30();
    concealDate31();
}
function twemtyNine(){
    concealDate31();
    concealDate30();
}

function makeDate(){
    if(month==1){
        thirtyOne();
    };
    if(month==2){
        twemtyNine()
    };
    if(month==3){
        thirtyOne();
    };
    if(month==4){
        thirty();
    };
    if(month==5){
        thirtyOne();
    };
    if(month==6){
        thirty();
    };
    if(month==7){
        thirtyOne();
    };
    if(month==8){
        thirtyOne();
    };
    if(month==9){
        thirty();
    };
    if(month==10){
        thirtyOne();
    };
    if(month==11){
        thirty();
    };
    if(month==12){
        thirtyOne();
    };
};

function concealDate30(){
    document.querySelector('#threeO').style.display='none';
};
function concealDate31(){
    document.querySelector('#threeOne').style.display='none';
};
function revealDate30(){
    document.querySelector('#threeO').style.display='block';
};
function revealDate31(){
    document.querySelector('#threeOne').style.display='block';
};