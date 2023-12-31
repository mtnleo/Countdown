let countdown_date = new Date(2024,0,1); // new year's as default
let countdown_name = "New Year's";

countdown_interval = setInterval(updateCountdown, 1000, countdown_date, countdown_name);

// Get the submit
const submit = document.getElementById("choose_date_form");

submit.addEventListener("submit", (event) => {
    event.preventDefault(); 

    countdown_name = document.getElementById("date_name_input").value;
    countdown_date = new Date(document.getElementById("date_input").value);  

    updateCountdown(countdown_date, countdown_name);

    if (countdown_interval) {
        clearInterval(countdown_interval);
    }

    countdown_interval = setInterval(updateCountdown, 1000, countdown_date, countdown_name);
});


function updateCountdown(cd_date, cd_name) {
    document.getElementById("countdown_title").innerHTML = "Countdown until " + cd_name;
    document.getElementById("countdown_clock").innerHTML = getCountdownString(getDateDifference(cd_date)); 
}

function getDateDifference(cd_date) {
    let now_ms = new Date();
    let cd_date_ms = cd_date.getTime();

    let diff_ms = cd_date_ms - now_ms;
    let decimal_part = 0;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    const arr_ms_dates = [year, day, hour, minute, second];
    const diff_answer = [0, 0, 0, 0, 0];

    for (let i = 0; i < 5; i++) {
        answer = diff_ms / arr_ms_dates[i];
        trunc_answer = Math.trunc(answer);
        decimal_part = answer - trunc_answer;
        diff_ms = decimal_part * arr_ms_dates[i]; 
        diff_answer[i] = trunc_answer;
    }

    return diff_answer;
}

function getCountdownString(diff_answer) {
    let text = "";
    if (diff_answer[0] > 0) { //if the date is in less than a year, it wont show
        if (diff_answer[0] === 1) {
            text = diff_answer[0] + " year; ";
        }
        else {
            text = diff_answer[0] + " years; ";
        }
    }

    if (diff_answer[1] < 10) {
        text = text + "0" + diff_answer[1] + " days; ";
    } 
    else {
        text = text + diff_answer[1] + " days; ";
    }
    
    if (diff_answer[2] < 10) {
        text = text + "0" + diff_answer[2] + ":";
    }
    else {
        text = text + diff_answer[2] + ":";
    }

    if (diff_answer[3] < 10) {
        text = text + "0" + diff_answer[3] + ":";
    }
    else {
        text = text + diff_answer[3]+ ":";
    }

    if (diff_answer[4] < 10) {
        text = text + "0" + diff_answer[4];
    }
    else {
        text = text + diff_answer[4];
    }

    return text;
}