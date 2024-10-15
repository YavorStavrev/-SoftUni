function constructionCrew(input){
    if(input.dizziness === true){
        input.levelOfHydrated += 0.1 * input.weight * input.experience;
        input.dizziness = false;
        return input;
    }else{
        return input;
    }
}
let result = constructionCrew({ weight: 80,

experience: 1,

levelOfHydrated: 0,

dizziness: true });
console.log(result);