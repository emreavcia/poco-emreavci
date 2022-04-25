const findGCD = function (pIntegerFirst, pIntegerSecond) {

    let range = 0;

    if (pIntegerFirst >= pIntegerSecond) {
        range = pIntegerSecond
    } else {
        range = pIntegerFirst
    }

    let maxNumber = 0;
    let numberList = [];

    for (let i = 1; i <= range; i++) {

        if (pIntegerFirst % i === 0 && pIntegerSecond % i === 0) {
            numberList.push(i)
        }
        maxNumber = Math.max(...numberList)
    }
    return maxNumber
}

console.log(findGCD(878, 700))
