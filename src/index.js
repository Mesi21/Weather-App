import './style/style.css';
import { submitBtn } from './elements';
import getInfo from './api';

const dateGen = () => {
    const currentDate = document.getElementById('date');
    const fullDate = new Date();
    const month = fullDate.getMonth() + 1;
    const day = fullDate.getDate();
    const year = fullDate.getFullYear();
    currentDate.innerHTML = month + '/' + day + '/' + year;
    return currentDate;
}
dateGen();

submitBtn.addEventListener('click', () => {
    const nameOfCity = document.getElementById('city').value;
    if(nameOfCity) {
        getInfo(nameOfCity);
    }
});
