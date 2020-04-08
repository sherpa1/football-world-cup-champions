<template>
  <div>
    <header>
      <template v-if="user.loggedIn">
        <div>{{user.data.displayName}} is logged in</div>
        <a class="nav-link signout" @click.prevent="signOut">Sign Out</a>
      </template>
      <template v-else>
        <li class="nav-item">
          <router-link to="login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="register" class="nav-link">Register</router-link>
        </li>
      </template>
    </header>
    <Country v-show="teams.length" v-for="(a_team,index) in teams" :key="index" :team="a_team" />
    <p v-show="teams.length===0">Missing Data</p>
  </div>
</template>

<script>
import Country from "./Country";
import { mapGetters } from "vuex";

import * as firebase from "firebase";
import { db } from "../firebase";

import Team from "../models/Team";

export default {
  name: "Master",
  data() {
    return {};
  },
  firestore() {
    return {
      countries: db.collection("countries")
    };
  },
  components: {
    Country
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "signin"
          });
        });
    }
  },
  computed: {
    teams() {
      const mapped_teams = [];

      this.countries.forEach(a_country => {
        const a_new_team = new Team(
          a_country.name,
          a_country.flag,
          a_country.color,
          a_country.victories
        );

        mapped_teams.push(a_new_team);
      });

      return mapped_teams;
    },
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    const a_team = new Team();
    console.log(a_team);
  }
};
</script>

<style scoped>
header {
  width: 100%;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: right;
}
a.nav-link.signout {
  padding: 0.2em;
  background-color: tomato;
  color: white;
  text-align: center;
  border-radius: 5px;
}
</style>
