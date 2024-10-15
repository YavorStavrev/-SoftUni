document.addEventListener('DOMContentLoaded', () => {
    const loadBooksButton = document.getElementById('loadBooks');
    const booksTableBody = document.querySelector('table tbody');
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button');
    let editBookId = null;

    loadBooksButton.addEventListener('click', loadAllBooks);
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (editBookId) {
            updateBook(editBookId);
        } else {
            createBook();
        }
    });

    async function loadAllBooks() {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books');
        const data = await response.json();
        booksTableBody.innerHTML = '';
        Object.entries(data).forEach(([id, book]) => {
            const row = createTableRow(id, book);
            booksTableBody.appendChild(row);
        });
    }

    async function createBook() {
        const title = form.querySelector('input[name="title"]').value;
        const author = form.querySelector('input[name="author"]').value;

        if (!title || !author) {
            alert('Both fields are required!');
            return;
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        });

        if (response.ok) {
            loadAllBooks();
            form.reset();
        } else {
            console.error('Failed to create book');
        }
    }

    async function updateBook(id) {
        const title = form.querySelector('input[name="title"]').value;
        const author = form.querySelector('input[name="author"]').value;

        if (!title || !author) {
            alert('Both fields are required!');
            return;
        }

        const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        });

        if (response.ok) {
            loadAllBooks();
            form.reset();
            editBookId = null;
        } else {
            console.error('Failed to update book');
        }
    }

    async function deleteBook(id) {
        const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadAllBooks();
        } else {
            console.error('Failed to delete book');
        }
    }

    function createTableRow(id, book) {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            form.querySelector('input[name="title"]').value = book.title;
            form.querySelector('input[name="author"]').value = book.author;
            editBookId = id;
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteBook(id));

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        return row;
    }
});
