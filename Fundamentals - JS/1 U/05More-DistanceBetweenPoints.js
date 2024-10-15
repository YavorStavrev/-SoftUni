function DistanceBetweenPoints(x1, y1, x2, y2){
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let deltaXSquared = deltaX * deltaX;
    let deltaYSquared = deltaY * deltaY;
    let sumOfSquares = deltaXSquared + deltaYSquared;
    let distance = Math.sqrt(sumOfSquares);
    console.log(distance);
}
DistanceBetweenPoints(2,4,5,0);