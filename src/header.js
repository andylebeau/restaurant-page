function createHeader() {
    const header = document.createElement("header");
  
    header.appendChild(createLogo());
    header.appendChild(createMenu());
  
    return header;
  }
  function createLogo() {
    const logo = document.createElement("div");
    logo.classList.add("logo")

    const japneseCharacters = document.createElement("div");
    japneseCharacters.classList.add("japanese-char");
    japneseCharacters.textContent = "水田";
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("name");
    restaurantName.textContent = "Paddy Fields";

    logo.appendChild(japneseCharacters);
    logo.appendChild(restaurantName);

    return logo;
  }

  function createMenu() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("button-nav");
    homeBtn.textContent = "Home";

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("button-nav");
    menuBtn.textContent = "Menu";

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("button-nav");
    contactBtn.textContent = "Contact";

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
  }

  export default createHeader;