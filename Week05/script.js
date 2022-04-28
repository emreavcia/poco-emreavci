/* //First exercise 

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
    this.isMarried = married;
    this.hello = function () {
        return `Hello, ${this.name}`
    }
}

const person1 = new Person("Emre", 32, true)


// arrays 
const t1 = ["HTML", "CSS"]
const t2 = ["JS", "Node.js"]
const conbined = t1.concat(t2)

// Mad LIB 
/* const noun = prompt("enter a noun")
const verb = prompt("enter a verb")
const adverb = prompt("enter an adverb")
const adjective = prompt("enter an adjective")

let myObject = {
    noun: noun,
    verb: verb,
    adverb: adverb,
    adjective: adjective,
}

console.log(myObject) */

/* 
const myList = [
    {
        numberOfChidren: 1,
        partnersName: "Daria",
        geographicLocation: "New York",
        jobTitle: "Developer"
    },
    {
        numberOfChidren: 5,
        partnersName: "Teya",
        geographicLocation: "Lugan",
        jobTitle: "Medical Doctor"
    },
    {
        numberOfChidren: 6,
        partnersName: "Shane",
        geographicLocation: "Ankara",
        jobTitle: "Manager"
    },
]

function fortunaTeller(item) {
    document.write(`You will be a ${item.jobTitle} in ${item.geographicLocation}, and married to ${item.partnersName} with ${item.numberOfChidren} ${item.numberOfChidren === 1 ? "kid" : "kids"}.`)
}

fortunaTeller(myList[2])
 */

//const myArray = ["red", "blue", "brown", "orange", "brown", "orange"]
/* 
for (let a = 0; a < myArray.length; a++) {

    if (a === 0) {
        console.log(`My ${a + 1}st choice is ${myArray[a]}`)
    } else if (a === 1) {
        console.log(`My ${a + 1}nd choice is ${myArray[a]}`)
    } else if (a === 2) {
        console.log(`My ${a + 1}rd choice is ${myArray[a]}`)
    } else if (a >= 3) {
        console.log(`My ${a + 1}th choice is ${myArray[a]}`)
    }
}
 */

/* let x = 0;

while (x <= 3) {
    x * 5
    x++
} */


/* 
const myArray = ["red", "blue", "brown", "orange"]
myArray.forEach((item, index) => console.log(`My ${index + 1}# choice is ${item}`)) */

const myArray = ["red", "blue", "brown", "orange"]


document.getElementById("root").innerHTML = `
<ul>
${myArray.map(item => {
    return (`
     <li>${item}</li>
    `)
}).join("")}
</ul>
`


