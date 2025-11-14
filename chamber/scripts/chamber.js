async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();   // <-- data is the array itself

    // Convert level → membership name
    const upgradedMembers = data.map(m => ({
      ...m,
      membership: getMembership(m.level)
    }));

    // Only Silver + Gold
    const spotlightCandidates = upgradedMembers.filter(
      m => m.membership === "Silver" || m.membership === "Gold"
    );

    // Randomly choose 2–3
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