const btn = document.querySelector("button")
const input = document.querySelector("#todo")
const ol = document.querySelector("ol")

let todos = [
    {
        id: 1,
        text: "Emre",
        isDone: false
    }
]

const handleChange = (e) => {
    todos = todos.map(item => item.id == e.currentTarget.id ? { ...item, isDone: !item.isDone } : item)
    renderContent(todos)
}

const renderContent = (pArray) => {

    content = pArray.map((item, index) => {
        return `
        <li class="list-item">
            <input required type="checkbox" ${item.isDone && "checked"} onchange= "handleChange(event)" name="todo${index}" id="${item.id}" />
            <label style=${item.isDone && "text-decoration:line-through"} for="${item.id}">${item.text}</label>
        </li>
        `
    }).join("")

    ol.innerHTML = content

}

renderContent(todos)


btn.addEventListener("click", () => {

    const text = input.value
    let id = 0;

    id = todos.length == 0 ? id = 1 : id = todos[todos.length - 1].id + 1

    if (text) {
        const newItem = {
            id,
            text,
            isDone: false
        }
        todos = [...todos, newItem]
        renderContent(todos)
    }
})