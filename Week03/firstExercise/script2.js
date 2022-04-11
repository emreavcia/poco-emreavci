/* to add the numbers */

btnAdd.addEventListener("click", () => {

    let numberList = []
    for (const input of inputs) {

        input.value && numberList.push(parseInt(input.value))
    }

    let reducedNumberList = numberList.reduce((acc, num) => acc += num, 0)

    console.log(reducedNumberList)
})