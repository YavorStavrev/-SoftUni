function addAndSubtract(first, second, last){
    function sum(a, b){
        return a + b;
    }
    function subtract(c){
        return sum(first, second) - c;
    }
    console.log(subtract(last));
}
addAndSubtract(23,

6,

10);