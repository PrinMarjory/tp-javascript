function validerFormulaire() {

    let errorMessageDiv = document.getElementById('messageErreur');
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.textContent = '';

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let dateNaissance = document.getElementById('dateNaissance').value;
    let lieuNaissance = document.getElementById('lieuNaissance').value;
    let departementNaissance = document.getElementById('departementNaissance').value;
    let numeroRue = document.getElementById('numeroRue').value;
    let libelleRue = document.getElementById('libelleRue').value;
    let codePostal = document.getElementById('codePostal').value;
    let ville = document.getElementById('ville').value;

    if (nom == '' || prenom == '' || dateNaissance == '' || lieuNaissance == '' || departementNaissance == '' || numeroRue == '' || libelleRue == '' || codePostal == '' || ville == '') {
        afficherMessageErreur("Tous les champs sont obligatoires !");
        return;
    }

    let today = new Date();
    let birthDate = new Date(dateNaissance);

    // Calcule de l'age
    let age = today.getFullYear() - birthDate.getFullYear();
    let mois = today.getMonth() - birthDate.getMonth();
    if (mois < 0 || (mois == 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        afficherMessageErreur("Vous devez avoir au moins 18 ans pour créer un compte !");
        return;
    }

    // Créer l'objet avec les données à envoyer
    let data = {
        identite: 'PRIN',
        nom: nom,
        prenom: prenom,
        dateNaissance: dateNaissance,
        lieuNaissance: lieuNaissance,
        departementNaissance: departementNaissance,
        numeroRue: numeroRue,
        libelleRue: libelleRue,
        codePostal: codePostal,
        ville: ville
    };
    console.log(data);

    // Envoyer les données au serveur
    fetch('https://digicode.cleverapps.io/utilisateurs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text()) 
    .then(text => {
        console.log('Réponse du serveur :', text);
        if (text.includes("Erreur")) {
            afficherMessageErreur(text);
        } else {
            alert('Formulaire soumis avec succès !');
            document.getElementById('form').reset();
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête :', error);
        alert('Une erreur est survenue lors de la création de l\'utilisateur !');
    });
}

function afficherMessageErreur(message) {
    let errorMessageDiv = document.getElementById('messageErreur');
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block';
}
