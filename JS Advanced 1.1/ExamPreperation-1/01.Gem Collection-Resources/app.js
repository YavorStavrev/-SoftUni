window.addEventListener("load", solve);

function solve() {
    const gemNameInput = document.getElementById('gem-name');
    const colorInput = document.getElementById('color');
    const caratsInput = document.getElementById('carats');
    const priceInput = document.getElementById('price');
    const typeInput = document.getElementById('type');
    const addButton = document.getElementById('add-btn');
    const previewList = document.getElementById('preview-list');
    const collectionList = document.getElementById('collection');

    addButton.addEventListener('click', addButtonClickHandler);

    function addButtonClickHandler(e) {
        const inputElements = [
            gemNameInput,
            colorInput,
            caratsInput,
            priceInput,
            typeInput
        ];

        if (inputElements.some(element => element.value === '')) {
            return;
        }

        const previewElement = createPreviewElement(
            gemNameInput.value,
            colorInput.value,
            caratsInput.value,
            priceInput.value,
            typeInput.value
        )
        //add element to preview-list
        previewList.appendChild(previewElement);

        //disable add button
        e.currentTarget.setAttribute('disabled', 'disabled');

        //clear inputs
        inputElements.forEach(element => element.value = '');

    }

    function createPreviewElement(name, color, carats, price, type) {
        const articleHeaderElement = document.createElement('h4');
        articleHeaderElement.textContent = name;

        const colorParagraphElement = document.createElement('p');
        colorParagraphElement.textContent = `Color: ${color}`;

        const caratsParagraphElement = document.createElement('p');
        caratsParagraphElement.textContent = `Carats: ${carats}`;

        const priceParagraphElement = document.createElement('p');
        priceParagraphElement.textContent = `Price: ${price}$`;

        const typeParagraphElement = document.createElement('p');
        typeParagraphElement.textContent = `Type: ${type}`;

        const articleElement = document.createElement('article');
       
            articleElement.appendChild(articleHeaderElement);
            articleElement.appendChild(colorParagraphElement);
            articleElement.appendChild(caratsParagraphElement);
            articleElement.appendChild(priceParagraphElement);
            articleElement.appendChild(typeParagraphElement);
       

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save to Collection';

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit Information';



        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';

        const liElement = document.createElement('li');
        liElement.classList.add('gem-info');

        
            liElement.appendChild(articleElement);
            liElement.appendChild(saveButton);
            liElement.appendChild(editButton);
            liElement.appendChild(cancelButton);
        

        //add eventListeners
        editButton.addEventListener('click', (e) => {
            //load information to input fields
            gemNameInput.value = name;
            colorInput.value = color;
            caratsInput.value = carats;
            priceInput.value = price;
            typeInput.value = type;

            //remove preview element from preview list
            e.currentTarget.parentElement.remove();
            //enable add button
            addButton.removeAttribute('disabled');
        });

        saveButton.addEventListener('click', (e) => {
            //create element for collection
            const collectionItemParagraph = document.createElement('p');
            collectionItemParagraph.classList.add('collection-item');
            collectionItemParagraph.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

            const collectionListItem = document.createElement('li');
            collectionListItem.appendChild(collectionItemParagraph);

            //add element to collection
            collectionList.appendChild(collectionListItem);

            //remove previewElement from preview list
            e.currentTarget.parentElement.remove();

            //enable add button 
            addButton.removeAttribute('disabled');
        })

        cancelButton.addEventListener('click', (e) => {

            //list item must be removed from the preview list
            e.currentTarget.parentElement.remove();

            //enable add button
            addButton.removeAttribute('disabled');
        })

        return liElement;

    }

}
