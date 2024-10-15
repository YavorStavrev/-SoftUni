function nonDecreasingSubset(arr){
    let biggestNumber = arr.shift();
    let result = '';
    result += biggestNumber + ' ';
    for(let elem of arr){
        if(elem < biggestNumber){
            continue;
        }else{
            biggestNumber = elem;
            result += biggestNumber + ' ';
        }
    }
    console.log(result);
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);