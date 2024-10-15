document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
document.getElementById('btnViewPost').addEventListener('click', viewPost);

async function loadPosts() {
    const postsSelect = document.getElementById('posts');
    postsSelect.innerHTML = '';

    try {
        const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const posts = await response.json();

        for (let key in posts) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = posts[key].title;
            postsSelect.appendChild(option);
        }
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

async function viewPost() {
    const postId = document.getElementById('posts').value;
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');

    postCommentsElement.innerHTML = '';

    try {
        const postResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts/${postId}`);
        const post = await postResponse.json();
        
        postTitleElement.textContent = post.title;
        postBodyElement.textContent = post.body;

        const commentsResponse = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const comments = await commentsResponse.json();

        for (let key in comments) {
            if (comments[key].postId === postId) {
                const commentLi = document.createElement('li');
                commentLi.textContent = comments[key].text;
                postCommentsElement.appendChild(commentLi);
            }
        }
    } catch (error) {
        console.error('Error viewing post:', error);
    }
}
