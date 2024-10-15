function TrainTT(input){
    let judgesCount = Number(input[0]);

    let gradesSum = 0;
    let gradesCount = 0;
    
    let index = 1;
    let command = input[index];
    index++;

    while(command !== 'Finish'){
        let presentationname = command;
        let presentationGradesSum = 0;
        let presentationGradesCount = judgesCount;
        for(let curJudge = 1; curJudge <= judgesCount; curJudge++){
            let curGrade = Number(input[index]);
            index++;
            gradesCount++;
            gradesSum += curGrade;
            presentationGradesSum +=curGrade;
        }
        let averageGrade = presentationGradesSum / presentationGradesCount;
        console.log(`${presentationname} - ${averageGrade.toFixed(2)}.`);
        command = input[index];
        index++;
    }
   
        let average = gradesSum / gradesCount;
        console.log(`Student's final assessment is ${average.toFixed(2)}.`);
    
}
TrainTT(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"]);
