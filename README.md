# James Webb Space Telescope
## Overview
*Webb will be the largest, most powerful and complex space telescope ever built and launched into space. It will fundamentally alter our understanding of the universe. (c)*

This project is about the largest and the most ambitious space prject James Webb Space Telescope. You can learn more information about it on the website.

## Features
First appears one hexagon cell. If user clicks on it it will open 'mirrors'. Responsive honeycomb grid imitates the mirrors of James Webb Telescope.
![james-main](https://user-images.githubusercontent.com/78821780/125646838-35c5334b-4728-4f26-9420-dd2fe2f7e522.gif)

User can click on cells to find more information about the James Webb.
![james-menu](https://user-images.githubusercontent.com/78821780/125648030-c7dc1257-e007-48f1-8169-ce3bb12c06db.gif)

## Code Snippet
```js
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
```

## Technologies
This project was built using Javascript, CSS and HTML.
