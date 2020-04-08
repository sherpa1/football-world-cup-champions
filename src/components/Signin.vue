<template>
  <div>
    <form action="#" @submit.prevent="signin">
      <div class="error" v-if="error">{{error}}</div>
      <input
        v-model.trim="user.email"
        type="email"
        name="login"
        placeholder="Email Address"
        required
      />
      <input
        v-model.trim="user.password"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button :disabled="!form_is_completed" type="submit" class="button">Sign In</button>
    </form>
    <router-link to="signup">
      Don't have an account yet ?
      <span>Sign up</span>
    </router-link>
    <div class="success" v-if="success">{{success}}</div>
  </div>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: "Signin",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      error: "",
      success: ""
    };
  },
  methods: {
    signin() {
      this.error = "";
      this.success = "";

      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "master" });
        })
        .catch(err => {
          this.success = "";
          this.error = err.message;
        });
    }
  },
  computed: {
    form_is_completed() {
      return this.user.email !== "" && this.user.password !== "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 18em;
  width: 30%;
}

button {
  margin-top: 2em;
  padding: 0.6em;
  border-radius: 5px;
  background: #41b883;
  color: white;
  border: none;
  width: 60%;
}
button:disabled {
  opacity: 0.7;
}

a {
  margin-top: 2em;
  color: white;
  font-size: 0.8em;
}
a:hover {
  color: #41b883;
}

span {
  text-decoration: underline;
  font-size: 1.3em;
}

.error {
  color: tomato;
}

.success {
  color: yellowgreen;
}
</style>