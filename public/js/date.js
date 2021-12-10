var now = new Date();
var month = now.getMonth()+1;
const prevMonth = document.querySelector('.prev');
const nextMonth = document.querySelector('.next');
const titleMonth = document.querySelector('.month');

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
    document.getElementById('30').style.display='none';
};
function concealDate31(){
    document.getElementById('31').style.display='none';
};
function revealDate30(){
    document.getElementById('30').style.display='inline';
};
function revealDate31(){
    document.getElementById('31').style.display='inline';
};

function addButton(date){
    var nowDate = document.getElementById(`${date}`)
    nowDate.addEventListener('click',(event)=>{
        const hidden = document.getElementById('something')
        if(hidden != undefined){
            hidden.id = `${month}.${date}`
            hidden.value = `${month}.${date}`
        }else{
            hidden.id = `something`
        }
    })
}


function addAllButton(){
    addButton(1)
    addButton(2)
    addButton(3)
    addButton(4)
    addButton(5)
    addButton(6)
    addButton(7)
    addButton(8)
    addButton(9)
    addButton(10)
    addButton(11)
    addButton(12)
    addButton(13)
    addButton(14)
    addButton(15)
    addButton(16)
    addButton(17)
    addButton(18)
    addButton(19)
    addButton(20)
    addButton(21)
    addButton(22)
    addButton(23)
    addButton(24)
    addButton(25)
    addButton(26)
    addButton(27)
    addButton(28)
    addButton(29)
    addButton(30)
    addButton(31)
}

addAllButton()