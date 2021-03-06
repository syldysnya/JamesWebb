import "./styles/index.scss";

const centerCell = document.getElementById('cell-toggle');

let cells = document.getElementById('cells')
let i = cells.childNodes;

i[1].style.transform = 'translate(307%, 242%)';
i[3].style.transform = 'translate(307%, 142%)';
i[5].style.transform = 'translate(307%, 42%)';
i[7].style.transform = 'translate(307%, -58%)';
i[9].style.transform = 'translate(307%, -158%)';
i[11].style.transform = 'translate(307%, -258%)';

i[13].style.transform = 'translate(307%, -358%)';
i[15].style.transform = 'translate(307%, -458%)';
i[17].style.transform = 'translate(307%, -558%)';
i[19].style.transform = 'translate(307%, -658%)';
i[21].style.transform = 'translate(307%, -758%)';
i[23].style.transform = 'translate(307%, -858%)';
i[25].style.transform = 'translate(307%, -958%)';
i[27].style.transform = 'translate(307%, -1058%)';
i[29].style.transform = 'translate(307%, -1158%)';
i[31].style.transform = 'translate(307%, -1258%)';
i[33].style.transform = 'translate(307%, -1358%)';
i[35].style.transform = 'translate(307%, -1458%)';


centerCell.addEventListener('click', function () {
    
    this.style.visibility = 'hidden';

    i[1].style.transform = 'translate(307%, 136.5%)';
    i[1].style.visibility = 'visible';
    i[3].style.transform = 'translate(386%, 89%)';
    i[3].style.visibility = 'visible';
    i[5].style.transform = 'translate(386%, 94%)';
    i[5].style.visibility = 'visible';
    i[7].style.transform = 'translate(307%, 47%)';
    i[7].style.visibility = 'visible';
    i[9].style.transform = 'translate(228%, -106%)';
    i[9].style.visibility = 'visible';
    i[11].style.transform = 'translate(228%, -311%)';
    i[11].style.visibility = 'visible';
    
    i[13].style.transform = 'translate(307%, -569%)';
    i[13].style.visibility = 'visible';
    i[15].style.transform = 'translate(386%, -616%)';
    i[15].style.visibility = 'visible';
    i[17].style.transform = 'translate(465%, -663.5%)';
    i[17].style.visibility = 'visible';
    i[19].style.transform = 'translate(465%, -658.5%)';
    i[19].style.visibility = 'visible';
    i[21].style.transform = 'translate(465%, -653%)';
    i[21].style.visibility = 'visible';
    i[23].style.transform = 'translate(386%, -701%)';
    i[23].style.visibility = 'visible';
    i[25].style.transform = 'translate(307%, -748%)';
    i[25].style.visibility = 'visible';
    i[27].style.transform = 'translate(228%, -900%)';
    i[27].style.visibility = 'visible';
    i[29].style.transform = 'translate(149%, -1053%)';
    i[29].style.visibility = 'visible';
    i[31].style.transform = 'translate(149%, -1258%)';
    i[31].style.visibility = 'visible';
    i[33].style.transform = 'translate(149%, -1463%)';
    i[33].style.visibility = 'visible';
    i[35].style.transform = 'translate(228%, -1616%)';
    i[35].style.visibility = 'visible';

    document.getElementById('j-webb').style.animation = 'scaleTitle 1.5s forwards';
});

const launch = '1 November 2021';
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
const cellOrbit = document.getElementById('orbit-animation');
const countdownBox = document.getElementById('countdown');
const hegaxonBox = document.getElementById('hexagon-box');
const earthPng = document.getElementById('img-earth');
const moonPng = document.getElementById('img-moon');
const hubblePng = document.getElementById('img-hubble');
const orbitBox = document.getElementById('orbit');
const longLine = document.getElementById('long-line');
const shortLine = document.getElementById('short-line');
const shortLineText = document.getElementById('text-short-line');
const longLineText = document.getElementById('text-long-line');
const l2Point = document.getElementById('l2-point');
const hubbleText = document.getElementById('hubble-line');
const orbitInfoTitle = document.getElementById('orbit-info-title');
const orbitInfoText = document.getElementById('orbit-info-text');
const arianeCell = document.getElementById('ariane-cell');
const xButton = document.getElementById('x-button');
const xButtonAriane = document.getElementById('x-button-ariane');
const xButtonWebb = document.getElementById('x-button-webb');
const xButtonMirror = document.getElementById('x-button-mirror');
const xButtonMission = document.getElementById('x-button-mission');
const xButtonDuration = document.getElementById('x-button-duration');
const xButtonHubble = document.getElementById('x-button-hubble');
const xButtonAboutDev = document.getElementById('x-button-about-dev');
const xButtonAbout = document.getElementById('x-button-about');
const xButtonBudget = document.getElementById('x-button-budget');
const xButtonInstruments = document.getElementById('x-button-instruments');
const xButtonCountdown = document.getElementById('x-button-countdown');
const nameHistory = document.getElementById('name-cell-box');
const nameCell = document.getElementById('name-cell');
const mirrorCell = document.getElementById('mirror-cell');
const mirrorFact = document.getElementById('mirror-fact');
const missionCell = document.getElementById('mission-cell');
const missionFact = document.getElementById('mission-fact');
const earlyDays = document.getElementById('early-days');
const galaxies = document.getElementById('galaxies');
const starLifecycle = document.getElementById('star-lifecycle');
const otherWorlds = document.getElementById('other-worlds');
const earlyDaysText = document.getElementById('early-days-text');
const galaxiesText = document.getElementById('galaxies-text');
const starLifecycleText = document.getElementById('star-lifecycle-text');
const otherWorldsText = document.getElementById('other-worlds-text');
const missionDuration = document.getElementById('duration-cell');
const missionDurationFact = document.getElementById('duration-fact');
const aboutDevFact = document.getElementById('about-dev-fact');
const devCell = document.getElementById('dev-cell');
const aboutFact = document.getElementById('about-fact');
const aboutCell = document.getElementById('about-cell');
const budgetFact = document.getElementById('budget-fact');
const budgetCell = document.getElementById('budget-cell');
const instrumentsFact = document.getElementById('instruments-fact');
const instrumentsCell = document.getElementById('instruments-cell');
const camera = document.getElementById('camera');
const spectr = document.getElementById('spectr');
const instrument = document.getElementById('instrument');
const instrumentText = document.getElementById('instrument-text');
const sensor = document.getElementById('sensor');
const sensorText = document.getElementById('sensor-text');
const spectrText = document.getElementById('spectr-text');
const cameraText = document.getElementById('camera-text');
const hubbleFact = document.getElementById('hubble-fact');
const hubbleCell = document.getElementById('hubble-cell');

cellCount.addEventListener('click', function() {
    countdownBox.style.animation = 'scaleLaunch 1s forwards';
});

xButtonCountdown.addEventListener('click', function() {
    countdownBox.style.animation = 'none';
});

cellOrbit.addEventListener('click', function() {
    orbitBox.style.visibility = 'visible';
    orbitInfoTitle.classList.add('active');
    orbitInfoText.classList.add('active');
    hegaxonBox.style.animation = 'orbitAnimation2 5s forwards';
    earthPng.style.animation = 'orbitAnimation1 10s forwards';
    moonPng.style.animation = 'orbitAnimation3 10s forwards';
    hubblePng.style.animation = 'orbitAnimation4 10s forwards';
    longLine.style.animation = 'longLineAnimation 10s forwards';
    shortLine.style.animation = 'shortLineAnimation 10s forwards';
    shortLineText.style.visibility = 'visible';
    shortLineText.classList.add('active');
    longLineText.style.visibility = 'visible';
    longLineText.classList.add('active');
    l2Point.style.visibility = 'visible';
    l2Point.classList.add('active');
    hubbleText.style.visibility = 'visible';
    hubbleText.classList.add('active');
    xButton.style.visibility = 'visible';
});

xButton.addEventListener('click', function() {
    orbitBox.style.visibility = 'hidden';
    orbitBox.style.transition = 'none';
    orbitInfoTitle.style.transition = 'none';;
    orbitInfoTitle.classList.remove('active');
    orbitInfoText.style.transition = 'none';;
    orbitInfoText.classList.remove('active');
    hegaxonBox.style.animation = 'none';
    earthPng.style.animation = 'none';
    moonPng.style.animation = 'none';
    hubblePng.style.animation = 'none';
    longLine.style.animation = 'none';
    shortLine.style.animation = 'none';
    shortLineText.style.visibility = 'hidden';
    shortLineText.style.transition = 'none';
    shortLineText.classList.remove('active');
    longLineText.style.visibility = 'hidden';
    longLineText.style.transition = 'none';
    longLineText.classList.remove('active');
    l2Point.style.visibility = 'hidden';
    l2Point.style.transition = 'none';
    l2Point.classList.remove('active');
    hubbleText.style.visibility = 'hidden';
    hubbleText.style.transition = 'none';
    hubbleText.classList.remove('active');
    xButton.style.visibility = 'hidden';
});

arianeCell.addEventListener('click', function() {
    document.getElementById('ariane-fact').classList.add('active');
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards';
});

xButtonAriane.addEventListener('click', function() {
    document.getElementById('ariane-fact').classList.remove('active');
    hegaxonBox.style.animation = 'none';
});

xButtonWebb.addEventListener('click', function() {
    nameHistory.classList.remove('active');
    hegaxonBox.style.animation = 'none';
});

nameCell.addEventListener('click', function() {
    nameHistory.classList.add('active');
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards';
});

mirrorCell.addEventListener('click', function() {
    mirrorFact.classList.add('active');
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

xButtonMirror.addEventListener('click', function() {
    mirrorFact.classList.remove('active');
    hegaxonBox.style.animation = 'none';
});

missionDuration.addEventListener('click', function() {
    missionDurationFact.classList.add('active');
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

xButtonDuration.addEventListener('click', function() {
    missionDurationFact.classList.remove('active');
    hegaxonBox.style.animation = 'none';
});

missionCell.addEventListener('click', function() {
    missionFact.classList.add('active');
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

function resetVisible() {
    earlyDaysText.classList.remove('visible');
    galaxiesText.classList.remove('visible');
    starLifecycleText.classList.remove('visible');
    otherWorldsText.classList.remove('visible');
}

earlyDays.addEventListener('mouseover', function() {
    resetVisible();
    earlyDaysText.classList.add('visible');
});

galaxies.addEventListener('mouseover', function() {
    resetVisible();
    galaxiesText.classList.add('visible');
});

otherWorlds.addEventListener('mouseover', function() {
    resetVisible();
    otherWorldsText.classList.add('visible');
    
});

starLifecycle.addEventListener('mouseover', function() {
    resetVisible();
    starLifecycleText.classList.add('visible');
    
});

xButtonMission.addEventListener('click', function() {
    missionFact.classList.remove('active');
    hegaxonBox.style.animation = 'none';
});

hubbleCell.addEventListener('click', function() {
    hubbleFact.style.animation = 'factAnimation 2s forwards';
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

xButtonHubble.addEventListener('click', function() {
    hubbleFact.style.animation = 'none';
    hegaxonBox.style.animation = 'none';
});

budgetCell.addEventListener('click', function() {
    budgetFact.style.animation = 'factAnimation 2s forwards';
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

xButtonBudget.addEventListener('click', function() {
    budgetFact.style.animation = 'none';
    hegaxonBox.style.animation = 'none';
});

devCell.addEventListener('click', function() {
    aboutDevFact.style.animation = 'factAnimation 2s forwards';
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

xButtonAboutDev.addEventListener('click', function() {
    aboutDevFact.style.animation = 'none';
    hegaxonBox.style.animation = 'none';
});

instrumentsCell.addEventListener('click', function() {
    instrumentsFact.style.animation = 'factAnimation 2s forwards';
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

function resetVisibleInstruments() {
    spectrText.classList.remove('visible');
    sensorText.classList.remove('visible');
    instrumentText.classList.remove('visible');
    cameraText.classList.remove('visible');
}

camera.addEventListener('mouseover', function() {
    resetVisibleInstruments();
    cameraText.classList.add('visible');
});

spectr.addEventListener('mouseover', function() {
    resetVisibleInstruments();
    spectrText.classList.add('visible');
});

instrument.addEventListener('mouseover', function() {
    resetVisibleInstruments();
    instrumentText.classList.add('visible');
});

sensor.addEventListener('mouseover', function() {
    resetVisibleInstruments();
    sensorText.classList.add('visible');
});

xButtonInstruments.addEventListener('click', function() {
    instrumentsFact.style.animation = 'none';
    hegaxonBox.style.animation = 'none';
});

aboutCell.addEventListener('click', function() {
    aboutFact.style.animation = 'factAnimation 2s forwards';
    hegaxonBox.style.animation = 'hexagonBoxMiddle 2s forwards'
});

xButtonAbout.addEventListener('click', function() {
    aboutFact.style.animation = 'none';
    hegaxonBox.style.animation = 'none';
});