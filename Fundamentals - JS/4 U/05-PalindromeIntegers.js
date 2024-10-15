function palindromeInt(arr){
    for(let num of arr){
        let isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }

    function checkIfPalindrome(number){
        let numStr = number.toString();
        let reversedStr = numStr.split('').reverse().join('');

        if(numStr === reversedStr){
            return true;
        }else{
            return false;
        }
    }
}
palindromeInt([123,323,421,121]);