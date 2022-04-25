/* const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const wocheTages = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
console.time()
for (let i = 0; i <= 6; i++) {
    console.log(`${daysOfWeek[i]}: ${wocheTages[i]}`)
}
console.timeEnd()
console.time()
daysOfWeek.forEach((element, index) => {
    console.log(`${element}: ${wocheTages[index]}`)
});

console.timeEnd() */


/* for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(`${i} is even <br/>`)
    } else {
        document.write(`${i} is odd <br/>`)
    }
}
 */
/* 
let userNumber = prompt("enter a number between 0 and 10", " ")
let parsedValue = parseInt(userNumber)

if (userNumber >= 0 && userNumber <= 10) {
    let result = parsedValue * 9
} else {
    document.write("this not in the limit")
}
document.write(`${userNumber} * 9 = ${result}`)  */

/* let numberList = prompt("please enter the numbers separated by comma", "").split(",")

let mappedList = numberList.map(Number)

let sortedArray = mappedList.sort((a, b) => a - b)
 */

/* let myNumbers = []
for (let i = 0; i < 10; i++) {
    myNumbers.push(parseInt(prompt("please enter the first number", "")))
}
 */




/* document.write(sortedArray) */
/* let numberList = prompt("please enter the numbers separated by comma", "").split(",")

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > numberList[i + 1]) {
        let temp = numberList[i];
        numberList[i] = numberList[i + 1];
        numberList[i + 1] = temp;
    }
    for (let i = numberList.length; i >= 0; i--) {
        if (numberList[i] < numberList[i - 1]) {
            let temp = numberList[i];
            numberList[i] = numberList[i - 1];
            numberList[i - 1] = temp;
        }
    }
}

document.write(numberList)
 */
/* let numberList = prompt("please enter the numbers separated by comma", "").split(",")

let sum = parseInt(numberList[0])

for (let i = 1; i < numberList.length; i++) {
    console.log(sum)
    sum += parseInt(numberList[i])
}

document.write(sum) */


/* const numberList = [3, 2, 1]

console.time()

for (let index = 0; index < numberList.length; index++) {

    if (numberList[index] > numberList[index + 1]) {
        let temp = numberList[index]
        numberList[index] = numberList[index + 1]
        numberList[index + 1] = temp
    }

    for (let i = 0; i < numberList.length; i++) {
        let temp = numberList[i]
        if (numberList[i] > numberList[i + 1]) {
            numberList[i] = numberList[i + 1]
            numberList[i + 1] = temp
        }
    }
}

console.time()

numberList.sort((a, b) => a - b)
console.timeEnd() */
/* 
var fname = "emre"
console.log(fname.length) */

