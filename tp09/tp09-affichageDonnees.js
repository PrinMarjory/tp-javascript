//Récupérer les données avec AJAX
function init() {
    // Création de la requête AJAX
    let req = new XMLHttpRequest();
    req.open("GET", 'https://restcountries.com/v3.1/all');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.responseText); 
            let zoneAffichage = document.querySelector("#contenu");
            for (let i=0 ; i<data.length ; i++){ 
                let nomPays = data[i].name.common;
                let capitalePays = data[i].capital;
                let populationPays = data[i].population;
                let regionPays = data[i].region;  
                
                //Création des lignes par pays
                let ligne = document.createElement('li')
                ligne.textContent = `${nomPays}, capitale: ${capitalePays}, population: ${populationPays}, région: ${regionPays}`;
                zoneAffichage.appendChild(ligne);
            }
        }  
    }
    req.send();
}
