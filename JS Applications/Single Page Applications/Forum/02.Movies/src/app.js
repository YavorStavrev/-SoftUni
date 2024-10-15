// Select DOM elements
const sections = document.querySelectorAll('.view-section');
const navLinks = document.querySelectorAll('.navbar-nav a');
const addMovieButton = document.querySelector('#add-movie-button');
const moviesList = document.getElementById('movies-list');
const welcomeMsg = document.getElementById('welcome-msg');
const addMovieForm = document.getElementById('add-movie-form');
const editMovieForm = document.querySelector('#edit-movie form');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Utility functions
function navigateTo(sectionId) {
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function updateNavBar() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.querySelectorAll('.nav-item.guest').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.nav-item.user').forEach(e => e.style.display = 'block');
        welcomeMsg.textContent = `Welcome, ${user.email}`;
    } else {
        document.querySelectorAll('.nav-item.guest').forEach(e => e.style.display = 'block');
        document.querySelectorAll('.nav-item.user').forEach(e => e.style.display = 'none');
    }
}

function getToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.accessToken : null;
}

// Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        navigateTo(targetId);
    });
});

addMovieForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();

    if (!title || !description || !img) {
        alert('All fields are required!');
        return;
    }

    const response = await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify({ title, description, img })
    });

    if (response.ok) {
        navigateTo('home-page');
        loadMovies();
    } else {
        const error = await response.json();
        alert(error.message);
    }
});

editMovieForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const movieId = event.target.dataset.id;

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();

    if (!title || !description || !img) {
        alert('All fields are required!');
        return;
    }

    const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify({ title, description, img })
    });

    if (response.ok) {
        navigateTo('home-page');
        loadMovies();
    } else {
        const error = await response.json();
        alert(error.message);
    }
});

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (!email || !password) {
        alert('All fields are required!');
        return;
    }

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        updateNavBar();
        navigateTo('home-page');
        loadMovies();
    } else {
        const error = await response.json();
        alert(error.message);
    }
});

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();

    if (!email || !password || password.length < 6 || password !== repeatPassword) {
        alert('Invalid input!');
        return;
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        updateNavBar();
        navigateTo('home-page');
        loadMovies();
    } else {
        const error = await response.json();
        alert(error.message);
    }
});

// Logout
document.querySelector('.nav-item.user a[href="#"]').addEventListener('click', (event) => {
    event.preventDefault();
    fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': getToken() }
    }).then(() => {
        localStorage.removeItem('user');
        updateNavBar();
        navigateTo('form-login');
    });
});

// Fetch and display movies
async function loadMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const movies = await response.json();

    moviesList.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('li');
        movieElement.className = 'card mb-4';
        movieElement.innerHTML = `
            <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400"/>
            <div class="card-body">
                <h4 class="card-title">${movie.title}</h4>
                <button type="button" class="btn btn-info" onclick="showMovieDetails('${movie._id}')">Details</button>
            </div>
        `;
        moviesList.appendChild(movieElement);
    });
}

async function showMovieDetails(movieId) {
    const response = await fetch(`http://localhost:3030/data/movies/${movieId}`);
    const movie = await response.json();

    const detailsSection = document.getElementById('movie-example');
    detailsSection.querySelector('h1').textContent = `Movie title: ${movie.title}`;
    detailsSection.querySelector('img').src = movie.img;
    detailsSection.querySelector('p').textContent = movie.description;

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id === movie._ownerId) {
        detailsSection.querySelector('.btn-danger').style.display = 'inline-block';
        detailsSection.querySelector('.btn-warning').style.display = 'inline-block';
        detailsSection.querySelector('.btn-primary').style.display = 'none';
    } else {
        detailsSection.querySelector('.btn-danger').style.display = 'none';
        detailsSection.querySelector('.btn-warning').style.display = 'none';
        detailsSection.querySelector('.btn-primary').style.display = 'inline-block';
    }

    navigateTo('movie-example');
}

async function deleteMovie(movieId) {
    const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': getToken() }
    });

    if (response.ok) {
        navigateTo('home-page');
        loadMovies();
    } else {
        const error = await response.json();
        alert(error.message);
    }
}

async function likeMovie(movieId) {
    const response = await fetch('http://localhost:3030/data/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify({ movieId })
    });

    if (response.ok) {
        const likes = await getMovieLikes(movieId);
        document.querySelector('.enrolled-span').textContent = `Liked ${likes}`;
    } else {
        const error = await response.json();
        alert(error.message);
    }
}

async function getMovieLikes(movieId) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
    return await response.json();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateNavBar();
    loadMovies();
    navigateTo('home-page');
});
