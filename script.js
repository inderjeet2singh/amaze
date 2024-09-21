
function removeFirstFiveParagraphsFromThirdText() {
    // Get the parent element with class 'message__text'
    const parent = document.querySelector('.message__text3');
    
    // Loop through the first 5 <p> tags and remove them
    for (let i = 0; i < 14; i++) {
        const pTag = parent.querySelector('p');  // Always get the first <p> tag
        if (pTag) {
            parent.removeChild(pTag);  // Remove the first <p> tag
        }
    }
}

function removeFirstFiveParagraphs() {
    // Get the parent element with class 'message__text'
    const parent = document.querySelector('.message__text2');
    
    // Loop through the first 5 <p> tags and remove them
    for (let i = 0; i < 5; i++) {
        const pTag = parent.querySelector('p');  // Always get the first <p> tag
        if (pTag) {
            parent.removeChild(pTag);  // Remove the first <p> tag
        }
    }
    const pTags = Array.from(parent.querySelectorAll('p'));
    for (let i = 0; i < 14; i++) {
        const pTag = pTags.pop();  // Get the last <p> tag
        if (pTag) {
            parent.removeChild(pTag);  // Remove the last <p> tag
        }
    }
}

function removeLastEightParagraphs() {
    // Get the parent element with class 'message__text'
    const parent = document.querySelector('.message__text1');
    
    // Get all <p> tags within the parent
    const pTags = Array.from(parent.querySelectorAll('p'));
    
    // Remove the last 8 <p> tags
    for (let i = 0; i < 24; i++) {
        const pTag = pTags.pop();  // Get the last <p> tag
        if (pTag) {
            parent.removeChild(pTag);  // Remove the last <p> tag
        }
    }
}




function message() {
    // const message = "happy birthday paramjeet Kaur",
    const message = "aaaaa aaaaaaaaa --------- ----",
       messageText = document.querySelectorAll(".message__text"),
       messageSplit = message.split(""),
          messageContainer = document.querySelector(".message"),
          messageBtn = document.querySelector(".message__btn"),
          reloadBtn = document.querySelector(".reload"),
          particlesContainer = document.getElementById("particles-js");
    
    const colors = ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"];
    let i = 0;
    
    messageBtn.addEventListener("click", openMessage);
    reloadBtn.addEventListener("click", openMessage);
    
    //Open Message
    function openMessage() {
           if(messageContainer.classList.contains("clicked")) {
              messageContainer.classList.remove("clicked");
              reloadBtn.style.display ="none";
              particlesContainer.classList.remove("show");
           } else {
              messageContainer.classList.add("clicked");
              reloadBtn.style.display = "block";
              removeFirstFiveParagraphs()
              removeLastEightParagraphs()
              removeFirstFiveParagraphsFromThirdText()
              setTimeout(() => {
                particlesContainer.classList.add("show");
            }, 1000);
              
           }
    }
    
    
    // Get Message ans Split Chars
    messageSplit.forEach(function (el) {
       let template = `
          <p class="message__letters">
             <span class="message__letterMain">${el}</span>
             <span class="message__letterShadow">${el}</span>
          </p>`;
    
       messageText.forEach(function (el) {
          el.insertAdjacentHTML("beforeend", template);
       });
    });
    
    
    // Add colours to Letters
    const letterMain = document.querySelectorAll(".message__letterMain");
    letterMain.forEach(function (el) {
       if(i == colors.length) i=0
        el.style.color = colors[i];
          i++;
    });
    }
    
    message();
    
    
    /// Particle JS
    
    /* ---- particles.js config ---- */
    
    particlesJS("particles-js", {
       particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54", "#ffffff", "#cc444b", "#ff6b6b","#e63946" ] },
          shape: {
             type: "circle",
             stroke: { width: 0, color: "#000000" },
             polygon: { nb_sides: 5 },
             image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
             value: 1,
             random: false,
             anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
             value: 6,
             random: true,
             anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
          },
          line_linked: {
             enable: false,
             distance: 150,
             color: "#ffffff",
             opacity: 0.4,
             width: 1
          },
          move: {
             enable: true,
             speed: 6,
             direction: "top",
             random: true,
             straight: false,
             out_mode: "bounce",
             bounce: false,
             attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
       },
       interactivity: {
          detect_on: "canvas",
          events: {
             onhover: { enable: true, mode: "repulse" },
             onclick: { enable: true, mode: "push" },
             resize: true
          },
          modes: {
             grab: { distance: 400, line_linked: { opacity: 1 } },
             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
             repulse: { distance: 150, duration: 0.4 },
             push: { particles_nb: 4 },
             remove: { particles_nb: 2 }
          }
       },
       retina_detect: true
    });
    
    