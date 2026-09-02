document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.style.opacity = "1";
        }
    });
});

document.querySelectorAll(".cpInf").forEach(element => {

    element.addEventListener("click", async () => {
        const text = element.textContent.trim();

        await navigator.clipboard.writeText(text);

        const originalText = element.innerHTML;

        element.innerHTML = `
            <i class="ri-check-line"></i>
            Kopiert!
        `;

        setTimeout(() => {
            element.innerHTML = originalText;
        }, 1500);
    });

});

const html = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
}

themeBtn.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {

        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");

    } else {

        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

    }
});