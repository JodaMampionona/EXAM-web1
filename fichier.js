window.addEventListener("DOMContentLoaded", function(e) {
    const email = document.querySelector(".mail");
    const mdp = document.querySelector(".mdp");
    const contenu = document.querySelector(".container");

    document.querySelector(".bouton").addEventListener("click", function(e) {
        // e.preventDefault(); 
        if (!email.value || !mdp.value) {
            contenu.innerHTML = "<h1><center>Veuillez remplir tous les champs.</h1></center>";
            return;
        }
        if (email.value === "test@mail.hei.school" && mdp.value === "admin") {
            contenu.innerHTML = "<h1><center>Vous êtes connecté</center></h1>";
        } else {
            contenu.innerHTML = "<h1><center>Erreur</center></h1>";
            email.value = '';
            mdp.value = '';
        }
    });
});
