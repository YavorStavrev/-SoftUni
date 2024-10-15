function smallestTwoNumbers(arr){
    let sortedInAscending = arr.sort((a, b) => a - b);
    let first = sortedInAscending[0];
    let second = sortedInAscending[1];
    console.log(`${first} ${second}`);
}
smallestTwoNumbers([30, 15, 50, 5]);