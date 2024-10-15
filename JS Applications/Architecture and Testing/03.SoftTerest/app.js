import { showCreateView } from "./src/views/createView.js";
import { showDashboardView } from "./src/views/dashboardView.js";
import { showEditView } from "./src/views/editVIews.js";
import { showHomeView } from "./src/views/homeView.js"
import { showLoginView } from "./src/views/loginView.js";
import { showRegisterView } from "./src/views/registerView.js";


Array.from(document.querySelectorAll("div[data-section]").forEach(section => section.remove()));
const main = document.getElementsByTagName("main");
const nav = document.querySelector("nav");
nav.addEventListener("click", onNavigate);

const routes = {
    "/": () => showHomeView,
    "/login": () => showLoginView,
    "/register": () => showRegisterView,
    "/dashboard": () => showDashboardView,
    "/create": () => showCreateView,
    "/edit": () => showEditView,
    "/logout": () => console.log("logout")

}

function onNavigate(e) {
    e.preventDefault();

    let target = e.target;

    if (target.tagName !== "A") {
        target = e.target.parentElement;
    }

    if (!target.href) {
        return;
    }

    const currentUrl = new URL(target.href);
    const viewName = currentUrl.pathname;
    goTo(viewName);
}

function goTo(name) {
    const handler = routes[name];
    handler();
}