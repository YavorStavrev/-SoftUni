function Graduation(input) {
    let name = input[0];
    let klas = 1;
    let sumGrades = 0;
    let currentGrade = Number(input[klas]);
    let excluded = 0; 

    while (klas <= 12) {
        if (currentGrade < 4) {
            excluded++;
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${klas - 1} grade`);
            break;
        }

        sumGrades += currentGrade;
        klas++;
        currentGrade = Number(input[klas]);
    }
    let avgGrade = sumGrades / 12;
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
        return;
    }
}
Graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);
