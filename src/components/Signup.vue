<template>
  <div>
    <form action="#" @submit.prevent="signup">
      <div v-if="error">{{error}}</div>

      <input v-model.trim="user.firstname" type="string" name="firstname" placeholder="Firstname" />

      <input v-model.trim="user.lastname" type="string" name="lastname" placeholder="Lastname" />

      <input v-model.trim="user.email" type="email" name="login" placeholder="Email Address" />

      <input v-model.trim="user.password" type="password" name="password" placeholder="Password" />

      <button :disabled="!form_is_completed" @click="signup" class="button">Sign Up</button>
    </form>
    <router-link class="link" to="signin">Sign in</router-link>
  </div>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      user: {
        email: "",
        password: "",
        firstname: "",
        lastname: ""
      },
      error: ""
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.user.firstname + " " + this.user.lastname
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  },
  computed: {
    form_is_completed() {
      return (
        this.user.firstname !== "" &&
        this.user.lastname !== "" &&
        this.user.email !== "" &&
        this.user.password !== ""
      );
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