let paragraph = document.querySelector("p")
let new_text = "The was magically changed"
const listItems = document.querySelectorAll("li")

listItems.forEach((item, index) => {
    return (
        item.innerHTML = item.innerHTML.substring(5, 6)
    )
})