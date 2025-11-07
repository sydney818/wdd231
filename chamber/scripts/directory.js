
const url = "./data/members.json";    
const cards = document.querySelector("#cards");


async function getMemberData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const data = await response.json();


    const members = Array.isArray(data) ? data : data.members;
    renderCards(members);
  } catch (err) {
    console.error("Failed to load members.json:", err);
    cards.innerHTML = `<p style="color:crimson;">Could not load member data.</p>`;
  }
}


function renderCards(members) {
  cards.innerHTML = ""; 

  members.forEach((m) => {
    const card = document.createElement("section");
    card.className = "member-card";

    card.innerHTML = `
      <h3 class="member-name">${m.name}</h3>
      <p class="member-address">${m.address}</p>
      <p class="member-phone">${m.phone}</p>
      <a class="member-link" href="${m.website}" target="_blank" rel="noopener">${m.website}</a>
      <p class="member-level">Level: ${m.level}</p>
    `;

    cards.appendChild(card);
  });
}


const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn?.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listBtn?.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});


getMemberData();