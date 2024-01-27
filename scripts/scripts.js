document.addEventListener("DOMContentLoaded", function() {
    const bouton = document.getElementById("bouton");
    const resultat = document.getElementById("resultat");
    
    bouton.addEventListener("click", function() {
        const divs = ["div1", "div2", "div3"]; // Liste des IDs des divs disponibles
        const divAuHasard = divs[Math.floor(Math.random() * divs.length)]; // Sélection aléatoire d'un ID
        
        const contenuDiv = document.getElementById(divAuHasard).textContent;
        
        resultat.textContent = `${contenuDiv}`;
    });
});
