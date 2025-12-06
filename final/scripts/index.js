
// PROGRAM INFO MODAL
const programModal = document.querySelector("#programModal");

document.querySelector("#openProgramModal").addEventListener("click", () => {
    programModal.showModal();
});

document.querySelector("#closeProgramModal").addEventListener("click", () => {
    programModal.close();
});