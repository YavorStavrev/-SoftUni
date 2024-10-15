function magicMatrices(arr){
    let firstArray = arr[0];
    let secondArray = arr[1];
    let thirthArray = arr[2];
    let sumFirstRow = firstArray[0] + firstArray[1] + firstArray[2];
    
     let sumSecondRow = secondArray[0] + secondArray[1] + secondArray[2];
     let sumThirthRow = thirthArray[0] + thirthArray[1] + thirthArray[2];
    let sumFirstCol = firstArray[0] + secondArray[0] + thirthArray[0];
    let sumSecondCol = firstArray[1] + secondArray[1] + thirthArray[1];
    let sumThirthCol = firstArray[2] + secondArray[2] + thirthArray[2];
    if(sumFirstRow === sumFirstCol && sumSecondRow === sumSecondCol && sumThirthRow === sumThirthCol){
        console.log('true');
    }else{
        console.log('false');
    }
    
}
magicMatrices([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);