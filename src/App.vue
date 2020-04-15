<template>
  <div id="app">
    <header>
      <h1>Football World Cup Champions</h1>
    </header>

    <Country name="Italie" color="#3584e4" flag="italy" />

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

export default {
  name: "App",
  components: {
    Country
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