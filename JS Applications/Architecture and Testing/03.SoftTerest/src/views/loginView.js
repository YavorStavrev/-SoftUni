const main = document.querySelector("main");
const section = document.querySelector("div[data-section='login']");

export function showLoginView() {
    main.replaceChildren(section);
}