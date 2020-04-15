<template>
  <section class="container">
    <div class="country" :style="css_styles">
      <img class="flag" :src="image()" />
      <h2>{{team.name}}</h2>
      <button @click="on_click">clic</button>
    </div>
  </section>
</template>

<script>
import Team from "../models/Team";

export default {
  name: "Country",
  props: {
    team: Team
  },
  data() {
    return {
      css_styles: {
        color: this.team.color //création dynamique de style css
      }
    };
  },
  methods: {
    image() {
      return require(`@/assets/flags/${this.team.get_image()}`); //résolution dynamique d'url
    },
    on_click() {
      alert(`${this.team.name} has been clicked`);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.country {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  padding: 0.5em;
}

.flag {
  width: 3rem;
}

h2 {
  font-size: 0.6em;
  margin: 0;
  padding: 0;
}
</style>