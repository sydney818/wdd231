
// FORM-RESULTS PAGE
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    document.getElementById("out-fname").textContent = params.get("fname");
    document.getElementById("out-lname").textContent = params.get("lname");
    document.getElementById("out-parent").textContent = params.get("parent");
    document.getElementById("out-email").textContent = params.get("email");
    document.getElementById("out-phone").textContent = params.get("phone");
    document.getElementById("out-grade").textContent = params.get("grade");
    document.getElementById("out-exp").textContent = params.get("experience");
    document.getElementById("out-comments").textContent = params.get("comments") || "None";
});
