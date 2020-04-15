<template>
  <div id="app">
    <header>
      <h1>Football World Cup Champions</h1>
    </header>

    <main>
      <Country v-for="(a_team,index) in teams" :key="index" :team="a_team" />
    </main>
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

const italy = new Team("Italy", "italy", "#3584e4", 4);
const france = new Team("France", "france", "blue", 2);
const spain = new Team("Spain", "spain", "yellow", 1);
const england = new Team("England", "england", "red", 1);
const germany = new Team("Germany", "germany", "darkgrey", 4);
const brazil = new Team("Brazil", "brazil", "green", 5);
const argentina = new Team("Argentina", "argentina", "lightblue", 2);
const uruguay = new Team("Uruguay", "uruguay", "lightblue", 2);

export default {
  name: "App",
  components: {
    Country
  },
  data() {
    return {
      teams: [
        italy,
        france,
        spain,
        england,
        germany,
        brazil,
        uruguay,
        argentina
      ]
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

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

header {
  font-size: 2em;
  color: #41b883;
  width: 100%;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

h1 {
  margin: 0;
}

footer {
  color: #41b883;
  text-align: center;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;
}

footer a {
  color: white;
}

footer a:hover {
  color: #35495e;
}
</style>
