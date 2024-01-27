// script.js

// Fonction pour récupérer et afficher les commentaires depuis la base de données
function loadComments() {
    // Utilisez une requête AJAX pour récupérer les commentaires depuis la base de données
    // et les afficher dans #comments-container
}

// Fonction pour poster un commentaire
function postComment() {
    // Récupérez le texte du commentaire et la note
    var commentText = document.getElementById('comment-text').value;
    var rating = document.getElementById('rating').value;

    // Utilisez une requête AJAX pour envoyer les données au serveur PHP
    // qui les enregistrera dans la base de données

    // Après avoir posté le commentaire, rechargez la liste des commentaires
    loadComments();
}

// Appel à loadComments() lors du chargement de la page
window.onload = loadComments;
