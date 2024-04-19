/* --------------------------------- JS PAGINA 4 ---------------------------*/
let allStelle = document.querySelectorAll(".stelle");

for (let z = 0; z < allStelle.length; z++) {
    allStelle[z].addEventListener("click", () => {
        for (let b = 0; b < allStelle.length; b++) {
            if (b <= z) {
                allStelle[b].classList.add("stellacliccata");
            } else {
                allStelle[b].classList.remove("stellacliccata");
            };
        }
    });
}