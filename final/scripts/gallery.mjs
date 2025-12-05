

async function loadGallery() {
    try {
        const response = await fetch("data/gallery.json"); 
        const galleryData = await response.json();

        displayGallery(galleryData);
    } catch (error) {
        console.error("Error loading gallery:", error);
    }
}


function displayGallery(items) {
    const container = document.querySelector("#gallery");

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("gallery-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Year:</strong> ${item.year}</p>
            <p>${item.description}</p>
        `;

        container.appendChild(card);
    });
}


loadGallery();