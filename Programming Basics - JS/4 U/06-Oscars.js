function Oscars(input) {
    let name = input[0];
    let pointsofAcademy = Number(input[1]);
    let jurinumber = Number(input[2]);
    let result = pointsofAcademy;
    for (let i = 3; i <= jurinumber + 2; i++) {
        if (i % 2 === 0) {
            ++i
            result += (input[i].length * Number(input[++i])) / 2;
        } else {
            result += (input[i].length * Number(input[++i])) / 2;
            
        }
        if (result > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${result.toFixed(1)}!`);
            return;
        }
    }
    if (result < 1250.5) {
        let need = 1250.5 - result;
        console.log(`Sorry, ${name} you need ${need.toFixed(1)} more!`);
    }
}

function Oscars2(input){
    let actorName = input[0];
    let pointOfAcademi = Number(input[1]);
    let brGrader = Number(input[2]);

    for(let i = 3; i < input.length; i += 2) {
        let graderName = input[i];
        let graderPoints = Number(input[i + 1]);

        pointOfAcademi += (graderName.length * graderPoints) / 2;

        if(pointOfAcademi > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointOfAcademi.toFixed(1)}!`);
            return;
        }
    }

    if(pointOfAcademi > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointOfAcademi}!`);
    } else {
        let needScore = 1250.5 - pointOfAcademi;
        console.log(`Sorry, ${actorName} you need ${needScore.toFixed(1)} more!`);
    }
}

Oscars2(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);


