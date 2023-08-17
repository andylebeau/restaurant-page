import createHeader from "./header";
import createHome from "./home-page";

const getHeader = createHeader();

const content = document.getElementById("content");
const getPage = createHome();
// const getFooter = createFooter();

document.body.prepend(getHeader);
content.appendChild(getPage)

