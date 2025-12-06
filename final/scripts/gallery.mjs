// LOAD GALLERY
async function loadGallery() {
    try {
        const response = await fetch("data/gallery.json"); 
        const galleryData = await response.json();

        displayGallery(galleryData);
    } catch (error) {
        console.error("Error loading gallery:", error);
    }
}


// ----- DISPLAY GALLERY WITH MODAL -----
function displayGallery(items) {
    const container = document.querySelector("#gallery");
    const modal = document.querySelector("#imageModal");

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("gallery-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="gallery-img">
            <h3>${item.title}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Year:</strong> ${item.year}</p>
            <p>${item.description}</p>
        `;

        // CLICK OPENS MODAL
        card.querySelector(".gallery-img").addEventListener("click", () => {
            document.querySelector("#modalImage").src = item.image;
            document.querySelector("#modalTitle").textContent = item.title;
            document.querySelector("#modalLocation").textContent = item.location;
            document.querySelector("#modalYear").textContent = item.year;
            document.querySelector("#modalDescription").textContent = item.description;

            modal.showModal();
        });

        container.appendChild(card);
    });
}


// CLOSE MODAL
document.querySelector("#closeModal").addEventListener("click", () => {
    document.querySelector("#imageModal").close();
});


// RUN SCRIPT
loadGallery();
