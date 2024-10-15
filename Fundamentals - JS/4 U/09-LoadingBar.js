function loadingBar(number) {
    let box = [];
    if (number === 100) {
        console.log('100% Complete!');
        console.log("[%%%%%%%%%%]");
        return;
    }
    for (let i = 0; i < 10; i++) {
        let divisedNum = number / 10;
        if (i < divisedNum) {
            box.push('%');
        } else {
            box.push('.');
        }
    }
    console.log(`${number}% [${box.join('')}]`);
    console.log('Still loading...');
}
loadingBar(30);