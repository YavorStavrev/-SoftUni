function sortArray(arr, str) {
     return str === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a,b) => b - a);
}
sortArray([14, 7, 17, 6, 8], 'asc');