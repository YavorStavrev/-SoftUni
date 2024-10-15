document.getElementById('btnLoad').addEventListener('click', loadPhonebook);
document.getElementById('btnCreate').addEventListener('click', createEntry);

const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook';

async function loadPhonebook() {
    try {
        const response = await fetch(phonebookUrl);
        const data = await response.json();

        const phonebookUl = document.getElementById('phonebook');
        phonebookUl.innerHTML = '';

        Object.entries(data).forEach(([key, entry]) => {
            const li = document.createElement('li');
            li.textContent = `${entry.person}: ${entry.phone} `;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteEntry(key, li));

            li.appendChild(deleteButton);
            phonebookUl.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading phonebook:', error);
    }
}

async function createEntry() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const person = personInput.value;
    const phone = phoneInput.value;

    if (person.trim() === '' || phone.trim() === '') {
        alert('Please enter both person and phone.');
        return;
    }

    try {
        const response = await fetch(phonebookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ person, phone }),
        });

        if (!response.ok) {
            throw new Error('Failed to create entry.');
        }

        personInput.value = '';
        phoneInput.value = '';
        loadPhonebook();
    } catch (error) {
        console.error('Error creating entry:', error);
    }
}

async function deleteEntry(key, li) {
    try {
        const response = await fetch(`${phonebookUrl}/${key}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete entry.');
        }

        li.remove();
    } catch (error) {
        console.error('Error deleting entry:', error);
    }
}
