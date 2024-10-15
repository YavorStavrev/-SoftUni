document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const tbody = document.querySelector('#results tbody');
    const notification = document.querySelector('.notification');
    const url = 'http://localhost:3030/jsonstore/collections/students';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const firstName = formData.get('firstName').trim();
        const lastName = formData.get('lastName').trim();
        const facultyNumber = formData.get('facultyNumber').trim();
        const grade = formData.get('grade').trim();

        // Validation
        if (!firstName || !lastName || !facultyNumber || !grade || isNaN(grade)) {
            notification.textContent = 'All fields are required and grade must be a number!';
            return;
        }

        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade: Number(grade)
        };

        try {
            // Save student data to backend
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            if (!response.ok) {
                throw new Error('Failed to create student');
            }

            // Clear form
            form.reset();
            notification.textContent = 'Student created successfully';

            // Fetch and display updated students list
            fetchStudents();
        } catch (error) {
            notification.textContent = error.message;
        }
    });

    // Function to fetch and display students
    async function fetchStudents() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch students');
            }

            const data = await response.json();
            tbody.innerHTML = '';

            Object.values(data).forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.facultyNumber}</td>
                    <td>${student.grade}</td>
                `;
                tbody.appendChild(row);
            });
        } catch (error) {
            notification.textContent = error.message;
        }
    }

    // Initial fetch and display of students
    fetchStudents();
});
