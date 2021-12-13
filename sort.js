var sorting = {

}
date = [ '1월 1일', '1월 11일', '1월 5일' ]
aaa = [ 'ipsumrorem', '12345689', '123456789' ]
sorting.arr = function (arrName,arrName2,month){
    removedArray = [];
    removedArray2 = [];
    let one = arrName.indexOf(`${month}월 1일`);
    console.log(one !==-1)
    if (one !== -1){
        const removedOne2 = arrName2.splice(one,1);
        const removedOne = arrName.splice(one,1);
        removedArray2.push(removedOne2[0]);
        removedArray.push(removedOne[0]);
    }
    let two = arrName.indexOf(`${month}월 2일`);
    console.log(two!==-1)
    if (two !== -1){
        const removedTwo2 = arrName2.splice(two,1);
        const removedTwo = arrName.splice(two,1);
        removedArray2.push(removedTwo2[0])
        removedArray.push(removedTwo[0]);
    }
    let three = arrName.indexOf(`${month}월 3일`);
    console.log(three!==-1)
    if (three !== -1){
        const removedThree2 = arrName2.splice(three,1);
        const removedThree = arrName.splice(three,1);
        removedArray2.push(removedThree2[0])
        removedArray.push(removedThree[0]);
    }
    let four = arrName.indexOf(`${month}월 4일`);
    if (four !== -1){
        const removedFour2 = arrName2.splice(four,1);
        const removedFour = arrName.splice(four,1);
        removedArray2.push(removedFour2[0])
        removedArray.push(removedFour[0]);
    }
    let five = arrName.indexOf(`${month}월 5일`);
    if (five !== -1){
        const removedFive2 = arrName2.splice(five,1);
        const removedFive = arrName.splice(five,1);
        removedArray2.push(removedFive2[0])
        removedArray.push(removedFive[0]);
    }
    let six = arrName.indexOf(`${month}월 6일`);
    if (six !== -1){
        const removedSix2 = arrName2.splice(six,1);
        const removedSix = arrName.splice(six,1);
        removedArray2.push(removedSix2[0])
        removedArray.push(removedSix[0]);
    }
    let seven = arrName.indexOf(`${month}월 7일`);
    if (seven !== -1){
        const removedSeven2 = arrName2.splice(seven,1);
        const removedSeven = arrName.splice(seven,1);
        removedArray2.push(removedSeven2[0])
        removedArray.push(removedSeven[0]);
    }
    let eight = arrName.indexOf(`${month}월 8일`);
    if (eight !== -1){
        const removedEight2 = arrName2.splice(eight,1);
        const removedEight = arrName.splice(eight,1);
        removedArray2.push(removedEight2[0])
        removedArray.push(removedEight[0]);
    }
    let nine = arrName.indexOf(`${month}월 9일`);
    if (nine !== -1){
        const removedNine2 = arrName2.splice(nine,1);
        const removedNine = arrName.splice(nine,1);
        removedArray2.push(removedNine2[0])
        removedArray.push(removedNine[0]);
    }
    for (var i = 0 ; i< removedArray.length;){
        arrName.splice(i,0,removedArray[i])
        arrName2.splice(i,0,removedArray2[i])
        i+=1
    }
    
}


module.exports = sorting;

