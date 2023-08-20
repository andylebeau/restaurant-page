function createContact() {
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');
    
    const contactInfo = document.createElement("div");
    contactInfo.classList.add('info', 'box');
    contactInfo.innerHTML = getContactInfo();

    const contactForm = document.createElement("div");
    contactForm.classList.add('form', 'box');
    contactForm.innerHTML = getContactForm();

    pageContent.appendChild(contactInfo);
    pageContent.appendChild(contactForm);
    
    return pageContent;
}

function getContactInfo() {
    return (
        `<h2>Contact Info</h2>
        <br />
        <h3>Paddy Fields</h3>
        <address>123 Tokyo Blvd.<br />
        New York, NY 12345</address>
        <p class="phone">555-123-1234</p>
        <br />
        <p class="email">contact@paddyfields.com</p>`
    )
}

function getContactForm() {
    return (
        `<h2>Subscription</h2>
        <br />
        <form action="" method="get" class="form">
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />

          <label for="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />

          <input type="submit" value="Subscribe!" />

      </form>`
    )
}

export default createContact;