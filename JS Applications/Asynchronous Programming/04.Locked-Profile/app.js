async function lockedProfile() {
    const main = document.getElementById('main');
    main.innerHTML = ''; // Clear any existing content

    try {
        // Fetch profiles from the server
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        const data = await response.json();

        // Create a profile card for each user
        Object.values(data).forEach((user, index) => {
            const profileDiv = document.createElement('div');
            profileDiv.className = 'profile';

            profileDiv.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${index}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${index}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${index}Username" value="${user.username}" disabled readonly />
                <div class="user${index}HiddenInfo" style="display: none;">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user${index}Email" value="${user.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="text" name="user${index}Age" value="${user.age}" disabled readonly />
                </div>
                <button>Show more</button>
            `;

            // Add event listener to the button
            const button = profileDiv.querySelector('button');
            button.addEventListener('click', () => {
                const locked = profileDiv.querySelector(`input[name="user${index}Locked"]:checked`).value === 'lock';
                const hiddenInfoDiv = profileDiv.querySelector(`.user${index}HiddenInfo`);

                if (!locked) {
                    if (button.textContent === 'Show more') {
                        hiddenInfoDiv.style.display = 'block';
                        button.textContent = 'Hide it';
                    } else {
                        hiddenInfoDiv.style.display = 'none';
                        button.textContent = 'Show more';
                    }
                }
            });

            // Append profile to main container
            main.appendChild(profileDiv);
        });
    } catch (error) {
        console.error('Error fetching profiles:', error);
    }
}
