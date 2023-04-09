const today = new Date().getDay();

const daysIndex = [0, 1, 2, 3, 4, 5, 6]

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

if (today === daysIndex[today]){
    document.getElementById(days[today]).style.color = "#fff";
    document.getElementById(days[today]).style.backgroundColor = "#222529";
    document.getElementById(dayName[today]).style.backgroundColor = "#000"
    document.getElementById(days[today]).style.borderColor = "#f5f520";
    document.getElementById(dayName[today]).style.borderColor = "#f5f520";
}