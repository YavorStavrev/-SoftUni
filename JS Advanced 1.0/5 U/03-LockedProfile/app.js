function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const lockRadio = profile.querySelector('input[value="lock"]');
        const unlockRadio = profile.querySelector('input[value="unlock"]');
        const hiddenFields = profile.querySelector('div');
        const button = profile.querySelector('button');

        button.addEventListener('click', () => {
            if (unlockRadio.checked) {
                if (button.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });

        lockRadio.addEventListener('change', () => {
            if (hiddenFields.style.display === 'block') {
                button.textContent = 'Hide it';
            } else {
                button.textContent = 'Show more';
            }
        });

        unlockRadio.addEventListener('change', () => {
            if (hiddenFields.style.display === 'block') {
                button.textContent = 'Hide it';
            } else {
                button.textContent = 'Show more';
            }
        });
    });
}
