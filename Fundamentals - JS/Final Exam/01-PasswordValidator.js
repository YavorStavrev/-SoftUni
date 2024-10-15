function passwordValidator(input) {
    let arr = input.slice(0);
    let password = arr.shift();
    let curLine = arr.shift();

    while (curLine !== 'Complete') {
        let tokens = curLine.split(' ');
        let command = tokens[0];
        
        if (command === 'Make' && tokens[1] === 'Upper') {
            let index = Number(tokens[2]);
            password = password.slice(0, index) + password[index].toUpperCase() + password.slice(index + 1);
            console.log(password);
        } else if (command === 'Make' && tokens[1] === 'Lower') {
            let index = Number(tokens[2]);
            password = password.slice(0, index) + password[index].toLowerCase() + password.slice(index + 1);
            console.log(password);
        } else if (command === 'Insert') {
            let index = Number(tokens[1]);
            let char = tokens[2];
            if (index >= 0 && index <= password.length) {
                password = password.slice(0, index) + char + password.slice(index);
                console.log(password);
            }
        } else if (command === 'Replace') {
            let char = tokens[1];
            let value = Number(tokens[2]);
            let sum = value + char.charCodeAt(0);
            let newSymbol = String.fromCharCode(sum);
            password = password.split(char).join(newSymbol);
            console.log(password);
        } else if (command === 'Validation') {
            if (password.length < 8) {
                console.log('Password must be at least 8 characters long!');
            }
            if (/[^a-zA-Z0-9_]/.test(password)) {
                console.log('Password must consist only of letters, digits and _!');
            }
            if (!/(?=.*[A-Z])[a-zA-Z0-9_]+$/.test(password)) {
                console.log('Password must consist at least one uppercase letter!');
            }
            if (!/(?=.*[a-z])[a-zA-Z0-9_]+$/.test(password)) {
                console.log('Password must consist at least one lowercase letter!');
            }
            if (!/(?=.*\d)[\w\d]+$/.test(password)) {
                console.log('Password must consist at least one digit!');
            }
        }
        curLine = arr.shift();
    }
}
passwordValidator([
    '123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);
