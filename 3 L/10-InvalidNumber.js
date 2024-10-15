function InvalidNumber(input){
    let number = Number(input[0]);
        if(number < 100 && number > 200 && number != 0 ){
            console.log('invalid');
        }else if (number >= 100 & number <= 200 || number === 0){
            console.log()
        }
    
}
InvalidNumber(["0"]);