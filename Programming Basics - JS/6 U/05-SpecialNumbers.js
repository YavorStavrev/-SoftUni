function SpecialNumbers(input){
    let n = Number(input[0]);
    let number = '';
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            for(let k = 1; k <= 9; k++){
                for(let h = 1; h <= 9; h++){
                    if(n % i === 0 && n % j === 0 && n % k === 0 && n % h === 0){
                        number += i + '' + j + '' + k + '' + h + ' ';
                    }
                }
            }
        }
    }
    console.log(number);
}
SpecialNumbers(['3']);
