function thePianist(arr) {
    let pieces = {};
    let initialPieceCount = Number(arr.shift());
    for (let i = 0; i < initialPieceCount; i++) {
        let pieceStr = arr.shift();
        let [piece, pieceComposer, pieceKey] = pieceStr.split('|');

        pieces[piece] = { composer: pieceComposer, key: pieceKey };
    }
    let curCommand = arr.shift();
    while (curCommand !== 'Stop') {
        let tokens = curCommand.split('|');
        let command = tokens[0];
        if (command === 'Add') {
            let piece = tokens[1];
            let pieceComposer = tokens[2];
            let pieceKey = tokens[3];
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = { composer: pieceComposer, key: pieceKey };
                console.log(`${piece} by ${pieceComposer} in ${pieceKey} added to the collection!`);
            }else{
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            let piece = tokens[1];
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            }else{
               console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            let piece = tokens[1];
            let newKey = tokens[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
               console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        curCommand = arr.shift();
    }
    
    let entries = Object.entries(pieces);
    
    for(let [pieceName,pieceInfo] of entries){
        console.log(`${pieceName} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
}
thePianist(['3',
    'Fur Elise|Beethoven|A Minor',

    'Moonlight Sonata|Beethoven|C# Minor',

    'Clair de Lune|Debussy|C# Minor',

    'Add|Sonata No.2|Chopin|B Minor',

    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

    'Add|Fur Elise|Beethoven|C# Minor',

    'Remove|Clair de Lune',

    'ChangeKey|Moonlight Sonata|C# Major',

    'Stop'

]);