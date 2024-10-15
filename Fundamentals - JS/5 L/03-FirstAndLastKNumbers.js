function printFirstAndLastK(arr) {
    let k = arr[0];
    let firstK = arr.slice(1, k + 1).join(' ');
    let lastK = arr.slice(-k).join(' ');
    
    console.log(firstK);
    console.log(lastK);
}
printFirstAndLastK([2, 7, 8, 9]);
