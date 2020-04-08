<template>
  <div>
    <header>
      <template v-if="user.loggedIn">
        <div class="display-name">{{user.data.displayName}} is logged in</div>
        <button class="nav-link signout" @click.prevent="signOut">Sign Out</button>
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
    <label>Order by</label>
    <select v-model="orderby">
      <option value="1">Victories (asc)</option>
      <option value="0">Victories (desc)</option>
    </select>
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
    return {
      orderby: -1
    };
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

      if (this.orderby === "1") {
        return mapped_teams.sort((a, b) => {
          return b.victories.length - a.victories.length;
        });
      } else if (this.orderby === "0") {
        return mapped_teams.sort((a, b) => {
          return a.victories.length - b.victories.length;
        });
      } else {
        return mapped_teams;
      }
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
button.nav-link.signout {
  padding: 0.4em;
  background-color: tomato;
  color: white;
  text-align: center;
  border-radius: 5px;
  border: none;
}
.display-name {
  margin-right: 2em;
}
</style>
