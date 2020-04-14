import './style/style.css';

const apiKey = '3c0b4d345113267fbfde2bf609755e17';
let submitBtn = document.getElementById("btn"); 
let displayGrade = document.getElementById("grades");
let displayUnit = document.getElementById("unit");
let icons = document.getElementById("img");
let description = document.getElementById("descript");
let minTemp = document.getElementById("tempMin");
let maxTemp = document.getElementById("tempMax");

const dateGen = () => {
    let currentDate = document.getElementById('date');
    let fullDate = new Date();
    let month = fullDate.getMonth() + 1;
    let day = fullDate.getDate();
    let year = fullDate.getFullYear();
    currentDate.innerHTML = month + '/' + day + '/' + year;
    return currentDate;
}
dateGen();

const getInfo = async (nameOfCity) => {
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=${apiKey}`)
        .then((response) => { 
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Enter valid name!")
            }
        })
        .then(response => {
            initFunc(response);
        })
    .catch(error => {
        console.log(error);
    })    
}

const initFunc = (result) => {
    console.log(result);
    searched.innerHTML = result.name;
    let currentTemp = convertToCelsius(result.main.temp);
    let minimum = convertToCelsius(result.main.temp_min);
    let maximum = convertToCelsius(result.main.temp_max);
    displayGrade.innerHTML = currentTemp;
    img.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    description.innerHTML = result.weather[0].description;
    minTemp.innerHTML = minimum.toString() + '°C';
    maxTemp.innerHTML = maximum.toString() + '°C';
}

submitBtn.addEventListener('click', () => {
    let nameOfCity = document.getElementById("city").value;
    if(nameOfCity) {
        getInfo(nameOfCity);
    }
})

const convertToCelsius = (degree) => {
    let celsius = Math.floor(degree - 273.15);
    return celsius;
}