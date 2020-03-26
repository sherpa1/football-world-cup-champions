<template>
  <div id="app">
    <Country name="Italie" />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
