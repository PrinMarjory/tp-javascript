function init() {
    // Création de la requête AJAX
    let req = new XMLHttpRequest();
    req.open("GET", 'https://restcountries.com/v3.1/all');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = req.responseText;
            let zoneAffichage = document.querySelector("#contenu");
            zoneAffichage.innerHTML = data;
        }
    };
    req.send();
}