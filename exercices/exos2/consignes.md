# Objectif:

Cet exercice vise à renforcer votre compréhension des bases du JavaScript en construisant une liste de tâches interactive. Vous allez apprendre à manipuler le Document Object Model (DOM), gérer les événements, et créer des fonctions et des boucles. Un aspect clé sera la création dynamique d'éléments HTML li pour afficher les tâches.

# Consignes:

Sélectionnez les Éléments du DOM:

Utilisez `document.getElementById` pour sélectionner le champ de saisie (input).
Utilisez `document.querySelector` pour sélectionner le bouton d'ajout.
Utilisez `document.querySelector` pour sélectionner l'élément ul où les tâches seront affichées sous forme de liste.

- Écrivez une fonction `ajouterTache` pour ajouter la nouvelle tâche saisie dans le champ de saisie au tableau des tâches.

Écrivez une fonction `afficherTaches` pour créer et ajouter dynamiquement des éléments `li` dans l'élément `ul`, chacun contenant le texte d'une tâche. Vous allez devoir utilisé la fonction `document.createElement` pour créer votre `li` et .innerHTML pour le mettre dans le `ul`. Le nom de la tâche devra être le text ecris depuis l'input.

Lors de la création de chaque élément li, concaténez une chaîne de caractères comme "Tâche : " avec le nom de la tâche avant de l'ajouter à l'élément li.

### Ajoutez des Écouteurs d'Événements (Event Listeners):

- Ajoutez un eventListener au bouton pour appeler la fonction ajouterTache lorsqu'il est cliqué.

- Ajoutez un eventListener au double click pour permettre la suppression d'une tâche directement depuis l'élément li.
