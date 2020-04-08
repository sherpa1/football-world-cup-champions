<template>
  <div>
    <form action="#" @submit.prevent="signin">
      <input v-model.trim="user.email" type="email" name="login" placeholder="Email Address" />
      <input v-model.trim="user.password" type="password" name="password" placeholder="Password" />
      <button :disabled="!form_is_completed" @click="signin" class="button">Sign In</button>
    </form>
    <router-link to="signup">Don't have an account yet ? Sign up</router-link>
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
      error: ""
    };
  },
  methods: {
    signin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "master" });
        })
        .catch(err => {
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
  height: 15em;
}

button {
  margin-top: 2em;
  padding: 0.6em;
  border-radius: 5px;
  background: #41b883;
  color: white;
  border: none;
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
</style>