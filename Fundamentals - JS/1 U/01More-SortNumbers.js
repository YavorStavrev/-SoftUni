function SortNumbers(num1, num2, num3){
    let num = num1;
    let number = num2;
    if(num1 < num2){
        num1 = num2;
    }
    if(num1 < num3){
        num1 = num3;
        num3 = num;
    }
    if(num2 < num3){
        num2 = num3;
        num3 = number;
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
SortNumbers(0,0,2);
3,1,2
3,2,1