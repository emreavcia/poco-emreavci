const select = document.getElementById("select")
const div = document.getElementById("div")
function getData(pCity) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pCity}&units=metric&APPID=6bae8826f84c726e47e7e7351a9ee669`)
        .then(response => response.json())
        .then(data => renderContent(data))
}
select.onchange = () => {
    getData(select.value)
}
function renderContent(data) {
    const icon = data.weather[0].icon
    div.innerHTML = `
    <h1> ${data.name}</h1>
    <h2>${Math.round(data.main.temp)} &#8451;  </h2>
    <img src=${`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
    `
}