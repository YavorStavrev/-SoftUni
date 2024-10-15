const main = document.querySelector("main");
const section = document.querySelector("div[data-section='dashboard']");

export function showDashboardView() {
    main.replaceChildren(section);
}