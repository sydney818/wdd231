

// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;


// ---------------------
// MOBILE NAV TOGGLE
// ---------------------
document.addEventListener("DOMContentLoaded", () => {

    const hamBtn = document.getElementById("ham-btn");
    const nav = document.getElementById("nav-bar");

    hamBtn.addEventListener("click", () => {
        hamBtn.classList.toggle("show");
        nav.classList.toggle("show");
    });

});



