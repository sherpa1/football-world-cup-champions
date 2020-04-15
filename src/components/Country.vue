<template>
  <section class="container">
    <div class="country" :style="css_styles">{{name}}</div>
    <img class="flag" :src="get_image()" />
  </section>
</template>

<script>
export default {
  name: "Country",
  props: {
    name: String,
    color: String,
    flag: String
  },
  data() {
    return {
      // css_styles: {
      //   color: this.color //création dynamique de style css
      // }
    };
  },
  methods: {
    get_image() {
      return require(`@/assets/flags/${this.flag}.png`); //résolution dynamique d'url
    }
    // css_styles() {
    //   return { color: this.color }; //création dynamique de style css
    // }
  },
  computed: {
    css_styles() {
      return { color: this.color }; //création dynamique de style css
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