import "./styles/index.scss";

const centerCell = document.getElementById('toggle');

let i = document.getElementById('menu').childNodes;

centerCell.addEventListener('click', function () {

    this.classList.toggle("transparent")

    i[1].style.transform = 'translateY(-16.5vh)';
    i[3].style.transform = 'translate(13.6vh, -103%)';
    i[5].style.transform = 'translate(13.6vh, 103%)';
    i[7].style.transform = 'translateY(16.5vh)';
    i[9].style.transform = 'translate(-13.6vh, 103%)';
    i[11].style.transform = 'translate(-13.6vh, -103%)';
    
    i[13].style.transform = 'translateY(-33.1vh)';
    i[15].style.transform = 'translate(13.6vh, -310%)';
    i[17].style.transform = 'translate(27.2vh, -207%)';
    i[19].style.transform = 'translate(27.2vh, 0%)';
    i[21].style.transform = 'translate(27.2vh, 207%)';
    i[23].style.transform = 'translate(13.6vh, 310%)';
    i[25].style.transform = 'translateY(33.1vh)';
    i[27].style.transform = 'translate(-13.6vh, 310%)';
    i[29].style.transform = 'translate(-27.2vh, 207%)';
    i[31].style.transform = 'translate(-27.2vh, 0%)';
    i[33].style.transform = 'translate(-27.2vh, -207%)';
    i[35].style.transform = 'translate(-13.6vh, -310%)';

});

const launch = '31 Oct 2021';
const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minsEle = document.getElementById('mins');
const secsEle = document.getElementById('secs');

function countdown() {
    const launchDate = new Date(launch);
    const currentDate = new Date();
    
    const secsTotal = Math.floor((launchDate - currentDate) / 1000);
    const days = Math.floor(secsTotal / 24 / 3600);
    const hours = Math.floor(secsTotal / 3600) % 24;
    const mins = Math.floor(secsTotal / 60) % 60;
    const secs = Math.floor(secsTotal % 60);

    daysEle.innerHTML = formatTime(days);
    hoursEle.innerHTML = formatTime(hours);
    minsEle.innerHTML = formatTime(mins);
    secsEle.innerHTML = formatTime(secs);
};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : (time)
}
setInterval(countdown, 1000);

const cellCount = document.getElementById('count-cell');

cellCount.addEventListener('onmouseover', function() {
    document.getElementById('countdown').style.visibility = 'visible';
});

// cellCount.addEventListener('mouseover', function() {
//     document.getElementById('countdown').style.display = 'none';
// })