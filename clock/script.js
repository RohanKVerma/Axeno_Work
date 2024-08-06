const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function getTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
}
setInterval(getTime, 1000);
getTime();