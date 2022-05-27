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
    input.value = ""
})
function renderContent(data) {
    div.innerHTML = data.articles.map(data => {
        return (
            `
        <h2 class="col-12 text-center mb-4 mt-4">${data.title}</h2>
        <section class="row">
            <section class="col-12 col-md-6 mt-1 mb-2">
                <h3>
                ${data.content}
                </h3>
                <p>
                ${data.description}
                </p>
            
                <h3>Svetlana Ekimenko</h3>
                <a${data.url}>
                    click here to reach the full content
                </a>
            </section>
            <section class="col-12 col-md-6">
                <img
                src=${data.urlToImage}
                alt=""
                />
            </section>
        </section>
        <footer class="col"> 
            <p>${data.publishedAt}</p>
            <p>
            ${data.content}
            </p>
        </footer>
        <hr/>
            `
        )
    }).join("")
}