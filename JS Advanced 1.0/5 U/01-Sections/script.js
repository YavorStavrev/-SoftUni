function create(words) {
    const contentRef = document.getElementById("content");
    createAdnAppendDivElement(contentRef);

    function createAdnAppendDivElement(root) {
        for (let i = 0; i < 4; i++) {
            const divEl = document.createElement("div");
            const pEl = document.createElement("p");
            pEl.textContent = words[i];
            pEl.style.display = "none";
            divEl.appendChild(pEl)
            divEl.addEventListener("click", onCLick);
            root.appendChild(divEl);
        }
    }

    function onCLick(event) {

        const target = event.currentTarget;
        const children = target.children;
        const p = children[0];
        const currentDisplay = p.style.display;
        p.style.display = currentDisplay === "block" ? "none" : "block";
    }
}