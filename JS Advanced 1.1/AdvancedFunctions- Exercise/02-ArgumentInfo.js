function argumentInfo(...args){
    let result = {};

    for(let el of args){
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }

        result[type] += 1

    }
    let sortResult = Object.entries(result).sort((arr1, arr2) => arr2[1] - arr1[1]);
    sortResult.forEach(([key, value]) => {
        console.log(`${key} = ${value}`);
    });
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });