document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "03f7c2d4680e71c9b1e2996aaf085764";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const weatherIcon=document.getElementById("weatherIcon");
    const searchBox = document.getElementById("input2");
    const searchBtn = document.getElementById("search");
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("win").innerHTML = data.wind.speed + "km/h";
        document.getElementById("add").innerText= Math.round(data.main.feels_like) + "°C";
        if(data.weather[0].main==="Mist"){
            weatherIcon.src="mist.png";
        }
        else if(data.weather[0].main==="Clouds"){
            weatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main==="Haze"){
            weatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main==="Drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main==="Clear"){
            weatherIcon.src="clear.png";
        }
        else if(data.weather[0].main==="Rain"){
            weatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main==="Snow"){
            weatherIcon.src="snow.png";
        }
        else{
            weatherIcon.src="clear.png";
        }
    }
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});