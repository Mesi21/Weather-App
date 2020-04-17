import './style/style.css';

let submitBtn = document.getElementById("btn");
let searched = document.getElementById("searched");
let img = document.getElementById("img"); 
let displayGrade = document.getElementById("grades");
let displayUnit = document.getElementById("unit");
let description = document.getElementById("descript");
let minTemp = document.getElementById("tempMin");
let maxTemp = document.getElementById("tempMax");
let swithcBtn = document.getElementById('chk');
let press = document.getElementById("pressure");
let humid = document.getElementById("humidity");

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
    // eslint-disable-next-line no-undef
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=${process.env.S3_API}`)
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
    searched.innerHTML = result.name;
    let currentTemp = toggleCelsToFahr(swithcBtn, result).temp;
    let minimum = toggleCelsToFahr(swithcBtn, result).min;
    let maximum = toggleCelsToFahr(swithcBtn, result).max;
    displayGrade.innerHTML = currentTemp;
    img.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    description.innerHTML = result.weather[0].description;
    minTemp.innerHTML = minimum;
    maxTemp.innerHTML = maximum;
    press.innerHTML = result.main.pressure;
    humid.innerHTML = result.main.humidity;
}

submitBtn.addEventListener('click', () => {
    let nameOfCity = document.getElementById('city').value;
    if(nameOfCity) {
        getInfo(nameOfCity);
    }
})

const convertToCelsius = (degree) => {
    let celsius = Math.floor(degree - 273.15);
    return celsius;
}

const convertToFahr = (degree) => {
    let celsius = Math.floor(degree * 9/5 - 459.67);
    return celsius;
}

const toggleCelsToFahr = (swBtn, result) => {
    let temp, min, max; 
    if(swBtn.checked === true) {
        temp = convertToFahr(result.main.temp);
        min = convertToFahr(result.main.temp_min).toString() + '°F';
        max = convertToFahr(result.main.temp_max).toString() + '°F';
        displayUnit.innerText = 'F';
    } else {
        temp = convertToCelsius(result.main.temp);
        min = convertToCelsius(result.main.temp_min).toString() + '°C';
        max = convertToCelsius(result.main.temp_max).toString() + '°C';
        displayUnit.innerText = 'C';
    }
    return { temp, min, max, displayUnit };
}

