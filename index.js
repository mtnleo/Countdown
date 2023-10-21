let countdown_date = new Date(2024,0,1); // new year's as default
let countdown_name = "New Year's";

updateCountdown(countdown_date, countdown_name);
// Get the submit
const submit = document.getElementById("submit_date_name");

submit.addEventListener("submit", (event) => {
    event.preventDefault();

    countdown_name = document.getElementById("date_name_input").value;
    countdown_date = document.getElementById("date_input").value;

    updateCountdown(countdown_date, countdown_name);
    

    });

function updateCountdown(cd_date, cd_name) {
    document.getElementById("countdown_title").innerHTML = "Countdown until " + countdown_name;
    //document.getElementById("countdown_clock").innerHTML 
}