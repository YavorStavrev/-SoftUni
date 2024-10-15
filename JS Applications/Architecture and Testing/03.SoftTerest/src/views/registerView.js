const main = document.querySelector("main");
const section = document.querySelector("div[data-section='register']");

export function showRegisterView() {
    main.replaceChildren(section);
}