function createMenu() {
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const items = ["Nigiri", "Maki", "Sashimi"];
    const descriptions = [
        "Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top. The word nigiri comes from the Japanese nigirizushi, which translates as 'hand-pressed sushi.",
        "Maki is shaped like a tube, held together by a sheet of dried seaweed called nori, with a layer of rice and then a layer of fillings, which can include ingredients such as raw fish, cooked shellfish, vegetables, and cream cheese.",
        "Sashimi is simply strips of raw fish with no rice at all (although rice can accompany sashimi). As such, sashimi is not technically a type of sushi since sushi always features rice. But you can think of nigiri sushi as a hand-pressed mound of rice with a strip of sashimi on top. Unlike nigiri and maki, sashimi is eaten with chopsticks."
    ]
    const menuImagesSrc = [
        "images/fadya-azhary-CA2NgpLIqa0-unsplash.jpg",
        "images/ahtziri-lagarde-fBtJVtPrNSs-unsplash.jpg",
        "images/ahtziri-lagarde-UZQPPMKLC50-unsplash.jpg"
    ]
   
    let data = ""
    items.forEach((item, index) => {
        data += `<h2>${item}</h2>
        <div class="menu-item">
        <img src="${menuImagesSrc[index]}" alt="${item}">
        <p class="description">${descriptions[index]}</p>
        </div>`
      })
      pageContent.innerHTML = data

    return pageContent;
}

export default createMenu;