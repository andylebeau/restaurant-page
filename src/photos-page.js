function createPhotos() {
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const photos = ["Background", "Chef", "Nigiri", "Maki", "Sashimi"];
    const creditsHTML = [
        `Photo by <a href="https://unsplash.com/@giancarloduarte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Giancarlo Duarte</a> on <a href="https://unsplash.com/photos/_9P2fnBD610?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        `Photo by <a href="https://unsplash.com/@wyron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Wyron A</a> on <a href="https://unsplash.com/photos/Lhb1DyyNr7U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        `Photo by <a href="https://unsplash.com/@fadsphoto23_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Fadya Azhary</a> on <a href="https://unsplash.com/photos/5KS7T3Gs3CA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        `Photo by <a href="https://unsplash.com/@ahtziri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"target="_blank">Ahtziri Lagarde</a> on <a href="https://unsplash.com/photos/fBtJVtPrNSs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        `Photo by <a href="https://unsplash.com/@ahtziri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ahtziri Lagarde</a> on <a href="https://unsplash.com/photos/UZQPPMKLC50?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`
    ]
    const imagesLocalSrc = [
        "images/giancarlo-duarte-_9P2fnBD610-unsplash.jpg",
        "images/wyron-a-Lhb1DyyNr7U-unsplash.jpg",
        "images/fadya-azhary-5KS7T3Gs3CA-unsplash.jpg",
        "images/ahtziri-lagarde-fBtJVtPrNSs-unsplash.jpg",
        "images/ahtziri-lagarde-UZQPPMKLC50-unsplash.jpg"
    ]
   
    let data = ""
    photos.forEach((photo, index) => {
        data += `<h2>${photo}</h2>
        <div class="photo-item">
        <img src="${imagesLocalSrc[index]}" alt="${photo}">
        <p class="photo-credit">${creditsHTML[index]}</p>
        </div>`
      })
      pageContent.innerHTML = data

    return pageContent;
}

export default createPhotos;