// contador fake
document.getElementById("pessoas").innerText =
Math.floor(Math.random() * 40) + 20;

// popup fake
setTimeout(() => {
    document.getElementById("popup").style.display = "block";
}, 5000);

function fechar() {
    document.getElementById("popup").style.display = "none";
}