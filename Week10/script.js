const div = document.getElementById("news_items")
const button = document.getElementById("btn")
const input = document.getElementById("input")

function getNews(pQuery) {

    fetch(`https://newsapi.org/v2/everything?q=${pQuery}&from=2022-04-27&sortBy=popularity&apiKey=9a6a1ddd50a3475aacf5426f4a981555`)
        .then(response => response.json())
        .then(data => renderContent(data))
}

button.addEventListener("click", () => {
    let valueInput = input.value
    getNews(valueInput)
})

function renderContent(data) {

    div.innerHTML = data.articles.map(data => {
        return (
            `
            <h2>${data.title}</h2>
        <h3>
          ${data.content}
        </h3>
        <p>
          ${data.description}
        </p>
        <h3>Svetlana Ekimenko</h3>
        <a
          ${data.url}
          >click here to reach the full content</a
        >
        <img
          src=${data.urlToImage}
          alt=""
        />
        <p>${data.publishedAt}</p>
        <p>
          ${data.content}
        </p>
            `
        )
    })
}









