import createHeader from "./header";
import createHome from "./home-page";
import createMenu from "./menu-page";
import createContact from "./contact-page";
import createFooter from "./footer";
import createPhotos from "./photos-page";

const getHeader = createHeader();
document.body.prepend(getHeader);

const getContent = document.getElementById("content");
getContent.classList.add("home")
getContent.appendChild(createHome());

const getFooter = createFooter();
document.body.append(getFooter);

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
    console.log(page)
    content.classList.add(`${page}`)

    page === "menu" ? page = createMenu() :
    page === "contact" ? page = createContact() :
    page === "photos" ? page = createPhotos() :
    page = createHome();

    content.appendChild(page);
}