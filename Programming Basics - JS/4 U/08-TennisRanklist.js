function TennisRanklist(input){
    let numtournaments = Number(input[0]);
    let startingpoints = Number(input[1]);
    let totalpoints = startingpoints;
    let wontournaments = 0;
    for (i = 2; i <= numtournaments + 1; i++){
        let ranking = input[i];
        switch(ranking){
            case 'W':totalpoints += 2000; wontournaments++;break;
            case 'F':totalpoints += 1200;break;
            case 'SF':totalpoints += 720;break;
        }
    }
    let averagepoints = (totalpoints - startingpoints) / numtournaments;
    let winpercentage = (wontournaments / numtournaments) * 100;
    console.log(`Final points: ${totalpoints}`);
    console.log(`Average points: ${Math.floor(averagepoints)}`);
    console.log(`${winpercentage.toFixed(2)}%`);
}
TennisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"]);
