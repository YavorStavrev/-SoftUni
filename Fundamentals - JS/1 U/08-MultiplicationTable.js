function MultiplicationTable(num){
   
    for(let i = 1; i <= 10; i++){
        let sum = 0;
        sum = i * num
        console.log(`${num} X ${i} = ${sum}`);
    }
}
MultiplicationTable(5);