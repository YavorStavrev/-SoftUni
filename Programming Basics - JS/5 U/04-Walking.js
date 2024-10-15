function Walking(input){
    let index = 0;
    let totalSteps = 0;
    let command = input[index];
    index++;
    while(command !== 'Going home'){
        let steps = Number(command);
        totalSteps += steps;
        
        if(totalSteps >= 10000){
            let moreSteps = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${moreSteps} steps over the goal!`);
            break;
        }
       
       
        command = input[index];
        index++;
    }
    if(command === 'Going home'){
        let stepsGoingHome = Number(input[index]);
        totalSteps += stepsGoingHome;
        if(totalSteps >= 10000){
            let moreSteps = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${moreSteps} steps over the goal!`);
        }else{
            let neededSteps = 10000 - totalSteps;
            console.log(`${neededSteps} more steps to reach goal.`);

        } 
    }
    
}
Walking(["1500", "300", "2500", "3000", "Going home", "200"]);
