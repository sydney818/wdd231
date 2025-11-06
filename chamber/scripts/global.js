
// Display current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Display the last modified date 
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;



// Store the selected elements that we are going to use. 
const navbuttom = document.querySelector('#ham-btn')
const navlinks = document.querySelector('#nav-bar')

//Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
})

const navBar = document.querySelector('#nav-bar');

