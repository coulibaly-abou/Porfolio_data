// Filtres de la section « Mes réalisations » : chaque carte porte ses catégories
// dans data-cat (ex. "data ml") ; un bouton n'affiche que les cartes de sa catégorie.
document.addEventListener("DOMContentLoaded", () => {
    const boutons = document.querySelectorAll(".realisations-filtres .filtre");
    const cartes = document.querySelectorAll(".realisations-liste .realisation");
    if (!boutons.length || !cartes.length) {
        return;
    }

    boutons.forEach((bouton) => {
        bouton.addEventListener("click", () => {
            const filtre = bouton.dataset.filtre;

            boutons.forEach((b) => {
                const actif = b === bouton;
                b.classList.toggle("is-active", actif);
                b.setAttribute("aria-pressed", String(actif));
            });

            cartes.forEach((carte) => {
                const categories = (carte.dataset.cat || "").split(" ");
                carte.hidden = filtre !== "tous" && !categories.includes(filtre);
            });
        });
    });
});
