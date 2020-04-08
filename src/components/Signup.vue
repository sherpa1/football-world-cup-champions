<template>
  <div>
    <template v-if="success==''">
      <form action="#" @submit.prevent="signup">
        <div class="error" v-if="error">{{error}}</div>

        <input
          v-model.trim="user.firstname"
          type="string"
          name="firstname"
          placeholder="Firstname"
          required
        />

        <input
          v-model.trim="user.lastname"
          type="string"
          name="lastname"
          placeholder="Lastname"
          required
        />

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

        <button :disabled="!form_is_completed" type="submit" class="button">Sign Up</button>
      </form>
    </template>
    <template v-else>
      <div class="success" v-if="success">{{success}}</div>
    </template>
    <router-link class="link" to="signin">
      <span>Sign in</span>
    </router-link>
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
      error: "",
      success: ""
    };
  },
  methods: {
    reset() {
      this.user = {
        email: "",
        password: "",
        firstname: "",
        lastname: ""
      };
    },
    signup() {
      this.error = "";
      this.success = "";

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName:
                this.$options.filters.capitalize(this.user.firstname) +
                " " +
                this.$options.filters.capitalize(this.user.lastname)
            })
            .then(() => {
              this.reset();
              this.error = "";
              this.success = `Account created for ${data.user.displayName}, now go to sign in page`;
            });
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