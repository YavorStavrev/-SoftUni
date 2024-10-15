function SumSeconds(input) {
    let firsttime = Number(input[0]);
    let secondtime = Number(input[1]);
    let thirdtime = Number(input[2]);
    let totalTime = firsttime + secondtime + thirdtime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }else {
        console.log(`${minutes}:${seconds}`);
        
    }
}
SumSeconds(["35", "45", "40"]);