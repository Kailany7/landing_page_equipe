
const modal = document.getElementById("bioModal"); 
const bioTitle = document.getElementById("bioTitle");
const bioText = document.getElementById("bioText");
const hero = document.querySelector(".modal-hero");
const closeBtn = document.getElementById("bioClose");

const openButtons = document.querySelectorAll(".open-bio");


//interação do "ler bio"
openButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const name = card.dataset.name; 
        const bio = card.dataset.bio;

        bioTitle.textContent = name; 
        bioText.textContent = bio;

        modal.showModal(); 
    });
});


closeBtn.addEventListener("click", () => {
    modal.close();
});

const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    alert("Mensagem enviada! Esperamos entrar em contato em breve.");
    event.preventDefault();
    form.submit();
})
    
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

window.addEventListener('resize', updateSlidePosition);
