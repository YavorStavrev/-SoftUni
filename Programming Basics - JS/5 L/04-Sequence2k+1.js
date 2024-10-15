function Sequence(input){
    let a = Number(input[0]);
    let n = 1;
    while(a >= n){
        console.log(n);
        n = n*2 + 1;
    }
}
Sequence(['3']);
