function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/messenger";
    onload()

    document.getElementById("refresh").addEventListener("click", onload);
    document.getElementById("submit").addEventListener("click", onSubmit);
    const textAreaRef = document.getElementById('messages');
    const authorRef = document.querySelector("input[name='author']");
    const contentRef = document.querySelector("input[name='content']");

    async function onload(e) {
        const response = await fetch(URL);
        if (response.status !== 200) {
            throw new Error("Error!");
        }
        const data = await response.json();
        let buff = "";
        Object.values(data).forEach(rec => {
            buff += `${rec.author}: ${rec.content}\n`
        })
        textAreaRef.value = buff.trim();
    }

    async function onSubmit(e) {
        const author = authorRef.value;
        const content = contentRef.value;

        if (!author || !content) {
            return;
        }

        const data = {
            author,
            content
        }

        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch(URL, option);
        authorRef.value = '';
        contentRef.value = '';
        onload()
    }
}

attachEvents();