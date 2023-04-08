const today = new Date().getDay();

const daysIndex = [0, 1, 2, 3, 4, 5, 6]

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

if (today === daysIndex[today]){
    document.getElementById(days[today]).style.color = "white";
    document.getElementById(days[today]).style.backgroundColor = "black";
    document.getElementById(days[today]).style.borderColor = "gold";
    document.getElementById(dayName[today]).style.borderColor = "gold";
}