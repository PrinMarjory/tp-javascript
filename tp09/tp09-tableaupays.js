function init() {
    let req = new XMLHttpRequest();
    req.open("GET", 'https://digicode.cleverapps.io/json/pays/pollution');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.responseText);
            afficherData(data);
        }
    };
    req.send();
}

function afficherData(data) {
    // Modifier le titre
    document.getElementById('titre').textContent = `Pays les plus polluants en  ${data.polluant} (${data.unite}) en ${data.annee}`;
    console.log(data.polluant)

    // Boucle sur les pays et génération des lignes du tableau
    let tableau = document.getElementById('corps');
    tableau.innerHTML = ''; 

    data.pays.forEach(pays => {
        let ligne = document.createElement('tr');
        
        let celluleNom = document.createElement('td');
        celluleNom.innerHTML = `<img src="https://flagsapi.com/${pays.code.toUpperCase()}/flat/32.png"> ${pays.nom}`;
        ligne.appendChild(celluleNom);

        let celluleValeur = document.createElement('td');
        celluleValeur.textContent = `${pays.valeur}`;
        ligne.appendChild(celluleValeur);

        let cellulePourcentage = document.createElement('td');
        cellulePourcentage.textContent = `${pays.pourcentage}%`;
        ligne.appendChild(cellulePourcentage);

        tableau.appendChild(ligne);
    });
}