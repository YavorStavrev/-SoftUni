function GiftsFromSanta(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let s = Number(input[2]);
    buff = '';
    for(let i = end; i >= start; i--){
        if(i % 2 === 0 && i % 3 === 0){
            if(i === s){
                break;
            }
            buff += `${i} `;
            
        }
    }
    console.log(buff);
    
}
GiftsFromSanta(['1','36','12']);