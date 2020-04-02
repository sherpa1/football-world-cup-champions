<template>
  <div>
    <Country v-for="(a_team,index) in teams" :key="index" :team="a_team" />
  </div>
</template>

<script>
import Country from "./Country";

import Team from "../models/Team";

const italy = new Team("Italy", "italy", "#3584e4", 4);
const france = new Team("France", "france", "blue", 2);
const spain = new Team("Spain", "spain", "yellow", 1);
const england = new Team("England", "england", "red", 1);
const germany = new Team("Germany", "germany", "darkgrey", 4);
const brazil = new Team("Brazil", "brazil", "green", 5);
const argentina = new Team("Argentina", "argentina", "lightblue", 2);
const uruguay = new Team("Uruguay", "uruguay", "lightblue", 2);

export default {
  name: "Master",
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
  },
  components: {
    Country
  }
};
</script>