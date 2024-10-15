function WorldRecord(input){
    let record = Number(input[0]);
    let meters = Number(input[1]);
    let secondspermeter = Number(input[2]);
    let slowmeter = Math.floor(meters / 15);
    let  normaltime = meters * secondspermeter;
    let addedtime = slowmeter * 12.5;
    let totalTime = normaltime + addedtime;

    if(totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else if(totalTime >= record){
        let timeleft = totalTime - record;
        console.log(`No, he failed! He was ${timeleft.toFixed(2)} seconds slower.`)
    }
}
WorldRecord(["150", "50", "9"]);
