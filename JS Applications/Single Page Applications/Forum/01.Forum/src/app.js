document.addEventListener('DOMContentLoaded', () => {
    // Common Elements
    const form = document.querySelector('form');
    const cancelButton = document.querySelector('.cancel');

    // Determine if we're on the homepage or topic page
    const isHomePage = document.querySelector('.topic-container') !== null;

    if (isHomePage) {
        // Elements for the homepage
        const topicContainer = document.querySelector('.topic-container');
        const topicNameInput = document.getElementById('topicName');
        const usernameInput = document.getElementById('username');
        const postTextInput = document.getElementById('postText');

        // Fetch and render existing topics
        fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(topic => {
                    renderTopic(topic);
                });
            });

        // Function to render a topic on the homepage
        function renderTopic(topic) {
            const topicElement = document.createElement('div');
            topicElement.classList.add('topic-item');
            topicElement.innerHTML = `
                <h3>${topic.title}</h3>
                <p>Posted by: ${topic.username}</p>
                <p>${topic.content}</p>
            `;
            topicElement.addEventListener('click', () => {
                window.location.href = `topic.html?id=${topic._id}`;
            });
            topicContainer.appendChild(topicElement);
        }

        // Event listener for creating a new topic
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const title = topicNameInput.value.trim();
            const username = usernameInput.value.trim();
            const content = postTextInput.value.trim();

            if (title && username && content) {
                const newTopic = {
                    title,
                    username,
                    content,
                    _id: Date.now().toString() // Generate unique ID
                };

                fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newTopic)
                })
                .then(response => response.json())
                .then(data => {
                    renderTopic(data);
                    form.reset(); // Clear input fields after successful post
                })
                .catch(error => console.error('Error:', error));
            } else {
                alert('Please fill in all fields!');
            }
        });

        // Event listener for cancel button
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            form.reset();
        });

    } else {
        // Elements for the topic page
        const commentSection = document.querySelector('.comment');
        const commentInput = document.getElementById('comment');
        const usernameInput = document.getElementById('username');

        // Get topic ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const topicId = urlParams.get('id');

        // Fetch and render the selected topic
        fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${topicId}`)
            .then(response => response.json())
            .then(topic => {
                document.querySelector('.theme-title h2').textContent = topic.title;
            });

        // Fetch and render all comments for the selected topic
        fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`)
            .then(response => response.json())
            .then(data => {
                const comments = Object.values(data).filter(comment => comment.topicId === topicId);
                comments.forEach(renderComment);
            });

        // Function to render a comment
        function renderComment(comment) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment-item');
            commentElement.innerHTML = `
                <p><strong>${comment.username}:</strong> ${comment.content}</p>
            `;
            commentSection.appendChild(commentElement);
        }

        // Event listener for posting a comment
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const content = commentInput.value.trim();

            if (username && content) {
                const newComment = {
                    topicId,
                    username,
                    content
                };

                fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newComment)
                })
                .then(response => response.json())
                .then(data => {
                    renderComment(data);
                    form.reset(); // Clear input fields after successful comment post
                })
                .catch(error => console.error('Error:', error));
            } else {
                alert('Please fill in all fields!');
            }
        });
    }
});
