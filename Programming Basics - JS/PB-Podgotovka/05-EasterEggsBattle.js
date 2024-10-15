function Easter(input){
    let firstPlayer = Number(input[0]);
    let secondPlayer = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;
    while(command !== 'End'){
        if(command === 'one'){
            secondPlayer--;
        }else if(command === 'two'){
            firstPlayer--;
        }
        if(firstPlayer === 0){
            console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`);
            return;
        }else if( secondPlayer === 0){
            console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`);
            return;
        }


        command = input[index];
        index++;
    }
    console.log(`Player one has ${firstPlayer} eggs left.`);
    console.log(`Player two has ${secondPlayer} eggs left.`);
}
Easter([]);