import createHeader from "./header";
import createHome from "./home-page";
import createMenu from "./menu-page";
import createContact from "./contact-page";


const getHeader = createHeader();
document.body.prepend(getHeader);

const content = document.getElementById("content");
content.appendChild(createHome());

changePage();

function changePage() {
    const pageSelection = document.querySelectorAll(".button-nav")
        pageSelection.forEach(btn => {
            btn.addEventListener('click', loadNewPage)
        })
}

function loadNewPage(e) {
    content.textContent = "";
    let page = e.target.textContent;
    if (page === "Menu") { page = createMenu() }
    else if (page === "Contact") { page = createContact() }
    else page = page = createHome();
    content.appendChild(page)
}