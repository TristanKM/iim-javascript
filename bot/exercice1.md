# Consignes pour l'Exercice JavaScript

## Objectif : Créer un script JavaScript côté client pour valider un formulaire avant l'envoi et afficher des messages d'erreur si les champs ne sont pas correctement remplis.

### Étape 1 : Sélectionner les Éléments HTML

- Utiliser `document.getElementById` ou `document.querySelector` pour sélectionner :

- Les champs du formulaire (adresse et code postal).
- Les éléments où afficher les messages d'erreur.

### Étape 3 : Écouter l'Événement de Soumission du Formulaire

- Ajouter un écouteur d'événements submit au formulaire :

Utiliser `document.getElementById('idDuFormulaire').addEventListener('submit', function(event) {...});`.

N'oubliez pas d'ajouter `event.preventDefault();` au début de la fonction pour empêcher l'envoi du formulaire avant la validation.

### Étape 4 : Écrire la Fonction de Validation

Créer une fonction pour valider les champs :

Vérifier si les champs sont vides ou non conformes (par exemple, vérifier un format spécifique pour le code postal).

Utiliser cette expressions régulières `/^\d{5}$/` pour des validations plus complexes.

- Ajouter ou supprimer des classes pour afficher les erreurs :

- Si un champ n'est pas valide, ajoutez une classe CSS (par exemple, `codePostal-error` pour l'erreur du code postal ou `adresse-error` pour l'erreur de l'adresse ) pour changer l'apparence du champ (comme changer la couleur de bordure en rouge).

- Affichez le message d'erreur en changeant le style display de none à block pour l'élément du message d'erreur.

### Étape 5 : Envoi du Formulaire

Envoyer le formulaire uniquement si tous les champs sont valides :

Si tous les champs sont valides, vous pouvez procéder à l'envoi du formulaire. Voici comment faire :

```js
fetch("http://127.0.0.1:3000/scrape", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ adresse: adresseValue, codePostal: codePostalValue }),
});
```
