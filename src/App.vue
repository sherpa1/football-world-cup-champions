<template>
  <div id="app">
    <header>
      <h1>Country App</h1>
    </header>

    <!-- <Country name="Italie" color="#3584e4" flag="italy" /> -->
    <!-- <Country :name="team.name" :color="team.color" :flag="team.flag" /> -->
    <!-- <Country :team="team" /> -->

    <!-- <Country :team="italy" />
    <Country :team="france" />-->

    <Country v-for="(one_team,index) in teams" :key="index" :team="one_team" />

    <footer>
      <p>Alexandre Leroux - Enseignant à l'Université Lorraine (IUT Charlemagne - Institut des Sciences du Digital)</p>
      <p>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
    </footer>
  </div>
</template>

<script>
import Country from "./components/Country";

import Team from "./models/Team";

const a_team = new Team("Italy", "italy", "#3584e4");

const italy = new Team("Italy", "italy", "#3584e4");
const france = new Team("France", "france", "#3584e4");
const spain = new Team("Spain", "spain", "yellow");
const england = new Team("England", "england", "#3584e4");
const germany = new Team("Germany", "germany", "#3584e4");

export default {
  name: "App",
  components: {
    Country
  },
  data() {
    return {
      team: a_team,
      teams: [italy, france, spain, england, germany]
    };
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #2c2c32;
  color: white;
}

header {
  font-size: 2em;
  color: #41b883;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

footer {
  color: #41b883;
  position: absolute;
  bottom: 2em;
  text-align: center;
}

footer a {
  color: white;
}

footer a:hover {
  color: #35495e;
}
</style>
