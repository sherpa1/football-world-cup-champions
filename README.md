# Football World Cup Champions

Projet d'initiation à Vue.js.

Avant de lancer l'application, veuillez vous assurer d'installer les dépendances du projet (définies dans le fichier package.json et installée dans le dossier node_modules, cf. instructions ci-dessous).

## Points évoqués lors du TD1

- Découverte de Vue.js
- Utilisation de Vue CLI pour la création du projet
- Utilisation de npm ou yarn
- Création d'un composant
- Affichage dynamique du contenu d'une variable (syntaxe "Moustache" {{}})
- Data Binding
- Passage de paramètres "props"
- Utilisation de "data" et "methods"
- Affichage dynamique d'assets (images) avec la syntaxe require
- Personnalisation de styles CSS à partir de données internes (props + data)

## Points évoqués lors du TD2

- affichage conditionnel avec v-if / v-else / v-show
- traitement d'une collection de données via une boucle v-for
- refactoring du code (utilisation d'un objet en tant que props à la place de plusieurs props)
- création d'une classe Team (./src/models/Team.js) pour typage strict
- gestion d'événement "click" avec la syntaxe @ + callback

## Points évoqués lors du TD3

- Design Pattern ergonomique Master / Details
- Intégration du plugin Router de Vue.js (https://router.vuejs.org/)
- Utilisation de Router Link et Router View
- Effets de transition entre vues
- Concept de Navigation Guards (https://router.vuejs.org/guide/advanced/navigation-guards.html)

## Points évoqués lors du TD4

- Création d'une API avec Firebase (https://console.firebase.google.com/)
- Création d'une base de données Firestore (https://firebase.google.com/docs/firestore)
- Installation des modules npm firebase (https://www.npmjs.com/package/firebase) et vue-firestore pour gérer l'interaction avec Firebase et Firestore (https://www.npmjs.com/package/vue-firestore)
- Authentification avec Firebase, création d'une page sign in et sign up, et action sign out (https://firebase.google.com/docs/auth)
- Gestion de routes selon le statut d'utilisateur (connecté / non connecté)
- Data-binding sur l'attribut disabled d'un button
- Utilisation de computed (https://fr.vuejs.org/v2/guide/computed.html)
- Utilisation d'un filtre pour forcer l'utilisation d'une majuscule pour le prénom et le nom d'un nouvel utilisateur (https://vuejs.org/v2/api/#Vue-filter)
- conversion de données fournies par Firebase en objets de type Team

## Points évoqués lors du TD5

- classement de données par ordre ascendant / descendant (nombre de victoires en Coupe du Monde / ordre alphabétique)
- filtre des données par continent d'appartenance
- intégration d'une fonction permettant de créer un Array JS contenant un intervalle de nombre
- intégration du module Chart.js (https://www.chartjs.org/) via vue-chart (https://vue-chartjs.org/)
- modification du modèle de données Team (ajout du continent)
- store de données Vuex (https://vuex.vuejs.org/)

## Installation des dépendances

```
npm install
```

ou

```
yarn install
```

## Installation du plugin Router de Vue.js (https://router.vuejs.org/)

`npm install vue-router`

ou

`yarn add vue-router`

## Installation du plugin Vuex de Vue.js (https://vuex.vuejs.org/)

`npm install vuex`

ou

`yarn add vuex`

## Installation du plugin firebase (https://www.npmjs.com/package/firebase)

`npm install firebase`

ou

`yarn add firebase`

## Installation du plugin vue-firestore (https://www.npmjs.com/package/vue-firestore)

`npm install vue-firestore`

ou

`yarn add vue-firestore`

## Installation des plugins vue-chart (https://vue-chartjs.org/) et chartjs

`npm install vue-firestore chart.js`

ou

`yarn add vue-firestore chart.js`

### Compilation et Hot Reloading en phase de développement

```
yarn serve
```

### Compilation minification pour production d'un "build" utilisé en phase de production

```
yarn build
```

### Optimisation du code

```
yarn lint
```

#### Crédits

- Vue.js : https://vuejs.org/
- Vuex : https://vuex.vuejs.org/
- Chartjs : https://www.chartjs.org/
- Vue-chart : https://vue-chartjs.org/
- Tutoriel Vue.js + Firebase : https://blog.logrocket.com/vue-firebase-authentication/
- Tutoriel Vue-firestore : https://alligator.io/vuejs/vue-cloud-firestore/
- Matt Zabriskie : https://gist.github.com/mzabriskie
- Icons by Freepik : https://www.flaticon.com
- Firebase : https://www.npmjs.com/package/firebase
- Vue-firestore : https://www.npmjs.com/package/vue-firestore

#### Alexandre Leroux <alex@sherpa.one>

Enseignant à l'Université de Lorraine

- Institut des Sciences du Digital (Masters Sciences Cognitives)
- IUT Charlemagne (LP Ciasie)
