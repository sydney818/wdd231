// TIMESTAMP  //
const timestampField = document.getElementById("time-stamp");
if (timestampField) {
    timestampField.value = new Date().toISOString();
}


// THANK YOU PAGE ONLY //
document.addEventListener("DOMContentLoaded", () => {

    // Only run if this page contains thank-you span elements
    const fnameSpan = document.getElementById("fname");
    if (!fnameSpan) return;   // stop if not on thankyou.html

    const urlParams = new URLSearchParams(window.location.search);

    fnameSpan.textContent = urlParams.get("fname");
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




