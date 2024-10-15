function repeatString(string, num){
    let result = '';
    for(let i = 0; i < num; i++){
        result += string;
    }
    console.log(result);
}
repeatString("abc", 3);