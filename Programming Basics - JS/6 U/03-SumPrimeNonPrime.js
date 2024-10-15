function SPNP(input){
    let index = 0;
    let command = input[index];
    index++;
    let prostNumberSum = 0;
    let slojniNumberSum = 0;
    while(command !== 'stop'){
        let num = Number(command);
        if(num < 0){
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for(let divisor = 2; divisor < num; divisor++){
            if(num % divisor === 0){
                isPrime = false;
                break
               }
        }
        if(isPrime === true){
            prostNumberSum += num;
        }else {
            slojniNumberSum += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${prostNumberSum}`);
    console.log(`Sum of all non prime numbers is: ${slojniNumberSum}`);
}
SPNP(["3",

"9",

"0",

"7",

"19",

"4",

"stop"]);