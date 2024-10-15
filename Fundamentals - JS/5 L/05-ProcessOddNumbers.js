function processOddNumbers(arr){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        if(i % 2 === 1){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.reverse().map(n => n * 2).join(' '));
}
processOddNumbers([10, 15, 20, 25]);