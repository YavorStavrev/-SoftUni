function matchFullName(namesStr){
    let names = namesStr.split(', ');
    let pattern = /\b[A-Z][a-z]{2,} [A-Z][a-z]{2,}\b/g;
    let validNames = [];
    for(let name of names){
        if(pattern.exec(name)){
            validNames.push(name);
        }
    }
    console.log(validNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");