const homeSection = document.querySelector("div[data-section='home']");
const main = document.querySelector("main");

export function showHomeView() {
    main.replaceChildren(homeSection);
    
}