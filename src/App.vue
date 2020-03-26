<template>
  <div id="app">
    <header>
      <h1>Country App</h1>
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
