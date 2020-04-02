<template>
  <div class="country container" :style="css_styles">
    <img class="flag" :src="get_flag_img()" />
    <h2>{{team.name}}</h2>
    <div>
      <img
        height="32px"
        v-for="(victory,index) in team.victories"
        :key="index"
        class="world-cup"
        :src="get_world_cup_img()"
      />
    </div>
    <router-link class="back" to="/">go back</router-link>
  </div>
</template>

<script>
import Team from "../models/Team";

export default {
  name: "Details",
  props: {
    team: Team
  },
  methods: {
    get_world_cup_img() {
      return require(`@/assets/world-cup.png`); //résolution dynamique d'url
    },
    get_flag_img() {
      return require(`@/assets/flags/${this.team.get_image()}`); //résolution dynamique d'url
    }
  }
};
</script>

<style scoped>
.back {
  font-size: 0.3em;
}

a,
a.router-link-exact-active.router-link-active {
  text-decoration: none !important;
}

a:hover,
a.router-link-exact-active.router-link-active:hover {
  text-decoration: none !important;
  color: white !important;
}

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
  display: block;
}

h2 {
  font-size: 0.6em;
  margin: 0;
  padding: 0;
}
</style>