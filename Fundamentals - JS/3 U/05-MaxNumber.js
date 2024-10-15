function maxNumber(input){
    let topNums = [];
   for(let i = 0; i < input.length; i++){
    let curNum = input[i];
    let isTop = true;
    for(let j = i + 1; j < input.length; j++){
        let rightNum = input[j];
        if(curNum <= rightNum){
            isTop = false;
        }
    }
    if(isTop){
        topNums.push(curNum);
    }
   }
   console.log(topNums.join(' '));
}
maxNumber([1, 4, 3, 2]);