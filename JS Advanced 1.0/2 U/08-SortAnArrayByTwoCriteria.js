function solve(data){
    data.sort((a,b) => {
        if(a.length !== b.length){
           return a.length - b.length;
        }else{
           return a.localeCompare(b);
        }
    }).forEach(x => console.log(x));
}
solve(['alpha',

'beta',

'gamma']);