window.addEventListener('load', solve);

function solve() {

        const carModelInput = document.getElementById('car-model');
        const carYearInput = document.getElementById('car-year');
        const partNameInput = document.getElementById('part-name');
        const partNumberInput = document.getElementById('part-number');
        const conditionInput = document.getElementById('condition');
        const nextButton = document.getElementById('next-btn');
        const partInfoList = document.querySelector('.info-list');
        const confirmOrderList = document.querySelector('.confirm-list');

        nextButton.addEventListener('click', nextButtonClickHandler);

        function nextButtonClickHandler(e) {


                const inputElements = [
                        carModelInput,
                        carYearInput,
                        partNameInput,
                        partNumberInput,
                        conditionInput
                ];

                if (inputElements.some(element => element.value === '')) {
                        return;
                }

                if (inputElements[1].value < 1980 || inputElements[1].value > 2023) {
                        return;
                }
                const partInfoElement = createInfoListElement(
                        carModelInput.value,
                        carYearInput.value,
                        partNameInput.value,
                        partNumberInput.value,
                        conditionInput.value
                )

                partInfoList.appendChild(partInfoElement);

                let imgElement = document.getElementById('complete-img');
                imgElement.style.visibility = "hidden";

                let completeTextElement = document.getElementById('complete-text');
                completeTextElement.textContent = '';

                //disable next button
                e.currentTarget.setAttribute('disabled', 'disabled');

                //clear inputs
                inputElements.forEach(element => element.value = '');
        }

        function createInfoListElement(model, year, partName, partNumber, condition) {
                const modelParagraphElement = document.createElement('p');
                modelParagraphElement.textContent = `Car Model: ${model}`;

                const yearParagraphElement = document.createElement('p');
                yearParagraphElement.textContent = `Car Year: ${year}`;

                const partNameParagraphElement = document.createElement('p');
                partNameParagraphElement.textContent = `Part Name: ${partName}`;

                const partNumberParagraphElement = document.createElement('p');
                partNumberParagraphElement.textContent = `Part Number: ${partNumber}`;

                const conditionParagraphElement = document.createElement('p');
                conditionParagraphElement.textContent = `Condition: ${condition}`;

                const articleElement = document.createElement('article');
                articleElement.appendChild(modelParagraphElement);
                articleElement.appendChild(yearParagraphElement);
                articleElement.appendChild(partNameParagraphElement);
                articleElement.appendChild(partNumberParagraphElement);
                articleElement.appendChild(conditionParagraphElement);

                const editButton = document.createElement('button');
                editButton.classList.add('edit-btn');
                editButton.textContent = 'Edit';

                const continueButton = document.createElement('button');
                continueButton.classList.add('continue-btn');
                continueButton.textContent = 'Continue';

                const liElement = document.createElement('li');
                liElement.classList.add('part-content');


                liElement.appendChild(articleElement);
                liElement.appendChild(editButton);
                liElement.appendChild(continueButton);

                //add eventListeners
                editButton.addEventListener('click', (e) => {
                        //load information to input fields
                        carModelInput.value = model;
                        carYearInput.value = year;
                        partNameInput.value = partName;
                        partNumberInput.value = partNumber;
                        conditionInput.value = condition;

                        //remove preview element from preview list
                        e.currentTarget.parentElement.remove();
                        //enable add button
                        nextButton.removeAttribute('disabled');
                });

                continueButton.addEventListener('click', (e) => {
                        // Create element for collection
                        const confirmPartInfoElement = createConfirmListElement(model, year, partName, partNumber, condition);

                        confirmOrderList.appendChild(confirmPartInfoElement);

                        // Remove previewElement from preview list
                        e.currentTarget.parentElement.remove();

                });



                return liElement;
        }
        function createConfirmListElement(model, year, partName, partNumber, condition) {
                const modelParagraphElement = document.createElement('p');
                modelParagraphElement.textContent = `Car Model: ${model}`;

                const yearParagraphElement = document.createElement('p');
                yearParagraphElement.textContent = `Car Year: ${year}`;

                const partNameParagraphElement = document.createElement('p');
                partNameParagraphElement.textContent = `Part Name: ${partName}`;

                const partNumberParagraphElement = document.createElement('p');
                partNumberParagraphElement.textContent = `Part Number: ${partNumber}`;

                const conditionParagraphElement = document.createElement('p');
                conditionParagraphElement.textContent = `Condition: ${condition}`;

                const articleElement = document.createElement('article');
                articleElement.appendChild(modelParagraphElement);
                articleElement.appendChild(yearParagraphElement);
                articleElement.appendChild(partNameParagraphElement);
                articleElement.appendChild(partNumberParagraphElement);
                articleElement.appendChild(conditionParagraphElement);

                const confirmButton = document.createElement('button');
                confirmButton.classList.add('confirm-btn');
                confirmButton.textContent = 'Confirm';

                const cancelButton = document.createElement('button');
                cancelButton.classList.add('cancel-btn');
                cancelButton.textContent = 'Cancel';

                const liElement = document.createElement('li');
                liElement.classList.add('part-content');

                liElement.appendChild(articleElement);
                liElement.appendChild(confirmButton);
                liElement.appendChild(cancelButton);

                confirmButton.addEventListener('click', (e) => {
                        e.currentTarget.parentElement.remove();
                        nextButton.removeAttribute('disabled');
                        let imgElement = document.getElementById('complete-img');
                        imgElement.style.visibility = "visible";
                        let completeTextElement = document.getElementById('complete-text');
                        completeTextElement.textContent = 'Part is Ordered!';
                });

                cancelButton.addEventListener('click', (e) => {
                        e.currentTarget.parentElement.remove();
                        nextButton.removeAttribute('disabled');
                });

                return liElement;
        }
};




