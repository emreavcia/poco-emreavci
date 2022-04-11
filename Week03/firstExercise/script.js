const btnSort = document.getElementById("btn-sort")
const btnAdd = document.getElementById("btn-add")
const btnSub = document.getElementById("btn-sub")
const inputs = document.getElementsByTagName("input")


/* to sort the numbers */
btnSort.addEventListener("click", () => {

    let numberList = []

    for (const input of inputs) {

        input.value && numberList.push(parseInt(input.value))
    }

    let orderedList = numberList.sort((a, b) => a - b)

    console.log(orderedList)
})






