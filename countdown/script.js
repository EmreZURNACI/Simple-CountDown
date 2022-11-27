let minuteBar = document.querySelector(".minutes");
let secondBar = document.querySelector(".seconds");
let increaseMinute = document.querySelector(".leftside span:first-child");
let increaseSecond = document.querySelector(".rightside span:first-child");
let reduceminute = document.querySelector(".leftside span:nth-child(2)");
let reduceSecond = document.querySelector(".rightside span:nth-child(2)");
let minute = minuteBar.innerHTML;
let seconds = secondBar.innerHTML;

function increasedMinute() {
    let now = Number(minuteBar.innerHTML);
    minuteBar.innerHTML = "";
    minuteBar.innerHTML = now + 1;
}
function increasedSecond() {
    let now = Number(secondBar.innerHTML);
    if (now == 60) {
        now -= 60;
        minuteBar.innerHTML = Number(minuteBar.innerHTML) + 1;
    }
    secondBar.innerHTML = "";
    secondBar.innerHTML = now + 1;
}
function reducedMinute() {
    let now = Number(minuteBar.innerHTML);
    minuteBar.innerHTML = "";
    minuteBar.innerHTML = now - 1;
    if (now <= 0) {
        minuteBar.innerHTML = "00";
        window.alert("minutes must not be less than zero");
    }
}
function reducedSecond() {
    let now = Number(secondBar.innerHTML);
    secondBar.innerHTML = "";
    secondBar.innerHTML = now - 1;
    if (now <= 0) {
        minuteBar.innerHTML = Number(minuteBar.innerHTML) - 1;
        secondBar.innerHTML = "59";
    }
    if (minuteBar.innerHTML < 0 && seconds <= 0) {
        window.alert("minutes and seconds must not be less than zero");
        minuteBar.innerHTML = "00";
        secondBar.innerHTML = "00";
    }
}
function startTheCountDown() {
    document.querySelector(".loading").style.backgroundColor = "black";
    let time = ((Number(minuteBar.innerHTML) * 60) + Number(secondBar.innerHTML));
    if (time == 0) {
        document.querySelector(".loading").style.backgroundColor = "black";
        window.alert("minutes and seconds must not be less than zero");

    }
    else{
        document.querySelector(".loading").style.backgroundColor = "rgb(226, 220, 200)"
        document.querySelector(".loading").style.animationDuration = `${time}s`;
    }

}
function resetTheCountDown() {
    minuteBar.innerHTML = "00";
    secondBar.innerHTML = "00";
    document.querySelector(".loading").style.backgroundColor = "black";
}