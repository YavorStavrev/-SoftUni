function ForeignLanguages(word) {
    if (word === 'England' || word === 'USA') {
        console.log("English");
    } else if (word === "Spain" || word === "Argentina" || word === "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown");
    }
}
ForeignLanguages();