const numbers = [1, 5, 5, 9, 6, 9, 6, 1, 5, 6, 65, 11, 22, 43, 65]

const newObject = numbers.reduce((acc, item) => {
    if (acc[item]) {
        acc[item]++
    } else {
        acc[item] = 1
    }
    return acc
}, {})

console.log(newObject)