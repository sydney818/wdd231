

// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

// HAMBURGER BUTTON
const navbuttom = document.querySelector('#ham-btn')
const navlinks = document.querySelector('#nav-bar')

//Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
})

const navBar = document.querySelector('#nav-bar');



