(()=>{"use strict";const t=function(){const t=document.createElement("div");t.classList.add("page-content");const e=document.createElement("img");e.classList.add("chef"),e.src="images/wyron-a-Lhb1DyyNr7U-unsplash.jpg",e.alt="Sushi Chef";const n=document.createElement("h2");n.classList.add("slogan"),n.textContent="Classic. Real. Japanese sushi.";const a=document.createElement("q");return a.textContent="This hidden gem has left the best impression! Hospitable hosts, delicious authentic dishes, beautiful presentation, full bar and extravagant desserts. I recommend it to everyone! Simply put, everything was delicious!",t.appendChild(n),t.appendChild(e),t.appendChild(a),t},e=function(){const t=document.createElement("header");return t.appendChild(function(){const t=document.createElement("div");t.classList.add("logo");const e=document.createElement("div");e.classList.add("japanese-char"),e.textContent="水田";const n=document.createElement("h1");return n.classList.add("name"),n.textContent="Paddy Fields",t.appendChild(e),t.appendChild(n),t}()),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav");const e=document.createElement("button");e.classList.add("button-nav"),e.textContent="Home";const n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Menu";const a=document.createElement("button");return a.classList.add("button-nav"),a.textContent="Contact",t.appendChild(e),t.appendChild(n),t.appendChild(a),t}()),t}();document.body.prepend(e);const n=document.getElementById("content");n.classList.add("home"),n.appendChild(t());const a=function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("button");return e.classList.add("button-nav"),e.textContent="Photos",t.appendChild(e),t}();function s(e){content.textContent="",content.removeAttribute("class");let n=e.target.textContent.toLowerCase();console.log(n),content.classList.add(`${n}`),n="menu"===n?function(){const t=document.createElement("div");t.classList.add("page-content");const e=["Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top. The word nigiri comes from the Japanese nigirizushi, which translates as 'hand-pressed sushi.","Maki is shaped like a tube, held together by a sheet of dried seaweed called nori, with a layer of rice and then a layer of fillings, which can include ingredients such as raw fish, cooked shellfish, vegetables, and cream cheese.","Sashimi is simply strips of raw fish with no rice at all (although rice can accompany sashimi). As such, sashimi is not technically a type of sushi since sushi always features rice. But you can think of nigiri sushi as a hand-pressed mound of rice with a strip of sashimi on top. Unlike nigiri and maki, sashimi is eaten with chopsticks."],n=["images/fadya-azhary-5KS7T3Gs3CA-unsplash.jpg","images/ahtziri-lagarde-fBtJVtPrNSs-unsplash.jpg","images/ahtziri-lagarde-UZQPPMKLC50-unsplash.jpg"];let a="";return["Nigiri","Maki","Sashimi"].forEach(((t,s)=>{a+=`<h2>${t}</h2>\n        <div class="menu-item">\n        <img src="${n[s]}" alt="${t}">\n        <p class="description">${e[s]}</p>\n        </div>`})),t.innerHTML=a,t}():"contact"===n?function(){const t=document.createElement("div");t.classList.add("page-content");const e=document.createElement("div");e.classList.add("info","box"),e.innerHTML='<h2>Contact Info</h2>\n        <br />\n        <h3>Paddy Fields</h3>\n        <address>123 Tokyo Blvd.<br />\n        New York, NY 12345</address>\n        <p class="phone">555-123-1234</p>\n        <br />\n        <p class="email">contact@paddyfields.com</p>';const n=document.createElement("div");return n.classList.add("form","box"),n.innerHTML='<h2>Subscription</h2>\n        <br />\n        <form action="" method="get" class="form">\n          <label for="name">Enter your name: </label>\n          <input type="text" name="name" id="name" required />\n\n          <label for="email">Enter your email: </label>\n          <input type="email" name="email" id="email" required />\n\n          <input type="submit" value="Subscribe!" />\n\n      </form>',t.appendChild(e),t.appendChild(n),t}():"photos"===n?function(){const t=document.createElement("div");t.classList.add("page-content");const e=['Photo by <a href="https://unsplash.com/@giancarloduarte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Giancarlo Duarte</a> on <a href="https://unsplash.com/photos/_9P2fnBD610?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>','Photo by <a href="https://unsplash.com/@wyron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Wyron A</a> on <a href="https://unsplash.com/photos/Lhb1DyyNr7U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>','Photo by <a href="https://unsplash.com/@fadsphoto23_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Fadya Azhary</a> on <a href="https://unsplash.com/photos/5KS7T3Gs3CA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>','Photo by <a href="https://unsplash.com/@ahtziri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"target="_blank">Ahtziri Lagarde</a> on <a href="https://unsplash.com/photos/fBtJVtPrNSs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>','Photo by <a href="https://unsplash.com/@ahtziri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ahtziri Lagarde</a> on <a href="https://unsplash.com/photos/UZQPPMKLC50?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>'],n=["images/giancarlo-duarte-_9P2fnBD610-unsplash.jpg","images/wyron-a-Lhb1DyyNr7U-unsplash.jpg","images/fadya-azhary-5KS7T3Gs3CA-unsplash.jpg","images/ahtziri-lagarde-fBtJVtPrNSs-unsplash.jpg","images/ahtziri-lagarde-UZQPPMKLC50-unsplash.jpg"];let a="";return["Background","Chef","Nigiri","Maki","Sashimi"].forEach(((t,s)=>{a+=`<h2>${t}</h2>\n        <div class="photo-item">\n        <img src="${n[s]}" alt="${t}">\n        <p class="photo-credit">${e[s]}</p>\n        </div>`})),t.innerHTML=a,t}():t(),content.appendChild(n)}document.body.append(a),document.querySelectorAll(".button-nav").forEach((t=>{t.addEventListener("click",s)}))})();