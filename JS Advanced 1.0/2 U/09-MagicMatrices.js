function magicMatrices(arr){
    let rowCount = arr.length;
    let colCount = arr[0].length;

    let referenceSum = arr[0].reduce((sum, num) => sum + num, 0);
    
    for (let row = 1; row < rowCount; row++) {
        let rowSum = arr[row].reduce((sum, num) => sum + num, 0);
        if (rowSum !== referenceSum) {
            return false;
        }
    }

    for (let col = 0; col < colCount; col++) {
        let colSum = 0;
        for (let row = 0; row < rowCount; row++) {
            colSum += arr[row][col];
        }
        if (colSum !== referenceSum) {
            return false;
        }
    }

    return true;
}
magicMatrices([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]);