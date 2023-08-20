(()=>{"use strict";const e=function(){const e=document.createElement("div");e.classList.add("page-content");const t=document.createElement("img");t.classList.add("chef"),t.src="images/wyron-a-Lhb1DyyNr7U-unsplash.jpg",t.alt="Sushi Chef";const n=document.createElement("h2");n.classList.add("slogan"),n.textContent="Classic. Real. Japanese sushi.";const a=document.createElement("q");return a.textContent="This hidden gem has left the best impression! Hospitable hosts, delicious authentic dishes, beautiful presentation, full bar and extravagant desserts. I recommend it to everyone! Simply put, everything was delicious!",e.appendChild(n),e.appendChild(t),e.appendChild(a),e},t=function(){const e=document.createElement("header");return e.appendChild(function(){const e=document.createElement("div");e.classList.add("logo");const t=document.createElement("div");t.classList.add("japanese-char"),t.textContent="水田";const n=document.createElement("h1");return n.classList.add("name"),n.textContent="Paddy Fields",e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("nav");const t=document.createElement("button");t.classList.add("button-nav"),t.textContent="Home";const n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Menu";const a=document.createElement("button");return a.classList.add("button-nav"),a.textContent="Contact",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}()),e}();document.body.prepend(t);const n=document.getElementById("content");function a(t){n.textContent="",n.removeAttribute("class");let a=t.target.textContent.toLowerCase();n.classList.add(`${a}`),a="menu"===a?function(){const e=document.createElement("div");e.classList.add("page-content");const t=["Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top. The word nigiri comes from the Japanese nigirizushi, which translates as 'hand-pressed sushi.","Maki is shaped like a tube, held together by a sheet of dried seaweed called nori, with a layer of rice and then a layer of fillings, which can include ingredients such as raw fish, cooked shellfish, vegetables, and cream cheese.","Sashimi is simply strips of raw fish with no rice at all (although rice can accompany sashimi). As such, sashimi is not technically a type of sushi since sushi always features rice. But you can think of nigiri sushi as a hand-pressed mound of rice with a strip of sashimi on top. Unlike nigiri and maki, sashimi is eaten with chopsticks."],n=["images/fadya-azhary-CA2NgpLIqa0-unsplash.jpg","images/ahtziri-lagarde-fBtJVtPrNSs-unsplash.jpg","images/ahtziri-lagarde-UZQPPMKLC50-unsplash.jpg"];let a="";return["Nigiri","Maki","Sashimi"].forEach(((e,s)=>{a+=`<h2>${e}</h2>\n        <div class="menu-item">\n        <img src="${n[s]}" alt="${e}">\n        <p class="description">${t[s]}</p>\n        </div>`})),e.innerHTML=a,e}():"contact"===a?function(){const e=document.createElement("div");e.classList.add("page-content");const t=document.createElement("div");t.classList.add("info","box"),t.innerHTML='<h2>Contact Info</h2>\n        <br />\n        <h3>Paddy Fields</h3>\n        <address>123 Tokyo Blvd.<br />\n        New York, NY 12345</address>\n        <p class="phone">555-123-1234</p>\n        <br />\n        <p class="email">contact@paddyfields.com</p>';const n=document.createElement("div");return n.classList.add("form","box"),n.innerHTML='<h2>Subscription</h2>\n        <br />\n        <form action="" method="get" class="form">\n          <label for="name">Enter your name: </label>\n          <input type="text" name="name" id="name" required />\n\n          <label for="email">Enter your email: </label>\n          <input type="email" name="email" id="email" required />\n\n          <input type="submit" value="Subscribe!" />\n\n      </form>',e.appendChild(t),e.appendChild(n),e}():e(),n.appendChild(a)}n.classList.add("home"),n.appendChild(e()),document.querySelectorAll(".button-nav").forEach((e=>{e.addEventListener("click",a)}))})();