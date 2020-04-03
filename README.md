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

- création d'une API Rest avec Firebase
- installation du module NPM firebase
- authentification avec Firebase (création d'une page sign in et sign up, et action sign out)
- gestion de routes selon le statut d'utilisateur (connecté / non connecté)
- utilisation du store de données Vuex

## Installation des dépendances

```
npm install
```

ou

```
yarn install
```

## Installation du plugin Router de Vue.js

`npm install vue-router`

ou

`yarn add vue-router`

## Installation du plugin Vuex de Vue.js

`npm install vuex`

ou

`yarn add vuex`

## Installation du plugin firebase

`npm install firebase`

ou

`yarn add firebase`

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

#### Alexandre Leroux <alex@sherpa.one>

Enseignant à l'Université de Lorraine

- Institut des Sciences du Digital (Masters Sciences Cognitives)
- IUT Charlemagne (LP Ciasie)
