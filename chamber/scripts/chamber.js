async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();  

 
    const upgradedMembers = data.map(m => ({
      ...m,
      membership: getMembership(m.level)
    }));

  
    const spotlightCandidates = upgradedMembers.filter(
      m => m.membership === "Silver" || m.membership === "Gold"
    );

   
    const spotlights = spotlightCandidates
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    displaySpotlights(spotlights);

  } catch (error) {
    console.error("Spotlight Error:", error);
  }
}

// Convert level number → membership name
function getMembership(level) {
  if (level === 3) return "Gold";
  if (level === 2) return "Silver";
  return "Bronze";
}

function displaySpotlights(list) {
  const container = document.querySelector("#spotlight-container");
  container.innerHTML = "";

  list.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <img src="${member.logo}" alt="${member.name} logo" class="spotlight-logo">

      <h3>${member.name}</h3>
      <p><strong>${member.membership} Member</strong></p>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

loadSpotlights();