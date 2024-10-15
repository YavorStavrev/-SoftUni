function ReverseAnArrayOfNumbers(number, input){
    let result = '';
    for(let i = number - 1; i >= 0; i--){
        result += input[i] + " ";
    }
    console.log(result);
}   
ReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);