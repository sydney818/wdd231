// TIMESTAMP  //
const timestampField = document.getElementById("time-stamp");
if (timestampField) {
    timestampField.value = new Date().toISOString();
}


// THANK YOU PAGE ONLY //
document.addEventListener("DOMContentLoaded", () => {

    const requiredIds = ["fname", "lname", "email", "phone", "organization", "timestamp"];

   
    const allExist = requiredIds.every(id => document.getElementById(id));

    if (!allExist) return; 

    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById("fname").textContent = urlParams.get("fname");
    document.getElementById("lname").textContent = urlParams.get("lname");
    document.getElementById("email").textContent = urlParams.get("email");
    document.getElementById("phone").textContent = urlParams.get("phone");
    document.getElementById("organization").textContent = urlParams.get("organization");
    document.getElementById("timestamp").textContent = urlParams.get("time-stamp");
});


// OPEN MODAL //

document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.parentElement.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", (e) => {
        const dialog = e.target.closest("dialog");
        dialog.close();
    });
});




