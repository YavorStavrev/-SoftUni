function passValidator(str) {
    let isValidLength = checkLength(str);
    let hasOnlyLettersDigits = checkOnlyLettersDigits(str);
    let hasTwoNumsOrMore = checkDigitsCount(str);

    if(isValidLength === true && hasOnlyLettersDigits === true && hasTwoNumsOrMore === true){
        console.log("Password is valid");
    }
    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyLettersDigits(pass) {
        let pattern = /^[A-Za-z0-9]+$/;

        let isValid = pattern.test(pass);
        if (isValid === true) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkDigitsCount(pass) {
        let pattern = /[0-9]{2,}/;
        let isValid = pattern.test(pass);
        if (isValid === true) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }
    
}
passValidator('MyPass123');