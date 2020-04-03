<template>
  <div>
    <Country v-show="teams.length" v-for="(a_team,index) in teams" :key="index" :team="a_team" />
    <p v-show="teams.length===0">Missing Data</p>
  </div>
</template>

<script>
import Country from "./Country";

//import Team from "../models/Team";

export default {
  name: "Master",
  data() {
    return {
      teams: []
    };
  },
  components: {
    Country
  }
};
</script>