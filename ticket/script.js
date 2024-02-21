const div = document.getElementById('schoolclass');
const a = document.getElementById('schoolclassa');

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
  const input2 = document.createElement("input");
  input2.id = 'input-location'
  input2.placeholder = "Di dove sei?"

  const confirmButton = document.createElement("button");
  confirmButton.id = "confirm-button"
  confirmButton.textContent = "Crea il tuo biglietto"

  componentsDiv.removeChild(createButton);

  confirmButton.addEventListener('click', (Event) => {
    const name = document.getElementById('input-name').value;
    const location = document.getElementById('input-location').value;

    alert("Nome: " + name + "\nLuogo: " + location);

    componentsDiv.removeChild(inputDiv);
    componentsDiv.removeChild(confirmButton)

    const ticketDiv = document.createElement("div");
    ticketDiv.className = "ticket"

    const canvas = document.createElement('canvas');

    canvas.id = "canvas-ticket"
    canvas.width = 900
    canvas.height = 347

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

        context.fillText(location.toUpperCase(), 50, 180, 150)

        context.font = 'bold 34px "League Spartan"';

        context.fillText(name.toUpperCase(), 0, 0)
      }).catch((error) => {
        console.log('Font not avaible', error)
      })

      var fontSanchez = new FontFaceObserver("Sanchez");

      fontSanchez.load().then(() => {
        context.font = 'bold 34px "Sanchez"'
        context.fillStyle = 'white'
        context.textAlign = "left"

        
      })
    }

    ticketDiv.appendChild(canvas);

    componentsDiv.appendChild(ticketDiv)

  })

  inputDiv.appendChild(input1);
  inputDiv.appendChild(input2)
  componentsDiv.appendChild(inputDiv);
  componentsDiv.appendChild(confirmButton)
})
/*https://www.canva.com/design/DAF7uB6tJpQ/szcxdi41JRQcDC8Nt6lyPg/edit?utm_content=DAF7uB6tJpQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton*/