
import { places } from "../data/discover.mjs";



const showHere = document.querySelector("#allplaces");

function displayItems(list) {
    list.forEach(x => {

        const card = document.createElement("div");
        card.classList.add("place-card");

        // Image
        const figure = document.createElement("figure");

        const photo = document.createElement("img");
        photo.src = x.photoURL;
        photo.alt = x.name;

        photo.width = 300;
        photo.height = 200;

        photo.loading = "lazy";     // ⭐ LAZY LOADING is located here      

        figure.appendChild(photo);
        card.appendChild(figure);

        // Title
        const title = document.createElement("h2");
        title.textContent = x.name;
        card.appendChild(title);

        // Address
        const address = document.createElement("address");
        address.textContent = x.address;
        card.appendChild(address);

        // Description
        const desc = document.createElement("p");
        desc.textContent = x.description;
        card.appendChild(desc);

        // Button
        const btn = document.createElement("a");
        btn.href = x.website;
        btn.target = "_blank";
        btn.textContent = "Learn More";
        btn.classList.add("more-btn");
        card.appendChild(btn);

        showHere.appendChild(card);
    });
}

displayItems(places);



const messageBox = document.querySelector("#visit-message");

const lastVisit = Number(localStorage.getItem("lastVisit"));
const now = Date.now();

if (!lastVisit) {
  
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} 
else {
    const msInDay = 1000 * 60 * 60 * 24;
    const daysBetween = Math.floor((now - lastVisit) / msInDay);

    if (daysBetween < 1) {
        messageBox.textContent = "Back so soon! Awesome!";
    } 
    else if (daysBetween === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } 
    else {
        messageBox.textContent = `You last visited ${daysBetween} days ago.`;
    }
}


localStorage.setItem("lastVisit", now);       // ⭐ Local storage HERE
