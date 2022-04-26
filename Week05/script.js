//First exercise 

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

//Second exercise

const findGreaterNumber = function (pFirstNumber, pSecondNumber) {
    if (pFirstNumber > pSecondNumber) {
        console.log(`The greater number of ${pSecondNumber} and ${pFirstNumber} is ${pFirstNumber}.`)
    } else if (pSecondNumber > pFirstNumber) {
        console.log(`The greater number of ${pFirstNumber} and ${pSecondNumber} is ${pSecondNumber}.`)
    } else {
        console.log(`Numbers are equal`)
    }
}

//Third exercise

const helloWorld = function (pLanguageCode = "en") {
    if (pLanguageCode === "en") {
        return "Hello, World"
    } else if (pLanguageCode === "es") {
        return "Ola, Mondo"
    } else if (pLanguageCode === "de") {
        return "Hallo, Welt"
    } else {
        return "The language code you entered is not valid"
    }
}



//forth exercise

const calcRetairementAge = function () {
    const currentAge = prompt("What is your age",)
    const retairementAgeYouLike = prompt("At what age would you like to retire",)
    const yearsLeft = `You have ${retairementAgeYouLike - currentAge} years left until you can retire`
    const yearsOfRetairement = `It's 2022, so you can retire in ${2022 + (retairementAgeYouLike - currentAge)}.`
    console.log(yearsLeft)
    console.log(yearsOfRetairement)
}



//Object Constructor Function
function Person(name, age, married) {
    this.name = name;
    this.age = age;
    this.married = married;
    this.hello = function () {
        return `Hello, ${this.name}`
    }
}

const person1 = new Person("Emre", 32, true)
console.log(person1.hello())