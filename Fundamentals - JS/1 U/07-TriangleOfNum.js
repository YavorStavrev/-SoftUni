function TriangleOfNum(maxRow){
    for(let curRow = 1; curRow <= maxRow; curRow++){
        console.log(`${curRow} `.repeat(curRow));
    }
}
TriangleOfNum(3);