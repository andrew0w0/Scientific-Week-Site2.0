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

window.addEventListener("resize", function () {
  const div = document.getElementById('schoolclass');
  const a = document.getElementById('schoolclassa');

  if(window.innerWidth < 920) {
    div.style.display = 'none';
    a.style.display = 'none';
  } else {
    div.style.display = 'flex';
    a.style.display = 'flex';
  }
})

