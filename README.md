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

`npm install vue-chartjs chart.js`

ou

`yarn add vue-chartjs chart.js`

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
