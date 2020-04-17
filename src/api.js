import { searched, img, displayGrade, displayUnit, description, 
    minTemp, maxTemp, swithcBtn, press, humid } from './elements';

const unit = (swBtn) => {
    let unit;
    if(swBtn.checked === true) {
        unit = 'imperial';
    } else {
        unit = 'metric';
    }
    return unit;
};

const getInfo = async (nameOfCity) => {
    try {
        // eslint-disable-next-line no-undef
        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&units=${unit(swithcBtn)}&appid=${process.env.S3_API}`);
        const data = await result.json();
        initFunc(data);
    } 
    catch(error) {
        console.log(error);
    }    
};

const initFunc = (result) => {
    console.log(result);
    console.log(unit(swithcBtn));
    searched.innerHTML = result.name;
    const currentTemp = toggleCelsToFahr(swithcBtn, result).temp;
    const minimum = toggleCelsToFahr(swithcBtn, result).min;
    const maximum = toggleCelsToFahr(swithcBtn, result).max;
    displayGrade.innerHTML = currentTemp;
    img.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    description.innerHTML = result.weather[0].description;
    minTemp.innerHTML = minimum;
    maxTemp.innerHTML = maximum;
    press.innerHTML = result.main.pressure;
    humid.innerHTML = result.main.humidity;
};
    
const toggleCelsToFahr = (swBtn, result) => {
    let temp, min, max; 
    if(swBtn.checked === true) {
        temp = Math.floor(result.main.temp);
        min = Math.floor(result.main.temp_min).toString() + '°F';
        max = Math.floor(result.main.temp_max.toString()) + '°F';
        displayUnit.innerText = 'F';
        
    } else {
        temp = Math.floor(result.main.temp);
        min = Math.floor(result.main.temp_min).toString() + '°C';
        max = Math.floor(result.main.temp_max.toString()) + '°C';
        displayUnit.innerText = 'C';
    }
    return { temp, min, max, displayUnit };
};

export default getInfo;

