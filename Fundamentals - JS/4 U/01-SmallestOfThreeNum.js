function smallestOfThreeNums(first, second, last){
    let lowestNumber = first;
    if(lowestNumber > second){
        lowestNumber = second;
    }
    if(lowestNumber > last){
        lowestNumber = last;
    }
    console.log(lowestNumber);
}
smallestOfThreeNums(2,

5,

3);