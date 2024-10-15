function addAndRemove(arr){
    let newArr = [];
    let number = 0;
    for(let elem of arr){
        if(elem === 'add'){
            newArr.push(number + 1);
        }
        if(elem === 'remove'){
            newArr.pop();
        }
        number++;
    }
    if(newArr.length === 0){
        console.log('Empty');
        return;
    }
    console.log(newArr.join(' '));
}
addAndRemove(['add', 'add', 'add', 'add']);