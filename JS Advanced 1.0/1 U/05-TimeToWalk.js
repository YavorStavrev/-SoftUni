function timeToWalk(steps, footLength, speed){
    let distance = steps * footLength;
    let speedMeterInSec = speed / 3.6;
    let time = distance / speedMeterInSec;
    let restCount = Math.floor(distance / 500);
    time += restCount * 60;
    let seconds = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hours = Math.floor(time/ 60 / 60);

    let secToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);
}
timeToWalk(4000, 0.60, 5);