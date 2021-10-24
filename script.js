var day = document.querySelector(".days");
var hour = document.querySelector(".hours");
var minute = document.querySelector(".minutes");
var second = document.querySelector(".seconds");

var x = setInterval(function() {

    var launchDate = new Date("Jun 13, 2022 12:00:00").getTime();
    var currentDate = new Date().getTime();

    var timeDiff = launchDate - currentDate;

    var days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    day.innerHTML = days + "<br>Days";
    hour.innerHTML = hours + "<br>Hours";
    minute.innerHTML = minutes + "<br>Minutes";
    second.innerHTML = seconds + "<br>Seconds";
}, 1000);


// for mobile menu 

var menu = document.getElementById('menu');

function openMenu() {
    menu.style.left = "0";
}

function closeMenu() {
    menu.style.left = "-100%";
}