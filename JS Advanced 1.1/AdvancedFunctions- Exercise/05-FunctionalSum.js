function add(num) {
    let state = 0;
    state += num;

    function sum(num){
        state += num;
        console.log(state);
        return sum;
    }
    sum.toString = () => state;
    return sum;
}
console.log(add(1)(6)(-3));  // Output: 4
  