function PuppyCare(input){
    let kolichestvoHrana = Number(input[0]);
    kolichestvoHrana = kolichestvoHrana * 1000;
    let index = 1;
    let command = input[index];
    index++;
    let totalEatenFood = 0;
    while(command !== 'Adopted'){
        let eatenFood = Number(command);
        totalEatenFood += eatenFood;
       
       
        command = input[index];
        index++;
    }
    if(kolichestvoHrana >= totalEatenFood){
        let leftFood = kolichestvoHrana - totalEatenFood;
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    }else {
        let needFood = totalEatenFood - kolichestvoHrana;
        console.log(`Food is not enough. You need ${needFood} grams more.`);
    }
}
PuppyCare(['2', '999', '456', '999', '999', ]);