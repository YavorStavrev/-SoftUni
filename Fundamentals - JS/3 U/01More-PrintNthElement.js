function printNthElement(arr){
    let nThElement = Number(arr.pop());
    let result = '';
    for(let i = 0; i < arr.length; i += nThElement){
        result += arr[i] + ' ';
    }
    console.log(result);
}
printNthElement(['5', '20', '31', '4', '20', '2']);