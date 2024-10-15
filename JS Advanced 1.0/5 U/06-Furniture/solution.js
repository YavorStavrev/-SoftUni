function solve() {
    const [inputTextRef, resultTextRef] = document.querySelectorAll('#container textarea');
    const [generateBtnRef, buyBtnRef] = document.querySelectorAll('#container button');
    const tableBodyRef = document.querySelector('.table tbody');

    generateBtnRef.addEventListener('click', onGenerateHandler);
    buyBtnRef.addEventListener('click', onBuyHandler);

    function onGenerateHandler(event) {
       
        if (!inputTextRef.value) {
            return;
        }
        const inputArr = JSON.parse(inputTextRef.value);

        for (const el of inputArr) {
            const tableRowEl = createTableRow(el);
            tableBodyRef.appendChild(tableRowEl);
        }
        inputTextRef.value = '';
    }


    function createTableRow(data) {
        const tr = document.createElement('tr');
       
        tr.innerHTML =  "<td>" + 
                            `<img src=${data.img}>` + 
                        "</td>" + 
                        "<td>" +
                            `<p>${data.name}</p>` +
                        "</td>" +
                        "<td>" +
                            `<p>${data.price}</p>` +
                          "</td>" +
                        `<td><p>${data.decFactor}</p></td>` +
                        `<td><input type='checkbox'></td>`;
                        
        
        return tr;
    }

    function onBuyHandler(event) {
        
        const checkbox = Array.from(document.querySelectorAll('input'));
        const items = checkbox.filter(x => x.checked);

        const names = [];
        let totalPrice = 0;
        let sumDecFactor = 0;

        for(let el of items){
            const trRef = el.parentElement.parentElement;
            const [imageTd, nameTd, priceTd, decFactorTd] = trRef.children;
            const name = nameTd.children[0].textContent;
            let price = Number(priceTd.children[0].textContent);
            let decFactor = Number(decFactorTd.children[0].textContent);

            names.push(name);
            totalPrice += price;
            sumDecFactor += decFactor;
        }

        let resultBuff = 'Bought furniture: ' + names.join(', ') + '\n';
        resultBuff += `Total price: ${totalPrice.toFixed(2)}\n`;
        resultBuff += `Average decoration factor: ${sumDecFactor / items.length}`;
        resultTextRef.value = resultBuff;
    }
}