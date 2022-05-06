const btn = document.querySelector("button")
const input = document.querySelector("#todo")
const ol = document.querySelector("ol")

//initial list
let todos = [
    {
        id: 1,
        text: "Emre",
        isDone: false
    }
]

// function to handle change in the checkboxes
const handleChange = (e) => {
    todos = todos.map(item => item.id == e.currentTarget.id ? { ...item, isDone: !item.isDone } : item)
    //to render content when the checkbox are checked
    renderContent(todos)
}

// function to render the content
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

// render the list on load
renderContent(todos)

// event listener for submit button
btn.addEventListener("click", () => {

    const text = input.value
    let id = 0;

    id = todos.length == 0 ? id = 1 : id = todos[todos.length - 1].id + 1

    // validate if the input value isn't empty  
    if (text) {
        const newItem = {
            id,
            text,
            isDone: false
        }
        // add new to do to the todo lists
        todos = [...todos, newItem]

        // render the content evertime the new to do added 
        renderContent(todos)
    }
})