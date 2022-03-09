
let currentDate = new Date() 

let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();


let options = { month: 'long'};
//console.log(new Intl.DateTimeFormat('en-US', options).format(currentDate));
let nameOfMonth = new Intl.DateTimeFormat('en-US', options).format(currentDate);
//console.log(nameOfMonth);

let options2 = { weekday: 'long'};
let nameOfDay = new Intl.DateTimeFormat('en-US', options2).format(currentDate);
//console.log(nameOfDay);

let currentDay = currentDate.getDate();
let dayOfWeek = currentDate.getDay();
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();

window.setInterval(function() {
    setTime();
    setDate();
}, 100);

function setDate() {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentDay = currentDate.getDate();
    nameOfMonth = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    nameOfDay = new Intl.DateTimeFormat('en-US', options2).format(currentDate);

    let dayEnding = currentDay.toString().match(/\d$/m).join();//*1;
    
    if (dayEnding == 1 && currentDay != 11) {
        currentDay = currentDay.toString().concat("st");
    } else if (dayEnding == 2 && currentDay != 12) {
        currentDay = currentDay.toString().concat("nd");
    } else if (dayEnding == 3 && currentDay != 13) {
        currentDay = currentDay.toString().concat("rd");
    } else {
        currentDay = currentDay.toString().concat("th");
    }

    $("#date").text(`${nameOfDay}, ${nameOfMonth} ${currentDay} ${currentYear}`);
}

function setTime() {
    let standard = "";
    currentDate = new Date();
    currentHour = currentDate.getHours();
    currentMinutes = currentDate.getMinutes();
    currentSeconds = currentDate.getSeconds(); 

    if (currentMinutes < 10) {
       currentMinutes = ("0").concat(currentMinutes.toString());
    }

    if (currentSeconds < 10) {
        currentSeconds = ("0").concat(currentSeconds.toString());
    }

    if (display == 1) {
        if (currentHour > 12 ) {
            currentHour -= 12;
            standard = "PM";
        } else if (currentHour < 12 && currentHour != 0) {
            standard = "AM";
        } else if (currentHour == 12) {
            standard = "PM";
        } else if (currentHour == 0) {
            currentHour += 12;
            standard = "AM";
        }
    }

    if (currentHour < 10) {
        currentHour = ("0").concat(currentHour.toString());
    }
    
    $("#clock").text(`${currentHour}:${currentMinutes}:${currentSeconds} ${standard}`);
}

let display = 0;
$("#militar").on("click",function () {
    if (display == 0) {
        display = 1;
    } else {
        display = 0;
    }
})

$("#militar").click(function (e) { 
    // e.preventDefault();
    console.log(e);    
});

let input = '';
document.querySelector("#test").addEventListener('input', function (e) {
    input = e.target.value;
    //console.log(input);
})

// function output(input) {
//     console.log(input);
// }