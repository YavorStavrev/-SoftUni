function SpecialNumbers(number){
    let array = '';
    for(let i = 1; i <= number; i++){
        array += i;
        let sum = 0;
        for(let k = 0; k < array[k].length; k++){
            sum += Number(array[k]);
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
    }

}
SpecialNumbers(15);