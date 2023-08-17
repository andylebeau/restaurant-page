function createContact() {
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');
    
    const data = document.createElement("p");
    data.textContent = "CONTACT PAGE";

    pageContent.appendChild(data);
    
    return pageContent;
}

export default createContact;