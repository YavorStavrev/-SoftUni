function fancyBarcode(arr) {
    let barcodePattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
    let digitPattern = /[0-9]/g;

    let barCodeCount = Number(arr.shift());

    for (let i = 0; i < barCodeCount; i++) {
        let curBarcode = arr[i];

        if (barcodePattern.test(curBarcode)) {
            let digits = curBarcode.match(digitPattern);

            if(digits){
                let productGroup = digits.join('');
                console.log(`Product group: ${productGroup}`);
            }else {
                console.log('Product group: 00');
            }
        }else{
            console.log('Invalid barcode');
        }
    }
}
fancyBarcode(["3",

"@#FreshFisH@#",

"@###Brea0D@###",

"@##Che4s6E@##"]);