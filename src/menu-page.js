function createMenu() {
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');
    
    const data = document.createElement("p");
    data.textContent = "MENU PAGE";

    pageContent.appendChild(data);
    
    return pageContent;
}

export default createMenu;