// app.js
document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3030';
    const catchesDiv = document.getElementById('catches');
    const loadButton = document.querySelector('.load');
    const addButton = document.querySelector('.add');
    const registerForm = document.getElementById('register');
    const loginForm = document.getElementById('login');
    const logoutButton = document.getElementById('logout');

    const userNav = document.getElementById('user');
    const guestNav = document.getElementById('guest');
    const emailSpan = document.querySelector('.email span');

    checkUserNav();

    // Event listeners
    loadButton.addEventListener('click', loadCatches);
    addButton.addEventListener('click', addCatch);
    registerForm.addEventListener('submit', registerUser);
    loginForm.addEventListener('submit', loginUser);
    logoutButton.addEventListener('click', logoutUser);

    async function loadCatches() {
        try {
            const response = await fetch(`${baseUrl}/data/catches`);
            const data = await response.json();

            catchesDiv.innerHTML = '';
            data.forEach(catchObj => {
                catchesDiv.appendChild(createCatchElement(catchObj));
            });
        } catch (err) {
            console.error(err);
        }
    }

    async function addCatch(event) {
        event.preventDefault();
        const angler = document.querySelector('#addForm .angler').value;
        const weight = document.querySelector('#addForm .weight').value;
        const species = document.querySelector('#addForm .species').value;
        const location = document.querySelector('#addForm .location').value;
        const bait = document.querySelector('#addForm .bait').value;
        const captureTime = document.querySelector('#addForm .captureTime').value;

        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            alert('All fields are required!');
            return;
        }

        const catchData = { angler, weight: Number(weight), species, location, bait, captureTime: Number(captureTime) };

        try {
            const response = await fetch(`${baseUrl}/data/catches`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.getItem('authToken')
                },
                body: JSON.stringify(catchData)
            });

            if (!response.ok) {
                throw new Error(await response.json().message);
            }

            loadCatches();
        } catch (err) {
            console.error(err);
        }
    }

    async function registerUser(event) {
        event.preventDefault();
        const formData = new FormData(registerForm);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (password !== rePass) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            sessionStorage.setItem('authToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            sessionStorage.setItem('email', data.email);

            checkUserNav();
            showHomeView();
        } catch (err) {
            console.error(err);
        }
    }

    async function loginUser(event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch(`${baseUrl}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            sessionStorage.setItem('authToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            sessionStorage.setItem('email', data.email);

            checkUserNav();
            showHomeView();
        } catch (err) {
            console.error(err);
        }
    }

    async function logoutUser() {
        try {
            const response = await fetch(`${baseUrl}/users/logout`, {
                method: 'GET',
                headers: {
                    'X-Authorization': sessionStorage.getItem('authToken')
                }
            });

            if (!response.ok) {
                throw new Error(await response.json().message);
            }

            sessionStorage.clear();
            checkUserNav();
            showHomeView();
        } catch (err) {
            console.error(err);
        }
    }

    function checkUserNav() {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken) {
            userNav.style.display = 'inline';
            guestNav.style.display = 'none';
            emailSpan.textContent = sessionStorage.getItem('email');
            addButton.disabled = false;
        } else {
            userNav.style.display = 'none';
            guestNav.style.display = 'inline';
            emailSpan.textContent = 'guest';
            addButton.disabled = true;
        }
    }

    function createCatchElement(catchObj) {
        const div = document.createElement('div');
        div.className = 'catch';
        div.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${catchObj.angler}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>
            <label>Weight</label>
            <input type="text" class="weight" value="${catchObj.weight}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>
            <label>Species</label>
            <input type="text" class="species" value="${catchObj.species}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>
            <label>Location</label>
            <input type="text" class="location" value="${catchObj.location}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>
            <label>Bait</label>
            <input type="text" class="bait" value="${catchObj.bait}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${catchObj.captureTime}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>
            <button class="update" data-id="${catchObj._id}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>Update</button>
            <button class="delete" data-id="${catchObj._id}" ${catchObj._ownerId !== sessionStorage.getItem('userId') ? 'disabled' : ''}>Delete</button>
        `;

        div.querySelector('.update').addEventListener('click', () => updateCatch(catchObj._id, div));
        div.querySelector('.delete').addEventListener('click', () => deleteCatch(catchObj._id));

        return div;
    }

    async function updateCatch(id, catchDiv) {
        const angler = catchDiv.querySelector('.angler').value;
        const weight = catchDiv.querySelector('.weight').value;
        const species = catchDiv.querySelector('.species').value;
        const location = catchDiv.querySelector('.location').value;
        const bait = catchDiv.querySelector('.bait').value;
        const captureTime = catchDiv.querySelector('.captureTime').value;

        const catchData = { angler, weight: Number(weight), species, location, bait, captureTime: Number(captureTime) };

        try {
            const response = await fetch(`${baseUrl}/data/catches/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.getItem('authToken')
                },
                body: JSON.stringify(catchData)
            });

            if (!response.ok) {
                throw new Error(await response.json().message);
            }

            loadCatches();
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteCatch(id) {
        try {
            const response = await fetch(`${baseUrl}/data/catches/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': sessionStorage.getItem('authToken')
                }
            });

            if (!response.ok) {
                throw new Error(await response.json().message);
            }

            loadCatches();
        } catch (err) {
            console.error(err);
        }
    }

    function showHomeView() {
        document.getElementById('home-view').style.display = 'block';
        document.getElementById('login-view').style.display = 'none';
        document.getElementById('register-view').style.display = 'none';
    }
});
