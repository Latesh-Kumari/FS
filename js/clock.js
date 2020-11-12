//Selectors
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
//Event Handler

//Functions
function showtime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    const amPm = hour > 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
    setTimeout(showtime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setGreeting() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundImage = 'url("morning.jpg")';

    }
}

//Functions call
showtime();
setGreeting();