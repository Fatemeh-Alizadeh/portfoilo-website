
const days = document.querySelector('.days h3')
const hours = document.querySelector('.hours h3')
const minutes = document.querySelector('.minutes h3')
const seconds = document.querySelector('.seconds h3')

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`).getTime();


function countdown() {
    const currentTime = new Date().getTime();
    const diff = newYear - currentTime
    
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    let d = Math.floor(diff / day);
    let h = Math.floor((diff % day) / hour);
    let m = Math.floor((diff % hour) / minute);
    let s = Math.floor((diff % minute) / 1000);

    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
};

setInterval( countdown, 1000)