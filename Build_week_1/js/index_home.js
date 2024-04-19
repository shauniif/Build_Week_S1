/* --------------------------------- JS PAGINA 1 ---------------------------*/
function redirectToSecondPage() {
    var checkbox = document.getElementById("spunta");
    if (checkbox.checked) {
        window.location.href = "index_domande.html";
    } else {
        alert("Devi promettere di rispondere da solo!");
    }
}