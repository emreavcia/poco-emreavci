/* to find and subtract min and max numbers */

btnSub.addEventListener("click", () => {

    let numberList = []
    for (const input of inputs) {

        input.value && numberList.push(parseInt(input.value))
    }

    const maxNumber = Math.max(...numberList)
    const minNumber = Math.min(...numberList)

    const result = maxNumber - minNumber

    console.log(result)
})
