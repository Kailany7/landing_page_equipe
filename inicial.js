
const modal = document.getElementById("bioModal"); 
const bioTitle = document.getElementById("bioTitle");
const bioText = document.getElementById("bioText");
const closeBtn = document.getElementById("bioClose");

const openButtons = document.querySelectorAll(".open-bio");

openButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const name = card.dataset.nome; 
        const bio = card.dataset.bio;

        bioTitle.textContent = name; 
        bioText.textContent = bio;

        modal.showModal(); 
    });
});


closeBtn.addEventListener("click", () => {
    modal.close();
});
