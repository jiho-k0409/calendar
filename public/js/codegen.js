const codeDisplay = document.querySelector('.code');
const manual = document.querySelector('.manual');
const next = document.querySelector('.next');
const selectCode=document.querySelector('.code_setting')
//const selectInterval = document.querySelector('.time_setting')
const codeContainer=document.querySelector('.code_container')
const setContainer = document.querySelector('.set_container')
const getInterval = document.querySelector('.user_input')
const displayInterval = document.querySelector('.interval')

const all = document.querySelector('.all');
const major = document.querySelector('.major');
const minor = document.querySelector('.minor');
const dim = document.querySelector('.dim');
const aug = document.querySelector('.aug');
const seventh = document.querySelector('.seventh');
const sus4 = document.querySelector('.sus4');

const three = document.querySelector('.three');
const five = document.querySelector('.five');
const ten = document.querySelector('.ten');

let majorList=['C','C#','D♭','D','D#','E♭','E','F','F#','G♭','G','G#','A♭','A','A#','B♭','B'];
let minorList = majorList.map(code=>`${code}m`);
let dimList = majorList.map(code=>`${code}dim`);
let augList = majorList.map(code=>`${code}aug`);
let sus4List = majorList.map(code=>`${code}sus4`);

let majorMajorSeventhList = majorList.map(code=>`${code}M7`);
let majorSeventhList = majorList.map(code=>`${code}7`);
let minorMajorSeventhList = minorList.map(code=>`${code}M7`);
let minorSeventhList = minorList.map(code=>`${code}7`);
let dimMajorSeventhList = dimList.map(code=>`${code}M7`);
let dimSeventhList = dimList.map(code=>`${code}7`);
let flatfive = minorList.map(code=>`${code}7(♭5)`);
let augMajorSeventhList = augList.map(code=>`${code}M7`);
let augSeventhList = augList.map(code=>`${code}7 / 7(#5)`);
let sus4SeventhList = majorList.map(code=>`${code}7sus4`);
let seventhList = [];
seventhList = seventhList.concat(majorMajorSeventhList,majorSeventhList,minorMajorSeventhList,minorSeventhList,dimMajorSeventhList,dimSeventhList,flatfive,augMajorSeventhList,augSeventhList,sus4SeventhList);

let allList = majorList.concat(minorList,dimList,augList,seventhList,sus4List);

const codeList={
    all:allList,
    major:majorList,
    minor:minorList,
    dim:dimList,
    aug:augList,
    seventh:seventhList,
    sus4:sus4List
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  };

var code = 'major';

var interval=3000;





function showCode(){
    if(code==='all'){
        let arrLength=codeList.all.length;
        let codeText = codeList.all[getRandomInt(0,arrLength)];
        codeDisplay.innerHTML=codeText;
    }else if(code==='major'){
        let arrLength=codeList.major.length;
        let codeText = codeList.major[getRandomInt(0,arrLength)];
        codeDisplay.innerHTML=codeText;
    }else if(code==='minor'){
        let arrLength=codeList.minor.length;
        let codeText = codeList.minor[getRandomInt(0,arrLength)];
        codeDisplay.innerHTML=codeText;
    }else if(code==='dim'){
        let arrLength=codeList.dim.length;
        let codeText = codeList.dim[getRandomInt(0,arrLength)];
        codeDisplay.innerHTML=codeText;
    }else if(code==='aug'){
        let arrLength=codeList.aug.length;
        let codeText = codeList.aug[getRandomInt(0,arrLength)];
        codeDisplay.innerHTML=codeText;
    }else if(code==='seventh'){
        let arrLength=codeList.seventh.length;
        let codeText = codeList.seventh[getRandomInt(0,arrLength)];
        codeDisplay.innerHTML=codeText;
    }else if(code==='sus4'){
        let arrLength=codeList.sus4.length;
        let codeText = codeList.sus4[getRandomInt(0,arrLength)];
        codeDisplay.innerHTML=codeText;
    }; 
};
showCode();
let init = setInterval(showCode,interval);

selectCode.addEventListener('click',()=>{
    codeContainer.classList.toggle("show");
});

next.addEventListener('click',()=>{
    showCode();
});

getInterval.addEventListener('change',()=>{
    let userInput = getInterval.value
    let userInputFloat = parseFloat(userInput)
    if(userInput===''){
        return
    }
    if(userInputFloat!==NaN && userInputFloat>0 ){
        interval = userInputFloat*1000
        clearInterval(init);
        init = setInterval(showCode,interval);
        displayInterval.innerHTML=`시간간격 : ${userInputFloat}초`
    }else if(userInput===''){
        return
    }else if(userInputFloat<0){
        alert('시간이 음수인게 말이 된다고 생각하십니까')
        return
    }else{
        alert('숫자만 입력해주세요')
    }
/*
    if(userInputFloat===NaN){
        alert('시간은 숫자만 입력하세요')
        return
    }else if(userInputFloat<0){
        alert('시간이 음수인게 말이 된다고 생각하십니까')
        return
    }else{
        interval = userInputFloat*1000
        clearInterval(init);
        init = setInterval(showCode,interval);
        displayInterval.innerHTML=`${userInputFloat}초`
    }*/
})
manual.addEventListener('click',()=>{
    next.style.display='inline';
    clearInterval(init);
});
three.addEventListener('click',()=>{
    next.style.display='none';
    interval = 3000;
    clearInterval(init);
    init = setInterval(showCode,interval);
});
five.addEventListener('click',()=>{
    next.style.display='none';
    interval = 5000;
    clearInterval(init);
    init = setInterval(showCode,interval);
});
ten.addEventListener('click',()=>{
    next.style.display='none';
    interval = 10000;
    clearInterval(init);
    init = setInterval(showCode,interval);
});


all.addEventListener('click',()=>{
    code='all';
})
major.addEventListener('click',()=>{
    code='major';
});
minor.addEventListener('click',()=>{
    code='minor';
});
dim.addEventListener('click',()=>{
    code='dim';
});
aug.addEventListener('click',()=>{
    code='aug';
});
seventh.addEventListener('click',()=>{
    code='seventh';
});
sus4.addEventListener('click',()=>{
    code='sus4';
});
