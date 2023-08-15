import createHeader from "./header";

const content = document.getElementById("content");

const getHeader = createHeader();
// const getMain = createPageContent();
// const getFooter = createFooter();

content.appendChild(getHeader);

