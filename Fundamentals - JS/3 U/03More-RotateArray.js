function rotateArray(arr){
    let rotations = Number(arr.pop());
    let newArr = [];
    for(let i = 0; i < rotations; i++){
        if(i === 0){
            rotateRight();
        }else{
            newRotation();
        }
    }
    function newRotation(){
        newArr[0] = newArr[newArr.length - 1];
        for(let i = 0; i < arr.length; i++){
            newArr[i + 1] = newArr[i];
        }
        return newArr;
    }
    function rotateRight(){
        
        newArr[0] = arr[arr.length - 1];
        for(let i = 0; i < arr.length - 1; i++){
            newArr[i + 1] = arr[i];
        }
        return newArr
    }
    console.log(newArr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);