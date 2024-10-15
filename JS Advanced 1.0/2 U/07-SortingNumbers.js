function sortingNumbers(arr){
    let sortArr = arr.sort((a,b) => a - b).slice();

    let result = [];
    let isShift = true;
    while(sortArr.length > 0){
        if(isShift){
            result.push(sortArr.shift());
            isShift = false;
        }else{
            result.push(sortArr.pop());
            isShift = true;
        }
    }
   return result; 
}
sortingNumbers([11,91,18]);