var text = document.getElementById("text")
var search = document.getElementById("search")
var weatherIcon = document.getElementById("icon")
var temp = document.getElementById("celsius")
var city = document.getElementById("cityName")
var dataBox = document.getElementById("dataBox")

const api = "08dd5f8850c9d4754945159dc7f32160"

search.addEventListener("click", () => {
city_name = text.value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const cityName = data.name
        const time = data.timezone_offset
        const temperature = data.main.temp
        const weather = data.weather[0].main
        var celsius = Math.round(temperature - 273)

        temp.innerHTML = `${celsius}°C`
        city.innerHTML = `${cityName}`

        console.log(cityName)
        console.log(weather)
        console.log(temperature)
        if(weather != null){
            weatherIcon.style.display = "block"
            dataBox.style.display = "block"
            

        if(weather == "Clouds"){
            weatherIcon.src = "4102315_cloud_weather_icon.png"
        }
        else if(weather == "Clear"){
            weatherIcon.src = "4102326_cloud_sun_sunny_weather_icon.png"
        }
        else if(weather == "Snow"){
            weatherIcon.src = "4102324_cloud_cold_weather_winter_icon.png"
        }
    }
    })
    text.value = ""


}) 