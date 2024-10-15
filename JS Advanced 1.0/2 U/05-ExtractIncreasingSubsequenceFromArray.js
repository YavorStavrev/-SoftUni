function solve(arr){
    let result = [];
    let biggestNumber = arr.shift();
    result.push(biggestNumber);
    for(let el of arr){
        if(el >= biggestNumber){
            result.push(el);
            biggestNumber = el;
        }
    }
    return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);