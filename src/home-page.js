function createHome() {
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const image = document.createElement("img");
    image.classList.add('chef');
    image.src = "images/wyron-a-Lhb1DyyNr7U-unsplash.jpg"
    image.alt = "Sushi Chef"
    
    const data = document.createElement("q");
    data.textContent = "This hidden gem has left the best impression! Hospitable hosts, delicious authentic dishes, beautiful presentation, full bar and extravagant desserts. I recommend it to everyone! Simply put, everything was delicious!";

    pageContent.appendChild(image);
    pageContent.appendChild(data);
    
    return pageContent;
}

export default createHome;