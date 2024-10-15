function ESEOP(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let result = '';
    for(let curNum = num1; curNum <=num2; curNum++){
        let evenPosititonSum = 0;
        let oddPosititonSum = 0;

        let curNumStr = curNum.toString();

        for(let i = 0; i < curNumStr.length; i++){
            let digit = Number(curNumStr[i]);
            if(i % 2 === 0){
                evenPosititonSum +=digit;
            }else {
                oddPosititonSum += digit
            }
        }

        if(evenPosititonSum === oddPosititonSum){
            result += curNum + ' ';
        }
    }
    console.log(result);
}
ESEOP(["100000",

"100050"]);
