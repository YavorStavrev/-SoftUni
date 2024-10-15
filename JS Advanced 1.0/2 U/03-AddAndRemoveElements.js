function solve(arr) {
    let number = 1;
    let result = [];
    for (let el of arr) {
        if (el === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    }
    if (result.length === 0) {
        console.log('Empty');
    }else{
        result.forEach(num => console.log(num));
    }
}
solve(['add',

    'add',

    'add',

    'add']);