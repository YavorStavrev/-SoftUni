function rotateArr(arr, number){
    for(let i = 0; i < number; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
rotateArr(['1',

'2',

'3',

'4'],

2);