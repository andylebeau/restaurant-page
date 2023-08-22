function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const photosBtn = document.createElement("button");
    photosBtn.classList.add("button-nav");
    photosBtn.textContent = "Photos";
  
    footer.appendChild(photosBtn);

    return footer;
}

export default createFooter;