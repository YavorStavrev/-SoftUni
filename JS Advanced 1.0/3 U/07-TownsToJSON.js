function townsToJSON(input) {

    let dataRows = input.slice(1);

    let result = [];

    dataRows.forEach(row => {
        let values = row.split('|').map(value => value.trim()).filter(value => value);
        let obj = {
            Town: values[0],
            Latitude: Number(Number(values[1]).toFixed(2)),
            Longitude: Number(Number(values[2]).toFixed(2))
        }
        result.push(obj);
    });

    console.log(JSON.stringify(result));

}
townsToJSON(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']);