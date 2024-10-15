function SumOfTwoNumbers(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let combination = 0;
    let dontHaveValidComb = true;
    for(let i = x; i <= y; i++){
        for(let j = x; j <= y; j++){
            combination++;
            let sum = i + j;
            if(sum === z){
                dontHaveValidComb = false;
                console.log(`Combination N:${combination} (${i} + ${j} = ${z})`);
                return;
            }
     
        }
       
    }
    if(dontHaveValidComb){
        console.log(`${combination} combinations - neither equals ${z}`);
        
    }
    
}
SumOfTwoNumbers(["88",

"888",

"2000"]);
