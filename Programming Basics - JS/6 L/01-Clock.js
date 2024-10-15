function Clock(input){
    for(let hour = 0; hour < 24; hour++){
        for(let mins = 0; mins < 60; mins++){
            console.log(`${hour}:${mins}`);
        }
    }
}
Clock(['']);
