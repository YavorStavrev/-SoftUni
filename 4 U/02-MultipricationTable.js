function MultiTable(input){
    let num = Number(input[0]);
    sum = 0;
    for(i = 1; i <=10; i++){
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);
    }
}
MultiTable(['5']);
