window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');
    const nextButton = document.getElementById('next-btn');
    const vacationInfoList = document.querySelector('.info-list');
    const confirmVacationList = document.querySelector('.confirm-list');
    const statusList = document.getElementById('status');

    nextButton.addEventListener('click', nextButtonClickHandler);
    statusList.addEventListener('click', () => {
        location.reload();
    });

    function nextButtonClickHandler(e) {
        const inputElements = [
            firstNameInput,
            lastNameInput,
            fromDateInput,
            toDateInput
        ];

        if (inputElements.some(element => element.value === '')) {
            return;
        }

        const fromDate = new Date(fromDateInput.value);
        const toDate = new Date(toDateInput.value);

        if (fromDate >= toDate) {
            return;
        }

        const vacationInfoElement = createInfoListElement(
            firstNameInput.value,
            lastNameInput.value,
            fromDateInput.value,
            toDateInput.value
        );

        vacationInfoList.appendChild(vacationInfoElement);

        //disable next button
        e.currentTarget.setAttribute('disabled', 'disabled');

        //clear inputs
        inputElements.forEach(element => element.value = '');
    }


    function createInfoListElement(firstName, lastName, fromDate, toDate) {
        const fullNameHeaderElement = document.createElement('h3');
        fullNameHeaderElement.textContent = `Name: ${firstName} ${lastName}`;

        const fromDateParagraphElement = document.createElement('p');
        fromDateParagraphElement.textContent = `From date: ${fromDate}`;

        const toDateParagraphElement = document.createElement('p');
        toDateParagraphElement.textContent = `To date: ${toDate}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(fullNameHeaderElement);
        articleElement.appendChild(fromDateParagraphElement);
        articleElement.appendChild(toDateParagraphElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');
        editButtonElement.textContent = 'Edit';

        const continueButtonElement = document.createElement('button');
        continueButtonElement.classList.add('continue-btn');
        continueButtonElement.textContent = 'Continue';


        const liElement = document.createElement('li');
        liElement.classList.add('vacation-content');
        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(continueButtonElement);

        editButtonElement.addEventListener('click', (e) => {
            //load information to input fields
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            fromDateInput.value = fromDate;
            toDateInput.value = toDate;

            
            e.currentTarget.parentElement.remove();
            //enable next button
            nextButton.removeAttribute('disabled');
        });

        continueButtonElement.addEventListener('click', (e) => {
            // Create element for collection
            const confirmVacationInfoElement = createConfirmListElement(firstName, lastName, fromDate, toDate);

            e.currentTarget.parentElement.remove();

            confirmVacationList.appendChild(confirmVacationInfoElement);

        });

        return liElement;
    }

    function createConfirmListElement(firstName, lastName, fromDate, toDate) {
        const fullNameHeaderElement = document.createElement('h3');
        fullNameHeaderElement.textContent = `Name: ${firstName} ${lastName}`;

        const fromDateParagraphElement = document.createElement('p');
        fromDateParagraphElement.textContent = `From date: ${fromDate}`;

        const toDateParagraphElement = document.createElement('p');
        toDateParagraphElement.textContent = `To date: ${toDate}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(fullNameHeaderElement);
        articleElement.appendChild(fromDateParagraphElement);
        articleElement.appendChild(toDateParagraphElement);

        const confirmButtonElement = document.createElement('button');
        confirmButtonElement.classList.add('confirm-btn');
        confirmButtonElement.textContent = 'Confirm';

        const cancelButtonElement = document.createElement('button');
        cancelButtonElement.classList.add('cancel-btn');
        cancelButtonElement.textContent = 'Cancel';


        const liElement = document.createElement('li');
        liElement.classList.add('vacation-content');
        liElement.appendChild(articleElement);
        liElement.appendChild(confirmButtonElement);
        liElement.appendChild(cancelButtonElement);

        confirmButtonElement.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();
            nextButton.removeAttribute('disabled');
            statusList.classList.add('vacation-confirmed');
            statusList.textContent = 'Vacation Requested';
        });

        cancelButtonElement.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();
            nextButton.removeAttribute('disabled');
            statusList.classList.add('vacation-cancelled');
            statusList.textContent = 'Cancelled Vacation';
        });

        return liElement;
    }
}




