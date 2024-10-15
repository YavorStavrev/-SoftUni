document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.getElementById('main');

    // Fetch list of articles
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => response.json())
        .then(data => {
            data.forEach(article => {
                // Create HTML structure for each article
                const accordionDiv = document.createElement('div');
                accordionDiv.classList.add('accordion');

                const headDiv = document.createElement('div');
                headDiv.classList.add('head');

                const titleSpan = document.createElement('span');
                titleSpan.textContent = article.title;

                const button = document.createElement('button');
                button.classList.add('button');
                button.id = article._id;
                button.textContent = 'More';
                button.addEventListener('click', toggleContent);

                headDiv.appendChild(titleSpan);
                headDiv.appendChild(button);

                const extraDiv = document.createElement('div');
                extraDiv.classList.add('extra');
                extraDiv.style.display = 'none';

                accordionDiv.appendChild(headDiv);
                accordionDiv.appendChild(extraDiv);

                mainSection.appendChild(accordionDiv);
            });
        });

    function toggleContent(event) {
        const button = event.target;
        const extraDiv = button.parentElement.nextElementSibling;

        if (button.textContent === 'More') {
            // Fetch article content
            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`)
                .then(response => response.json())
                .then(data => {
                    extraDiv.innerHTML = `<p>${data.content}</p>`;
                    extraDiv.style.display = 'block';
                    button.textContent = 'Less';
                });
        } else {
            // Hide article content
            extraDiv.style.display = 'none';
            button.textContent = 'More';
        }
    }
});
