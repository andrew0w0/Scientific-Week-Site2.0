const div = document.getElementById('schoolclass');
const a = document.getElementById('schoolclassa');

var observer = new MutationObserver(function(mutations) {
  document.body.style.height = `${document.body.scrollHeight}px`;
});

// Configura l'observer
var config = { attributes: true, childList: true, characterData: true, subtree: true };

// Passa l'elemento target all'observer
observer.observe(document.body, config);

if (window.innerWidth < 920) {
  div.style.display = 'none';
  a.style.display = 'none';
} else {
  div.style.display = 'flex';
  a.style.display = 'flex';
}

const elementh1 = document.getElementById('create-ticket');
const text = elementh1.innerHTML.split(' ');

text[text.length - 1] = '<span class="blue">' + text[text.length - 1] + '</span>';
elementh1.innerHTML = text.join(' ');

const elementp = document.getElementById('attention')
const text1 = elementp.innerHTML.split(' ');

text1[0] = '<span class="red">' + text1[0] + '</span>';
elementp.innerHTML = text1.join(' ');

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

window.addEventListener("resize", function() {
  const div = document.getElementById('schoolclass');
  const a = document.getElementById('schoolclassa');

  if (window.innerWidth < 920) {
    div.style.display = 'none';
    a.style.display = 'none';
  } else {
    div.style.display = 'flex';
    a.style.display = 'flex';
  }
})

const createButton = document.getElementById('ticket-button');
const componentsDiv = document.getElementById('components');

createButton.addEventListener('click', (Event) => {

  const inputDiv = document.createElement("div");
  inputDiv.className = "inputs-ticket"

  const input1 = document.createElement("input");
  input1.id = 'input-name'
  input1.placeholder = 'Come ti chiami?'
  input1.autocomplete = "off";
  const input2 = document.createElement("input");
  input2.id = 'input-location'
  input2.placeholder = "Di dove sei?"
  input2.autocomplete = "off";

  const confirmButton = document.createElement("button");
  confirmButton.id = "confirm-button"
  confirmButton.textContent = "Crea il tuo biglietto"

  componentsDiv.removeChild(createButton);

  confirmButton.addEventListener('click', (Event) => {
    const name = document.getElementById('input-name').value.toUpperCase();
    const location = document.getElementById('input-location').value.toUpperCase();

    componentsDiv.removeChild(inputDiv);
    componentsDiv.removeChild(confirmButton)

    const ticketDiv = document.createElement("div");
    ticketDiv.className = "ticket"
    const downloadDiv = document.createElement("div");
    downloadDiv.className = "download"

    const downloadButton = document.createElement('button');

    downloadButton.textContent = "Scarica"

    downloadDiv.appendChild(downloadButton);

    const canvas = document.createElement('canvas');

    canvas.id = "canvas-ticket"
    canvas.width = 1000
    canvas.height = 324

    const context = canvas.getContext("2d");

    const image = new Image()

    image.src = "../src/images/ticket/ticket.png"

    image.onload = function() {
      context.drawImage(image, 0, 0, canvas.width, canvas.height)

      var font = new FontFaceObserver("League Spartan")

      font.load().then(() => {
        context.font = 'bold 38px "League Spartan"'
        context.fillStyle = 'white'
        context.textAlign = "left"

        context.fillText(location, 50, 170, 150)

        context.fillStyle = 'black'
        context.textAlign = "right"

        context.font = 'bold 12pt "League Spartan"'

        context.fillText(location, 970, 70, 150)

      }).catch((error) => {
        console.log('Font not avaible', error)
      })

      var fontSanchez = new FontFaceObserver("Sanchez");

      fontSanchez.load().then(() => {
        context.font = '10.5pt "Sanchez"'

        context.fillStyle = 'black'

        context.textAlign = "left"

        context.fillText(name, 690, 80)

        context.font = '8.5pt "Sanchez"'

        context.fillStyle = '#F4F6FC'

        context.fillText(name, 418, 67)

      })
    }

    downloadButton.addEventListener('click', (Event) => {
      var link = document.createElement('a');

      link.download = `fluxperiment-${name.toLowerCase()}.png`
      link.href = canvas.toDataURL();
      link.click();
    })

    ticketDiv.appendChild(canvas);

    componentsDiv.appendChild(downloadDiv)
    componentsDiv.appendChild(ticketDiv)


    modificaAltezzaBody();


    modificaAltezzaBody();

  })

  inputDiv.appendChild(input1);
  inputDiv.appendChild(input2);
  componentsDiv.appendChild(inputDiv);
  componentsDiv.appendChild(confirmButton);

  modificaAltezzaBody();
})
/*https://www.canva.com/design/DAF7uB6tJpQ/szcxdi41JRQcDC8Nt6lyPg/edit?utm_content=DAF7uB6tJpQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton*/

function modificaAltezzaBody() {

  var altezzaBody = document.body.scrollHeight;  // Ottieni l'altezza del body

  // Imposta la variabile CSS --altezza-body
  document.getElementById("background").style.height = '105%'
}