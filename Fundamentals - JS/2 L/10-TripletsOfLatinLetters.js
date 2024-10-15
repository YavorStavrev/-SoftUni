function LatinLetters(n){
    let lettersCount = Number(n);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                let code1 = 97 + i;
                let code2 = 97 + j;
                let code3 = 97 + k;

                let letter1 = String.fromCharCode(code1);
                let letter2 = String.fromCharCode(code2);
                let letter3 = String.fromCharCode(code3);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}
LatinLetters('3');