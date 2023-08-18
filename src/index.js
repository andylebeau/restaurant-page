import createHeader from "./header";
import createHome from "./home-page";
import createMenu from "./menu-page";
import createContact from "./contact-page";

const getHeader = createHeader();
document.body.prepend(getHeader);

const content = document.getElementById("content");
content.classList.add("home")
content.appendChild(createHome());

changePage();

function changePage() {
    const pageSelection = document.querySelectorAll(".button-nav")
        pageSelection.forEach(btn => {
            btn.addEventListener('click', loadNewPage)
        });
}

function loadNewPage(e) {
    content.textContent = "";
    content.removeAttribute('class');

    let page = e.target.textContent.toLowerCase();
    content.classList.add(`${page}`)

    page === "menu" ? page = createMenu() :
    page === "contact" ? page = createContact() :
    page = createHome();

    content.appendChild(page);
}