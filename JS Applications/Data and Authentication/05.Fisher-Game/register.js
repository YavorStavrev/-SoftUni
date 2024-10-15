function register() {
    document.querySelector('form').addEventListener('submit', onsubmit);
    const REGISTER_USER_ENDPOINT = 'http://localhost:3030/users/register';

    function onsubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (!email || !password || !rePass) {
            alert('Error');
        }
        createUser({ email, password });
    }

    async function createUser(data) {
        const  option = {
            method: 'POST',
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(REGISTER_USER_ENDPOINT, option);
        const userData = await response.json();

        sessionStorage.setItem('userData', JSON.stringify(userData));

        window.location = "home.html";
    }
}
register();