import "./styles/index.scss";

const centerCell = document.getElementById('cell-toggle');

let cells = document.getElementById('cells')
let i = cells.childNodes;

i[1].style.transform = 'translate(366%, 193%)';
i[3].style.transform = 'translate(366%, 93%)';
i[5].style.transform = 'translate(366.6%, -6.7%)';
i[7].style.transform = 'translate(366.6%, -106.6%)';
i[9].style.transform = 'translate(366.6%, -206.6%)';
i[11].style.transform = 'translate(366.6%, -306.7%)';

i[13].style.transform = 'translate(366.6%, -406.5%)';
i[15].style.transform = 'translate(366.6%, -507%)';
i[17].style.transform = 'translate(366.6%, -607%)';
i[19].style.transform = 'translate(366.6%, -707%)';
i[21].style.transform = 'translate(366.6%, -807%)';
i[23].style.transform = 'translate(366.6%, -907%)';
i[25].style.transform = 'translate(366.6%, -1007%)';
i[27].style.transform = 'translate(366.6%, -1107%)';
i[29].style.transform = 'translate(366.6%, -1207%)';
i[31].style.transform = 'translate(366.6%, -1307%)';
i[33].style.transform = 'translate(366.6%, -1407%)';
i[35].style.transform = 'translate(366.6%, -1507%)';


centerCell.addEventListener('click', function () {
    
    this.style.visibility = 'hidden';

    i[1].style.transform = 'translate(263%, 193%)';
    i[1].style.visibility = 'visible';
    i[3].style.transform = 'translate(314.5%, 14.8%)';
    i[3].style.visibility = 'visible';
    i[5].style.transform = 'translate(418%, -85.2%)';
    i[5].style.visibility = 'visible';
    i[7].style.transform = 'translate(470.8%, -107%)';
    i[7].style.visibility = 'visible';
    i[9].style.transform = 'translate(418.5%, -128.5%)';
    i[9].style.visibility = 'visible';
    i[11].style.transform = 'translate(315%, -228.5%)';
    i[11].style.visibility = 'visible';
    
    i[13].style.transform = 'translate(159.8%, -406.5%)';
    i[13].style.visibility = 'visible';
    i[15].style.transform = 'translate(211%, -585%)';
    i[15].style.visibility = 'visible';
    i[17].style.transform = 'translate(262.5%, -763.5%)';
    i[17].style.visibility = 'visible';
    i[19].style.transform = 'translate(365.8%, -863.5%)';
    i[19].style.visibility = 'visible';
    i[21].style.transform = 'translate(469.5%, -963.5%)';
    i[21].style.visibility = 'visible';
    i[23].style.transform = 'translate(522%, -985.5%)';
    i[23].style.visibility = 'visible';
    i[25].style.transform = 'translate(574.8%, -1007%)';
    i[25].style.visibility = 'visible';
    i[27].style.transform = 'translate(522.2%, -1028.5%)';
    i[27].style.visibility = 'visible';
    i[29].style.transform = 'translate(470.5%, -1050.0%)';
    i[29].style.visibility = 'visible';
    i[31].style.transform = 'translate(366.8%, -1149.8%)';
    i[31].style.visibility = 'visible';
    i[33].style.transform = 'translate(263%, -1249.8%)';
    i[33].style.visibility = 'visible';
    i[35].style.transform = 'translate(212%, -1428.5%)';
    i[35].style.visibility = 'visible';

    
    document.getElementById('count-timer').style.visibility = 'visible';
});

const launch = '31 Oct 2021';
const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minsEle = document.getElementById('mins');
const secsEle = document.getElementById('secs');
const boxDays = document.getElementById('box-days')
const boxHours = document.getElementById('box-hours')
const boxMins = document.getElementById('box-mins')
const boxSecs = document.getElementById('box-secs')


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
    boxDays.innerHTML = formatTime(days);
    boxHours.innerHTML = formatTime(hours);
    boxMins.innerHTML = formatTime(mins);
    boxSecs.innerHTML = formatTime(secs);
};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : (time)
}
setInterval(countdown, 1000);

const cellCount = document.getElementById('count-cell');

cellCount.addEventListener('mouseover', function() {
    document.getElementById('countdown').style.visibility = 'visible';
});

cellCount.addEventListener('mouseout', function() {
    document.getElementById('countdown').style.visibility = 'hidden';
});

