const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

const x = setInterval(function() {

    const launchDate = new Date("Jun 13, 2024 12:00:00").getTime();
    const currentDate = new Date().getTime();

    const timeDiff = launchDate - currentDate;

    const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    day.innerHTML = days + "<br>Days";
    hour.innerHTML = hours + "<br>Hours";
    minute.innerHTML = minutes + "<br>Minutes";
    second.innerHTML = seconds + "<br>Seconds";
}, 1000);


// for mobile menu 

const menu = document.getElementById('menu');

function openMenu() {
    menu.style.left = "0";
}

function closeMenu() {
    menu.style.left = "-100%";
}
