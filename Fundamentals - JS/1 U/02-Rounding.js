function Rounding(num, num2){
    if(num2 > 15){
        num2 = 15;
    }
    console.log(parseFloat(num.toFixed(num2)));
}
Rounding(3.1415926535897932384626433832795,2);