        // Déclaration de la variable JSON contenant les données de pollution
        let data = {
            "polluant": "CO2",
            "unite": "milliards de tonnes",
            "annee": 2017,
            "pays": [
                {"nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn"},
                {"nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us"},
                {"nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in"},
                {"nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru"},
                {"nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp"},
                {"nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de"},
                {"nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr"},
                {"nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir"},
                {"nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca"}
            ]
        };

        // Fonction appelée lors du chargement de la page
        function initialiserDonnees() {
            // Modifier le contenu de la balise h1
            document.getElementById('titre').textContent = `Polluant : ${data.polluant} en ${data.unite}`;

            // Modifier le contenu de la balise h2
            document.getElementById('annee').textContent = `Année : ${data.annee}`;

            // Boucle sur les pays et génération des lignes du tableau
            let corpsTableau = document.getElementById('corps');
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

                corpsTableau.appendChild(ligne);
            });
        }